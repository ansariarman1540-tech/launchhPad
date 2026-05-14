/**
 * Waitlist form types and client-side submission via Web3Forms.
 */

export type WaitlistState = {
  ok: boolean;
  message: string;
};

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export async function joinWaitlist(email: string): Promise<WaitlistState> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  if (!accessKey) {
    console.log("[waitlist] No WEB3FORMS_KEY set. Signup:", email);
    return { ok: true, message: "You're on the list." };
  }

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Waitlist signup: ${email}`,
        email,
        from_name: "Waitlist",
        message: `New waitlist signup: ${email}`,
      }),
    });

    const result = await response.json();
    if (result.success) {
      return { ok: true, message: "You're on the list." };
    }
    return { ok: false, message: "Something went wrong. Try again." };
  } catch {
    return { ok: false, message: "Network error. Try again." };
  }
}
