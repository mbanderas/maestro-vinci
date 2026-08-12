# 12 — Forms & Inputs

Forms are the most-built and most-faked element in interactive prototypes. A real-feeling form is one of the highest-leverage things you can demonstrate. This chapter covers input patterns, validation, error states, multi-step flows, and accessibility.

---

## Anatomy of a good input

A single text input has more parts than people expect:

```
Label (above)                          (optional indicator)
[      Input value or placeholder     ]
Helper text or character count
Error message (when invalid)
```

Each part has a job:

- **Label** — what this field is. Above the input, not floating inside.
- **Required indicator** — explicit (asterisk, "(required)") with the convention explained somewhere on the form.
- **Input** — the actual control. Large enough to tap. High enough contrast border to see.
- **Placeholder** — example of expected format. Not a replacement for label.
- **Helper text** — explains *why* you're asking, or how the data is used.
- **Error message** — specific, actionable, never blaming.

---

## Label placement

| Placement | Pros | Cons |
|---|---|---|
| **Above** (default) | Easy to scan, works in narrow widths, mobile-friendly | Slightly taller forms |
| **Inside (floating)** | Compact, modern look | Breaks if user types quickly, accessibility concerns |
| **Left of input** | Compact horizontally | Doesn't work on mobile, harder to scan |
| **Placeholder-only** | Compactest | Bad: label disappears, accessibility nightmare |

**Default to labels above.** Use floating labels only when space is tight and you've tested them. Never use placeholder-only labels.

---

## Input sizes

- **Mobile minimum height: 44px** (48px is better). Anything smaller is hard to tap.
- **Desktop minimum height: 36px** (40px is better). Anything smaller looks fiddly.
- **Touch targets** include padding — the input's visual height plus any padding that registers taps.
- **Font size on iOS:** at least 16px to prevent the browser from auto-zooming when focused.

---

## Validation timing

When to show validation errors is one of the most-bungled UX decisions.

| When | Use case |
|---|---|
| **On submit** | Default for simple forms. Don't nag while typing. |
| **On blur** | When format matters (email, phone). After the user leaves the field. |
| **On change** | Only for password strength, character counts. Real-time feedback for guidance, not gating. |
| **Never** | For optional fields. Don't validate emptiness if it's optional. |

**Combine:** validate on blur for individual fields *and* on submit for the form. The first catches typos as the user goes; the second catches missed fields.

**Never validate on first keystroke.** Showing "invalid email" after the user types `m` is hostile.

---

## Error message patterns

Bad:
- "Invalid input"
- "This field is required"
- "Please enter a valid email"

Good:
- "That email doesn't look right — check for typos."
- "We need this to send your receipt."
- "Passwords must be at least 8 characters."

Patterns:

- **Specific** about what's wrong: "Password needs a number," not "Invalid password."
- **Actionable** — tells the user what to do: "Add a number to fix this."
- **Calm tone** — no exclamation marks, no all caps, no "ERROR!" labels.
- **Inline** — below the affected field, in the danger color, with an icon.
- **Persistent until fixed** — don't make errors flash; the user needs to see them.

---

## Input types and patterns

### Text input

The default. Use `type="text"` for free-form text.

```html
<input type="text" autocomplete="name" placeholder="e.g. Maya Anders" />
```

Specify `autocomplete` so password managers and browsers can help.

### Email

```html
<input type="email" autocomplete="email" inputmode="email" />
```

`type="email"` enables built-in validation. `inputmode="email"` shows the right keyboard on mobile.

### Phone

```html
<input type="tel" autocomplete="tel" inputmode="tel" />
```

For international support, consider a country code dropdown next to the input.

### Password

```html
<input type="password" autocomplete="new-password" />
```

Add a "show password" toggle. Don't enforce arbitrary rules ("must contain a number, must contain a symbol, must be exactly 8-12 characters") — they make passwords *weaker*, not stronger. Min 8 characters, no upper limit, is the modern standard.

### Number

Often, `type="text"` with `inputmode="numeric"` is better than `type="number"` — it gets the numeric keyboard on mobile without the awful native spinners and scroll-changes-value behavior.

```html
<input type="text" inputmode="numeric" pattern="[0-9]*" />
```

### Date

For most cases, **native `type="date"` is fine** — better accessibility than custom date pickers in most cases. For complex needs (range pickers, multi-month displays), a custom component.

### Search

```html
<input type="search" />
```

Renders with a clear button in most browsers, and gets the right keyboard hints.

### Textarea

Always give textareas a sensible default size — neither one-row tiny nor 20-row enormous. 3-5 rows is the usual right answer. Allow vertical resize but not horizontal:

```css
textarea { resize: vertical; min-height: 5em; }
```

### Select / dropdown

Use native `<select>` for short lists (under ~15 items). Build a custom combobox only when:
- The list is long enough to need search
- You need rich rendering (icons, secondary text, grouping)
- You need multi-select

