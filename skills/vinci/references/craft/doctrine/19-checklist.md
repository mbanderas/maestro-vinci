# 19 — Pre-Delivery Checklist

Run through this before calling any design done. It takes about 10 minutes and catches 80% of the issues that show up in review.

This is a unified checklist drawn from every chapter — use it as a final scan, not a substitute for reading the relevant chapters during design.

---

## System and consistency

- [ ] Every value (color, type, spacing, radius, shadow) comes from a token or scale
- [ ] No one-off pixel values (17px, 23px, etc.)
- [ ] Typeface choice is deliberate (not a default)
- [ ] Two or fewer typefaces in use
- [ ] One primary color, used like punctuation
- [ ] Functional colors (red, green, amber) used only for their semantic meaning
- [ ] Density is consistent across the whole design
- [ ] Radius treatment is consistent (no random mix of sharp and rounded)

---

## Typography

- [ ] Type comes from a defined scale
- [ ] Line-height appropriate for size (tight for big, loose for small)
- [ ] Body copy has reasonable measure (45-75 characters per line)
- [ ] `text-wrap: pretty` on body paragraphs
- [ ] `text-wrap: balance` on headlines
- [ ] Tabular numerals on any numeric column
- [ ] Smart quotes, em dashes, ellipses (not typewriter substitutes)
- [ ] No more than 2-3 weights in use
- [ ] No fake bolds (synthesized from a single weight)
- [ ] Font is fully loaded before content shows (no FOIT/FOUT issues)

---

## Color

- [ ] Body text contrast at least 4.5:1
- [ ] Large text contrast at least 3:1
- [ ] UI components contrast at least 3:1
- [ ] Color never the sole indicator of meaning
- [ ] No pure black on pure white (use off-black on off-white)
- [ ] Dark mode (if applicable) lifts background, drops text
- [ ] Gradients (if any) earn their place

---

## Layout

- [ ] Spacing values come from a scale
- [ ] Siblings spaced via `gap`, not margins
- [ ] Every element shares an edge or center with another
- [ ] Whitespace used intentionally
- [ ] Hierarchy is unambiguous on first look
- [ ] One focal element per major section
- [ ] Vertical rhythm consistent across the design

---

## Content

- [ ] No lorem ipsum, no "Headline goes here"
- [ ] Real copy or plausible placeholder
- [ ] Specific names, numbers, dates (not all "John Smith, $1,234")
- [ ] Voice and tone match the brand
- [ ] No throat-clearing ("Please," "kindly," "very," "just")
- [ ] No marketing copy in product UI
- [ ] No "click here," "learn more," "coming soon"
- [ ] Sentence case for most UI
- [ ] All required content (logos, footers, mandated copy) present

---

## Imagery and icons

- [ ] All icons from the same set
- [ ] Icons sized consistently for context
- [ ] Photography on-brand and consistently treated
- [ ] Illustrations form a clear, consistent set (if used)
- [ ] Logos in vector form at the right size, with the right variant
- [ ] Placeholders labeled as placeholders (no pretending)
- [ ] Emoji only where deliberately on-brand
- [ ] No bad hand-drawn SVG illustrations

---

## States and edges

- [ ] Empty state designed (where relevant)
- [ ] Loading state designed (where relevant)
- [ ] Error state designed (where relevant)
- [ ] Hover, focus, active, disabled states for all interactive elements
- [ ] Long-content edge case handled (200-char title, 50-item list)
- [ ] Short-content edge case handled (1-char name, 1-item list)
- [ ] Permissions / access states considered

---

## Interactivity (for prototypes)

- [ ] State persists across refresh
- [ ] At least one full flow works end-to-end
- [ ] Form validation actually validates
- [ ] Form submission has loading, success, error states
- [ ] Navigation works in both directions (forward and back)
- [ ] Sample content is realistic and diverse
- [ ] Reset / fresh-start option exists
- [ ] Real-feeling sample data (not all "Item 1, Item 2, Item 3")

---

## Motion (where applicable)

- [ ] Easing appropriate for direction (ease-out for entering, ease-in for exiting)
- [ ] Duration appropriate (most likely too slow — try halving)
- [ ] Motion explains a real state change
- [ ] Animation choreographed (related elements feel related)
- [ ] `prefers-reduced-motion` respected
- [ ] No motion for decoration

