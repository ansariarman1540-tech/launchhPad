"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joinWaitlist, type WaitlistState } from "./actions";

export function WaitlistForm() {
  const [state, setState] = useState<WaitlistState>({ ok: false, message: "" });
  const [isPending, setIsPending] = useState(false);

  if (state.ok) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/5 px-6 py-4">
        <CheckCircle2 className="size-5 shrink-0 text-accent" aria-hidden="true" />
        <p className="text-sm font-medium text-fg sm:text-base">
          {state.message} We will reach out when it is ready.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);

    // Honeypot
    const honeypot = formData.get("website_url") as string;
    if (honeypot && honeypot.trim().length > 0) {
      setState({ ok: true, message: "You're on the list." });
      setIsPending(false);
      return;
    }

    const email = formData.get("email") as string;
    if (!email || !email.includes("@")) {
      setState({ ok: false, message: "Enter a valid email address." });
      setIsPending(false);
      return;
    }

    const result = await joinWaitlist(email);
    setState(result);
    setIsPending(false);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
      {/* Honeypot */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="website_url">Website</label>
        <input id="website_url" name="website_url" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="relative flex-1">
        <Input
          id="waitlist-email"
          name="email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          inputMode="email"
          required
          aria-label="Email address"
          className="h-12 pr-4 text-base sm:h-14 sm:text-lg"
        />
      </div>

      <Button type="submit" size="lg" disabled={isPending} aria-busy={isPending} className="h-12 gap-2 sm:h-14 sm:px-8">
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Joining...
          </>
        ) : (
          <>
            Join the waitlist
            <ArrowRight className="size-4" aria-hidden="true" />
          </>
        )}
      </Button>

      {!state.ok && state.message ? (
        <p id="waitlist-error" role="alert" className="text-xs text-red-300 sm:absolute sm:-bottom-6 sm:left-0">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
