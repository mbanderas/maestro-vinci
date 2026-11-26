# Flagship websites

Use for public websites and branded web experiences where originality and execution are part of the brief. The aim is a memorable idea that makes the subject clearer, carried through the typography, composition, art, and behavior. Choose the lightest medium that can deliver it. A remarkable still composition can carry the whole site.

## Set the direction in high fidelity

1. Identify what this particular organization makes, does, knows, or stands for that another organization cannot credibly claim. Translate that into a visual or interaction premise. A demo can show a real workflow. An editorial site can build its composition around its reporting or archive. An illustration can make a specific place or process legible.
2. Write a short art-direction contract with the audience, desired feeling, visual medium, where the content needs quiet, explicit exclusions, and any legibility or performance budgets. Record reviewer decisions as the affected choice, the reason, and the implication for the next pass. Carry prior approvals forward until the brief changes.
3. Use scaffolds to settle structure. To judge visual direction, put one representative section into a high-fidelity comp with real headline, action, type, and site-specific art or demonstration. Compare genuinely different premises at the same fidelity when the direction is open. Use a working prototype or timed frames if motion carries the idea. Check at phone size before extending the direction across the site.
4. If a reviewer finds the work boring, ask what the visitor learns from the main figure. Replace generic mood imagery or abstract particles with a specific subject, useful behavior, or a stronger composition. If it feels cluttered, cut duplicated explanations and actions, move secondary detail deeper, and increase the size of essential text. Evaluate these changes in the browser at the intended reading size.

## Study references as evidence

When the user supplies a visual or motion reference, examine the whole experience where accessible. Record what is directly visible, what remains uncertain, and the relationship worth adapting to the brief. For a page, map the sequence of sections, changes in density and scale, transitions between reading and interaction, and where the main action appears. Study lower-page rhythm as closely as the hero. If motion matters, inspect the trigger, start, peak, settled state, repeat, and exit. A still can establish appearance but cannot establish timing or interactive behavior. For video, extract representative frames around meaningful events when tools permit, and note the source and timestamps.

Translate observations into an original direction tied to the current subject. For example, a reference's alternating pace could become a sequence of a large product demonstration, a compact explanation, and a detailed case study. Choose the actual content and visual language from the brief. Do not reuse a source's recognizable composition, artwork, copy, or combination of signature decisions without the necessary rights. If the reference is inaccessible, mark the observation unknown and proceed from available project evidence.

Before settling a reference-inspired direction, compare the candidate and its source across wording, imagery, section sequence, layout, palette, and signature behavior. Look especially for the same distinctive combination appearing together. If it is too close, change the underlying premise and composition, then compare again. This is a design judgment supported by visible evidence, not a legal determination.

## Compose a whole experience

Before polishing components, sketch the page as a sequence of content beats. Give each section a distinct job and choose its scale, density, media, and transition accordingly. Check the sequence for repeated section heights, identical card grids, redundant labels, and the same heading alignment appearing by default. Repetition can create useful rhythm when it reflects the content. Vary it where the story or task changes.

For open-ended direction work, explore meaningfully different ways of expressing the same brief before committing. Compare the proposed visual premise and its consequences for layout, imagery, typography, and behavior at the same level of fidelity. Test whether the idea remains identifiable if the logo and product name are temporarily hidden. If it could belong to any peer, strengthen the subject-specific content or the design's treatment of it. Keep a conventional layout where it best serves the task.

When a custom illustration system suits the brief, define a compact style specification from its purpose and subject: silhouette, proportions, line and edge treatment, palette roles, light, texture, composition, and how detail behaves at small sizes. Make a small set of different subjects using the same rules, inspect them together, and refine the rules if they feel inconsistent or interchangeable. Check anatomy, contact points, visual artifacts, and legibility at the actual display size. When generated artwork cannot render exact words reliably, reserve space for them and set the text separately. Treat any existing references as evidence for craft, with their identities and assets protected.

For a signature interaction, specify its purpose, trigger, changing elements, timing or physical behavior, stopping condition, and the final visible state. Define keyboard, touch, reduced-motion, and static equivalents as applicable. Select implementation techniques after the behavior is understood, and verify the interaction in context so it supports reading and does not obstruct the action.

