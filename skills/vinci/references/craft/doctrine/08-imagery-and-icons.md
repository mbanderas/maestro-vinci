# 08 — Imagery & Iconography

Imagery — photography, illustration, and icons — carries enormous weight in a design. It signals brand, sets mood, and creates the difference between "polished" and "templated." This chapter covers how to use each well, and what to do when you don't have the real assets.

---

## Imagery hierarchy

In rough order of how convincing they read:

1. **Real photography** — custom, on-brand, well-shot
2. **Real illustration** — commissioned or in-house, consistent style
3. **Curated stock** — Unsplash, Pexels, with care
4. **Designed placeholders** — geometric, on-brand, intentionally not-real
5. **Stock photography used carelessly** — readily identifiable as stock
6. **AI-generated imagery** — uncanny by default; flag the use clearly
7. **Generic system icons in place of imagery** — gives up

Always work as high up this list as possible.

---

## Photography

When real photography is available:

### Selection criteria

- **On-brand.** Matches the visual voice (warm vs. clinical, candid vs. composed, etc.).
- **Specific.** A photograph that says something. Not "office worker at laptop."
- **High quality.** Sharp, well-exposed, properly white-balanced.
- **Crop-able.** Photos with the subject not dead-center are more flexible.
- **Right aspect ratio** for the slot, or croppable to it.

### Processing

- **Consistent color treatment.** All photos in a design should feel like they belong to the same set. A subtle filter, consistent warmth, similar saturation.
- **Compression.** WebP or AVIF where possible. JPG quality 80-85 is usually invisible at typical sizes; below that, artifacts show.
- **Sizing.** Serve appropriate sizes for the slot. A 200px avatar shouldn't be a 4000px JPG.
- **`object-fit: cover`** for slots with fixed dimensions.

### When stock is the only option

- **Unsplash, Pexels** for free; **Stocksy, Death to Stock** for paid-but-distinctive
- Search for the *concept*, not the *literal subject*. "Focus" reads better than "person looking at laptop."
- Avoid: handshakes over conference tables, people pointing at screens, perfect families in white living rooms
- Apply consistent treatment — same filter or color grade across the set — to unify

### Photography placeholders

When you don't have photos and don't want to fake it, use designed placeholders:

```html
<div class="photo-placeholder" aria-label="Photo placeholder">
  <svg viewBox="0 0 100 100">
    <rect width="100" height="100" fill="var(--gray-200)" />
    <path d="M30,70 L50,40 L70,70 Z" fill="var(--gray-400)" />
    <circle cx="65" cy="35" r="6" fill="var(--gray-400)" />
  </svg>
</div>
```

Or a solid color block in a brand color with the word "photo" or a camera icon. The point is to communicate "an image will go here" without pretending to be the image.

---

## Illustration

Illustration is the highest-leverage way to give a design a distinctive voice. It's also the easiest to do badly.

### Style consistency

The whole illustration set must feel like one set:

- Same line weight
- Same fill or no-fill approach
- Same color palette
- Same level of detail
- Same perspective (flat, isometric, dimensional)
- Same character proportions (if there are characters)

A single inconsistent illustration breaks the set.

### When to use illustration

- **Empty states** — illustrations make a "nothing here" screen feel intentional
- **Onboarding** — sets tone, explains concepts without dense copy
- **Marketing pages** — for products that are abstract or hard to photograph
- **Section dividers** — to add rhythm and personality

### When not to use illustration

- For product UI — illustrations rarely earn their pixel-weight in a working tool
- For trust/credibility content (security pages, compliance, financial data) — photography reads as more serious
- When you can't commit to a consistent set — one good illustration plus three placeholders looks worse than four placeholders

### Don't fake illustration

If the design needs illustration but you don't have an illustrator, **don't hand-draw it yourself in SVG** unless you're an illustrator. Bad SVG illustrations are one of the clearest "this was thrown together" signals.

Better options:

- Use a placeholder rectangle and label it "Illustration: [description]"
- Use a curated free set (Lukasz Adam, Open Doodles, undraw.co if applied with restraint)
- Use abstract shapes that aren't trying to be representational
- Skip the illustration entirely; let type and color carry the design

---

## Iconography

Icons are small images that carry meaning. They should be:

- **Recognizable** at the size they'll appear
- **Consistent** in style across the set
- **Functional** — every icon means something specific

### Icon sets

