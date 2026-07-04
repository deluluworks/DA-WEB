'use client';

import { useState, type FormEvent } from 'react';
import { Input, Textarea } from '@/components/ds/Input';
import { Button } from '@/components/ds/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/** Lead form — posts to /api/contact, which validates, drops the honeypot,
 * and forwards to Google Sheets (+ optional Resend notification). */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      company: String(data.get('company') || ''),
      message: String(data.get('message') || ''),
      website: String(data.get('website') || ''), // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'submission_failed');
      }
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage("Something went wrong — email hello@designasylum.in and we'll pick it up from there.");
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          border: '1px solid var(--color-obsidian-ink)',
          borderRadius: 'var(--radius-cards)',
          padding: 'var(--card-padding)',
          fontFamily: 'var(--font-serif)',
          fontSize: 18,
          color: 'var(--color-obsidian-ink)',
        }}
      >
        Got it — we reply within a day.
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        border: '1px solid var(--color-fog)',
        borderRadius: 'var(--radius-cards)',
        padding: 'var(--card-padding)',
      }}
    >
      {/* Honeypot — hidden from real users via CSS, not `type="hidden"`, since
          bots that skip hidden fields would otherwise slip through. */}
      <div style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} aria-hidden>
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Input label="Name" name="name" placeholder="Your name" required autoComplete="name" />
      <Input label="Email" name="email" type="email" placeholder="you@company.com" required autoComplete="email" />
      <Input label="Company" name="company" placeholder="Company (optional)" autoComplete="organization" />
      <Textarea label="Message" name="message" placeholder="Tell us what you're building" required rows={5} />

      <Button type="submit" size="lg" disabled={status === 'submitting'} style={{ alignSelf: 'flex-start' }}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>

      {status === 'error' && errorMessage && (
        <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 14, color: 'var(--color-iris-voltage)' }}>
          {errorMessage}
        </p>
      )}
    </form>
  );
}
