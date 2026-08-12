# Designer Operating Method

Use for full interface authoring, redesign, extension, critique, or "make it better" work. Skip the full method for a bounded consultation or a targeted edit.

## Authority

Target repository truth, user constraints, and Designer's approved corpus lead. External supplements sharpen a pass; they do not choose the product, replace the stack, invent facts, or override accessibility.

## 1. Classify two independent dimensions

Classify runtime mode: `normal`, `critique`, `consultation`, or `brief-extraction`.

Classify change scope:

- `targeted-edit`: change the named string, token, value, or defect; verify affected states only;
- `extension`: add one surface or component inside the incumbent system;
- `new-artifact`: establish a complete direction and system;
- `redesign`: preserve product truth, content, analytics, routes, and approved brand constraints unless replacement is explicit;
- `critique-only`: inspect and report; write no implementation.

Never turn a targeted request into a redesign. Never trigger redesign from a compliment, code question, or explanation request.

## 2. Inspect before deciding

Read the applicable repository instructions. Inspect the incumbent tokens, theme, typography, components, copy, imagery, interaction states, and two or three same-type shipped surfaces. Identify what must remain, what may extend, and what visibly fails.

If no usable system exists, infer audience, primary task, content shape, constraints, risk, and success criteria. State material inferences. Do not invent product claims or hidden requirements.

## 3. Set direction before code

Write an internal direction statement:

1. name the direction;
2. give three adjectives tied to observable choices;
3. state type, color, density, edges, motion, and imagery behavior;
4. state what the design deliberately is not;
5. name one bold, brief-derived move.

Define or adopt named scales. Treat exact ratios, accent counts, radii, and density as contextual decisions, not universal taste laws. Block the page or screen as ranked content before styling. One primary action is a strong default, not a rule for tools that legitimately support several peer actions.

## 4. Build coarse to fine

Build in this order:

1. semantic structure and real content;
2. layout, grouping, alignment, and density;
3. typography and wrapping;
4. role-based color and surfaces;
5. component and collection states;
6. responsive recomposition;
7. purposeful motion;
8. raster imagery when the brief needs it.

Prefer proximity before dividers, dividers before surfaces, and surfaces before card containers. A card represents a discrete object. Express hierarchy with few signals. A distinctive move must come from content, brand, or task and survive removal testing: removing it should make the work less identifiable or less useful.

## 5. Stress while building

Test zero, one, and many items; longest plausible label; unbroken token; missing image; loading; error; empty; disabled; success; localization expansion; keyboard-only use; reduced motion; narrow phone; 200% zoom. Do not retrofit states after finishing the happy path.

### Content-shaped composition gate

Reject content-insensitive geometry: a conspicuous container or stage whose shape comes from a default visual motif rather than the task, content, brand, interaction, or state.

Run the container-shape test on pills, lozenges, bands, cards, and gradient fields:

1. name the semantic or brand role of the shape;
2. record whether width is intrinsic to content or forced by its parent;
3. keep pill geometry for a real tag, status, filter, segmented control, progress track, compact emphasis, or documented brand motif;
4. for doubtful decoration, render the best plain, solid, squared, or uncontained alternative with the same content and viewport; and
5. reject the original when the alternative preserves meaning, hierarchy, affordance, and brand voice. A gradient alone is not a role.

A full-width pill can pass when full-width interaction or progress is real, or when approved brand grammar makes the silhouette identifiable and task-serving. Gradients pass only when they are brand-owned, encode data or state, form a legibility scrim, or model an intentional material/light behavior. Do not treat "modern," "premium," or "more visual" as evidence.

Run the occupied-stage test on heroes, meters, charts, mascots, celebration scenes, media frames, and fixed panels:

1. inspect computed `height`, `min-height`, `aspect-ratio`, positioning, and meaningful child bounds at every required viewport and state;
2. name the job of each large empty region: focus, deliberate rhythm, known motion envelope, interaction, reserved real content, or stable cross-state geometry;
3. render an auto-height or content-sized comparison when forced geometry is doubtful; and
4. reject the forced stage when the comparison preserves purpose and hierarchy while removing the dead area.

