# Pre-Delivery Checklist

10-minute scan before calling any design done. Catches ~80% of review issues.

Distilled from `doctrine/19-checklist.md`. Read the full chapter once; come back here for fast scans.

---

## The 10-minute version (start here)

1. **Typography** — scale consistent, no fake bolds, smart quotes, tabular numerals where numeric
2. **Spacing and geometry** — values from scale, gaps not margins, no one-off pixels, no unearned stretched containers or forced-height dead space
3. **Color** — contrast ≥ 4.5:1 body / 3:1 large + UI, no pure black/white, one primary used sparingly
4. **Content** — no lorem, no "Headline goes here," specific copy/names/numbers
5. **States** — hover, focus, active, disabled, empty, loading, error
6. **Hierarchy** — squint; can you tell what's first?
7. **Click everything** — does it work? state persists?
8. **Resize** — 320px → 1920px, no horizontal scroll
9. **Tab through** — keyboard nav works, focus visible
10. **Devtools console** — clean (no errors, no warnings)

All ten pass → ship.

---

## Quick checks by area

### System and consistency
- [ ] Every value from a token or scale (no 17px paddings)
- [ ] Typeface choice deliberate (not a default)
- [ ] ≤ 2 typefaces, ≤ 3 weights
- [ ] One primary color, used like punctuation
- [ ] Radius treatment consistent (no random mix sharp/rounded)
- [ ] Pill/lozenge shapes map to a real control, status, progress, compact emphasis, or brand role
- [ ] Fixed/minimum-height stages justify empty area through content, state, interaction, or known motion

### Typography
- [ ] Body 45-75 chars per line (measure)
- [ ] `text-wrap: pretty` on prose, `text-wrap: balance` on headlines
- [ ] Tabular numerals on numeric columns
- [ ] Smart quotes/em dashes/ellipses
- [ ] No fake bolds (no synthesized weights)

### Color
- [ ] Body 4.5:1, large 3:1, UI 3:1
- [ ] Color never the sole indicator
- [ ] No pure black on pure white
- [ ] Dark mode lifts background, drops text

### Content
- [ ] No lorem, no placeholder text mistaken for design
- [ ] Specific names/numbers/dates
- [ ] No throat-clearing ("please," "kindly," "very," "just")
- [ ] No marketing voice in product UI
- [ ] No "click here," "learn more"

### States and edges
- [ ] Empty / loading / error designed where relevant
- [ ] All interactive elements: hover, focus, active, disabled
- [ ] Long-content edge (200-char title)
- [ ] Short-content edge (1-char name)

### Decks (if applicable)
- [ ] 24px+ body, one idea per slide
- [ ] Section dividers break rhythm
- [ ] Charts state takeaway in title
- [ ] No 3D charts, clip art, spinning transitions

### Print / PDF (if applicable)
- [ ] Page-break rules on figures, pre, tables, callouts (`break-inside: avoid`)
- [ ] `orphans: 3; widows: 3` on body
- [ ] `break-after: avoid` on headings
- [ ] Tested with print preview, not just screen

### Accessibility
- [ ] Visible focus rings on all interactive elements
- [ ] Keyboard navigation works fully
- [ ] Semantic HTML (`<button>`, `<a>`, headings in order)
- [ ] Touch targets ≥ 44px
- [ ] `lang` set on `<html>`
- [ ] Page works at 200% zoom without horizontal scroll

### Responsive
- [ ] Tested 320 / 768 / 1024 / 1440 / 1920+
- [ ] 16px+ body to prevent iOS zoom
- [ ] Hover interactions have touch equivalents

### Technical
- [ ] Console clean
- [ ] No broken images / links
- [ ] All custom fonts loaded
- [ ] Loads fast on target devices

---

## After delivery

- Surface decisions made under ambiguity; let reviewer override
- List caveats: placeholder content, untested cases, deferred polish
- Don't oversell; let the work speak
