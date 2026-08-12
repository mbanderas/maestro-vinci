# 13 — Working with Design Systems

A design system is a binding contract for visuals. Treat it as the source of truth, not a suggestion. This chapter covers how to read, use, and extend a design system without breaking its rules — and what to do when you don't have one.

---

## What a design system is

In rough order of completeness:

1. **A palette + a typeface** — bare minimum
2. **A token system** — palette, type, spacing, radius, shadow values all named and structured
3. **A component library** — buttons, inputs, cards, dialogs implemented to spec
4. **A pattern library** — common layouts, page templates, navigation patterns
5. **A voice and tone guide** — how to write within the brand
6. **Usage guidance** — when to use what, with examples and counter-examples
7. **Governance** — how to propose changes, how new components get added

A mature system has all seven. Most have 2-4. Use what's there; respect what isn't.

---

## Reading a design system

When you're handed a system, don't just skim — read it the way an engineer would:

### Step 1 — Find the front door

Every system has a starting point — a README, an intro page, a "getting started." Read it fully. It often contains:
- The system's philosophy (which informs decisions the docs don't explicitly cover)
- The version and changelog (so you know what's stable vs. recent)
- Contribution guidelines
- Token naming conventions

### Step 2 — Find the tokens

Tokens are the atomic units — colors, type sizes, spacing values, radius scale, shadows, motion timings. They're usually defined in:
- A CSS file (`tokens.css`, `_variables.scss`, `theme.css`)
- A JSON file (`tokens.json`, `design-tokens.json`)
- A TS/JS file (`theme.ts`, `tokens.ts`)
- A Figma library file (less useful for coding)

**Read the actual file**, not just the documentation. Documentation drifts; tokens don't lie. Note the exact variable names — you'll need them.

### Step 3 — Find the components

The component library tells you the system's vocabulary. Browse every component, even ones you don't think you need. You'll discover patterns to follow (and patterns to avoid replicating).

### Step 4 — Find the examples

Look for example pages, mocks, or templates. If the system has a mock of something similar to what you're building, **copy and fork it**. Don't start from scratch.

### Step 5 — Find the gaps

Note what the system *doesn't* have. If you need a calendar picker and the system has none, you'll need to design one — and you should match the system's style as closely as possible.

---

## Using tokens correctly

Always reference tokens by name. Never hardcode values:

```css
/* Right */
.button {
  background: var(--color-primary);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: background var(--motion-fast) var(--ease-out);
}

/* Wrong */
.button {
  background: #2563eb;
  padding: 12px 16px;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  transition: background 150ms ease-out;
}
```

Why:
- Themes, dark mode, density variants, rebrands all become one-line changes
- Visual consistency is guaranteed by the system
- The system's maintainers can fix issues system-wide

**Never guess at a token name.** An unresolved `var(--color-promary)` (typo) silently falls back to nothing or to inherit. Look up the real name in the source.

---

## Token layers (recap)

A well-architected system has three layers:

1. **Primitive tokens** — `--blue-500`, `--gray-100`, `--size-12`. Raw values, named by what they are.
2. **Semantic tokens** — `--color-primary`, `--color-text-muted`, `--space-md`. Mapped to primitives, named by use.
3. **Component tokens** — `--button-primary-bg`, `--card-padding`. Per-component overrides when needed.

**Always use the highest layer that fits.** Use a semantic token in preference to a primitive; use a primitive only when no semantic token applies. Use a component token only when you have a real reason to deviate from the semantic.

---

## Matching the system's voice

Every design system has a "voice" — the sum of all its decisions. To extend it well, you need to internalize this voice.

Things to notice:

- **Density.** Generous spacing or compact?
- **Radius language.** Sharp corners, slightly rounded, very rounded, mixed?
- **Shadow language.** None, flat, layered, dramatic?
- **Motion language.** Snappy, soft, none?
- **Typography character.** Geometric, humanist, modern, classical?
- **Color saturation.** Muted, vivid, mixed?
- **Iconography weight.** Hairline, regular, bold?
- **Border style.** Hairlines (1px or less), regular (1-2px), heavy (3px+)?
- **Copy tone.** Formal, casual, terse, helpful?

When you add a new component, it should feel like it was always part of the kit. If you can't tell whether a component is new or original, you've succeeded.

---

## Copying components into your project

If the system lives in a separate project or repo, copy what you need into your working folder:

- You can edit your local copy freely without affecting the source
- External references can break or be unavailable
- The copy travels with your design

Copy only what you'll actually use. Bulk-importing entire component libraries pollutes the working folder and makes the design harder to navigate.

Document where the copies came from (a comment header) so future maintainers know to check upstream for updates.

---

## When the system doesn't have what you need

It happens. Three options, in order of preference:

### 1. Combine existing primitives

Often a "new component" is really just a particular combination of existing ones. A confirmation dialog is a `Dialog` + `Title` + `Body` + `Button` stack. A notification is a `Card` + `Icon` + `Body` + `IconButton`.

Before designing a new component, try to assemble it from existing ones.

### 2. Extend the system

If you need a new value (a new spacing step, a new color shade, a new size variant), **add it formally** rather than freelancing.

- Add the new token to the token file with a clear name
- Document its purpose
- Use it via the token, not as a raw value
- Tell the system's maintainers

This is how systems grow correctly — through deliberate additions, not local exceptions.

### 3. Design a new component to match the system

When you truly need something new:

- Study three or four similar components in the system to internalize the patterns
- Use existing tokens for every property — color, spacing, radius, shadow, motion
- Apply the system's interaction patterns (hover, focus, active, disabled)
- Match the system's micro-typography rules

Then surface the new component to the maintainers so it can be considered for inclusion.

---

## When there's no system at all

If the user has no system, no brand, no kit:

### Don't pretend there is one

Don't invent a fake brand. Don't borrow another brand's identity. Don't generate one from a prompt and call it the user's.

### Commit to an aesthetic direction up front

Before drawing, write down (and share with the reviewer):

- Typeface choice and a real scale
- Color palette (3-5 colors, with roles)
- Spacing scale
- Radius scale
- Density commitment
- Imagery posture
- Motion language

This becomes the *de facto* system for the work.

### Use OKLCH for color

When inventing a palette, use OKLCH so your colors stay harmonious across lightness. Fix lightness, sweep hue, and you get a coherent set automatically.

### Offer to formalize it

If the work goes well, the user may want to keep the system you built. Offer to extract it into a small token file and a starter component set. This is often the seed of a real design system.

---

## Multiple design systems

Sometimes you'll work across two or more systems — a brand system for marketing, a product system for the app, an enterprise system for B2B integrations.

When this happens:

- **Don't blend them.** Each system applies to its own surface.
- **Find the seams.** Where do they meet? A marketing page that links into the product. An embed in a partner site.
- **Decide which wins** at each seam, and respect that decision throughout the seam.
- **Document the rule** so the next designer knows.

---

## Versioning and migration

Design systems evolve. When you start a project, note the system version you're working against. When the system updates:

- Check the changelog
- Update tokens (usually safe — they're additive)
- Update components (more dangerous — might have breaking changes)
- Test interactions (especially anything that depended on specific timing, sizes, or behaviors)

Don't blindly upgrade in the middle of a project. Finish the current phase, upgrade between phases.

---

## Common system-related failures

- **Hardcoded values** that should be tokens
- **Guessing token names** that don't exist, causing silent fallbacks
- **Using primitive tokens** where semantic ones exist (`--blue-500` instead of `--color-primary`)
- **Inventing new components** that duplicate existing ones with minor tweaks
- **Mixing components** from two design systems on the same page
- **Branching off-system** for "just this one case" — these cases multiply
- **Treating the system as a suggestion** when the team treats it as a contract
- **Treating the system as a contract** when the team treats it as a starting point (the inverse failure)

---

## A design-system checklist

When extending a design system:

- [ ] Read the README and any "getting started" docs
- [ ] Find and read the token file
- [ ] Browse the full component library
- [ ] Look for existing mocks or examples close to what you're building
- [ ] Use tokens (semantic preferred over primitive)
- [ ] Match the system's voice (density, radius, shadow, motion, copy tone)
- [ ] Reuse before inventing
- [ ] Extend formally rather than locally
- [ ] Surface gaps to the system's maintainers
- [ ] Document any additions

---

*See also: [05 — Color](./05-color.md) for token architecture, [06 — Layout & Spacing](./06-layout-and-spacing.md) for spacing scales*
