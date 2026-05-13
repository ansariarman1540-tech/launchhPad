# LaunchhPad — Brand Guide

> **Spelling rule (non-negotiable):** The company name is **LaunchhPad** — double **h**, capital **P**. Never "Launchpad", "Launch Pad", "Launchh Pad", or "LaunchPad". The domain is **launchhpad.com**. The Twitter/X handle is **@launchhpad**.

---

## 1. Mission

LaunchhPad helps ambitious founders and scaling brands ship products that look and feel like they came from a much larger team. We pair senior design, engineering, and growth talent into one operator-grade platform — so a small team can move like a big one, and a big one can move like a startup.

We exist to compress the distance between an idea and the moment a real customer pays for it.

## 2. Positioning

**One-line:** Launchpad for ambitious founders & brands — design, dev, and growth, in one platform.

> Note: The positioning intentionally uses the lowercase common-noun "launchpad" (the rocket-pad metaphor) on which our company name plays. The company name itself is always **LaunchhPad** — double h, capital P.

**Audience:**
- Pre-seed to Series-A founders who need senior craft on demand
- Scaling DTC, SaaS, and fintech brands rebuilding for a new growth stage
- In-house product and marketing teams that need a fast, embedded partner

**What we are:** Premium. Technical. Modern. Operator-minded.
**What we are not:** A staffing agency. A marketing-only shop. A logo factory. A no-code template farm.

## 3. Tagline

**Primary:** Where ideas launch. And keep launching.

Use the primary tagline on the homepage hero, the footer, and the meta description. Avoid alternate taglines in customer-facing surfaces unless approved.

## 4. Voice

Confident. Plainspoken. Anti-corporate.

We write like a senior operator talking to another senior operator. Short sentences. Active verbs. Specifics over adjectives. We respect the reader's time.

### Voice principles

1. **Say the thing.** If a service ships in four weeks, write "four weeks", not "rapid timeline".
2. **Numbers earn trust.** Replace "significantly faster" with "1.2s LCP" or "+312% organic".
3. **Name the work.** "We rebuilt their checkout in Next.js" beats "We modernized the experience".
4. **No throat-clearing.** Cut "We are excited to announce", "In today's fast-moving world", and similar openers.
5. **Plain English wins.** If a smart non-technical reader would have to re-read a sentence, rewrite it.

### Banned words and phrases

Do not use, in any production copy:

- synergy, synergies
- leverage (as a verb)
- best-in-class, world-class, cutting-edge, bleeding-edge
- robust, seamless, frictionless, holistic
- innovative, disruptive, revolutionary, game-changing
- unlock, ideate, circle back, touch base
- "in today's fast-paced world"
- "we're excited to" / "we're thrilled to"
- "powered by AI" (say what the AI actually does)

### Approved replacements

| Avoid | Prefer |
|---|---|
| Leverage our expertise | Work with our senior team |
| Cutting-edge stack | Next.js, Postgres, and a typed API |
| Seamless experience | Fewer clicks. Faster pages. |
| Best-in-class design | Senior product designers, not template editors |
| Innovative solutions | What we shipped: <specific outcome> |
| Robust and scalable | Tested under load. Boring on call. |

## 5. Tone

Tone shifts by surface. Voice does not.

| Surface | Tone | Example |
|---|---|---|
| Hero / homepage | Direct, ambitious | "Where ideas launch. And keep launching." |
| Services | Specific, technical | "We ship typed, accessible Next.js apps with 95+ Lighthouse scores." |
| Case studies | Reportorial, numeric | "Cut LCP from 4.1s to 1.2s in three weeks." |
| Blog | Opinionated, useful | "Most startup sites fail in the first five seconds. Here's why." |
| Sales / contact | Warm, human | "Tell us what you're building. We'll tell you if we can help." |
| Errors / empty states | Calm, brief | "Nothing here yet. Try a different filter." |

## 6. Do / Don't (with examples)

### Do

- "We ship in weeks, not quarters."
- "Built in Next.js 15, deployed on Vercel, observed in Sentry."
- "+312% organic traffic in six months. Same content team."
- "Senior designers and engineers. No juniors hidden in the org chart."

### Don't

- "We leverage cutting-edge AI to unlock synergies." *(banned terms, says nothing)*
- "We're excited to announce our new innovative platform!" *(throat-clearing, hype)*
- "World-class design solutions for forward-thinking brands." *(empty adjectives)*
- "Powered by AI." *(say what the AI does)*

### Capitalization & spelling

- **LaunchhPad** — always one word, double h, capital P. Never split. Never lowercase the P inside body text.
- Product names: Title case (e.g., "Launch Sprint", "Growth Engine").
- Headlines: sentence case. "Where ideas launch." not "Where Ideas Launch."
- Numbers: use numerals for counts (3 sprints, 14 days, $2.4M ARR). Spell out "one" only inside narrative prose.

