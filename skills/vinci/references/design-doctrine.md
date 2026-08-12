# Designer -- Design Doctrine Reference

Distilled doctrine for fast scan. The detailed 19-chapter manual is bundled at
`craft/doctrine/`. When in doubt on a visual decision, open the relevant chapter
instead of relying on intuition.

This file is reference material loaded on demand. It is not a substitute for the
manual; it is a map into the manual.

---

## The seven core beliefs

Internalize these. Every decision traces back to one of them.

1. **Context beats invention.** Start from a system, a brand, a codebase, a
   reference. Pure invention produces generic work. Find the system, read it
   thoroughly, copy what you will use locally.
2. **Constraints make work better.** Locked palette, fixed grid, defined type
   scale. Constraints raise the floor on every choice.
3. **Specificity sells fidelity.** Real copy, real numbers, real names, real
   images. Lorem ipsum and "Headline goes here" mark a half-finished design.
4. **Restraint is the move.** One accent color used confidently. One type pair.
   One radius. One motion language. The temptation is always to add more; resist.
5. **Show the work early.** A 30% scaffold beats a 90% file. Iteration is cheaper
   than rework. Share structural checkpoints before polish when the workflow permits.
6. **Variations should be comparable.** Side by side, same document. Not three
   separate files the reviewer must mentally A/B.
7. **Every element earns its place.** If you cannot say why something is there,
   take it out.

---

## What "hi-fi" actually means

Hi-fi is not polish. It is:

1. **Internally consistent.** A system underpins every choice; choices reinforce.
2. **Specific content.** Real copy, real numbers, real names, real images.
3. **States accounted for.** Empty, loading, error, hover, focus, success.
4. **Edges considered.** Long titles, short titles, missing images, small screens.
5. **Survives scrutiny.** 200% zoom, phone viewport, accessibility tooling.

A "happy-path only" design is two-thirds done.

---

## Operational method

Design quality depends on decision order, not accumulated decoration.

1. Classify both task mode and change scope. A targeted edit never licenses a redesign.
2. Inspect incumbent tokens, components, content, states, and shipped surfaces before deciding.
3. State a direction in observable terms: type, color, density, edges, motion, imagery, exclusions, and one brief-derived move.
4. Build structure -> layout -> typography -> surfaces -> states -> responsive -> motion.
5. Stress realistic content, counts, missing assets, failure states, keyboard, phone width, reduced motion, and zoom.
6. Render, inspect, repair highest-leverage defect, then re-render.
7. Separate defects from preferences. Critique as observation -> consequence -> repair and list verified passes.

Detailed method: `design-operations.md`. Rendered interactive-interface rubric:
`interface-evaluation.md`. Visual verification loop: `visual-validation.md`.

Optional runtime supplements add task-specific pressure. `impeccable` helps frontend craft and bounded refinement. `design-taste-frontend` helps landing pages, portfolios, and marketing redesigns resist repeated AI patterns. Neither overrides project truth, corpus evidence, the target stack, accessibility, or factual integrity.

---

## Doctrine chapters

Read the detailed reference under `craft/doctrine/` on demand by chapter.

| Group | Chapters |
|---|---|
| **Foundations** | 01 process · 02 asking · 03 hi-fi |
| **Craft** | 04 typography · 05 color · 06 layout · 07 content · 08 imagery · 09 motion |
| **Prototyping** | 10 prototypes · 11 state · 12 forms |
| **Systems** | 13 design systems · 14 variations · 15 decks |
| **Quality** | 16 accessibility · 17 responsive · 18 pitfalls · 19 checklist |

If only three: 01 (process), 03 (hi-fi), 18 (pitfalls).

---

## High-leverage rules by craft area

### Typography (chapter 04)
- Pick a deliberate typeface. Avoid defaulting to Inter / Roboto / system stacks
  unless the brand calls for it and you can state why.
- Define a scale (ratio 1.125 / 1.2 / 1.25 / 1.333 / 1.5). Never one-off sizes.
- Body measure 45-75 chars per line.
- `text-wrap: pretty` on prose; `text-wrap: balance` on headlines.
- Reject any multi-line text block whose final rendered line contains one short
  word. The narrow long-word exception requires measured comparative impact;
  intent alone is not evidence. See `design-operations.md`.
