# 01 — Design Process

A repeatable workflow that takes you from a vague brief to a delivered, polished design artifact. The process is the same whether you're producing a deck, a static mockup, a hi-fi prototype, or a full product flow — only the fidelity targets and tools change.

---

## The seven phases

```
1. Understand   →  2. Gather   →  3. Plan   →  4. Scaffold
       ↓
5. Iterate to fidelity  →  6. Offer variations  →  7. Verify & deliver
```

These are sequential, but not strictly one-way. Expect to loop back from Iterate to Gather when you discover you need more reference. Expect to revisit Plan when scope changes.

---

## Phase 1 — Understand

**Goal:** know what success looks like before drawing anything.

Read the brief carefully. Then read it again, listing every assumption you're making to fill its gaps. Each assumption is either confirmed by the reviewer or surfaced as a question.

Identify:

- **Output format.** Deck? Static design? Interactive prototype? Animated video? Print artifact?
- **Fidelity bar.** Wireframe-level? Hi-fi? Production-ready?
- **Audience.** Internal stakeholders? External users? Investors? Engineers?
- **Constraints.** Brand, design system, technical stack, accessibility floor, locale, device targets.
- **Success criteria.** How will the reviewer judge it? What's the worst outcome to avoid?

If the brief is ambiguous, use the next phase to ask focused questions.

---

## Phase 2 — Gather context

**Goal:** stop starting from scratch. Find what already exists.

Hunt for:

- **Design system or UI kit.** Tokens, components, example mocks. Read the README and any "getting started" docs end-to-end.
- **Brand assets.** Logos, typography, color palette, voice and tone guidance.
- **Existing codebase.** Even a small product has accumulated decisions worth honoring.
- **Reference material.** Screenshots of the current product, competitors the user admires, mood boards.
- **Real content.** Copy, data, images. The actual material the design will hold.

When you find a system, copy what you'll use into your working folder. Don't reference it across project boundaries — that's fragile and prevents safe editing.

If you can't find any of the above, **ask before drawing**. Mocking from a vacuum is the single biggest cause of generic-looking work.

---

## Phase 3 — Plan

**Goal:** commit to a system and a structure before placing pixels.

Write down — even in a comment block at the top of the file — your **design system commitments**:

- Type stack and a real type scale
- Color roles (not just hex codes — what each color is *for*)
- Spacing scale
- Radius scale
- Density (airy / balanced / compact)
- Imagery posture (photographic / illustrative / abstract / none)
- Motion language (snappy / soft / minimal / none)

Then sketch the structure:

- For a deck: a slide-by-slide outline
- For a flow: a screen list and navigation graph
- For a single page: top-to-bottom section list
- For a prototype: a state diagram of what changes when

This planning takes ten minutes and saves hours. It also gives you something to share with the reviewer before they're staring at half-built pixels.

---

## Phase 4 — Scaffold

**Goal:** get the bones in front of the reviewer fast.

Build the file structure. Drop in tokens and global styles. Place the major sections with placeholder content where needed. Don't polish anything yet.

Show this to the reviewer. A scaffolded design viewed early gets feedback at the structural level, which is cheap to act on. A polished design viewed late gets feedback at the same structural level, which is expensive to act on.

The reviewer doesn't need you to be perfect at this stage — they need to know you're heading in the right direction.

---

## Phase 5 — Iterate to fidelity

**Goal:** raise quality from one polished section, then apply the bar consistently.

Pick one section. Take it to final fidelity — real type, real spacing, real color, real content, real interactions if applicable. Show the reviewer.

Their reaction tells you whether the fidelity bar is right. If yes, apply the same bar to the rest of the design. If not, adjust before propagating.

This is more efficient than polishing the whole design at 80% and then finding out the type choice is wrong. Solve once, then duplicate.

---

## Phase 6 — Offer variations

**Goal:** give the reviewer enough range to decide what's working.

For exploratory work, present 3+ variations. They should differ along **deliberate axes**:

- Layout (e.g. centered hero vs. asymmetric vs. full-bleed)
- Color (e.g. light vs. dark vs. accent-heavy)
- Type (e.g. serif vs. sans vs. mixed)
- Density (e.g. airy vs. compact)
- Interaction model (e.g. modal vs. inline vs. slide-over)

Mix safe and stretched. The goal isn't to ship the perfect option — it's to give the reviewer enough material to point at what's working so you can combine the best moments into a final.

**Put variations in one file**, side by side. Comparison is the whole point. Don't fork into N files the reviewer has to A/B in their head.

---

## Phase 7 — Verify and deliver

**Goal:** the reviewer lands on something that works.

Before delivery:

- Console clean — no errors, no warnings
- Layout holds at the intended sizes (and gracefully degrades elsewhere)
- Interactive elements actually work — hover, focus, click, submit
- Persistence works — refresh doesn't lose important state
- Edge cases visible — empty states, long content, errors

When you deliver:

- Open the file in the reviewer's view
- Summarize **briefly** — caveats, decisions made under ambiguity, next steps
- Don't write an essay. The work should speak.

---

## Time-boxing the phases

Rough proportions for a typical design task:

| Phase | Share of total time |
|---|---|
| Understand | 5% |
| Gather context | 15% |
| Plan | 10% |
| Scaffold | 15% |
| Iterate to fidelity | 35% |
| Offer variations | 15% |
| Verify & deliver | 5% |

Notice that **half the time happens before the first polished pixel.** That's the right ratio. If you're polishing within an hour of starting, you skipped phases.

---

## When to break the process

The process is a default, not a law. Skip phases when:

- **Tiny tweaks.** "Move that 8px to the right" doesn't need a plan.
- **Iteration on a finished piece.** You're already past scaffolding.
- **Pure exploration.** Sometimes you sketch to discover what you're making. Treat that as research, not delivery.
- **Tight time pressure.** Compress, don't skip. Even a five-minute plan beats no plan.

But never skip **Gather**. Even a frantic five minutes of finding the brand colors and one reference screenshot beats inventing from scratch.

---

## Anti-patterns

- **Polishing before structure is right.** You'll polish the wrong thing.
- **Going dark for hours.** The reviewer wants to see progress. Show early, show often.
- **One huge reveal.** Big reveals are romantic and almost always end badly.
- **Designing in isolation from real content.** Lorem ipsum hides hierarchy problems that real copy would reveal.
- **Ignoring the system "just for this one component."** That one component becomes the template for the next ten.

---

*See also: [02 — Asking the Right Questions](./02-asking-questions.md), [03 — Hi-Fi Design Principles](./03-hi-fi-design.md), [13 — Working with Design Systems](./13-design-systems.md)*