---

## Forms (where applicable)

- [ ] Labels above inputs (not placeholder-only)
- [ ] Required fields marked
- [ ] Touch targets at least 44px on mobile
- [ ] Font-size at least 16px on mobile (prevents iOS zoom)
- [ ] Autocomplete attributes set
- [ ] Correct input types (`email`, `tel`, `number`)
- [ ] Validation timing makes sense (on blur or submit, not on every keystroke)
- [ ] Error messages specific and actionable
- [ ] Submit has loading, disabled, success, error states
- [ ] Form survives back navigation

---

## Accessibility

- [ ] All text meets 4.5:1 contrast (body) / 3:1 (large)
- [ ] All interactive elements have visible focus rings
- [ ] Whole page navigable by keyboard
- [ ] Semantic HTML (`<button>`, `<a>`, `<input>`, headings in order)
- [ ] Form inputs have associated labels
- [ ] Icon-only buttons have `aria-label`
- [ ] Errors programmatically linked to fields (`aria-describedby`)
- [ ] Touch targets at least 44px
- [ ] Color is never the sole indicator of meaning
- [ ] Images have `alt` text (or `alt=""` if decorative)
- [ ] `lang` attribute set on `<html>`
- [ ] Page works at 200% browser zoom without horizontal scroll
- [ ] No autoplay video with sound

---

## Responsive

- [ ] Tested at 320px (smallest phone)
- [ ] Tested at 768px (tablet)
- [ ] Tested at 1024px (small laptop)
- [ ] Tested at 1440px (typical desktop)
- [ ] Tested at 1920px+ (large desktop)
- [ ] No horizontal scroll at any width
- [ ] Touch targets 44px+ on mobile
- [ ] Body text 16px+ to avoid iOS zoom
- [ ] Hover interactions have touch equivalents
- [ ] Navigation adapts (drawer, bottom bar, sidebar) for size
- [ ] Layout holds at 200% browser zoom

---

## Decks (where applicable)

- [ ] One idea per slide (or split)
- [ ] Type sizes appropriate (24px+ body at 1920×1080)
- [ ] Consistent layout system across the deck
- [ ] Section dividers break the rhythm
- [ ] At least one hero / statement slide at a key beat
- [ ] Charts state the takeaway in the title
- [ ] Sources cited where claims are made
- [ ] Speaker notes (if presenting live)
- [ ] No 3D charts, clip-art, or spinning transitions
- [ ] Tested at projection / share size

---

## Technical hygiene

- [ ] Console clean (no errors, no warnings)
- [ ] No broken images
- [ ] No broken links
- [ ] All custom fonts loaded
- [ ] Page loads in reasonable time
- [ ] Works in the target browser(s)
- [ ] Works at the target devices and sizes

---

## Process

- [ ] Reviewer has seen at least one in-progress version (not first viewing the finished file)
- [ ] Real content where possible; placeholders labeled
- [ ] Variations (if asked for) sit side by side in one document
- [ ] Tweaks (if any) have reasonable defaults and persist
- [ ] Brief summary of decisions made under ambiguity is ready

---

## The 10-minute version

If you only have 10 minutes:

1. **Scan for typography** — scale consistent, no fake bolds, smart quotes
2. **Scan for spacing** — values from scale, gaps not margins
3. **Scan for color** — contrast, no pure black/white, one primary
4. **Scan for content** — no lorem, real copy, specific not generic
5. **Scan for states** — hover, focus, error, empty, loading
6. **Scan for hierarchy** — squint, can you tell what's first?
7. **Click everything** — does it work? Does state persist?
8. **Resize the window** — does it survive mobile and ultra-wide?
9. **Tab through** — keyboard nav works, focus visible?
10. **Open devtools console** — clean?

If all ten pass, ship it.

---

## After delivery

When the design is in the reviewer's hands:

- Don't oversell. Let the work speak.
- Surface what you decided under ambiguity, so the reviewer can override.
- List known caveats (placeholder content, untested cases, deferred polish).
- Suggest next steps without committing to them.
- Be ready to iterate. The first delivery is rarely final.

---

*See also: every chapter. This checklist is a summary; the chapters explain the why.*