## Design one memorable moment

- **Show the product when behavior is the story.** Use recognizable actors and objects, a concrete constraint, and a visible outcome. An illustrative sequence for a scheduling product might show two people reaching for the same opening, a conflict, and an alternative becoming available. Choose the events from verified capabilities. Label a simulated scene clearly, summarize its behavior in a caption or equivalent, and keep incidental synthetic values out of factual copy, metadata, and structured data. Preserve access to any state essential to the explanation and avoid announcing every animation tick.
- **Make artwork carry meaning.** Give each plate a job in the page narrative. Use one medium and coherent rules for line, texture, palette, and light across the set. Supply approved style anchors during generation. Inspect at full size for accidental marks, repeated forms, and broken details. Use separate art-directed theme assets when the light actually changes. Check overlays against each theme's landmarks and confirm in the network trace which assets load. Confirm usage rights before shipping production imagery.
- **Integrate art and UI when they share a cause.** If an event in a figure also affects the artwork, drive both from the same time and state. Generate the plate without the moving element, measure the overlay anchor in the plate's coordinates, and match the overlay's crop and sizing to the plate. A few vector strokes over a clean still can stay sharper and lighter than a video redraw. Use a decorative overlay only where the underlying content and its static explanation stand on their own.
- **Protect the reading layer.** Use contrast, scale, and whitespace to give the headline and action a stable home. Set rendered body and figure-label floors at the reading distance and widths that matter. For an editorial site, 17–18 CSS px for running text is a starting point to test against the face and actual content. Simplify a complex figure into a phone composition with fewer simultaneous details while keeping its essential behavior. If font loading shifts a tight composition, measure the fallback and match its metrics, then test cold and cached loads. At wide widths use extra space only if it reinforces the composition without intruding on the content.

## Make motion readable

Start from a coherent settled frame available at first paint. Keep above-the-fold content and focus targets visible. For repeating demonstrations, give the outcome time to read and check the wrap between cycles. Pause work outside the viewport and while the document is hidden. Account for reduced motion and provide a visible pause or stop control for persistent motion where needed. Keep an equivalent readable state on every path. When the brief includes a theme or pause preference, apply the saved state on first paint and test the default first visit as well.

## Verify the idea in the browser

Follow [visual validation](visual-validation.md) and [interface evaluation](interface-evaluation.md). For each applicable row, capture evidence that connects the decision to the rendered result.

| Check | Evidence |
| --- | --- |
| Originality and purpose | Name the brief-derived decision and show where it affects the actual composition or interaction. Check the headline, figure, and primary action together in a still. |
| Responsive composition | Inspect a narrow phone, intermediate width, and wide desktop in supported themes. Check labels, wraps, controls, overlaps, fonts before and after loading, and the still or no-script path when relevant. |
| Choreography | Capture named frames at rest, at the triggering event, near the peak, and after settle or wrap. Use a deterministic clock or state controls in a local or preview-only harness where useful. Also exercise real interactions with timing unfrozen. |
| Motion controls | Exercise keyboard, reduced motion, pause, and a hidden tab. Verify that the resting figure still explains the subject and no control gets blocked by a transition. |
| Cost | Measure initial bytes by asset and check that optional effects stay off the critical path. Compare against the project baseline or an agreed budget on a representative phone and network. |
| Share cards | Where in scope, render at actual feed size, around 300 CSS px wide as a starting check. Read the title and inspect crops. Give distinct pages distinct cards when their stories differ. |

Apply the existing hard gates first. For work aimed at the exceptional tier, use the existing 95–100 band only when the rendered evidence supports it. Give special scrutiny to distinctiveness, typography, and coherence across still, motion, and phone. Identify the exact weakness if the result falls short. For a motion-heavy illustration, use the additional geometry and playback checks in [Living illustrated scenery](craft/doctrine/20-living-illustrated-scenery.md).

Turn confirmed recurring failures into focused checks when the repo has a suitable harness. Good candidates are labels overlapping the figure, a layout shift on font load, first-paint theme mismatch, simulated values in factual metadata, and a visible jump at the loop boundary.
