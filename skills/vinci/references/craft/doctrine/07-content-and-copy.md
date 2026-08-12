# 07 — Content & Copy

Content is the design. A beautifully laid-out page with placeholder copy is a beautifully laid-out shell. This chapter covers writing for interfaces, microcopy, tone, content modeling, and how to use sample content when real content isn't available.

---

## Specificity is the move

The single highest-leverage thing you can do for fidelity is write specific copy.

**Generic:**
> Welcome back, User
>
> You have 0 items.
>
> Lorem ipsum dolor sit amet, consectetur adipiscing elit.

**Specific:**
> Welcome back, Maya
>
> You haven't added anything yet. Add your first invoice to see it here.
>
> A short, real-sounding paragraph that describes what this section actually does for the person reading it.

The second version is the same amount of work and ten times more convincing. It also reveals layout problems the first version hides — does "Welcome back, Maya" fit? What about "Welcome back, Constantine Papadopoulos"?

---

## Microcopy fundamentals

### Button labels

A button's label should describe what *happens* when clicked, not what the button *is*.

- ✅ "Send invoice" — describes the outcome
- ❌ "Submit" — describes the form mechanic
- ✅ "Delete project" — explicit
- ❌ "Confirm" — what am I confirming?
- ✅ "Save draft" — clear about state
- ❌ "OK" — meaningless

Buttons should usually be **verbs**. The exception is destination-like buttons ("Settings," "Profile") where the action is "navigate to."

### Form labels and help

- **Label above the input**, not inside as placeholder. Placeholders disappear when typing, which is a tax on memory.
- **Required fields** explicitly marked, with the convention stated somewhere on the form ("* indicates required").
- **Helper text** below the input, in muted color. Explains *what* and *why*, not *how to type it*.
- **Error messages** below the input, in danger color. Specific about what's wrong and how to fix it.

Examples:

```
Email address *
[                              ]
We'll only use this to send your receipt.
```

```
Password *
[                              ]
At least 8 characters with one number.
```

```
Phone number
[                              ]
Optional. We'll text you if there's a delivery issue.
```

### Empty states

Empty states are first impressions for first-time users. They deserve more design love than they usually get.

A good empty state:
1. **Explains** what would normally be here
2. **Encourages** the first action
3. **Tells** the user how to take it

Bad:
> No items.

Better:
> You haven't created any projects yet.

Best:
> Start your first project
> Projects are how you organize files, tasks, and team members for a specific piece of work.
> [Create project]

### Confirmations and warnings

Be specific about consequences:

- ✅ "Delete this project? This will permanently remove 12 files and 3 collaborators. This can't be undone."
- ❌ "Are you sure?"

If the action is reversible, say so. If it isn't, say so emphatically.

### Loading and progress

- ✅ "Uploading 3 of 8 files..." — specific
- ❌ "Loading..." — generic
- ✅ "Sending invoice to maya@example.com..." — confirms the action
- ❌ "Please wait" — uninformative

If you have a time estimate, show it. If you don't, show progress.

### Success messages

- ✅ "Invoice sent to maya@example.com." — confirms what happened, to whom
- ❌ "Success!" — generic
- ✅ "Project deleted. [Undo]" — confirms + offers reversal
- ❌ "Done" — uninformative

---

## Voice and tone

**Voice** is consistent. **Tone** varies by context.

A brand with a friendly voice might be playful in marketing copy, neutral in product UI, and serious in error messages — all from the same voice.

### Defining voice

Three adjectives, and three counter-adjectives:

> Our voice is: **clear, warm, confident**.
> Our voice is not: jokey, technical, formal.

Now every copy decision has a test: does this read as clear, warm, and confident? If it reads as jokey, technical, or formal, rewrite.

### Tone by context

| Context | Tone |
|---|---|
| First-run / empty state | Encouraging, helpful |
| Marketing page | On-brand, slightly elevated |
| Product UI | Neutral, efficient |
| Confirmation dialog | Direct, calm |
| Error message | Specific, helpful, never blaming |
| Destructive warning | Serious, explicit |
| Success message | Brief, satisfied |
| Onboarding | Friendly, guiding |

---

## Length

Most UI copy is too long. Edit ruthlessly:

- Cut every "please," "kindly," "we're sorry but"
- Cut redundancies — "Click here to..." just "..."
- Cut throat-clearing — "In order to..." just "To..."
- Cut weak openers — "There is a..." rewrite
- Cut filler — "very," "really," "just," "actually"

The exception: error messages and first-run empty states, where a bit more guidance is welcome.

---

## Tone in errors

Errors are where voice gets tested. The two failures:

- **Blaming the user.** "You entered an invalid email." → "That email doesn't look right. Try again?"
- **Hiding the cause.** "Something went wrong." → "We couldn't reach the server. Check your connection and try again in a moment."

