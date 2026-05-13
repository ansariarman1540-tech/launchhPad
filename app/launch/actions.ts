"use server";

import { z } from "zod";

const WaitlistSchema = z.object({
  email: z.string().email("Enter a valid email address."),
});

export type WaitlistState = {
  ok: boolean;
  message: string;
};

/**
 * Waitlist signup for the LaunchhPad SaaS product.
 * When RESEND_API_KEY is set, sends a confirmation email to the subscriber
 * and notifies the team. Otherwise logs to stdout.
 */
export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  // Honeypot
  const honeypot = formData.get("website_url");
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return { ok: true, message: "You're on the list." };
  }

  const parsed = WaitlistSchema.safeParse({
    email: formData.get("email"),
  });

  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid email." };
  }

  const { email } = parsed.data;
  const receivedAt = new Date().toISOString();

  console.log("[waitlist] new signup", { email, receivedAt });

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      const fromAddress = process.env.RESEND_FROM_EMAIL ?? "launch@launchhpad.com";
      const toTeam = (process.env.RESEND_TO_EMAIL ?? "hello@launchhpad.com")
        .split(",")
        .map((s) => s.trim());

      // Notify the team
      await resend.emails.send({
        from: fromAddress,
        to: toTeam,
        subject: `Waitlist signup: ${email}`,
        text: `New waitlist signup:\n\nEmail: ${email}\nTime: ${receivedAt}`,
      });
    } catch (err) {
      console.error("[waitlist] Resend error:", err);
    }
  }

  return { ok: true, message: "You're on the list." };
}