Native selects are accessible and familiar. Custom selects are almost never as good — and far more work.

### Checkbox

```html
<label>
  <input type="checkbox" />
  Remember me
</label>
```

The whole label should be clickable, not just the box. Wrap the input in the label or use `for`/`id` correctly.

### Radio group

For mutually exclusive choices, radios. For 2-3 options that fit on a line, consider a segmented control instead — same semantics, faster to scan.

### Toggle / switch

For binary settings that take effect immediately. Different from a checkbox: a checkbox typically requires a submit; a switch typically doesn't.

### File input

Native file inputs are ugly but functional. To style them, hide the input and trigger via a styled label:

```html
<label class="file-button">
  Upload file
  <input type="file" hidden />
</label>
```

For prototype fidelity, show a real preview after "upload" — file name, size, thumbnail.

### Combobox / autocomplete

For long lists with search. Show:
- Filtered results as the user types
- A clear "no results" state
- Keyboard navigation (arrows, enter, escape)
- A clear button to reset

---

## Multi-step forms

For long forms, splitting into steps is almost always better than one giant form.

Patterns:

- **Wizard** — strict linear progression with a progress indicator
- **Sectioned** — one long form broken into collapsible sections
- **Conditional** — fields appear based on earlier answers (reduces perceived length)

Always:
- Show progress ("Step 2 of 4")
- Save progress between steps (so back doesn't lose data)
- Allow going back without losing forward state
- Validate per step, not just at the end

---

## Submit states

A submit button has at least five states:

1. **Default** — neutral, ready
2. **Hover/focus** — slight color shift
3. **Active** — pressed, slight scale-down
4. **Disabled** — when form is invalid or required fields are empty
5. **Loading** — after click, while request is in flight (disable the button to prevent double-submit)
6. **Success** — brief confirmation before resetting
7. **Error** — if submission failed (with retry)

Design all of these. Real prototypes feel real because the loading state actually appears and behaves.

---

## Inline editing

For "edit a single field without a full form":

- Click the value, it turns into an input
- Enter to save, Escape to cancel
- Click outside to save (or to cancel — pick one and be consistent)
- Loading and error states on save

Inline editing is great when the user knows what they want to change. It's not a replacement for proper edit forms in complex flows.

---

## Form layout

- **Single column** is almost always right. Eye doesn't have to zigzag.
- **Two columns** only when fields naturally pair (city + state, first name + last name).
- **Label alignment** — top-left is most scannable.
- **Group related fields** with visual proximity, not heavy borders.
- **Section headings** for long forms, with helpful subtitles.

Spacing:
- 8-12px between label and input
- 4-8px between input and helper text
- 16-24px between sibling fields
- 32-48px between sections

---

## Accessibility for forms

Forms are the highest-stakes accessibility surface. Get these right:

- **Every input has a label** (visible, or `aria-label` for icon-only inputs)
- **Labels are programmatically associated** with inputs (`for`/`id` or wrapping `<label>`)
- **Required fields are programmatically marked** (`required` attribute)
- **Errors are announced** to screen readers (`aria-invalid`, `aria-describedby` pointing to the error message)
- **Focus is visible** — never remove the focus ring without replacing it
- **Tab order** is logical
- **Submit can be triggered by Enter** in single-line inputs
- **The form is operable** without a mouse

---

## Common form failures

- **Placeholder-as-label.** Disappears on type, accessibility nightmare.
- **No required indicator.** User submits, gets surprise errors.
- **Validation on every keystroke.** Aggressive and annoying.
- **Generic error messages.** "Invalid input" tells the user nothing.
- **Disabled submit with no explanation.** User clicks, nothing happens, no idea why.
- **No loading state.** User double-submits.
- **Lost input on error.** User has to retype everything because the form reset on validation fail.
- **Mobile inputs that trigger zoom.** Font-size below 16px on iOS.
- **Forms that don't survive back navigation.** Filled half a form, hit back to check something, came back to empty fields.

---

## A forms checklist

- [ ] Labels above all inputs
- [ ] Required fields marked
- [ ] Inputs at least 44px tall on mobile
- [ ] Font-size at least 16px on mobile (prevents iOS zoom)
- [ ] Autocomplete attributes set
- [ ] Correct input types (`email`, `tel`, etc.)
- [ ] inputmode set for numeric / email / tel inputs
- [ ] Validation timing makes sense (on blur or submit, not on every keystroke)
- [ ] Error messages are specific and actionable
- [ ] Submit button has loading, disabled, and success states
- [ ] Form survives refresh (or warns before navigation away with unsaved changes)
- [ ] Tab order is correct
- [ ] Focus rings visible
- [ ] Submit works on Enter

---

*See also: [07 — Content & Copy](./07-content-and-copy.md) for microcopy, [16 — Accessibility](./16-accessibility.md) for form accessibility*
