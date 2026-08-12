# 02 — Asking the Right Questions

Most rework is caused by missing information at the start. A short, focused round of questions before you draw saves hours later. This chapter covers when to ask, what to ask, and how to ask in a way that gets useful answers.

---

## When to ask

**Always ask when:**
- The brief is new and you have no prior context with this reviewer
- The output format is ambiguous (deck vs. prototype vs. static design)
- The audience or use case is unclear
- There's no specified design system or brand
- The user mentions "options" or "variations" without specifying axes
- Anything in the brief contradicts something else in the brief

**Skip questions when:**
- The brief is highly specific and self-consistent
- You're iterating on a piece you've already shown
- The user has explicitly said "just do it" or "your call"
- The task is a small, well-scoped tweak

**Bias toward asking.** One round of focused questions early is almost always cheaper than rework. The exception is when the user is clearly impatient — in that case, ask the two most-load-bearing questions only.

---

## How to ask

Structure questions so they're easy to answer fast:

- **Multiple choice beats open-ended** when you can predict the options
- **Visual choices beat verbal choices** when the question is about look and feel
- **Sliders work** for anything with a natural range (density, formality, motion intensity)
- **One free-text box at the end** captures anything you didn't predict

Always include escape hatches:
- "Explore a few options" for users who don't want to choose yet
- "Decide for me" for users who want you to use judgment
- "Other (specify)" for anything you didn't anticipate

Ask **more questions than feels comfortable** — 8 to 12 is usually right for a new project. The reviewer can skip questions; they can't answer questions you didn't ask.

---

## The question taxonomy

There are five categories of questions worth asking on almost every project:

### 1. Context & audience

- Who is the end audience? (Internal team? Customers? Executives? Investors?)
- What's the use context? (Quiet desk? Conference room projector? Phone on the subway?)
- What action should this design lead to?
- What's the worst outcome to avoid?

### 2. Reference & inspiration

- Are there products you admire that solve a similar problem?
- Do you have screenshots of the current state (if redesigning)?
- Is there a brand, design system, or codebase to start from?
- Any "no-go" references — things that look like what you *don't* want?

### 3. Tone & feel

- Formal or casual?
- Playful or serious?
- Editorial or utilitarian?
- Dense or airy?
- Familiar or surprising?

### 4. Variations & scope

- How many directions do you want explored?
- What should the variations vary on — layout, color, type, interaction, all of it?
- Are there parts that are locked vs. parts open to exploration?
- What's the minimum viable delivery?

### 5. Constraints

- Locked elements (logo, required copy, mandated colors)?
- Accessibility requirements?
- Device or screen size targets?
- Locale, language, RTL considerations?
- Performance or technical constraints?

---

## Question templates by project type

### Hi-fi design / mockup

1. What's the format and dimensions?
2. Is there an existing design system, brand, or reference?
3. What's the tone? (Formal / casual / playful / editorial / etc.)
4. How many variations would you like, and along which axes?
5. Who's the audience?
6. Any required content (logos, copy, imagery) to include?
7. Any references — products or aesthetics you admire?
8. Anything to explicitly avoid?
9. Light, dark, or both?
10. Final delivery format — PDF, deck, web link?

### Interactive prototype

1. What's the core flow or task the prototype should demonstrate?
2. Is there an existing product / codebase / system to model from?
3. How real should the interactions be? (Clickable mockup → fully working logic)
4. Device / form factor target?
5. Should it persist state across refresh?
6. What sample content should populate it? (Will you provide, or should I invent plausibly?)
7. What edge cases matter? (Empty state? Error state? Loading state?)
8. Should there be variations? Of what?
9. Who's the audience for the prototype — a usability test? A stakeholder demo? An engineering handoff?
10. Any specific animations or transitions you want demonstrated?

### Slide deck

1. How many slides, roughly?
2. What's the runtime — read on screen, presented live, both?
3. Audience and context?
4. Tone — pitch, internal update, technical deep-dive, marketing?
5. Existing template, brand, or system?
6. Speaker notes needed?
7. Required content (logo, footer, page numbers)?
8. Imagery — provided, placeholder, or none?
9. Aspect ratio (16:9, 16:10, A4)?
10. Final delivery — PPTX, PDF, web, all of the above?

### Brand / identity work

1. Who is this for and what do they sell or do?
2. Three adjectives that describe how it should feel?
3. Three competitors or peers — and what should differentiate this from them?
4. Are there any existing assets (a logo, a palette, an old version)?
5. Where will this appear most — web, print, packaging, app, signage?
6. Any imagery direction? (Photography, illustration, abstract, none.)
7. How conservative or adventurous should the direction be?
8. Locked elements (must keep) and free elements (can change)?

---

## Following up on answers

After the first round, you'll often discover follow-ups. Two patterns:

- **Inline follow-ups** — When the user gives a partial answer, ask the obvious next question right then. ("You said 'modern' — does that mean stripped-down editorial, or more techy?")
- **Batched follow-ups** — When you've done some initial exploration and discovered new dimensions, batch them into a second short round.

Avoid asking the same question twice. If you forgot the answer, scroll up — re-asking signals you weren't listening.

---

## When the user can't answer

Some users genuinely don't know what they want — that's normal, especially in exploratory work. When that happens:

- **Make the decision visible.** "I'm going to assume X — push back if that's wrong."
- **Decide by showing.** Offer 2–3 options. The reviewer often discovers what they want by pointing at what they don't.
- **State the trade-off.** "I can go formal or playful. Formal will land better with investors; playful will read more as a startup. Default to formal?"

Never paralyze. A made decision you can revise is better than an open question that blocks progress.

---

## Questions to *avoid*

- **"Do you want it to look nice?"** No question with a single obvious answer.
- **"What do you want?"** Too open. Constrain to options.
- **"Which is better?"** Without context, "better" is meaningless. Ask about the *use*.
- **Anything you can answer yourself** by reading the brief or the source material.
- **Long compound questions** with multiple clauses. Split them.

---

## A quick template for any new project

If you remember one structure, use this:

> 1. **Output:** What format and where will it live?
> 2. **System:** Is there an existing system, brand, or reference to use?
> 3. **Audience:** Who sees this?
> 4. **Tone:** Three adjectives.
> 5. **Variations:** How many, varying on what?
> 6. **Content:** Real copy or placeholder?
> 7. **Constraints:** What's locked?
> 8. **Done:** What does success look like?

Eight questions, four minutes to answer, and you've eliminated 80% of the rework risk.

---

*See also: [01 — Design Process](./01-design-process.md), [14 — Variations & Tweaks](./14-variations-and-tweaks.md)*
