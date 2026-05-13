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
 * Lead submission shape used for the (currently logged) integration handoff.
 * When wiring Resend, pass this object straight into the email template.
 */
export type ContactLead = z.infer<typeof ContactSchema> & {
  receivedAt: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
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

  // TODO: wire Resend
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "leads@launchhpad.com",
  //   to: ["hello@launchhpad.com"],
  //   replyTo: lead.email,
  //   subject: `New lead: ${lead.company} (${lead.budget})`,
  //   text: [
  //     `Name: ${lead.name}`,
  //     `Email: ${lead.email}`,
  //     `Company: ${lead.company}`,
  //     `Budget: ${lead.budget}`,
  //     "",
  //     lead.message,
  //   ].join("\n"),
  // });
  console.log("[contact] new lead", lead);

  return {
    ok: true,
    message: site.contact.form.successHeadline,
  };
}