- Tabular numerals (`font-variant-numeric: tabular-nums`) on any numeric column.
- Smart quotes, em dashes (only when persona allows), ellipses; not typewriter
  substitutes. (Vinci-specific: `persona.md` forbids em-dash in authored
  microcopy regardless of typography brief; the doctrine permits it, the
  persona is stricter.)
- 2-3 weights max. No fake bolds.

### Color (chapter 05)
- Body text contrast >= 4.5:1; large text and UI >= 3:1.
- No pure black on pure white; off-black on off-white.
- Color never the sole indicator of meaning (pair with icon, text, position).
- One primary, used like punctuation. Most surface area is neutral.
- 60-30-10 split: 60% neutral, 30% supporting, 10% accent.
- Functional colors (red / green / amber / blue) reserved for semantic meaning.
- Prefer OKLCH for new palettes (perceptual lightness). Lock L and C, sweep H
  for harmonic palettes; sweep L for smooth ramps.
- Token system: primitive (palette) -> semantic (roles) -> component (rare).
- Dark mode: lift background to off-black, drop text to off-white, lighten
  brand. Never literal invert.

### Layout & spacing (chapter 06)
- Spacing from a scale (4/8/12/16/24/32/48/64 or the 8px-base variant).
- `gap` on flex/grid for siblings. Not margins.
- Every element shares an edge or center with another.
- Hierarchy unambiguous on first look (size > contrast > position).
- One focal element per major section.
- Whitespace is a tool, not a leftover.
- Optical alignment over mathematical alignment when they disagree.

### Content & copy (chapter 07)
- No lorem, no "Headline goes here," no "Click here," no "Learn more,"
  no "Coming soon."
- Sentence case for most UI. Title Case only for proper headlines.
- No throat-clearing ("just," "really," "please," "kindly," "very").
- No marketing voice in product UI.
- Specifics over generics: "Maya" not "User"; "$2,840" not "$1,234."
- Match the brand voice on marketing surfaces. Functional voice on functional
  surfaces.

### Imagery & icons (chapter 08)
- Icons from one set, sized consistently for context.
- Logos in vector, right variant for the surface.
- Placeholders labeled as placeholders. No fake-real screenshots, no
  hand-drawn SVG "team collaboration" abstractions.
- Emoji as icons is a tell; reserve emoji for genuinely casual contexts.

### Motion & animation (chapter 09)
- Motion explains a state change. If you cannot say what it explains, cut it.
- Easing: ease-out for entering, ease-in for exiting.
- Most motion is too slow. Try halving the duration. Then halve again.
- One motion language across the design.
- `prefers-reduced-motion: reduce` respected for every animation.
- No motion for decoration.

### Prototypes, state, forms (chapters 10-12)
- State persists across refresh (localStorage / sessionStorage for prototypes).
- At least one flow works end-to-end before shipping a prototype.
- Forms: labels above inputs (not placeholder-only), required fields marked,
  16px+ font on mobile (prevents iOS zoom), 44px+ touch targets, correct input
  types (`email`, `tel`, `number`).
- Validate on blur for fields, on submit for forms. Not on every keystroke.
- Error messages specific and actionable, programmatically linked
  (`aria-describedby`).
- Submit states: idle, loading, success, error, disabled.

### Design systems (chapter 13)
- Read the system before extending it. Voice lives in the details (preferred
  radius, spacing rhythm, motion language).
- Extend explicitly; do not freelance. Document additions.
- Treat shared project tokens as read-only unless the user authorizes that
  scope. Document any extension to the system.

### Variations & tweaks (chapter 14)
- Three variations max. Then refine.
- Side by side in one document. Not separate files.
- Tweaks have reasonable defaults that persist.

