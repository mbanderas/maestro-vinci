# 15 — Decks & Presentations

A slide deck is a unique design medium: fixed canvas size, sequential reading, often presented live to an audience. The design choices that work elsewhere break here. This chapter covers narrative structure, slide design, presenter considerations, and the patterns that separate decks from "a series of static screens."

---

## What a deck is for

Decks live in a few distinct modes, and each has different rules:

| Mode | Primary purpose | Audience |
|---|---|---|
| **Live presentation** | Support a spoken narrative | Audience in a room or video call |
| **Read-on-screen** | Convey information without a presenter | Reader scrolling at their own pace |
| **Hybrid** | Both — slides that work live *and* read later | Audience and async readers |
| **Pitch / sales deck** | Persuade, sell, fundraise | Decision-makers, often reading async |
| **Working doc** | Capture a decision or proposal | Internal team, archival |

**Live decks** are sparse — the speaker carries the content. **Read-on-screen decks** are denser — they need to communicate without narration. **Pitch decks** are visually polished and emotionally compelling. **Working docs** are clear and complete.

Always know which mode you're designing for. A live deck used as a read-only doc fails. A read-only doc presented live drowns the audience.

---

## Canvas and aspect ratio

| Aspect | Use for |
|---|---|
| **16:9 (1920×1080)** | Default. Modern screens, projectors, video. |
| **16:10 (1920×1200)** | Slightly taller — common for laptops, some web embeds. |
| **4:3 (1024×768)** | Old projectors, some print workflows. Rarely the right choice today. |
| **A4 / Letter portrait** | Read-on-screen documents, downloadable PDFs. |

Default to 16:9 unless you have a specific reason otherwise. Design at 1920×1080 (or your target resolution); the deck will scale to fit any screen.

---

## Type sizes for decks

Slides are viewed at distance — from across a conference room, on a laptop in a meeting, projected on a wall. Type that reads fine on a website fails on a slide.

Minimum sizes:

- **Body / supporting copy: 24px** (1920×1080 canvas). Never smaller.
- **Subtitles / labels: 28-32px**
- **Headings: 48-72px**
- **Display / hero: 96-160px** for moments of emphasis

If your slide has 14px body copy at 1920×1080, no one in the back row can read it. Either make the type bigger or split the slide.

---

## Slide density

A common failure: cramming a slide as if it were a document.

Guidelines:

- **One idea per slide.** If you have two ideas, make two slides.
- **Six words or fewer on a hero title.** Cut everything that isn't load-bearing.
- **Three to five bullet points max.** If you need more, the slide is wrong.
- **One chart per slide.** Two competing charts means the audience reads neither.
- **Real estate over real content.** Generous margins. Hero moments need air.

For read-on-screen decks, density can go higher — but even there, restraint reads as confidence.

---

## Slide types and layouts

A good deck uses a small library of layouts, applied consistently. Designing each slide from scratch produces a deck that feels like a Frankenstein.

### Title / cover slide

The opening. Often:
- Title (display size)
- Subtitle or context
- Author / date / venue (small)
- A defining visual or color treatment

### Section divider

Breaks the deck into chapters. Visually distinct from regular content slides — full-bleed color, oversized type, or a graphic moment.

### Statement slide

A single sentence in display type. Used for big moments — the thesis, the punchline, the call to action. Generous whitespace, no decoration.

### Bullet slide

The default workhorse. Heading + 3-5 short points. The most-overused layout — use sparingly.

### Two-column

Left side: image, chart, or quote. Right side: explanation. Or label + value. Or before + after.

### Image-led / full-bleed

A single image (or video frame) filling the slide. Caption or title overlaid in high-contrast type.

### Quote slide

A pulled quote in display type. Attribution small below. Often on a contrasting background.

### Data / chart slide

One chart. Title that states the takeaway, not just the topic ("Revenue up 40% YoY," not "Revenue Over Time"). Source citation below.

### Comparison slide

Side-by-side comparison. Equal columns or weighted by the comparison's nature.

### Process slide

A flow or sequence. Numbered steps, arrows, or a timeline. Don't overstuff — 3-5 steps max.

### Closing / thank-you / CTA slide

The ending. Action item, next steps, contact info, or just a strong closing statement.

---

## Visual rhythm across the deck

A 30-slide deck of bullet slides is boring. A deck where every slide has a different layout is chaotic. Aim for **patterned variety**:

- **2-3 background treatments** (e.g., light, dark, accent) used intentionally
- **Section dividers** that break rhythm with full-bleed or oversized type
- **One image-led moment** every 4-6 slides
- **One statement slide** at a key beat
- **Generous variation in slide types** — bullets, images, charts, quotes — rather than running the same layout for ten slides

The reader's eye should re-engage every few slides. Predictable rhythm with planned breaks is the goal.

---

## Narrative structure

