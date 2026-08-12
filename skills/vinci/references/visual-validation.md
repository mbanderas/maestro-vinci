# Visual validation

Use this as a non-skippable pre-handoff pass when a task authors rendered pixels, including a web page, interface mock, deck, report source, standalone HTML artifact, or generated raster asset.

## Evidence rule

Source inspection establishes intent, not rendered behavior. A visual artifact is not validated until the actual pixels have been captured and inspected.

Run this loop:

`render -> capture -> inspect -> repair -> re-render`

If no safe render path is available, record `not-run` with the exact reason. Do not infer a pass from source code.

## Choose a safe render path

- For a local artifact, use the target repository's existing render or preview tooling. Bind preview servers to localhost.
- For a live or authenticated surface, use an available browser-control tool that preserves the user's existing session and stays inside the named origin.
- For decks and paginated documents, render every slide or page to an inspectable image.
- Do not navigate to an unrequested external endpoint during validation.

Record the tool, input, viewport or page size, URL or file, and capture paths.

## Capture complete evidence

Capture every required viewport, mode, and state. At minimum for a responsive web surface, cover a narrow phone and the primary desktop width. Add intermediate widths, dark mode, localization, reduced motion, or state-specific captures when the brief or system supports them.

Use:

- one full-page or full-frame capture per required state;
- tight crops for text, controls, or regions that need exact inspection;
- one image per slide or document page;
- new filenames after every repair cycle to avoid stale evidence.

Inspect every capture. Sampling is not a complete pass.

## Inspect the rendered result

Check:

- overflow, clipping, unintended scrolling, and off-canvas content;
- sibling spacing, alignment, optical balance, and repeated-item consistency;
- content-shaped geometry and unearned decorative containers;
- dead space caused by fixed height, minimum height, or aspect-ratio constraints;
- contrast over actual gradients, images, overlays, and disabled surfaces;
- unapproved colors or effects not traceable to project tokens or direction;
- wrapping, truncation, localization expansion, and terminal runts;
- hierarchy, reading order, navigation, labels, and primary action clarity;
- focus visibility, keyboard path, touch targets, reduced motion, and 200 percent zoom;
- empty, loading, error, disabled, success, and long-content behavior;
- broken images, missing fonts, console errors, and warnings;
- whether each distinctive visual choice still serves the brief.

Apply the container-shape, stage-occupancy, and terminal-runt procedures in `design-operations.md` where relevant.

## Repair and close the loop

1. Rank confirmed defects by user impact and reach.
2. Fix at the highest safe reuse level: token before component, component before instance.
3. Re-render to a new capture path.
4. Inspect the changed region and the full composition again.
5. Stop only when no confirmed defect remains or the task's explicit iteration limit is reached.

Do not report a defect as fixed until the new pixels show that it is gone. Carry unresolved issues as residuals.

## Record

Write a compact validation record:

- `render_path`: tool and rendered input;
- `captures[]`: path, viewport or page, mode, and state;
- `findings[]`: defect type, location, severity, status, and repair cycle;
- `cycles`: completed repair cycles;
- `verdict`: `clean`, `residuals`, or `not-run`;
- `residuals[]`: exact remaining defect or evidence gap.

A `clean` verdict requires inspected captures and zero residuals.
