# 06 — Layout & Spacing

Layout is where amateur and professional work diverge most visibly. A merely competent designer can pick a font and palette; only a careful one composes a layout. This chapter covers grids, spacing scales, alignment, hierarchy, and rhythm.

---

## Use a spacing scale

Like type, spacing should come from a fixed scale. Random pixel values are a major sign of unfinished work.

A common scale based on 4px:

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  48px;
  --space-8:  64px;
  --space-9:  96px;
  --space-10: 128px;
}
```

Or based on 8px (cleaner, fewer steps):

```css
:root {
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 64px;
  --space-7: 96px;
  --space-8: 128px;
}
```

Whichever scale you pick, **use only values from it**. No `17px`. No `23px`. If you find yourself wanting a value that isn't on the scale, ask whether the scale needs another step — and add it formally, not as a one-off.

### Why a scale matters

- Visual consistency: spacings that share a system "rhyme" visually
- Easier decisions: choose between 16 and 24, not between 14, 15, 16, 17, 18…
- Easier maintenance: change a token, every spacing updates
- Easier handoff: developers don't have to guess between near-identical values

---

## Use flex and grid with `gap`

Default to `display: flex` or `display: grid` with `gap` for spacing siblings. Avoid:

- Margins between siblings (`margin-right` on every item except the last)
- Whitespace text nodes as spacers
- Empty spacer `<div>`s

```css
/* Good */
.row { display: flex; gap: var(--space-3); }

/* Bad */
.item { margin-right: 12px; }
.item:last-child { margin-right: 0; }
```

Why: `gap` is explicit, survives reordering and deletion, and works the same in flex and grid. Margins between siblings break when items are added, removed, or reordered.

Reserve inline flow (`display: inline`, no flex) for runs of text inside a sentence — `<a>`, `<strong>`, `<em>`. For laying out UI elements, always use flex or grid.

---

## Grids

Most layouts work on some kind of grid. The grid doesn't have to be visible — it just has to be consistent.

### A 12-column grid

The web default. Flexible enough for almost any layout:

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-3);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}
```

Common patterns:
- Full-width: span 12
- Two-column: span 6 / span 6
- Sidebar + content: span 3 / span 9
- Three cards: span 4 / span 4 / span 4

### Asymmetric grids

For editorial work, break the 12-column default. Try:
- **Two columns, golden ratio:** 7-col primary, 5-col secondary
- **Three columns, weighted:** 5 / 4 / 3
- **Offset:** content in 8 columns, indented 2 from left

Asymmetric layouts feel more designed than centered ones — but only when applied deliberately and consistently.

### Container queries

For component-level responsive design, use container queries instead of media queries. A card that needs to lay out differently when it's narrow vs. wide should respond to its *container*, not the viewport:

```css
.card-container { container-type: inline-size; }

.card { display: flex; flex-direction: column; }

@container (min-width: 400px) {
  .card { flex-direction: row; }
}
```

---

## Alignment

Alignment is the cheapest way to make a layout feel composed.

### Hard rule

**Every element shares an edge or center with another element.** If it doesn't, it should look intentionally offset.

If you can't draw a vertical or horizontal line connecting three or more elements, your alignment is probably off.

### Optical alignment vs. mathematical

Mathematical center is not always visually center:

- **Icons** often have visual weight on one side — adjust by 1-2px to look centered
- **Bullets and numbers** in lists often need slight optical adjustment
- **Round elements** next to square elements may need different padding
- **Typefaces with high x-height** may need extra top padding to look balanced

Trust your eye. Pull up a screenshot, squint, see if anything pops out of alignment.

### Baseline alignment

When type sits next to a UI element (icon, badge, input), align to the **type baseline**, not the bounding box. Most designs that "look slightly off" have baseline issues.

```css
.row {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
}
```

---

## Vertical rhythm

A consistent vertical spacing pattern makes a page feel composed. Pick a baseline unit (often 4 or 8px) and make every margin and padding a multiple of it.

```css
:root {
  --baseline: 8px;
}

h1 { margin-top: calc(var(--baseline) * 6); }     /* 48px */
h2 { margin-top: calc(var(--baseline) * 4); }     /* 32px */
p  { margin-bottom: calc(var(--baseline) * 2); }  /* 16px */
```

For dense interfaces, drop to a 4px baseline. For editorial work, 8px gives more air.

---

## Whitespace as a tool

The most underused design element. Whitespace:

- **Separates** related content from unrelated
- **Emphasizes** by isolating
- **Breathes** density into something readable
- **Signals confidence** — generous whitespace says "I have nothing to prove"

When in doubt, **add space, not stuff**. The temptation when something feels empty is to add an element. Usually the right move is to give what's already there more room.

