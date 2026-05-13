"use server";

import { z } from "zod";
import { site } from "@/content/site";

/**
 * Server-side validation schema for the contact form.
 * Budget must match one of the canonical options from `site.contact.form.budgetOptions`.
 */
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required.").max(120),
  email: z.string().email("Enter a valid work email."),
  company: z.string().min(1, "Company is required.").max(160),
  budget: z
    .string()
    .refine(
      (v): v is (typeof site.contact.form.budgetOptions)[number] =>
        (site.contact.form.budgetOptions as readonly string[]).includes(v),
      { message: "Pick a budget range." },
    ),
  message: z
    .string()
    .min(20, "Tell us a bit more (20+ characters).")
    .max(4000, "That is plenty. Trim to under 4000 characters."),
});

export type ContactFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string>>;
};

/**
 * Lead submission shape used for the integration handoff.
 * Resend receives this as the email body when `RESEND_API_KEY` is set.
 */
export type ContactLead = z.infer<typeof ContactSchema> & {
  receivedAt: string;
};

/**
 * Send the lead notification email via Resend.
 * Gracefully no-ops when the API key is missing (dev/preview environments).
 */
async function sendLeadEmail(lead: ContactLead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[contact] RESEND_API_KEY not set — skipping email send.");
    return;
  }

  // Dynamic import keeps Resend out of the client bundle and avoids
  // build errors if the package is not yet installed in dev.
  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const fromAddress = process.env.RESEND_FROM_EMAIL ?? "leads@launchhpad.com";
  const toAddresses = (process.env.RESEND_TO_EMAIL ?? "hello@launchhpad.com")
    .split(",")
    .map((s) => s.trim());

  await resend.emails.send({
    from: fromAddress,
    to: toAddresses,
    replyTo: lead.email,
    subject: `New lead: ${lead.company} (${lead.budget})`,
    text: [
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Company: ${lead.company}`,
      `Budget: ${lead.budget}`,
      `Received: ${lead.receivedAt}`,
      "",
      "--- Message ---",
      "",
      lead.message,
    ].join("\n"),
  });
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Spam guard: bots fill every field, including hidden honeypots.
  // Real users never type into a `display:none` input.
  const honeypot = formData.get("company_url");
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    // Pretend success so we do not signal what gave them away.
    return { ok: true, message: site.contact.form.successHeadline };
  }

  const parsed = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof ContactSchema>;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      ok: false,
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const lead: ContactLead = {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
  };

  try {
    await sendLeadEmail(lead);
  } catch (err) {
    // Log but do not block form success — we still captured the data.
    console.error("[contact] Failed to send email via Resend:", err);
  }

  // Always log locally as backup.
  console.log("[contact] new lead", lead);

  return {
    ok: true,
    message: site.contact.form.successHeadline,
  };
}
