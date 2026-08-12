# 04 — Typography

Most "designs that don't feel designed" are typography problems. Type does more work than any other element in a design — it carries voice, hierarchy, mood, and density all at once. This chapter covers how to choose type, build a scale, set it well, and avoid the common failures.

---

## Choosing a typeface

### Typefaces to avoid by default

Not because they're bad — but because they read as **default** and add no voice:

- **Inter** — workhorse, but ubiquitous to the point of invisibility
- **Roboto** — same problem, especially on Material-flavored work
- **System fonts** (SF, Segoe, San Francisco stacks) — fine for utility but read as "didn't choose"
- **Arial / Helvetica** without a specific reason
- **Fraunces, Recoleta** — overused in startup branding to the point of becoming generic
- **Comic Sans, Papyrus, Brush Script** — for obvious reasons

This isn't a hard rule. If the brand uses Inter, use Inter. The point is: don't *default* to defaults. Pick deliberately.

### Where to find better type

- **Klim Type Foundry** — Söhne, Tiempos, Söhne Mono, National
- **Pangram Pangram** — generous trials, lots of personality
- **OH no Type Co** — distinctive display faces
- **Grilli Type** — strong workhorses
- **Commercial Type, Lineto, Sharp Type** — premium foundries
- **Google Fonts** — search by century or classification, not by popularity. Try Söhne alternatives, Pretendard, Public Sans, Atkinson Hyperlegible, Manrope (yes, popular, but used well)
- **Adobe Fonts** — bundled with Creative Cloud, often overlooked

### Pairing

Default to **one typeface across a scale** — different weights, sizes, and styles do more than a second face usually does. If you do pair:

- **Display + text** — a distinctive face for headlines, a workhorse for body
- **Serif + sans** is the most reliable pairing
- **Two sans** can work if one has a strong personality (geometric, condensed, monospaced)
- **Avoid three faces** unless one is monospace for code

When pairing, look for **shared proportions** (x-height, stroke contrast) and **deliberate contrast** (in mood — formal/casual, classical/modern). Same-but-different-enough fails; clearly-different-but-shares-DNA succeeds.

---

## Building a type scale

A type scale is a fixed set of sizes. Always use the scale; never sprinkle one-off sizes.

### Ratios

Pick a ratio and apply it consistently:

- **1.125 (major second)** — very tight, good for dense interfaces
- **1.2 (minor third)** — balanced, the default for product UI
- **1.25 (major third)** — good for content sites
- **1.333 (perfect fourth)** — dramatic, good for editorial
- **1.5 (perfect fifth)** — very dramatic, for hero-heavy marketing pages
- **Golden ratio (1.618)** — beautiful but rarely the right answer for screens

### A workable default scale (1.25 ratio, 16px base)

| Role | Size | Line-height | Weight |
|---|---|---|---|
| Display XL | 72px / 4.5rem | 1.0 | 500 |
| Display | 56px / 3.5rem | 1.05 | 500 |
| H1 | 40px / 2.5rem | 1.1 | 600 |
| H2 | 32px / 2rem | 1.15 | 600 |
| H3 | 24px / 1.5rem | 1.2 | 600 |
| H4 | 20px / 1.25rem | 1.3 | 600 |
| Body L | 18px / 1.125rem | 1.5 | 400 |
| Body | 16px / 1rem | 1.5 | 400 |
| Small | 14px / 0.875rem | 1.45 | 400 |
| Caption | 12px / 0.75rem | 1.4 | 500 |

Adjust to taste — but commit to *some* scale and use only sizes from it.

### Scaling for surface

- **Phone UI** — base 14–16px, never below 12px
- **Web (content)** — base 18–20px (yes, larger than you think)
- **Web (product)** — base 14–16px
- **Slide decks (1920×1080)** — base 24–32px, never below 24px
- **Print** — base 10–12pt (different unit!), never below 9pt for body
- **Signage / hero** — whatever's huge; the rest of the scale follows

---

## Line height (leading)

A scale needs explicit line-heights. Defaults:

- **Display type (>40px):** 1.0–1.1
- **Headings (24–40px):** 1.1–1.3
- **Body (14–20px):** 1.4–1.6
- **Small print (<14px):** 1.3–1.4

**Tight headlines, loose body.** Long lines need more leading; short lines need less.

For dense interfaces (tables, dashboards), tighten body to 1.3–1.4. For editorial content, loosen to 1.6–1.7.

---

## Measure (line length)

- **Body copy:** 45–75 characters per line
- **Long-form reading:** 60–80 characters
- **Sidebars, narrow columns:** 30–50 characters
- **Display headlines:** can be any length, but rarely should wrap more than 2–3 lines

If your body copy is hitting 100+ characters per line, add a `max-width`. Reading falls apart past that point.

```css
.prose {
  max-width: 65ch;
  line-height: 1.6;
}
```

---

## Weight

Most quality typefaces ship 6–9 weights. You almost never need more than three:

- **Body weight** (400 or 450) — for paragraphs
- **Emphasis weight** (500 or 600) — for headings, labels, emphasis
- **Display weight** (700 or 800) — for hero moments only

Using too many weights makes the design feel busy. Two weights is often enough; three is plenty.

**Watch for fake weights.** If your typeface only ships Regular and you ask for Bold, the browser will synthesize a bold that looks awful. Always check that the weights you're using are actually loaded.