### Decks (chapter 15)
- 1920x1080 default. 16:9 aspect.
- Body 24px+ minimum; subtitles 28-32px; headings 48-72px; display 96-160px.
- One idea per slide. Hero title <= 6 words.
- Section dividers break rhythm.
- Charts state the takeaway in the title ("Revenue 3x since launch" not
  "Revenue").
- No 3D charts, clip-art, spinning transitions.
- Mode matters: live decks sparse (speaker carries content); read-on-screen
  decks denser; pitch decks visually polished; working docs clear + complete.

### Accessibility (chapter 16)
- All text meets 4.5:1 (body) / 3:1 (large + UI).
- Visible focus rings on every interactive element. Brand-tinted; not browser
  default blue.
- Keyboard navigation works fully. Tab order matches visual order.
- Semantic HTML (`<button>`, `<a>`, `<input>`, headings in order).
- Icon-only buttons have `aria-label`.
- Touch targets >= 44 x 44 px.
- Color never the sole indicator of meaning.
- Images have `alt` text (`alt=""` if decorative).
- `lang` set on `<html>`. Page survives 200% browser zoom without horizontal
  scroll.
- `prefers-reduced-motion: reduce` respected.
- Accessibility is a design constraint, not a polish layer. Designed in from
  the start.

### Responsive (chapter 17)
- Test at 320 / 768 / 1024 / 1440 / 1920+.
- No horizontal scroll at any width.
- Body 16px+ on mobile (prevents iOS zoom).
- Hover interactions have touch equivalents.
- Navigation adapts: drawer / bottom bar / sidebar / collapsed sidebar.
- Mobile-first defends against "I'll make it responsive later."

---

## PDF, deck, ebook, report output

When the target is a PDF, deck, ebook, report, lead magnet, pitch, or guide,
preserve the target repository's renderer and templates. If none exist, author
print-aware HTML or another user-approved source format and use an available local
render path. Do not imply that this package ships a PDF renderer.

- **Deck default**: 1920 x 1080 per slide when the brief supplies no other size.
- **Document default**: A4 or Letter portrait with explicit cover, chapter,
  figure, table, callout, and footer behavior.
- **Render evidence**: render every page or slide with the selected local tool,
  inspect the rasterized result, then record the tool and captures.
- **Tokens**: use target-project tokens or define a local, named scale. Never
  reference tokens from another repository at runtime.

### PDF-specific rules

Page-break rules (document mode):

```css
h1, h2 { break-after: avoid; break-inside: avoid; }
h3, h4 { break-after: avoid; }
figure, pre, table, blockquote { break-inside: avoid; }
.callout, .card { break-inside: avoid; }
p { orphans: 3; widows: 3; }
.cover, .chapter-divider { break-after: page; }
```

Print CSS (both modes):

```css
@page { size: A4 portrait; margin: 0; }
@media print {
  body { background: white; }
  .no-print { display: none !important; }
}
```

Deck mode overrides `@page` to `1920px 1080px`.

### Type scale by medium

| Mode | Body | Heading | Display |
|---|---|---|---|
| Deck (1920 x 1080) | 28-32px | 64-96px | 120-200px |
| Document (A4 @ 96dpi) | 11-12pt | 18-28pt | 36-56pt |

### When to add PDF mode to a dispatch

If the target format is unset and the brief asks for a deck, pitch, ebook, lead
magnet, report, guide, printable artifact, or export, classify it as a paginated
design surface and establish page size and render tooling before authoring.

---

## Brand assets, logos, posters

Logos and brand assets are in scope. Approach:

- **Logo authoring**: SVG marks, vector form, multiple variants (full, mark
  only, monochrome, on-dark, on-light). Document the construction (grid,
  ratios, padding rules).
- **Poster / illustration**: pair with the relevant brand voice; commit to one
  illustration style (photographic, geometric, hand-drawn, abstract); avoid
  the AI-default abstract-blob aesthetic.
- **Brand guidelines mini-doc**: type pair, color tokens, logo usage rules,
  spacing scale, voice samples. One A4 page or one short deck section is
  usually enough.

Use the target project's brand tokens when available. For a new brand, define a
local token set and keep names stable across templates and variants.

---

## Pitfalls (chapter 18)

