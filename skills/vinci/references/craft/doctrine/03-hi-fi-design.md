# 03 — Hi-Fi Design Principles

Hi-fi means the design looks and feels real. Not wireframes, not "we'll polish later." Real type, real spacing, real color, real content, real states. Every element earns its place. This chapter is the high-level *what makes hi-fi work* — the deep dives on type, color, layout, motion, and content live in their own chapters.

---

## What "high fidelity" actually means

It's not just polish. Hi-fi means:

1. **The design is internally consistent.** A system underpins every choice — spacing, type, color, radius, motion — and the choices reinforce each other.
2. **The content is specific.** Real copy, real numbers, real names, real images (or designed placeholders, never fake-looking filler).
3. **States are accounted for.** Empty, loading, error, hover, focus, success — not just the happy path.
4. **The edges are considered.** Long titles, short titles, missing images, slow networks, small screens.
5. **It survives scrutiny.** Zoom in to 200% and the alignment still holds. Read it on a phone and it still works.

A design that looks good in a hero screenshot but falls apart at the edges isn't hi-fi — it's a marketing render.

---

## Start from context, never from a blank canvas

The single biggest cause of generic-looking work is starting from nothing. Before opening a file:

- **Find the system.** Design system, UI kit, brand guide, existing codebase, screenshots of the current product. Use it.
- **Read it thoroughly.** Don't skim. The voice of a good system lives in its details — its preferred radius, its spacing rhythm, its motion language.
- **Copy what you'll use locally.** Don't reference across boundaries; that's fragile and prevents safe editing.

If there isn't a system: commit to a clear aesthetic direction up front (typeface stack, color palette, density, radius scale) *before* placing the first element. State it as a comment at the top of the file so it's visible to you and to the reviewer.

---

## Commit to a system up front

Before placing the first element, write down — even in a comment block at the top:

- **Type scale** — display / h1 / h2 / body / small, with explicit sizes and line-heights
- **Color roles** — surface, on-surface, primary, accent, muted, danger — not just hex codes
- **Spacing scale** — 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 (or whatever rhythm fits)
- **Radius scale** — 0 / 4 / 8 / 16 / pill
- **Density** — generous / balanced / compact
- **Imagery posture** — photographic / illustrative / abstract / none
- **Motion language** — snappy / soft / minimal / none

Future-you will thank you. The reviewer can also see it and push back early, when changes are cheap.

---

## Visual rhythm and intentional variety

A piece where every section looks the same is boring. A piece where every section looks different is chaos. Aim for **patterned variety**:

- 2–3 background treatments (e.g. light, dark, accent) used intentionally
- Section openers that break rhythm — full-bleed, oversized type, image-led
- One "hero moment" per major beat
- Whitespace as a deliberate tool, not a leftover

The rule of thumb: variety should *mean* something. Different = different. Same = same. Random variety reads as inconsistency.

---

## Hierarchy is the job

Every hi-fi design has one question to answer on first look: *where do I look first?* If everything is shouting, nothing is.

Three tools for hierarchy:

1. **Size.** Bigger reads first. Use it for the most important thing on the screen.
2. **Contrast.** High-contrast elements pull the eye. Use it for primary actions and key information.
3. **Position.** Top-left (in LTR languages) reads first, then we sweep through. Use the grid intentionally.

You can also use **color**, **weight**, and **whitespace around** as secondary hierarchy tools, but size + contrast + position do most of the work.

If you squint at the design and can't tell what's most important, the hierarchy is broken.

---

## Specificity sells fidelity

Generic copy and generic numbers betray a half-finished design. Specifics make it feel real:

- Not "Welcome back, User" — "Welcome back, Maya"
- Not "$1,234" everywhere — "$2,840" on one card, "$192" on another
- Not "Lorem ipsum dolor sit amet…" — actual copy that says what the section is for
- Not three featureless avatars — three faces with names that read like real names

If you don't have the real material, **invent it plausibly**. The reviewer can imagine the difference between your placeholder and reality far more easily than they can imagine the difference between Lorem ipsum and reality.

---

## Restraint as a design move

A confident hi-fi design uses very few moves, repeated. Restraint shows up as:

- One accent color, used like punctuation
- One typeface (maybe two — display and text), with a strict scale
- One radius value, used everywhere
- One motion language — everything eases the same way
- One illustration style

The temptation is always to add more. Resist it. The discipline of "I have three colors, two type sizes, and one accent — what can I do with that?" produces better work than "I have everything available, what should I use?"

---

## Don't pad. Don't decorate.

Two related sins:

- **Padding** is adding sections, slides, or copy because something feels empty.
- **Decorating** is adding visual elements (gradients, badges, swooshes, icons) because something feels flat.

Both signal a structural problem you haven't solved.

If a section feels empty, ask: does it need to exist? If yes, the layout needs work — bigger type, different proportions, repositioning. If no, delete it.

If a section feels flat, ask: is the hierarchy clear? Often the answer is "I haven't committed enough" — pick *one* element to dominate the section and let the rest support it.

---

## States and edges

A hi-fi design considers what happens when things aren't perfect:

- **Empty state** — what does this look like with zero items? The empty state often deserves *more* design love than the populated one, because it's a first-run moment.
- **Loading state** — skeleton screens, progress indicators, optimistic UI. Avoid blank screens.
- **Error state** — what does failure look like? Where does the user go next?
- **Long content** — what happens with a 200-character title or 50-item list?
- **Short content** — what happens with a single-character name or one-item list?
- **Hover, focus, active, disabled** — every interactive element needs these.

A "happy path only" hi-fi design is two-thirds done.

---

## Polish details

The micro-finishes that separate competent from polished:

- **Optical alignment over mathematical alignment.** Equal pixels often look unequal. Trust your eye, not the ruler.
- **Tabular numerals** for any column of numbers (`font-variant-numeric: tabular-nums`).
- **Pretty text wrap** for body copy (`text-wrap: pretty`) and balanced wrap for headlines (`text-wrap: balance`).
- **Real focus rings** that match the brand, not browser default blue.
- **Subtle shadows** that come from a real light source, not "drop shadow at 10px y, 20px blur."
- **Hairline borders** at 0.5px or with a slight transparency to feel less heavy.
- **Custom selection color** that matches the accent.
- **Smooth scrolling** where it makes sense (`scroll-behavior: smooth`).
- **No flash of unstyled content.** Preload critical fonts.

None of these are revolutionary, but their absence is what marks work as unfinished.

---

## How to know it's done

A hi-fi design is done when:

- You can't point at any element that doesn't have a clear reason to be there
- The hierarchy is unambiguous on first look
- Real content fills every text slot, real images fill every image slot (or designed placeholders that don't pretend to be real)
- States other than the happy path are designed
- It holds up at the actual viewing context — desktop, phone, projector, print
- The reviewer's questions are about preferences, not about completeness

If you find yourself saying "well, I haven't done X yet but you can imagine…" — it's not done.

---

*See also: [04 — Typography](./04-typography.md), [05 — Color](./05-color.md), [06 — Layout & Spacing](./06-layout-and-spacing.md), [18 — Common Pitfalls](./18-common-pitfalls.md)*
