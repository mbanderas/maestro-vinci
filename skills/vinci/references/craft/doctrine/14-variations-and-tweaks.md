# 14 — Variations & Tweaks

When a user asks for "options" or "variations," they're asking for material to point at. The best variations make it easy to identify what's working — so the reviewer can combine the best moments into a final. This chapter covers how to scope variations, present them, and offer in-design tweaks that don't multiply files.

---

## What variations are for

Variations exist to surface decisions. Each variation should isolate a **specific axis of difference** so the reviewer can react to that axis:

- "I like the type from option 1 but the color from option 3"
- "Option 2's layout works better at small sizes"
- "All three motion patterns are too much — try less"

If your variations differ on five things at once, the reviewer can't tell which difference they're reacting to. The feedback gets mushy.

---

## Choosing variation axes

For most design exploration, the high-leverage axes are:

- **Layout** — same content, different composition
- **Color** — same layout, different palette
- **Type** — same layout, different typeface or scale
- **Density** — same content, different breathing room
- **Imagery treatment** — same layout, different photo style or use of illustration
- **Interaction model** — same screen, different way to act on it (modal vs. inline vs. drawer)
- **Information hierarchy** — same content, different emphasis

Pick **one or two axes** per round of variations. Don't try to explore everything at once.

---

## How many variations

Three is usually right. The dynamics:

- **One option** — feels like a take-it-or-leave-it
- **Two options** — frames the decision as binary, even when it isn't
- **Three options** — feels exploratory, gives middle ground
- **Four or five** — useful for genuinely open-ended exploration, but reviewers get fatigued
- **Six or more** — analysis paralysis, hard to compare

For final-direction selection, three. For early-stage exploration, four-to-six. For "pick a single style," two-versus-three.

---

## Safe vs. stretched

Mix the safe with the stretched:

- **Safe option** — by-the-book, predictable, what the system suggests
- **Middle option** — moderate departure, exploring one or two ideas
- **Stretched option** — bold, novel, possibly impractical, but instructive

The stretched option often loses, but it shifts the conversation. Reviewers see what's possible and approve braver moves on the safe option than they otherwise would have.

The opposite mistake — three safe options that differ only in shade of gray — is one of the most common variation failures.

---

## Presenting variations

### Side-by-side beats sequential

Reviewers compare best when they can see options at once. **Never** put variations on separate URLs that the reviewer has to flip between. Always one document, side by side.

A horizontal layout with labeled artboards is the standard pattern:

```
[ Option A     ] [ Option B     ] [ Option C     ]
[ "Editorial"  ] [ "Product"    ] [ "Hybrid"     ]
```

### Label each option

A descriptive name beats "Option 1, 2, 3":

- ✅ "Editorial — dense type, lots of imagery"
- ❌ "Option 1"

The label tells the reviewer what the option is *trying* to be, which helps them give feedback on whether it succeeded.

### Match the format to the medium

- For **static designs** (single screens, mockups): a design canvas with artboards side by side
- For **interactive prototypes**: a single prototype with a tweaks panel to switch variants
- For **decks**: a single deck where each variant is one or two slides
- For **animation**: a single page with variants playing in parallel

### Use the same content across variations

So differences read as design, not content. If option A says "Welcome back, Maya" and option B says "Hello there," the difference is partly copy — which probably wasn't the axis you wanted to explore.

---

## Tweaks — in-design controls

For interactive prototypes, often the best way to expose variations is **tweaks**: live controls in the design itself.

A tweaks panel:
- Floats in a corner of the prototype (typically bottom-right)
- Has its own toggle (visible / hidden)
- Contains sliders, toggles, color pickers, segmented controls, text inputs
- Persists state across reloads
- Stays out of the way when reviewers want to see the design "clean"

### What to expose as tweaks

Good candidates:

- **Color** — a curated set of 3-4 palette options (not a free picker)
- **Type** — 2-3 typeface choices
- **Density** — slider or segmented control
- **Layout variants** — for screens with 2-3 layout candidates
- **Feature flags** — show/hide an element
- **Copy length** — switch between short / medium / long text to test fit
- **Sample data** — empty / typical / overflowing
- **State** — show empty, loading, error, success
- **Dark mode toggle**

### What NOT to expose

Bad candidates:

- **Anything with infinite values** — a free color picker, free font picker
- **Anything trivial** — "make the corners 12% rounder"
- **Anything that requires the reviewer to be a designer** — too many tweaks, too granular

Curate. The point isn't infinite customization; it's making the *meaningful* decisions visible.

### Tweak controls

| Control | Use for |
|---|---|
| **Toggle** | On/off binary states |
| **Segmented control** | 2-3 mutually exclusive options with short labels |
| **Dropdown** | 4+ options, or long labels |
| **Slider** | Continuous values within a range (density, motion intensity, opacity) |
| **Color swatches** | Curated color choices (not a picker) |
| **Text input** | Editable copy (use sparingly — usually expose specific text via a select instead) |
| **Number input** | Precise values where the reviewer needs to type |

Always provide reasonable defaults. The default should be the "best guess" so a reviewer can hide the tweaks panel and see the right thing.

---

## Curated, not infinite

A common failure: giving the reviewer too much freedom.

- A free color picker → they pick a color the brand would never use
- A free font picker → they pick Comic Sans as a joke that becomes a screenshot
- Free spacing values → they make everything 7px and break the rhythm

Curate. Three palettes, three type pairings, three density levels. Reviewers focus on the *decisions* you've offered, not on rediscovering basic design from scratch.

---

## Variations as a conversation tool

Variations aren't a contract. They're a way to talk:

- Reviewers point at what's working
- You combine those moments into a refined direction
- Iterate

Sometimes the best variation isn't shown — it's discovered through the conversation. Don't be precious about your options.

---

## When NOT to offer variations

- The brief is highly specified — there's no real choice to make
- The system tightly constrains the design — you'd be inventing fake variation
- The user explicitly said "no options, just do it"
- You're iterating on a piece that's been approved in concept — now polish, don't re-explore

Variations are a tool for *exploration*. When you're past exploration, ship one option and refine.

---

## Common variation failures

- **Three almost-identical options** — the reviewer can't see the difference
- **Three wildly different options on five axes** — the reviewer can't isolate what they like
- **Variations as separate files** — comparison is impossible
- **Unlabeled options** — reviewer doesn't know what each is trying to be
- **No safe option** — all bold, all risky, none ships
- **No stretched option** — all safe, conversation stays narrow
- **Tweaks that expose every CSS property** — reviewer overwhelmed
- **Tweaks that don't persist** — refresh resets to default, reviewer rediscovers everything

---

## A variations checklist

- [ ] Variations differ on **one or two clear axes**
- [ ] Each option has a descriptive name
- [ ] All options use the same content
- [ ] Options sit side by side in one document
- [ ] There's at least one safe option and at least one stretched
- [ ] For prototypes, tweaks are curated (not free pickers)
- [ ] Tweak state persists across reload
- [ ] Reasonable defaults that show the "best guess" first

---

*See also: [01 — Design Process](./01-design-process.md) for when variations fit in the flow, [10 — Interactive Prototypes](./10-interactive-prototypes.md)*