## 7. Color palette

Dark-first. The default theme is dark. The light theme is a derived view, not the canonical brand surface.

| Token | Hex | Use |
|---|---|---|
| `--violet-500` (primary) | **#7C3AED** | Primary CTAs, focus rings, key links, brand mark |
| `--emerald-500` (accent) | **#10B981** | Success, positive metrics, secondary CTA hover |
| `--zinc-950` | #09090B | App background (dark) |
| `--zinc-900` | #18181B | Surface 1 (cards, nav) |
| `--zinc-800` | #27272A | Surface 2 (inputs, dividers) |
| `--zinc-700` | #3F3F46 | Borders, muted icons |
| `--zinc-400` | #A1A1AA | Secondary text on dark |
| `--zinc-200` | #E4E4E7 | Primary text on dark |
| `--zinc-50` | #FAFAFA | App background (light) |
| `--white` | #FFFFFF | Reserved highlights only |

### Color rules

- Violet is the only brand color. Do not introduce a second brand color without approval.
- Emerald is reserved for state and metric color (positive deltas, success toasts). It is not a brand color.
- Never gradient violet-to-emerald. Violet may gradient to deep indigo (#4C1D95) for hero washes only.
- Text on violet must be `--zinc-50` or white. Never use violet on emerald or vice versa.
- Minimum contrast: WCAG AA for body text, AAA for primary CTAs.

## 8. Typography

| Role | Font | Fallback |
|---|---|---|
| UI / headings | **Geist Sans** | Inter, system-ui, -apple-system, Segoe UI, sans-serif |
| Code / data | **Geist Mono** | JetBrains Mono, ui-monospace, Menlo, monospace |
| Body fallback | Inter | system-ui |

### Type rules

- Headings: Geist Sans, weight 600, tracking -0.02em. Sentence case.
- Body: Geist Sans, weight 400, line-height 1.6.
- Code, metrics, and identifiers (IDs, hashes, timestamps): Geist Mono.
- Display sizes (hero) cap at 96px on desktop. Body cap at 18px.
- Never set body text below 14px. Never set headlines in italic.
- Use tabular numerals (`font-variant-numeric: tabular-nums`) for any column of numbers.

## 9. Motion

Motion is functional, not decorative.

### Principles

1. **Fast.** Default duration 150-220ms. Page transitions max 350ms. Anything slower feels like waiting.
2. **Purposeful.** Every animation answers a question: *what changed, where did it come from, what can I do next?*
3. **Respects `prefers-reduced-motion`.** When set, disable transforms and opacity transitions over 150ms. Never disable focus or state changes.
4. **One easing curve.** Use `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) for entrances, `cubic-bezier(0.4, 0, 1, 1)` for exits.
5. **No parallax in the hero.** No infinite spinners as decoration. No "scroll-jacking".

### Allowed

- Fade + 8px translate on enter
- Subtle hover lift (1-2px) on cards and CTAs
- Micro-interactions on form state (success check, error shake)
- Stagger of 40ms on lists up to 8 items, then no stagger

### Disallowed

- Auto-playing video in the hero with sound
- Carousels that auto-advance
- Loading skeletons that pulse longer than 800ms
- Cursor-follow effects on production pages

## 10. Imagery

- **No stock photos.** Ever. No Unsplash, no Getty, no AI-generated humans posing as customers.
- Product screenshots must be real. If a screenshot is a mock, label it "Concept".
- Customer logos appear monochrome (`--zinc-400` on dark, `--zinc-700` on light) unless used inside a case study card.
- Diagrams and system illustrations are vector, drawn in-house, on a dark surface with violet accents.
- Customer headshots: real founders only, with permission and on the record.

## 11. Accessibility

- All interactive elements must have a visible focus state (2px violet ring with 2px offset).
- All copy must pass WCAG AA contrast against its surface.
- All images require descriptive `alt` text. Decorative images use `alt=""`.
- Forms label every input. No placeholder-as-label.
- Keyboard navigation works on every page, including the mobile nav and modals.

## 12. Brand audit checklist (pre-publish)

Before any page or post ships, confirm:

- [ ] Every instance of the company name is spelled **LaunchhPad** (double h, capital P).
- [ ] No banned words or phrases (see section 4).
- [ ] No stock photos.
- [ ] All metrics are real and sourced.
- [ ] Dark theme renders without contrast failures.
- [ ] `prefers-reduced-motion` is respected.
- [ ] Every CTA has a clear next action.
- [ ] Page weight under 200KB on first load (excluding fonts and images above the fold).
