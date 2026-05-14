/**
 * Contact form types and client-side submission via Web3Forms.
 *
 * Web3Forms is a free form backend that works with static sites.
 * Get your access key at: https://web3forms.com
 * Set it in your .env as NEXT_PUBLIC_WEB3FORMS_KEY
 */

export type ContactFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<string, string>>;
};

export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactFormState> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  if (!accessKey) {
    // Fallback: log to console in dev
    console.log("[contact] No WEB3FORMS_KEY set. Lead:", data);
    return { ok: true, message: "Got it. Talk soon." };
  }

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New lead: ${data.company} (${data.budget})`,
        from_name: data.name,
        ...data,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return { ok: true, message: "Got it. Talk soon." };
    }

    return { ok: false, message: result.message || "Something went wrong. Try again." };
  } catch {
    return { ok: false, message: "Network error. Check your connection and try again." };
  }
}
