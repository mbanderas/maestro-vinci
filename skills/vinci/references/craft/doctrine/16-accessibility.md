# 16 — Accessibility

Accessibility is not a checklist you bolt on at the end. It's a design constraint that, when honored from the start, makes the design better for everyone — not just users with disabilities. Larger touch targets benefit everyone with hands. Clearer copy benefits everyone reading on the bus. Higher contrast benefits everyone outside on a sunny day.

This chapter covers the accessibility considerations that matter most for hi-fi design and interactive prototypes.

---

## The baseline standards

The current consensus is **WCAG 2.2 AA** as the minimum. Many organizations target **AAA** for specific surfaces (finance, healthcare, government).

The four principles (POUR):
- **Perceivable** — content must be presentable to senses (sight, sound, touch)
- **Operable** — UI must be usable (mouse, keyboard, touch, voice, assistive tech)
- **Understandable** — content and operation must be clear
- **Robust** — must work with current and future assistive technology

Every accessibility decision can be traced back to one of these.

---

## Color and contrast

The most common — and most fixable — accessibility failure.

### Minimum contrast ratios (WCAG AA)

| Element | Ratio |
|---|---|
| Normal text (< 18px regular, < 14px bold) | 4.5:1 |
| Large text (18px+ regular, 14px+ bold) | 3:1 |
| UI components and graphical elements | 3:1 |

For AAA: 7:1 normal, 4.5:1 large.

### Common violations

- **Gray text on a gray background.** Particularly with thin weights at small sizes.
- **Brand-colored text on a brand-colored background.** "Blue button text on blue button" might fail.
- **Placeholder text** too low contrast.
- **Disabled state** ambiguously low contrast — it should *look* disabled but still be perceivable.
- **Focus rings** that match the background too closely.

### APCA — the modern model

WCAG's ratio system is based on a 1990s algorithm. **APCA** is a perceptually-accurate replacement that gives better real-world predictions. Tools like the WebKit and Chrome devtools now show APCA scores alongside WCAG.

APCA targets:
- **Lc 90+** for fluent text
- **Lc 75+** for body text
- **Lc 60+** for large text and labels
- **Lc 45+** for non-critical decorative

APCA isn't yet a WCAG requirement, but it's a better signal for legibility.

### Don't rely on color alone

Information conveyed only by color is invisible to users with color vision deficiencies and inaccessible in monochrome contexts. Always pair color with:

- **Icons or symbols** — red error icon, green check, etc.
- **Text labels** — "Required," "Error," "New"
- **Position or shape** — different shapes for different states

A red dot next to "Error" is accessible. A red dot alone is not.

---

## Focus indicators

Focus rings are how keyboard users navigate. They are not optional.

### Rules

- **Always visible** when an element receives keyboard focus
- **Sufficient contrast** against both the element and the background (3:1 minimum)
- **At least 2px thick** in most contexts
- **Distinct from hover** — focus and hover are different states
- **Distinct from selection** — focus is "I'm here," selection is "I'm chosen"

### Implementation

```css
/* Reset only mouse focus, keep keyboard focus */
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  border-radius: inherit;
}

:focus:not(:focus-visible) {
  outline: none;
}
```

`:focus-visible` is the modern, correct way: show the ring for keyboard navigation, hide it for mouse clicks. Don't blanket-remove focus rings — that's an accessibility regression.

### Custom focus styles

Brand-appropriate focus rings (matching the accent color, with the right offset) are a great polish detail. The most basic version — browser default blue — is fine; what's not fine is removing it.

---

## Keyboard support

Every interactive element must be reachable and operable with a keyboard.

### What needs keyboard support

- All buttons, links, form inputs (free with proper HTML)
- All custom interactive components (you have to add it)
- Modals (Escape to close, focus trap inside)
- Dropdowns (Arrow keys to navigate, Enter to select, Escape to close)
- Menus (same)
- Tabs (Arrow keys, Home/End)
- Sliders (Arrow keys for fine, PageUp/Down for coarse)
- Sortable lists (Arrow keys, Space to grab, etc.)

### Tab order

Tab order should follow visual reading order. Avoid `tabindex` values other than `0` (in flow) and `-1` (programmatically focusable, not in flow).

### Skip links

