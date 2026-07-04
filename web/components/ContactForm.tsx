"use client";

import { useState, type FormEvent } from "react";

const SLOTS = ["09:30", "11:00", "13:30", "15:00", "16:30"];

type Status = { state: "idle" | "sending" | "success" | "error"; message: string };

/** Ported from da/sections-4.jsx `DAContact` — the working "Send a brief" form. */
export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    slot: SLOTS[1],
    website: "",
  });
  const [status, setStatus] = useState<Status>({ state: "idle", message: "" });

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ state: "success", message: data.message || "Thanks — we'll reply within a day." });
        setForm({ name: "", email: "", message: "", slot: SLOTS[1], website: "" });
      } else {
        setStatus({ state: "error", message: data.message || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ state: "error", message: "Could not reach the server. Please email us directly." });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="da-contact-form" aria-label="Send a brief">
      <div className="da-contact-form-head">
        <span>Send a brief</span>
        <span className="da-contact-form-note">30 min intro call</span>
      </div>

      {/* Honeypot — hidden from real visitors, bots tend to fill every field. */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={update("website")}
        tabIndex={-1}
        autoComplete="off"
        className="da-honeypot"
        aria-hidden="true"
      />

      <div className="da-contact-form-fields">
        <input
          type="text"
          required
          placeholder="Your name"
          value={form.name}
          onChange={update("name")}
          className="da-contact-input"
        />
        <input
          type="email"
          required
          placeholder="Email address"
          value={form.email}
          onChange={update("email")}
          className="da-contact-input"
        />
        <select value={form.slot} onChange={update("slot")} className="da-contact-input">
          {SLOTS.map((s) => (
            <option key={s} value={s}>{`Preferred slot — ${s}`}</option>
          ))}
        </select>
        <textarea
          required
          placeholder="What are you building?"
          value={form.message}
          onChange={update("message")}
          rows={4}
          className="da-contact-input da-contact-textarea"
        />
      </div>

      <button type="submit" disabled={status.state === "sending"} className="da-contact-submit pill-hover">
        {status.state === "sending" ? "Sending…" : "Send brief"}
      </button>

      {status.state === "success" && (
        <p role="status" className="da-contact-status da-contact-status-ok">
          {status.message}
        </p>
      )}
      {status.state === "error" && (
        <p role="alert" className="da-contact-status da-contact-status-err">
          {status.message}
        </p>
      )}
    </form>
  );
}
