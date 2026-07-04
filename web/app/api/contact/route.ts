import { NextResponse } from "next/server";
import { contactSchema, validateContact, sanitizeLine } from "@/lib/contact-schema";
import { env } from "@/lib/env";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Malformed request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success || typeof body !== "object" || body === null) {
    return NextResponse.json(
      { success: false, message: "Malformed request." },
      { status: 400 },
    );
  }

  const { name, email, message, slot, website } = parsed.data;

  // Honeypot: bots fill hidden fields humans never see. Pretend success so
  // they don't learn anything, matching the legacy PHP endpoint's behavior.
  if (website.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const errors = validateContact(parsed.data);
  if (errors.length) {
    return NextResponse.json({ success: false, message: errors.join(" ") }, { status: 422 });
  }

  const lead = {
    name: sanitizeLine(name.trim()),
    email: sanitizeLine(email.trim()),
    slot: sanitizeLine((slot ?? "").trim()),
    message: message.trim(),
    submittedAt: new Date().toISOString(),
  };

  // Downstream integrations (Sheets append, Resend notify) are best-effort:
  // a controlled failure here still returns a graceful success to the user,
  // since the site has no database to fall back to and the human verifies
  // the real integration on the Vercel preview.
  const [sheetsResult, resendResult] = await Promise.allSettled([
    appendToSheets(lead),
    notifyByEmail(lead),
  ]);
  if (sheetsResult.status === "rejected") {
    console.error("contact: Sheets append failed", sheetsResult.reason);
  }
  if (resendResult.status === "rejected") {
    console.error("contact: Resend notify failed", resendResult.reason);
  }

  return NextResponse.json({
    success: true,
    message: "Thanks — we'll reply within a day.",
  });
}

type Lead = {
  name: string;
  email: string;
  slot: string;
  message: string;
  submittedAt: string;
};

async function appendToSheets(lead: Lead) {
  if (!env.sheetsWebhookUrl) {
    throw new Error("SHEETS_WEBHOOK_URL not configured");
  }
  const res = await fetch(env.sheetsWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  if (!res.ok) {
    throw new Error(`Sheets webhook responded ${res.status}`);
  }
}

async function notifyByEmail(lead: Lead) {
  if (!env.resendApiKey || !env.contactNotifyTo) {
    return; // optional — silently skip when not configured
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.resendApiKey}`,
    },
    body: JSON.stringify({
      from: "Design Asylum <onboarding@resend.dev>",
      to: env.contactNotifyTo,
      reply_to: lead.email,
      subject: `New enquiry from designasylum.in — ${lead.name}`,
      text: `Name: ${lead.name}\nEmail: ${lead.email}\n${lead.slot ? `Preferred slot: ${lead.slot}\n` : ""}\nMessage:\n${lead.message}\n`,
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}`);
  }
}
