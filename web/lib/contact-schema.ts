import { z } from "zod";

/**
 * Shape-only schema — accepts any strings so a malformed *type* (missing
 * field, non-string) is the only thing that 400s. Actual content validation
 * (empty name, bad email, length limits) happens in the route handler and
 * returns 422, mirroring the legacy api/contact.php endpoint's status codes.
 */
export const contactSchema = z.object({
  name: z.string().default(""),
  email: z.string().default(""),
  message: z.string().default(""),
  slot: z.string().optional().default(""),
  // Honeypot: real visitors never fill this in.
  website: z.string().optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactInput): string[] {
  const errors: string[] = [];
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (name === "" || name.length > 120) {
    errors.push("Please enter your name.");
  }
  if (!EMAIL_RE.test(email)) {
    errors.push("Please enter a valid email address.");
  }
  if (message === "" || message.length > 4000) {
    errors.push("Please tell us a little about what you're building.");
  }
  return errors;
}

/** Strips CR/LF to prevent header injection when values are echoed into emails. */
export function sanitizeLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}
