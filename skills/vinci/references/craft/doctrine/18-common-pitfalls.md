# 18 — Common Pitfalls

A field guide to the patterns that mark work as "generated" instead of "designed." Most of these are repeats of points from other chapters, gathered here as a single reference to scan against your own work.

If a critique of your design lands and you can't pinpoint why, scan this chapter. The answer is usually one of these.

---

## Visual giveaways

### Default typefaces with no character

- **Inter, Roboto, Arial, system stacks** as the primary type
- Reading as "didn't choose a font," not as "chose this font"
- **Fix:** pick a distinctive face, or commit explicitly to one of these for a stated reason (utility, neutrality, performance)

### Gradient backgrounds doing the heavy lifting

- Purple-to-pink gradients on hero sections
- "Make it feel modern" via gradient fills
- Gradients that conflict with overlaid content
- **Fix:** solid color + stronger type. Reserve gradients for brand moments where they earn their place.

### Rounded cards with left-border accent stripes

- The 2020 SaaS landing page tell
- "Important callout" boxes with a 4px colored left border
- **Fix:** hierarchy through size and type, not via decorative borders

### Emoji as iconography

- 🚀 for "fast"
- 💡 for "idea"
- ✨ for "magic"
- **Fix:** real icons from a real icon set. Reserve emoji for genuinely casual contexts.

### Hand-drawn SVG illustrations of abstract concepts

- A circle and three lines representing "team collaboration"
- Geometric shapes pretending to be a product UI
- Faces drawn from a few curves
- **Fix:** placeholders that admit they're placeholders. Real illustration when you can.

### Three stats in a row with no source

- "95% satisfaction"
- "10x faster"
- "$2.3B saved"
- Numbers that exist to fill a row, not to prove a point
- **Fix:** cite sources, or cut. If a stat doesn't have evidence, it's noise.

### Centered everything

- Every section vertically centered
- Every card centered
- Every block of text centered
- **Fix:** left-align by default. Center only when there's a specific reason (hero moments, dialogs, single-element decorations).

### One-off pixel values

- 17px padding
- 23px gap
- 41px button height
- **Fix:** every value comes from a scale. If no scale value works, extend the scale formally.

### "Live preview" filler

- Fake screenshots of fake products
- Mock dashboards with mock data labeled "12,486 users"
- A made-up testimonial from "Sarah, Designer at Acme Co"
- **Fix:** real screenshots, real data, real quotes. Or admit it's a placeholder.

---

## Copy giveaways

### Lorem ipsum

- The instant tell of an unfinished design
- **Fix:** real copy. Plausible placeholder copy. Anything but lorem.

### "Headline goes here" / "Title here"

- A literal placeholder mistaken for a design choice
- **Fix:** write specific headlines, even if you know they'll be replaced.

### Generic onboarding

- "Welcome to [Product]"
- "Let's get started"
- "Tell us about yourself"
- **Fix:** specific welcome that says what the product *does*, not just that it exists.

### Marketing-speak in product UI

- "Empowering teams to do their best work" on a settings page
- "Where great work happens" in a navigation menu
- **Fix:** functional copy in functional contexts. Save the marketing voice for marketing surfaces.

### "Click here" / "Learn more"

- Vague link text that fails accessibility and tells nothing
- **Fix:** descriptive links ("Read the documentation," "See pricing")

### "Coming soon"

- Announces that the design isn't done
- **Fix:** either ship the feature or hide the placeholder.

### Title Case Everywhere

- "Add a New Project"
- "View All Items"
- "Manage Your Settings"
- Reads as marketing-y in product contexts
- **Fix:** sentence case for most UI ("Add a new project")

### All caps as emphasis

- "URGENT" labels in red
- "NEW" badges that shout
- "FREE TRIAL" CTAs
- Reads as shouting; loses impact through overuse
- **Fix:** small all-caps with letter-spacing for labels; sentence case for everything else.

---

## Layout giveaways

### Every section the same height

- Eight sections, all 100vh
- Every grid row equal weight
- Total visual monotony
- **Fix:** vary section weights based on importance. Hero takes more; supporting sections take less.

### Equal-weight content

- Every element on the page shouting for attention
- No clear "look here first"
- **Fix:** establish hierarchy through size and contrast. One thing per section is the most important.

### Uniform spacing everywhere

- Every element 16px from its neighbor
- No grouping into related clusters
- Everything reads as equally related to everything else
- **Fix:** use proximity intentionally. Tight within groups, loose between.

### Heavy borders on everything

- 1px borders separating every card
- Vertical dividers in tables
- Outline boxes around inputs
- **Fix:** use whitespace and subtle backgrounds for separation. Hairlines (0.5px or semi-transparent) when borders are needed.

### Empty hero sections padded with stuff

- Three feature cards added to fill the page
- A testimonial added because the page felt short
- An FAQ section because "every landing page has FAQ"
- **Fix:** don't pad. If the page feels short, it might be the right length. If it feels empty, fix the proportions.

### Sidebars that don't collapse

- 320px sidebar on a 768px tablet
- Persistent nav that swallows half the viewport
- **Fix:** sidebars collapse to drawers or icons at narrow widths.

### Centered hero across the full width

- Headline + subhead + CTA all centered
- Stretches edge to edge on wide screens
- Looks like every other web page
- **Fix:** asymmetric heroes. Off-center compositions. Max-widths on text blocks.

### Stretched decorative pills

