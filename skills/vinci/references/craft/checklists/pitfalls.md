# Common Pitfalls — Fast Scan

If a critique lands and you can't pinpoint why, scan this. The answer is usually one of these.

Full chapter: `doctrine/18-common-pitfalls.md`.

---

## Visual tells

| Tell | Fix |
|---|---|
| Default Inter/Roboto/Arial with no character | Pick a distinctive face, or commit to a default for a stated reason |
| Purple-pink gradient hero | Solid color + stronger type |
| Card with 4px left-border accent stripe (2020 SaaS look) | Hierarchy via size and type, not decorative borders |
| Emoji as icons (🚀 💡 ✨) | Real icon set; reserve emoji for casual contexts |
| Hand-drawn SVG of "team collaboration" | Real illustration or admitted placeholder |
| Three stats in a row with no source | Cite sources or cut |
| Everything centered | Left-align by default; center only for hero/dialog/decoration |
| 17px, 23px, 41px values | Every value from a scale |
| Fake screenshots with mock data labeled "12,486 users" | Real data or admit it's a placeholder |
| Pure black on pure white | Off-black on off-white |
| Same density everywhere with no rhythm | Variety should *mean* something |

## Copy tells

| Tell | Fix |
|---|---|
| Lorem ipsum | Real copy, plausible placeholder |
| "Headline goes here" / "Title here" | Specific headlines, even if rewritten later |
| "Welcome to [Product]" / "Let's get started" | Specific welcome that says what the product does |
| "Empowering teams to do their best work" on settings | Functional copy in functional contexts |
| "Click here" / "Learn more" | Verbs that describe destination |
| "Coming soon" | Actual date or omit |
| Em-dashes everywhere | Comma/colon/semicolon or restructure |
| Throat-clearing: "Please," "kindly," "very," "just" | Cut it |
| Title Case For Buttons | Sentence case for UI; Title Case only for proper headlines |

## Layout tells

| Tell | Fix |
|---|---|
| Margins instead of gaps for siblings | `gap` on flex/grid |
| Elements that share no edge or center | Snap to a grid line |
| Random vertical rhythm | Spacing from a scale, consistent across sections |
| Three columns just because the canvas is wide | Hierarchy first; columns only when content earns them |
| Everything full-bleed | Variation: contained + full-bleed used intentionally |

## Motion tells

| Tell | Fix |
|---|---|
| Motion for decoration | Cut it; motion must explain a state change |
| Same easing for entering and exiting | ease-out enter, ease-in exit |
| Too-slow durations | Try halving |
| `prefers-reduced-motion` not respected | Wrap in `@media (prefers-reduced-motion: reduce) { * { animation: none; transition: none; } }` |
| Spinning logos, parallax-everywhere | Restraint; one motion language |

## Charts and data

| Tell | Fix |
|---|---|
| 3D pie charts | Bar or single-number callout |
| Chart title is the metric ("Revenue") not the takeaway ("Revenue 3x since launch") | Rewrite title to state the takeaway |
| Axis starts arbitrarily to exaggerate | Zero-baseline for bars; honest scales |
| Five+ series, no legend | Pick 2-3 series; legend or direct label |

## States

| Tell | Fix |
|---|---|
| Only happy-path designed | Add empty / loading / error |
| Empty state = "No data" | Empty state = "What you can do next" |
| Loading = spinner only | Skeleton screens; predictive layout |
| Error = "Something went wrong" | Specific error with next action |
| No focus ring | Visible focus ring on every interactive element |

---

## Quick gut check

If the work looks like it could be from any AI demo:
- Restraint missing → cut elements
- One distinctive choice missing → pick a face, a color, a layout idiom that commits
- Specifics missing → real content, real numbers, real names