Fast scan. The full list is in `craft/doctrine/18-common-pitfalls.md` and the
compact checklist is `craft/checklists/pitfalls.md`.

### Visual tells

- Default Inter / Roboto / Arial with no character
- Purple-to-pink gradient hero
- Card with 4px left-border accent stripe (2020 SaaS look)
- Emoji as iconography (rocket, lightbulb, sparkle)
- Hand-drawn SVG of "team collaboration"
- Three stats in a row with no source
- Centered everything
- 17px / 23px / 41px one-off values
- Fake screenshots with mock data ("12,486 users")
- Pure black on pure white

### Copy tells

- Lorem ipsum
- "Headline goes here," "Title here"
- "Welcome to [Product]," "Let's get started"
- Marketing voice in product UI ("Empowering teams to do their best work")
- "Click here," "Learn more," "Coming soon"
- Title Case Everywhere on buttons
- All caps as emphasis

### Layout tells

- Every section the same height (8x 100vh)
- Equal-weight content (nothing dominates)
- Uniform spacing (everything 16px from everything)
- Heavy borders on everything
- Centered hero stretching full-width on ultra-wide
- Full-width decorative pill or gradient lozenge whose shape has no semantic or brand role
- Fixed or minimum-height stage that leaves dead background without a content, state, interaction, or motion need
- Sidebars that do not collapse

### Color tells

- Pure black on pure white
- Brand color used everywhere with no hierarchy
- Functional colors used for decoration (green check = bullet point)
- Brand color too saturated for body text
- Dark mode = literal invert

### Motion tells

- Animations on everything
- Same easing entering and exiting
- Durations too slow (800ms button hover)
- `prefers-reduced-motion` not respected

### Process tells

- "I'll polish it later"
- "I'll show it when it's done"
- "Just one more iteration" (on a directionally-wrong design)
- "I'll make it accessible later"
- Designing for one viewport only

---

## Pre-delivery checklist (chapter 19)

10-minute scan before completion:

1. **Typography** - scale consistent, no fake bolds, smart quotes,
   tabular numerals on numeric columns, no unapproved single-word terminal
   runt.
2. **Spacing and geometry** - values from scale, gaps not margins, no one-off
   pixels, no unearned stretched containers or forced-height dead space.
3. **Color** - contrast >= 4.5:1 body / 3:1 large + UI, no pure black/white,
   one primary used sparingly.
4. **Content** - no lorem, no "Headline goes here," specific copy / names /
   numbers.
5. **States** - hover, focus, active, disabled, empty, loading, error.
6. **Hierarchy** - squint; can you tell what is first?
7. **Click everything** - works? state persists?
8. **Resize** - 320px to 1920px+, no horizontal scroll.
9. **Tab through** - keyboard nav works, focus visible.
10. **Devtools console** - clean (no errors, no warnings).

All ten pass: ship.

Full checklist in `craft/doctrine/19-checklist.md`. Accessibility,
anti-template review, and visual validation layer on top of it.

---

## Doctrine vs persona precedence

The doctrine covers web, decks, PDFs, posters, and product interfaces.
`persona.md` overrides doctrine where they disagree. Vinci is stricter than
the doctrine in three places:

- **Em-dash**: doctrine permits em-dash with smart typography; `persona.md` blocks
  em-dash in authored microcopy regardless of brief.
- **Curly quotes**: doctrine permits curly quotes; `persona.md` defaults to
  straight quotes unless the typography brief explicitly demands curly.
- **Anti-template rigor**: doctrine warns against generic AI-template
  aesthetics; the persona requires independent review when runtime capacity
  permits and records `not-run` otherwise.

When in doubt: `persona.md` wins. Doctrine is the floor; the persona is the ceiling.

---

## Skill bindings

Vinci consumes three bundled knowledge surfaces:

- **`persona.md`** for identity, scope, evidence, and boundaries.
- **`design-doctrine.md`** for the fast craft scan.
- **`craft/doctrine/` and `craft/checklists/`** for detailed, task-specific
  reference. Open only relevant chapters; do not load the whole manual by
  default.
