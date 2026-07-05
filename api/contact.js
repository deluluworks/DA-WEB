import nodemailer from 'nodemailer';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3;

function getRateLimitPath(ip) {
  const safe = ip.replace(/[^a-zA-Z0-9._-]/g, '_');
  return join(tmpdir(), `da_rl_${safe}.json`);
}

function checkRateLimit(ip) {
  const path = getRateLimitPath(ip);
  const now = Date.now();
  if (!existsSync(path)) {
    writeFileSync(path, JSON.stringify({ count: 1, windowStart: now }));
    return true;
  }
  const data = JSON.parse(readFileSync(path, 'utf8'));
  if (now - data.windowStart > RATE_LIMIT_WINDOW) {
    writeFileSync(path, JSON.stringify({ count: 1, windowStart: now }));
    return true;
  }
  if (data.count >= RATE_LIMIT_MAX) return false;
  writeFileSync(path, JSON.stringify({ count: data.count + 1, windowStart: data.windowStart }));
  return true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';

  if (!checkRateLimit(ip)) {
    return res.status(429).json({ success: false, message: 'Too many submissions. Please try again later.' });
  }

  const { name, email, message, slot, website } = req.body || {};

  // Honeypot check
  if (website) {
    return res.status(200).json({ success: true, message: 'Thanks — we'll reply within a day.' });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || process.env.VITE_CONTACT_EMAIL || 'hello@designasylum.in';

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Design Asylum Website" <${process.env.SMTP_USER}>`,
    replyTo: `"${name.trim()}" <${email.trim()}>`,
    to: recipient,
    subject: `New brief from ${name.trim()}`,
    text: [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Preferred slot: ${slot || 'Not specified'}`,
      '',
      message.trim(),
    ].join('\n'),
    html: `
      <p><strong>Name:</strong> ${escHtml(name.trim())}</p>
      <p><strong>Email:</strong> ${escHtml(email.trim())}</p>
      <p><strong>Preferred slot:</strong> ${escHtml(slot || 'Not specified')}</p>
      <hr />
      <p>${escHtml(message.trim()).replace(/\n/g, '<br />')}</p>
    `,
  };

  try {
    await transport.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Thanks — we'll reply within a day.' });
  } catch (err) {
    console.error('Mail error:', err);
    return res.status(500).json({ success: false, message: 'Failed to send. Please email us directly at ' + recipient });
  }
}

function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