Every deck tells a story, even if it's "here are the quarterly results." Three classic structures:

### Problem → Solution → Proof

1. Here's the problem (context, why it matters)
2. Here's our solution (what we propose)
3. Here's why it'll work (evidence, examples, plan)

The default for product pitches, design proposals, strategy decks.

### Situation → Complication → Resolution (SCR)

1. Here's where we are
2. Here's what's changed or what's at stake
3. Here's what to do about it

The default for executive briefings, strategic updates.

### Setup → Conflict → Resolution

The narrative arc. Used for pitch decks, marketing decks, anything trying to engage emotion.

### "What I learned" / retrospective

For project reviews, post-mortems, lessons learned. Less structured but should still have a clear takeaway.

Pick a structure. Stick to it. Every slide should serve the structure.

---

## Slide titles

Slide titles do more work than people think:

- **Assertive titles** state the takeaway: "Q3 revenue grew 40%" — the slide's job is to support this claim
- **Topical titles** state the subject: "Q3 Revenue" — the slide's job is to convey the data, leaving the conclusion to the audience

Assertive titles are usually better. They tell the audience what to think while showing them the evidence.

A good slide title:
- Six to ten words
- Reads as a complete thought
- Could stand alone as a summary of the slide
- Uses sentence case (rarely title case)

---

## Speaker notes

For live decks, speaker notes are the script:

- **Full sentences**, not bullets — they're what you'd actually say
- **Conversational tone** — written for the ear, not the eye
- **Cues for visuals** — "click here to advance the animation"
- **Time estimates** if relevant
- **Backup notes** — answers to likely audience questions

A live deck with sparse slides + rich speaker notes is almost always better than the inverse.

---

## Charts and data viz

Some quick rules for charts in decks:

- **One takeaway per chart.** Highlight it visually (color, annotation, callout).
- **Strip chartjunk.** Remove gridlines that don't add information. Trim axis labels to essentials.
- **Title states the takeaway.** "Conversion rate dropped after redesign" — not "Conversion Rate Over Time."
- **Source citation in small print.** Builds credibility.
- **Use color sparingly.** One accent color for the data point that matters; gray for everything else.
- **Tabular numerals**, always.
- **Format numbers in context.** "$1.2M" not "$1,234,567" on a card; precision in the appendix.

Avoid 3D charts, exploded pies, double-y-axes, and anything that obscures the data.

---

## Animations and transitions

For live decks, less is more:

- **Slide transitions:** subtle cross-fade, or none. Skip swipes, cubes, rotations.
- **Element animations:** sparingly, to reveal complex slides one step at a time (build-on).
- **Builds:** for stepwise reveals (numbered steps appearing one at a time). Use for complex slides; skip for simple ones.
- **Never animate** for decoration. Animation has the same job here as elsewhere: explain state change.

For read-on-screen decks, animations are usually wrong — readers scroll at their own pace.

---

## Hero moments

Every deck needs at least one slide that's *the slide* — the one that lands. The thesis statement, the killer chart, the closing CTA.

For hero moments:
- Maximum type size
- Generous whitespace
- One clear focal element
- No competing content
- Often a different background color or treatment to mark the moment

Hero slides earn extra design effort. Spend it.

---

## Common deck failures

- **Bullet-pocalypse.** Slide after slide of bullet lists, identically formatted.
- **Tiny type.** 14px copy at 1920×1080. No one in the back row can read it.
- **Title slide that's also a content slide.** Pick one — set the stage, or deliver content.
- **Inconsistent layouts.** Each slide invented from scratch.
- **Charts without a takeaway.** Just "here's a graph, you figure it out."
- **No section dividers.** A 40-slide deck reads as one long thing instead of a structured talk.
- **Live deck with too much text.** Audience reads instead of listening; speaker becomes redundant.
- **Read-only deck with too little text.** Reader can't follow without the missing speaker.
- **Decorative transitions.** Spins, flips, cubes. Distracting.
- **Footer junk on every slide** — page numbers and logos that crowd content.

---

## A deck checklist

- [ ] One idea per slide (or split it)
- [ ] Type sizes appropriate for the canvas (24px+ body at 1920×1080)
- [ ] Consistent layout system across the deck
- [ ] Section dividers break the rhythm
- [ ] At least one hero / statement slide at a key beat
- [ ] Charts state the takeaway in the title
- [ ] Sources cited where claims are made
- [ ] Speaker notes (if live)
- [ ] Slide titles read as complete thoughts
- [ ] No 3D charts, no clip-art, no spinning transitions
- [ ] Tested at projection size — does the back row see it?
- [ ] Closes with a clear next action or takeaway

---

*See also: [04 — Typography](./04-typography.md) for slide-specific type sizes, [08 — Imagery & Iconography](./08-imagery-and-icons.md) for image treatment*
