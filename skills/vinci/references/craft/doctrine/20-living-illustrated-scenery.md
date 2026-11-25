# 20 — Living Illustrated Scenery

Use this when the scene itself is part of the site's identity and must survive theme changes, responsive recomposition, or layered motion. Start with a full-fidelity still under real UI. Its subject, lighting, texture, and quiet areas need to work at rest. [Flagship websites](../../flagship-websites.md) covers how to choose this direction.

## 1. Establish a master drawing and coordinate space

- Write an art-direction contract for subject, mood, medium, contrast, protected reading areas, depth, and the initial and optional transfer budgets. Generate or commission a clean master with no UI or moving figures. For an existing scene, capture it at a canonical viewport with those elements hidden and animations frozen. Record the viewport, art origin, rendered size, crop, and layer boundaries.
- Generate each lighting variant as a redraw of the exact composition. Name protected landmarks and changes permitted by the brief. Prompts to improve detail or sharpen an entire illustration can move or remove structures. Inspect both the full drawing and landmark crops. A bridge can remain while the viaduct and horizon behind it disappear.
- Where layers, themes, or film must meet, fit scale and translation using stable edges or landmarks. For image alignment, sweep a small plausible scale range and estimate translation with phase correlation over structural edge maps. Inspect residuals at separated landmarks and at seams, since a good global correlation can hide a local redraw. Set tolerance in rendered pixels based on when the jump becomes visible. Reject variants with local drift or distortion that exceeds that tolerance. Recheck the final composite at the target sizes.

## 2. Composite for the viewport

- Split layers by what needs to move or be fetched separately. A simple split is a small sky, a feathered skyline band, an opaque foreground, and independently composed moving figures. Preserve feather masks and coordinate boundaries across registered twins. Match the sky at the feather through the full responsive range. If the skyline includes baked sky, place sky objects meant to remain visible at the appropriate depth above it.
- Store art geometry relative to a shared art box. Keep semantic content and controls in normal layout with a legible background. When a scene moves, calculate the coverage required at the extremes of scroll, pointer tilt, and viewport crop. Extend only the needed margins. Give the generator padded references, measure the fit against the master, and composite the new margins onto untouched art. Feather the junction and check all edges and rows. Clamp travel if the available art cannot cover it.
- Compose for phone independently when the crop loses important art or quiet space under the UI. Use a phone reference and register its own theme variants. Recompose the product UI too, so it remains readable and operable. Inspect the idle, maximum travel, and bottom-of-scroll frames in every supported theme.

## 3. Give the scene a rhythm

Use a small number of motions at separate depths. Prefer restrained transforms or opacity over continuous background video. Decorative motion can support a brief for a living place, so long as the reading layer stays stable. Use a still when idle animation brings little value or consumes too much of the budget.

- Make sprite actors against one character sheet. Ask for one action with stable outlines and positions except where the action requires movement. Inspect frame sheets for identity changes, baked halos, and jitter. Crop every pose to the union of the animation's bounds and keep a shared anchor. Separate turn and travel transforms from pose timing.
- Set pose timing and holds deliberately. For a calm action, try roughly 300 ms per pose followed by a longer rest, then judge in context. Offset repeated actors in phase and tempo. Inspect the first, last, and hold frames as well as a complete live cycle.
- For an equal-cell horizontal strip of N poses, size the background to N times the element width. With percentage positioning the last pose is at 100%. For a repeating `steps(N, end)` animation, use an exclusive end of `100 × N / (N − 1)%` for N greater than one, so the last sampled step lands at 100%. A retained end state should land on a valid cell, for example with explicit stepped pose keyframes. Check the wrap and pause pose.

## 4. Reserve film for a transition that earns it

If a brief benefits from a cinematic transition, use a deliberate interaction such as switching theme. First implement theme switching with instant or brief still-layer changes so it works without the film.

1. Generate with locked camera and start and end plates. Review a contact sheet across the middle for unwanted detail, palette drift, or deformation. Measure both endpoint fits and inspect the handoff into the rendered stills. Consider both directions if the interaction is reversible and prioritize the first switch from the actual default theme.
2. Place the film in the same art coordinates as the reference capture. Layer it above the static painting and under independent foreground actors as appropriate. Feather into the sky if needed and use matching outgoing and incoming layers underneath. End on the crisp destination still.
3. Keep film off the initial request path. Where budget permits, warm only the likely next clip after the critical assets. Play only when the user acts, the clip is ready for immediate playback, the document is visible, motion is enabled, and the viewport and scroll state preserve registration. Check readiness and handle playback rejection. If any condition fails, commit the destination theme immediately and use the still path, without waiting for the network. Use an immediate change for reduced motion.
4. Keep the theme control responsive through rapid reversals and runtime changes to visibility, motion preference, or geometry. Cancel obsolete playback and remove its overlay so a stale completion cannot overwrite the current theme. Pause or stop actual media explicitly when hidden or paused. Check the no-video path at widths or scroll positions where the film would show its edges.

## 5. Inspect the shipped composite

Use [visual validation](../../visual-validation.md) with a matrix for supported themes, phone through wide desktop, top and end of travel, and settled and active states. Freeze repeatable frames for comparison, then run the interaction at full speed. Check masked seams, redraw landmarks, sprite bounds, text contrast over the brightest and darkest frames, and first and last video frames against their stills. A film frame sheet should include the click, active transition, and handoff. When diagnosis needs it, log media time, readiness, and playback rate beside the captures.

Verify wide ready playback, cold cache or failed playback, narrow layout, scrolled position, rapid toggles, hidden tab, pause, and reduced motion. Measure initial bytes separately from idle and interaction bytes. A transition whose effect disappears behind the reading layer, whose registration cannot be held, or whose cost exceeds the brief should ship as a still-layer switch.

See [Imagery](08-imagery-and-icons.md), [Motion](09-motion-and-animation.md), and [Responsive design](17-responsive-design.md) for the underlying craft.
