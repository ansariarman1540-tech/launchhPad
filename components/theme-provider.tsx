import type { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

/**
 * Minimal dark-first theme provider. The Phase 2 UI agent can swap this for a
 * full theme switcher; for now it just enforces the canonical dark surface.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return <div data-theme="dark">{children}</div>;
}