A good error message:
1. Says what happened (in plain language)
2. Says why, if known
3. Says what to do next
4. Doesn't make the user feel stupid

---

## Numbers and data

- **Round in the UI**, precise in the export. "1.2K followers" reads better than "1,247 followers" in a card. The exact number can live in a tooltip or detail view.
- **Use real-looking numbers.** Not "$1,234" everywhere. Mix small and large. Include some inconvenient values ($192.40 reads more real than $200.00).
- **Be consistent about decimal places** within a column.
- **Always include units.** "12 hr 30 min" not "12:30" unless context makes it obvious.
- **Date format depends on locale.** Don't hardcode US date format. Use a date library or relative format ("3 days ago," "yesterday at 2:30 PM").

---

## Names and identities

When using placeholder names:

- **Use diverse, plausible names.** Not just "John Smith" everywhere. Mix cultures, lengths, formats.
- **Avoid celebrity names.** They distract.
- **Avoid all-A names** to test the alphabet — "Aaron, Abby, Adam" makes the design look fake.
- **Include edge cases.** A short name (Yi), a long name (Constantine Papadopoulos), a hyphenated name (Maya Anders-Wright), a single-name (Madonna). Layouts that survive these survive real users.

For avatars:
- Real, diverse photography if available
- Designed initials with brand-consistent colors if not
- Generic geometric placeholders only as a last resort

---

## Content modeling

When designing something that displays content, model the content first:

What fields does each item have?
- Required vs. optional
- Short vs. long (max length?)
- Plain text vs. rich text
- Single vs. multiple

What states does an item have?
- Draft / published / archived?
- Read / unread?
- Owned / shared / read-only?

What relationships exist?
- One-to-one (user → profile)
- One-to-many (project → tasks)
- Many-to-many (users ↔ projects)

Designing without modeling content first leads to layouts that don't survive real data. The screen looks great with three featured items; falls apart with twelve.

---

## Length variations to test

For any text element, design for three lengths:

- **Empty / very short.** A single character, or no value at all.
- **Realistic.** What 80% of cases look like.
- **Long.** What happens with the longest plausible value.

A name field should hold "Yi" and "Constantine Papadopoulos" gracefully. A product title slot should handle "Pen" and "Limited edition handcrafted Italian leather tote bag with monogram." Decide whether long content wraps, truncates, ellipsizes, or scrolls — and design that behavior.

---

## Localization considerations

Even if you're only shipping English now, design for localization:

- **German is ~30% longer than English.** Buttons and labels will grow.
- **Japanese and Chinese are ~60% shorter.** Layouts may look sparse.
- **Arabic and Hebrew read right-to-left.** UI mirrors entirely.
- **Date and number formats vary.** Use locale-aware formatting.
- **Cultural color meanings differ.** Red = danger in much of the West; red = luck in China.

You don't have to localize today. You should design as if you might tomorrow.

---

## Working with placeholder content

When you don't have real content:

1. **Ask for it first.** Real content always beats placeholder.
2. **If you can't get real, invent plausible.** Write copy that *could* be real, not Lorem ipsum.
3. **Name your placeholders as such.** A comment in the file marking which copy needs replacement makes handoff easier.
4. **Use realistic names, photos, dates.** Anything you can do to reduce the "this is fake" feeling.

Lorem ipsum has one legitimate use: testing line lengths and density when you genuinely don't know what the content will be. Even then, switch to plausible English the moment you can.

---

## Common copy failures

- **"Click here."** Almost always wrong. Use descriptive link text.
- **"Learn more."** Vague. "Read the documentation," "See pricing," "Watch the demo" all do more.
- **"Coming soon."** Tells the user the design isn't done. Either ship the feature or hide the placeholder.
- **All caps everything.** READS AS SHOUTING. Reserve for small labels with deliberate intent.
- **Title Case Everywhere.** Reads as marketing-y. Use sentence case for most UI; title case for proper names and brand moments.
- **"Welcome to [Product]."** Generic onboarding. Welcome the user *into* something specific.
- **Marketing copy in product UI.** "Empowering teams to do their best work" doesn't belong in a settings page.

---

## A copy checklist

Before delivery, scan every text element:

- Real (not lorem ipsum, not "Headline goes here")
- Specific to the context (not generic)
- In the right voice and tone
- The right length (not too long, not throat-clearing)
- Tested with edge-case content (short, long, empty)
- Free of click-here, learn-more, coming-soon
- Sentence case unless there's a reason for title case
- Smart quotes, em dashes, ellipses, not typewriter substitutes

---

*See also: [03 — Hi-Fi Design Principles](./03-hi-fi-design.md) on specificity, [12 — Forms & Inputs](./12-forms-and-inputs.md) for form-specific microcopy*