Pick one set and stick to it. Mixing icon sets is one of the most visible "didn't commit" signals.

Good free sets:
- **Lucide** — the de facto modern default, comprehensive, MIT licensed
- **Phosphor** — distinctive, multiple weights, free
- **Heroicons** — clean, two weights (outline and solid)
- **Tabler Icons** — huge set, free
- **Radix Icons** — small, sharp, free
- **Iconoir** — distinctive, free

Paid (worth it for serious work):
- **Streamline** — vast library, multiple styles
- **Font Awesome Pro** — comprehensive
- **Nucleo** — well-made, regularly updated

### Sizing icons

Common sizes:
- **16px** — inline with body text
- **20px** — buttons, small UI
- **24px** — standard UI, nav
- **32px** — large UI elements
- **48px+** — feature icons, empty states

Icons should be **optically aligned** with the type they sit next to, not mathematically centered. Lucide icons at 20px sit nicely next to 16px body text.

### Icon use

- **Don't decorate** — every icon should have a job. "Settings ⚙" needs the cog. "Save" doesn't need a floppy.
- **Pair with labels** in primary nav — icon alone fails too many users
- **Tooltip** any icon-only button
- **Maintain semantic color** — danger icons in danger color, etc.

### Custom icons

If you need an icon the library doesn't have, draw it to match the set:

- Same grid (usually 24x24 for most modern sets)
- Same stroke width (1.5 or 2px is typical)
- Same corner radius
- Same end cap style (round vs. square)

A single off-style custom icon will read as different. Match the set carefully, or pick a different set that has what you need.

---

## Emoji

Emoji are not iconography. They render differently across platforms, change visually over time, and signal a specific tone that may not match the brand.

Use emoji when:
- The brand explicitly uses them
- The audience and context welcome them (consumer apps, casual messaging)
- A reaction picker or chat input genuinely needs them

Avoid emoji when:
- The brand is enterprise, financial, medical, or otherwise serious
- The emoji is doing icon work (use a real icon)
- You're trying to add "personality" — that's a tone problem to solve in copy and visuals, not with 🚀

Apple emoji are the most-recognized but only render natively on Apple devices. If you need consistent cross-platform emoji, use Twemoji or similar.

---

## Logos

When using a logo (your own or a client's):

- **Use the provided files.** Don't trace or recreate. Don't pull from Wikipedia.
- **Respect clear space.** Most logos have a defined minimum clear space — usually the height of a letter or repeating mark.
- **Use the right variant.** Most logos have light-on-dark, dark-on-light, and sometimes monochrome variants. Use the right one for the context.
- **Don't distort.** No stretching, skewing, drop-shadowing, recoloring, or "improving."
- **Mind minimum size.** Below the documented minimum, use the mark alone or a simplified variant.

If the user gives you a low-resolution logo, ask for a vector version. PNG logos at 200px upscaled into a hero are an immediate quality kill.

---

## Background images and patterns

### Background photography

- **Always darken or lighten** the area under text for legibility. Either a tint overlay or a gradient mask.
- **Test with longest content** — a hero image that works with "Welcome" may not work with "Welcome to your account dashboard."
- **Consider focal point.** The interesting part of the image shouldn't be where the type sits.

### Background patterns

Subtle patterns can add texture without competing for attention:

- **Dot grids** — gentle, geometric
- **Diagonal lines** — adds direction
- **Noise / grain** — adds tactility
- **Subtle gradients** — done well, can suggest depth

Patterns should be **quiet**. If you notice the pattern more than the content, it's too loud.

---

## When in doubt, use a placeholder

A clearly-labeled placeholder is better than a bad attempt at the real thing.

```html
<div class="placeholder">
  <div class="placeholder-label">Hero image — 1920×800 — TBD</div>
</div>
```

Reviewers understand placeholders. They don't always understand that the bad illustration you drew is meant to be replaced.

---

## A debugging checklist for imagery

- Are all icons from the same set?
- Are icons sized consistently across similar contexts?
- Is photography on-brand and consistently treated?
- Is any illustration part of a clear, consistent set?
- Are logos in vector form, at the right size, with the right variant?
- Are placeholders labeled, or do they pretend to be real?
- Are emoji used deliberately, or as filler?
- Are background images / patterns supporting the design, not competing with it?

---

*See also: [03 — Hi-Fi Design Principles](./03-hi-fi-design.md), [18 — Common Pitfalls](./18-common-pitfalls.md)*
