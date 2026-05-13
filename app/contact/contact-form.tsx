"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { ok: false, message: "" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.ok) {
    return (
      <div className="flex h-full flex-col items-start gap-4 rounded-3xl border border-accent/40 bg-accent/5 p-8 sm:p-10">
        <span className="inline-flex size-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
          <CheckCircle2 className="size-5" aria-hidden="true" />
        </span>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-fg">
          {site.contact.form.successHeadline}
        </h2>
        <p className="text-base leading-relaxed text-muted">
          {site.contact.form.successBody}
        </p>
      </div>
    );
  }

  const f = site.contact.form;
  const err = state.fieldErrors ?? {};

  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col gap-5 rounded-3xl border border-border bg-surface-1 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label={f.nameLabel}
          error={err.name}
        >
          <Input id="name" name="name" autoComplete="name" required />
        </Field>
        <Field
          id="email"
          label={f.emailLabel}
          error={err.email}
        >
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="company" label={f.companyLabel} error={err.company}>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            required
          />
        </Field>
        <Field id="budget" label={f.budgetLabel} error={err.budget}>
          <Select id="budget" name="budget" defaultValue="" required>
            <option value="" disabled>
              Pick a range
            </option>
            {f.budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field id="message" label={f.messageLabel} error={err.message}>
        <Textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={20}
          maxLength={4000}
        />
      </Field>

      {!state.ok && state.message ? (
        <p
          role="alert"
          className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300"
        >
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          We reply within one business day.
        </p>
        <Button type="submit" size="lg" disabled={isPending} aria-busy={isPending}>
          {isPending ? "Sending..." : f.submitLabel}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-xs text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