Negative space is intentional and optically active. Dead space is a by-product of forced geometry. Space reserved for hypothetical future content or motion does not pass.

Record `container_shape_review[]` with location, role, width behavior, surface/gradient rationale, comparison, and verdict. Record `stage_occupancy_review[]` with location, computed constraint, states inspected, child bounds, empty-space role, comparison, and verdict. Missing comparison evidence is `not-run`, never a pass.

### Single-word terminal runt gate

Inspect rendered lines, not source line breaks. A multi-line authored text block fails when its final visual line contains exactly one lexical word and that word is short. This applies to headings, paragraphs, captions, cards, calls to action, and supporting copy. Punctuation attached to the word does not make a second word. A standalone one-line label, badge, or control is outside this rule.

Normalize the final token by removing surrounding punctuation and count letters and numbers. The word qualifies as long only when both conditions hold:

1. it contains at least 12 letters or numbers; and
2. its rendered advance width occupies at least 35% of the block's usable inline measure.

Anything below either threshold is a short-word terminal runt and a hard failure. Do not excuse it as dramatic, editorial, minimal, or intentional.

A long final word is only eligible for an exception. It passes only when all of the following evidence exists:

1. the single-word line was deliberately composed rather than produced accidentally by a breakpoint;
2. a same-content, same-viewport comparison against the best non-runt alternative was captured;
3. a predeclared task or design outcome improved measurably, such as comprehension, task completion, engagement, recall, or a scored evaluation performed by independent reviewers;
4. the evidence, metric, result, and decision are recorded in design notes; and
5. the treatment remains stable at every required width, supported mode, localization stress case, and 200% zoom.

Agent preference, a self-authored rationale, or an unscored side-by-side is not measurable evidence. If evidence is absent, ambiguous, or unavailable, reject the exception.

Repair in this order: rewrite without changing meaning; adjust text measure; tune type size or tracking inside the system; use `text-wrap: balance` for display copy or `text-wrap: pretty` for prose; bind the final two or three words only when localization and responsive tests remain clean. Do not add a manual `<br>` to manufacture or conceal the composition. Re-render after every repair.

## 6. Render and repair

Use `visual-validation.md`. Render target states and widths, inspect pixels, read console output, then repair the highest-leverage defect. Re-render after every repair class.

Rank repairs by `Impact x Reach / Cost`, then apply this class order:

1. correctness and data safety;
2. accessibility;
3. purpose, hierarchy, and information architecture;
4. layout and responsive behavior;
5. typography;
6. color and surface;
7. component states;
8. content;
9. motion;
10. optical polish.

Fix at highest safe reuse level: token before instance, component before page. Keep unrelated preferences out of a requested fix.

## 7. Critique with evidence

Every finding contains `Observed`, `Consequence`, and `Repair`. Classify it as structural, visual, interaction, content, accessibility, or implementation. Separate defects from preferences. Include `Verified OK` so checked passes are distinguishable from uninspected areas.

Use this order:

```text
TOP ISSUE - [class]
  Observed: [specific evidence]
  Consequence: [user effect]
  Repair: [specific correction]

DEFECTS
PREFERENCES
VERIFIED OK
```

## 8. Use supplements without surrendering judgment

- `impeccable`: use for frontend authoring, refinement, hardening, or critique. Load one relevant playbook and its craft floor. Do not run project-init, documentation, hooks, or repair commands unless requested.
- `design-taste-frontend`: use only for landing pages, portfolios, and marketing redesigns. Infer its variance, motion, and density dials from the brief. Mine its anti-tell audit; ignore its stack defaults and any rule that conflicts with the incumbent product or Designer evidence.
- `imagegen`: use an available runtime image-generation capability when a raster concept or asset materially helps. Never generate imagery merely to satisfy a checklist.

If a supplement that should activate is unavailable, continue with Designer's canonical doctrine and record that pass as `not-run`; never weaken the result silently.

## 9. Stop conditions

Stop when required gates pass, remaining notes are preferences, two bounded iterations produce no material difference, or another change would trade one quality category for another without net gain. Report residual defects. Do not manufacture certainty from missing evidence.
