import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  PenTool,
  Sparkles,
  TrendingUp,
  Bot,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "web-engineering": Code2,
  "product-design": PenTool,
  "brand-identity": Sparkles,
  "growth-marketing": TrendingUp,
  "ai-integration": Bot,
  "launch-sprints": Rocket,
};

type Props = {
  withSectionHeader?: boolean;
};

export function ServicesGrid({ withSectionHeader = true }: Props) {
  return (
    <Section id="services">
      {withSectionHeader ? (
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            What we do
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Six services. One senior team. No handoffs.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Pick the surface that matters most this quarter. We staff it with senior
            people, ship it on a calendar you can plan around, and stay until the
            number moves.
          </p>
        </div>
      ) : null}

      <div
        className={cn(
          "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
          withSectionHeader ? "mt-14" : "mt-0",
        )}
      >
        {site.services.map((service) => {
          const Icon = SERVICE_ICONS[service.slug] ?? Code2;
          return (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-border bg-surface-1 p-6 transition-all",
                "hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-1/90",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-bg text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  className="size-4 text-muted transition-colors group-hover:text-fg"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.oneLiner}
              </p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