- A badge, chip, or lozenge expanded to `width: 100%` because the parent allows it
- A generic gradient and extreme radius supplying all of the visual interest
- Container silhouette implying a control, status, or progress track when the content has no such role
- **Why it fails:** this is over-containerization and content-insensitive geometry. The shape comes from a reusable style motif, not the task, content, brand, or interaction.
- **Fix:** name the semantic role first. Keep real tags, statuses, filters, segmented controls, progress tracks, and compact emphasis intrinsic to their content. For ordinary grouping, use alignment, proximity, a flat field, or no container. A full-width pill must earn its width through function or documented brand grammar; a gradient does not make it distinctive.

### Oversized fixed stages with dead space

- A meter, mascot, chart, or celebration object centered inside a fixed or minimum-height panel far larger than its content
- Empty background below or around the object caused by `height`, `min-height`, `100vh`, or a rigid aspect ratio
- Space reserved for motion, content, or states that do not exist in the delivered experience
- **Why it fails:** this is an unearned stage and a content-to-container mismatch. Intentional negative space focuses or sequences attention; dead space is leftover geometry with no observable job.
- **Fix:** inspect every required viewport and state. Size the stage from content unless blank area is needed for a known motion envelope, stable cross-state geometry, interaction, or a deliberate compositional relationship. Compare against an auto-height/content-sized version. If purpose and hierarchy survive while the dead area disappears, the forced stage fails.

---

## Color giveaways

### Pure black on pure white

- `#000` text on `#fff` background
- Maximum contrast, also maximum eye strain
- Reads as "didn't pick a color"
- **Fix:** off-black on off-white (`#1a1a1a` on `#fafafa` or similar)

### Color used everywhere with no hierarchy

- Three buttons in three different brand colors
- Every section a different background
- No restraint, no rhythm
- **Fix:** one primary, used like punctuation. Most of the page is neutral.

### Functional colors used for decoration

- Green check marks as bullet points (not denoting success)
- Red asterisks as flourishes (not denoting required)
- **Fix:** reserve red, green, amber for their semantic meaning.

### Brand color too saturated for body text

- Brand blue at 90% saturation used for paragraph text
- Vibrant on tiny areas; exhausting on body copy
- **Fix:** primary color for accents, calls to action, and large-area moments. Body text in a neutral.

### Dark mode that's just "invert everything"

- Pure black background
- Pure white text
- Brand color unchanged from light mode
- **Fix:** lift background to off-black, drop text to off-white, lighten brand colors.

---

## Interaction giveaways

### Hover states only

- Clickable mockup masquerading as a prototype
- Everything has a hover state, nothing has logic
- **Fix:** real state changes. Real persistence.

### Animations on everything

- Every element fades in on scroll
- Hovers that bounce
- Page transitions that swoop
- Eventually annoying; immediately distracting
- **Fix:** motion has a job. If you can't say what the job is, cut it.

### Slow animations

- 800ms button hover
- 1.2s page transition
- **Fix:** halve the duration. Then halve again. Most motion is too slow.

### Modal stacks

- Modal opens modal opens modal
- User loses track of where they are
- **Fix:** one modal at a time. Subsequent flows replace, don't stack.

### Forms with no validation

- Accept anything, submit successfully
- No error states designed
- **Fix:** real validation. Real error messages. Real loading states.

### Forms with hostile validation

- Validate on every keystroke
- Show "invalid" before the user finishes typing
- **Fix:** validate on blur for fields, on submit for forms.

### Buttons that look like buttons but don't behave

- Big colored rectangle, click does nothing
- Click leads to "404" or empty state
- **Fix:** if it's not interactive yet, label it as a placeholder or remove it.

---

## Process giveaways

### "I'll polish it later"

- Hero with placeholder type
- "TBD" copy throughout
- Stub images everywhere
- **Fix:** polish one section to final, then apply the bar.

### "I'll show it when it's done"

- Hours of silent work
- Big reveal that's directionally wrong
- **Fix:** show early and often. Structure feedback at the structural level.

### "Just one more iteration"

- Endless polishing of a directionally-wrong design
- Refusing to step back and reconsider
- **Fix:** if three iterations haven't landed, step back. The direction may need to change, not the details.

### "I'll make it accessible later"

- Layout choices that don't allow good contrast
- Color choices that fail at small sizes
- Interactive patterns that can't work with keyboard
- **Fix:** accessibility is a design constraint, not a polish layer. It must be considered from the start.

### Designing for one viewport only

- Looks great at 1440px
- Catastrophic on phones
- "I'll make it responsive later"
- **Fix:** test at multiple sizes from the start. Mobile-first defends against this.

---

## Decision-avoidance giveaways

### Five competing typefaces

- Couldn't pick one, used all of them
- Each section in a different face
- **Fix:** one face, maybe two. Cut.

### Five competing colors

- Brand color, accent color, secondary accent, "warm" color, "modern" color
- All fighting for attention
- **Fix:** one primary, neutrals for everything else.

### Endless variations

- 12 versions of the homepage
- 6 versions of the button
- 4 versions of the icon set
- Reviewer paralyzed
- **Fix:** 3 variations, max. Then refine.

### "I can change anything"

- A tweaks panel with 47 controls
- Free color picker
- Free font picker
- Reviewer overwhelmed
- **Fix:** curate. Three palette options, three type options, three layout options. Stop.

---

## Reading this chapter

If you're reading this *after* completing a design, scan it ruthlessly. Almost every design has at least three pitfalls from this list. Fixing them is the cheapest quality lift you can do.

If you're reading this *before* starting, internalize the patterns. Most pitfalls come from defaulting — defaulting to Inter, defaulting to centered layouts, defaulting to all-equal sections. Designing deliberately means deciding *not* to default, every time.

---

*See also: every chapter in this guide. The pitfalls collected here are the failure modes the rest of the guide is trying to prevent.*