---

## Micro-typography

The small details that separate competent type from polished type:

### Tracking (letter-spacing)

- **Display (>40px):** tighten slightly, `-0.02em` to `-0.04em`
- **Headings (24–40px):** neutral or `-0.01em`
- **Body:** neutral, leave alone
- **All caps:** loosen, `0.05em` to `0.1em`
- **Small caps and labels:** loosen, `0.02em` to `0.05em`

The rule: **big type tighter, small type looser.** Display type needs less air; small type needs more.

### Numerals

- `font-variant-numeric: tabular-nums` for **any** column of numbers — tables, prices, stats, dates
- `font-variant-numeric: oldstyle-nums` for body copy in editorial settings (numbers that sit on the baseline like lowercase letters)
- `font-variant-numeric: lining-nums` is usually the default

### Ligatures and stylistic alternates

Most quality fonts have OpenType features worth turning on:

```css
font-feature-settings: "liga" 1, "kern" 1;
font-variant-ligatures: common-ligatures;
```

Some have stylistic sets (`ss01`, `ss02`) that change the look of specific characters (e.g., a single-story `a` instead of double-story). Browse them — small changes can give a typeface a different personality.

### Wrap behavior

```css
.headline { text-wrap: balance; }
.body { text-wrap: pretty; }
```

- `balance` distributes lines evenly — great for headlines
- `pretty` avoids orphans (single-word last lines) — great for body
- Both are cheap to add and visibly improve quality

### Smart punctuation

Use real characters, not typewriter substitutes:

- `"smart quotes"` not `"straight quotes"`
- `—` em dash (not `--`)
- `–` en dash for ranges (not `-`)
- `…` ellipsis (not `...`)
- `×` for dimensions (not `x`)
- `°` for degrees
- `′ ″` for feet and inches (rarely needed but proper)

In HTML, you can use entities or just paste the real character. Most languages have correct quotes (`«»`, `„"`, etc.) — respect the locale.

### Hyphenation

For long-form body copy in narrow columns:

```css
.prose {
  hyphens: auto;
  -webkit-hyphens: auto;
}
```

Don't use for UI labels or headlines — hyphens read as broken there.

---

## Color and type

- **Don't use pure black on pure white** for body copy. It's too high contrast and tiring. Use `#1a1a1a` on `#ffffff` or similar.
- **Don't use pure white on pure black** for the same reason. Use `#e5e5e5` on `#0a0a0a`.
- **Body copy should be 7:1 contrast** against background for AAA, 4.5:1 for AA.
- **Display type can go to 3:1** because it's large enough to remain legible — this gives you more colorful options for headlines.
- **Muted text** (secondary copy) should still meet 4.5:1 against its background. "Gray text on gray background" is the most-failed accessibility test.

---

## Type in motion

When type animates:

- **Fade in, don't slide in** for headlines — slides feel slick but make text hard to read
- **Animate one element at a time** in a sequence — let each headline land before the next moves
- **Never animate body copy on every page change** — it adds nothing and slows reading
- **Avoid loading-state text that shifts** when fonts swap in (font-display: swap can cause this). Use `font-display: optional` or preload critical fonts.

---

## Vertical rhythm

A baseline grid makes type feel composed. The rule: spacing between text elements should be multiples of the base line-height.

```css
:root {
  --baseline: 8px;
}

h1 { margin-bottom: calc(var(--baseline) * 3); }  /* 24px */
h2 { margin-top:    calc(var(--baseline) * 5); }  /* 40px */
p  { margin-bottom: calc(var(--baseline) * 2); }  /* 16px */
```

Inconsistent vertical spacing is one of the most common signs of unfinished work.

---

## Implementation tips

### Loading

Always preload the fonts that appear above the fold:

```html
<link rel="preload" href="/fonts/Soehne-Regular.woff2" as="font" type="font/woff2" crossorigin>
```

### Fallback stack

Build a fallback stack that resembles your primary in metrics, so text doesn't reflow when the real font loads:

```css
font-family: 'Söhne', -apple-system, 'Helvetica Neue', sans-serif;
```

Use [fontstyle-matcher](https://meowni.ca/font-style-matcher/) or `size-adjust`, `ascent-override` descriptors in `@font-face` to match metrics exactly.

### Variable fonts

If the typeface ships a variable version, use it. One file gives you the full weight axis, often italic too. Smaller download, more flexibility.

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter.var.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: optional;
}
```

---

## A debugging checklist for typography

If type "feels off," check:

- Is the scale consistent? (No one-off sizes)
- Is line-height appropriate for the size? (Tighter for big, looser for small)
- Is measure too long or too short?
- Is contrast sufficient? (4.5:1 for body, 3:1 for large)
- Are you using too many weights or sizes?
- Are smart quotes / dashes / ellipses correct?
- Is `text-wrap: balance` on headlines?
- Are numerals tabular in numeric columns?
- Is the typeface fully loaded? (No fake bolds)
- Does the design hold at 200% zoom?

---

*See also: [05 — Color](./05-color.md) for type/color contrast, [06 — Layout & Spacing](./06-layout-and-spacing.md) for vertical rhythm, [16 — Accessibility](./16-accessibility.md) for contrast and size minimums*