For pages with persistent navigation, a "Skip to main content" link is the standard accessibility move. Hidden by default, visible on focus:

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: 12px 16px;
  z-index: 100;
}
.skip-link:focus { top: 0; }
```

---

## Screen readers

You don't have to test every flow with a screen reader, but you should know the basics.

### Semantic HTML

The single highest-leverage accessibility move: use the right HTML element for the job.

- `<button>` for buttons (not `<div onclick>`)
- `<a>` for navigation
- `<input>`, `<select>`, `<textarea>` for form controls
- `<h1>` through `<h6>` for headings — in order, no skipping levels
- `<nav>`, `<main>`, `<header>`, `<footer>`, `<aside>` for landmarks
- `<ul>`, `<ol>`, `<li>` for lists
- `<table>` (with proper `<thead>`, `<th>`) for tabular data — not for layout

Semantic HTML gives screen readers the structure they need for free. Most accessibility failures start with the wrong element choice.

### ARIA

ARIA attributes fill the gaps that semantic HTML can't:

- `aria-label` — name an element when its visible content isn't descriptive (icon-only buttons)
- `aria-labelledby` — point to another element that names this one
- `aria-describedby` — point to descriptive text (helper text on a form field)
- `aria-expanded` — for collapsible elements
- `aria-hidden` — hide decorative content from screen readers
- `role` — assign a role when semantics don't match (rare; usually solved better by using the right element)

**First rule of ARIA: don't use ARIA.** Use semantic HTML first. ARIA is for cases where HTML genuinely can't express what you need.

### Live regions

For content that updates dynamically (toasts, notifications, live data), use `aria-live`:

```html
<div aria-live="polite" id="toast-container"></div>
```

- `polite` — announce when the user is idle
- `assertive` — announce immediately (use sparingly)

---

## Form accessibility

Forms are high-stakes for accessibility. Get these right:

- Every input has a programmatically-associated label
- Required fields have the `required` attribute
- Errors are linked to inputs via `aria-describedby`
- `aria-invalid="true"` on inputs with errors
- Error messages are placed near the input (not just at the top)
- Fieldsets and legends for related groups (radio buttons, checkboxes)

```html
<div class="field">
  <label for="email">Email address</label>
  <input
    type="email"
    id="email"
    required
    aria-describedby="email-help email-error"
    aria-invalid={hasError ? "true" : "false"}
  />
  <div id="email-help" class="helper">We'll send your receipt here.</div>
  {hasError && <div id="email-error" class="error">That email doesn't look right.</div>}
</div>
```

---

## Touch targets

Minimum touch target size:

- **iOS HIG:** 44×44 points
- **Material Design:** 48×48 dp
- **WCAG 2.5.5:** 44×44 CSS pixels

Use **48px+** as the practical minimum on mobile. Smaller targets miss more often, and the failure rate disproportionately hits older users, larger fingers, and motor impairments.

Targets close together also need **spacing** — at least 8px between adjacent targets — so adjacent taps don't trigger the wrong one.

---

## Motion and animation

Some users have vestibular conditions, motion sensitivity, or attention issues that make motion harmful.

Respect the OS preference:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

A more nuanced approach: keep functional transitions (color changes, focus rings) but disable decorative motion (parallax, autoplay, large transitions).

**Never auto-play video with motion** above the fold without a control to pause.

---

## Sound

If your design uses sound:

- Always have a visible mute/pause control
- Provide captions or transcripts for any spoken content
- Don't autoplay sound

---

## Text alternatives

Every non-text element needs a text alternative:

- **Images:** `alt` text describing the image (or `alt=""` for decorative)
- **Icons:** `aria-label` if standalone, `aria-hidden="true"` if next to a label
- **Charts:** A text description of the data nearby, or a `<figcaption>`
- **Video:** Captions for spoken content, audio descriptions for visual-only content

Good `alt` text:
- Describes what the image *means* in context, not what it literally shows
- Is concise (one sentence usually)
- Doesn't say "Image of..." (screen readers announce that)
- Is empty (`alt=""`) for purely decorative images

---

## Reading and language

- **`lang` attribute** on `<html>` so screen readers use the right pronunciation
- **`lang` on any embedded foreign-language content** so it switches mid-page
- **Sentence case** is easier to scan than Title Case
- **Plain language** beats jargon
- **Reading level** — most content should land around 8th-grade level
- **Line length** — 45-75 characters per line for body copy

---

## Zoom and reflow

The page must remain usable at:

- **200% zoom** (WCAG 1.4.4)
- **400% zoom with reflow** (WCAG 1.4.10) — no horizontal scrolling at 320×256 CSS pixels

What this means in practice:
- Don't use fixed widths in pixels for major layout
- Use `rem` (not `px`) for type so it scales with user preferences
- Avoid `overflow: hidden` on containers that hold variable-length content
- Test at high zoom levels — many layouts fail

---

## Testing tools

In rough order of how often you'll use them:

- **Browser devtools** — Lighthouse audits, ARIA inspector, contrast checkers built in
- **axe DevTools** — browser extension, catches common issues automatically
- **Wave** — similar, visual annotations on the page
- **Keyboard testing** — Tab through every interactive element; can you reach everything? Operate everything?
- **Screen reader testing** — VoiceOver (Mac/iOS) is the easiest to start with; NVDA (Windows) is the most common
- **Color blindness simulators** — built into Chrome devtools
- **APCA contrast checker** — for the modern contrast model

For most design work, browser devtools + keyboard testing + occasional axe scans cover 80%.

---

## Common accessibility failures

- Buttons that aren't `<button>` (just `<div onclick>`)
- Links that aren't `<a>` (just `<span onclick>`)
- Form inputs without labels
- Icon-only buttons without `aria-label`
- Focus rings removed and not replaced
- Color used as the only indicator of state or meaning
- Modals that don't trap focus or close on Escape
- Touch targets under 44px
- Text contrast below 4.5:1
- Autoplay video / sound without controls
- No `prefers-reduced-motion` handling
- `<table>` used for layout
- Heading levels skipped (`<h1>` then `<h3>`)
- Image `alt` text that says "image of..." or is missing entirely
- Forms that don't validate, or validate aggressively on every keystroke

---

## A practical accessibility checklist

A realistic minimum for any project:

- [ ] All text meets 4.5:1 contrast (body) / 3:1 (large)
- [ ] All interactive elements have visible focus rings
- [ ] Whole page navigable by keyboard
- [ ] Semantic HTML for interactive elements (`button`, `a`, etc.)
- [ ] Form inputs have associated labels
- [ ] Icon-only buttons have `aria-label`
- [ ] Errors are programmatically linked to fields
- [ ] Touch targets are at least 44px
- [ ] Color is never the sole indicator of meaning
- [ ] Images have `alt` text (or `alt=""` if decorative)
- [ ] Headings used in order, no skipped levels
- [ ] `lang` attribute set on `<html>`
- [ ] `prefers-reduced-motion` respected
- [ ] Page works at 200% zoom without horizontal scroll
- [ ] No autoplay video with sound

---

*See also: [04 — Typography](./04-typography.md) for type contrast, [05 — Color](./05-color.md) for color contrast, [12 — Forms & Inputs](./12-forms-and-inputs.md) for form accessibility*