### The proximity principle

Things close together look related; things far apart look separate. Use this:

- Tight spacing within a related group (label + input + helper text)
- Generous spacing between unrelated groups (one form section from the next)
- The largest spacings between top-level sections of a page

A common mistake is uniform spacing — every element 16px from its neighbor. That makes everything feel equally related, which is the same as nothing being related.

---

## Density

Pick a density and commit to it:

| Density | Padding | Line-height | Spacing | Use for |
|---|---|---|---|---|
| Generous | 24-32px | 1.6 | 32-48 | Marketing, editorial |
| Balanced | 16-24px | 1.5 | 16-32 | Most product UI |
| Compact | 8-12px | 1.4 | 8-16 | Dashboards, tables, dev tools |

Switching density mid-design is a giveaway that the system wasn't planned. A compact dashboard with a marketing-density modal feels broken.

---

## Hierarchy through layout

Layout reinforces type and color hierarchy. Three tools:

1. **Size and proportion.** The most important section is bigger. Hero takes 60% of the viewport. Cards have visual weight proportional to importance.
2. **Position.** Top reads first. In LTR cultures, left reads before right. Use this for primary content.
3. **Isolation.** A single element surrounded by whitespace reads as more important than a cluster.

A well-laid-out page tells the viewer **where to look first** without them having to think about it.

---

## Common layout patterns

### Centered hero

The default web layout. Works because it's familiar and lets type and imagery carry the weight.

- Headline centered, max-width 800-900px
- Subhead centered, max-width 600-700px
- CTA centered below
- Generous top and bottom padding (96-128px)

### Asymmetric hero

More designed-feeling. Headline and CTA on the left (4-7 columns), image or product shot on the right (5-8 columns). Vertically centered.

### Full-bleed

Image or color fills the entire viewport. Text overlaid with high contrast or pulled into a contained block. Use for moments of drama, not for every section.

### Two-column content

Heading on the left (3-4 columns), body on the right (8-9 columns). Editorial pattern. Great for "About," "FAQ," documentation.

### Card grid

3-4 cards per row at desktop, 1-2 at mobile. Equal-height cards (use `display: grid` for true equal heights). Consistent padding and aspect ratios inside each card.

### Sidebar + content

Persistent navigation on one side, content on the other. Common in product UI. Use sticky positioning so the sidebar stays put on scroll.

### Holy grail (header + sidebar + content + sidebar + footer)

Old, but still a workhorse for dashboards and admin UIs. CSS grid handles it cleanly:

```css
.app {
  display: grid;
  grid-template-areas:
    "header header header"
    "left content right"
    "footer footer footer";
  grid-template-columns: 240px 1fr 320px;
  grid-template-rows: 64px 1fr 48px;
  min-height: 100vh;
}
```

---

## Layout for content density

For tables, lists, dashboards — anything with lots of data:

- **Use horizontal lines, not vertical, for table separation.** Vertical lines create visual noise.
- **Align numbers right**, names left, dates left, status with a leading dot or pill.
- **Consistent row height.** Variable-height rows scan poorly.
- **Tabular numerals.** Always.
- **Reasonable density.** 32-40px row height is dense; 48-56px is comfortable; 64px+ is luxurious.
- **Sticky headers** so column meaning is always visible while scrolling.

---

## Layout for content cards

When laying out a card or content tile:

- Consistent **padding** — the same inset on all sides, usually 16-24px
- Consistent **internal spacing** — same gap between elements within every card
- Consistent **aspect ratios** for any imagery
- A clear **hierarchy** within the card — one element is biggest, one is the action
- Avoid "centered everything" — left-align is almost always better for cards with mixed-length content

---

## Margins, padding, and the viewport

At the page level:

- **Side gutters** on mobile: 16-20px
- **Side gutters** on tablet: 32-48px
- **Side gutters** on desktop: 48-96px, or use a max-width
- **Top/bottom section padding** scales with viewport — 64px mobile, 96px tablet, 128px desktop

Don't let content touch the viewport edge on any device. Air on all sides.

---

## Layout debugging

When a layout feels off:

- Are all spacings from the scale?
- Are siblings using `gap`, not margins?
- Is alignment consistent? (Draw imaginary lines through edges)
- Is there one clear hierarchy — what's biggest, what's first?
- Is the density consistent across the design?
- Is whitespace doing work, or just sitting?
- Does it hold at the smallest target viewport?
- Does it hold at 200% zoom?
- Is there one section that should be the "moment" — and does it feel that way?

---

*See also: [04 — Typography](./04-typography.md) for vertical rhythm, [17 — Responsive & Device-Aware Design](./17-responsive-design.md) for breakpoint strategy*
