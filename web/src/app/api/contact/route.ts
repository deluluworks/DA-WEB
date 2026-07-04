import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  /** Honeypot — real users never see or fill this field. */
  website?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

/** Best-effort append to the lead's Google Sheet via an Apps Script webhook.
 * A missing env var or a blocked/failing host never surfaces to the caller —
 * this is a controlled downstream failure per the deploy runbook. */
async function notifySheets(payload: Record<string, string>) {
  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) return { attempted: false as const };
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return { attempted: true as const };
  } catch (err) {
    console.error('[contact] Sheets webhook failed', err);
    return { attempted: true as const };
  }
}

/** Best-effort email notification via the Resend REST API. Optional — no
 * RESEND_API_KEY means this is skipped entirely, not a failure. */
async function notifyResend(payload: Record<string, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { attempted: false as const };
  const to = process.env.RESEND_TO_EMAIL || 'hello@designasylum.in';
  const from = process.env.RESEND_FROM_EMAIL || 'Design Asylum <onboarding@resend.dev>';
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject: `New enquiry from ${payload.name}`,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company || '—'}\n\n${payload.message}`,
      }),
    });
    return { attempted: true as const };
  } catch (err) {
    console.error('[contact] Resend notification failed', err);
    return { attempted: true as const };
  }
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'malformed_payload' }, { status: 400 });
  }

  // Honeypot — bots fill every field, real users never see this one.
  if (isNonEmptyString(body.website)) {
    return NextResponse.json({ ok: false, error: 'rejected' }, { status: 400 });
  }

  if (!isNonEmptyString(body.name) || !isNonEmptyString(body.message)) {
    return NextResponse.json({ ok: false, error: 'missing_required_fields' }, { status: 400 });
  }
  if (!isNonEmptyString(body.email) || !EMAIL_RE.test(body.email.trim())) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }

  const payload = {
    name: body.name.trim(),
    email: body.email.trim(),
    company: isNonEmptyString(body.company) ? body.company.trim() : '',
    message: body.message.trim(),
    submittedAt: new Date().toISOString(),
  };

  await Promise.all([notifySheets(payload), notifyResend(payload)]);

  return NextResponse.json({ ok: true });
}
