# 10 — Interactive Prototypes

An interactive prototype is a hi-fi design with verbs. The bar: it should feel like a real working app, not a clickable picture. This chapter covers what "interactive" really means, how to scope a prototype, and the patterns that separate convincing prototypes from clickable mockups.

---

## What "interactive" actually means

In rough order of importance:

1. **State that persists** — clicking something changes something, and the change holds (and survives refresh, where appropriate)
2. **Real transitions** — motion that conveys cause and effect, not just CSS hover
3. **Plausible content** — form validation, empty states, error states, loading states
4. **Navigation that mirrors the real flow** — onboarding, multi-step, back-stack
5. **Edge cases visible** — what happens with 0 items, or 100? what about long titles?
6. **Affordances that match the platform** — a "tap" target on phone is 44px, not 24px

If your prototype only has hover states, it's a hi-fi mockup, not a prototype.

---

## Choose the right fidelity

The single biggest decision: how interactive?

| Level | Purpose | Effort | When to use |
|---|---|---|---|
| **Clickable mockup** | Show navigation between static screens | Low | Early concept review, flow validation |
| **Stateful prototype** | Demonstrate real state changes | Medium | Stakeholder demos, usability sketching |
| **Hi-fi interactive** | Feels indistinguishable from a real app | High | User testing, investor demos, final design review |
| **Functional prototype** | Backed by real (or simulated) data and logic | Very high | Engineering validation, complex flow testing |

Match fidelity to purpose. A clickable mockup is fine for a 30-minute review of a new flow. A hi-fi interactive is necessary for user testing because gaps in fidelity become research bias.

**Pick one and commit.** A half-finished hi-fi reads as broken.

---

## The prototype stack

For most prototypes, a lightweight stack is right:

- **HTML + CSS** for layout and visual fidelity
- **React with Babel-in-the-browser** for state and interaction
- **Inline styles or scoped CSS** for component styling
- **localStorage** for persistence

Heavier stacks (build tooling, real frameworks, real APIs) are warranted when:
- The prototype will become production code
- You're testing real backend behavior
- The fidelity demands it (e.g., real device sensors, real ML)

For most design work, a single HTML file with React inline is plenty.

---

## State management

### Component state

For most prototype state, `useState` is enough:

```jsx
function ItemList() {
  const [items, setItems] = useState([
    { id: 1, title: 'First item', done: false },
    { id: 2, title: 'Second item', done: true },
  ]);

  function toggle(id) {
    setItems(items.map(i =>
      i.id === id ? { ...i, done: !i.done } : i
    ));
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => toggle(item.id)}>
          {item.done ? '✓' : '○'} {item.title}
        </li>
      ))}
    </ul>
  );
}
```

### Lifted state

When two sibling components need to share state, lift it to the common parent. This is the React 101 pattern; it works for prototypes too.

### Reducers for complex state

When state has more than ~3 transitions or multiple sources of update, `useReducer` makes the logic explicit:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'add': return { ...state, items: [...state.items, action.item] };
    case 'remove': return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case 'reset': return { ...state, items: [] };
    default: return state;
  }
}
```

### Context for app-wide state

For values that many components need (theme, current user, locale), React context is the right call. Don't reach for Redux/Zustand/etc. in a prototype unless you actually have a state-management problem.

---

## Persistence

Two things should survive a refresh:

### 1. The user's "where am I?"

If the prototype has navigation, the current screen should persist. Either:
- In the URL (best — also enables sharing specific states)
- In localStorage (simpler for HTML-file prototypes)

### 2. The user's "what did I do?"

Items added, settings toggled, progress in onboarding — anything the user changed during the session.

```jsx
function usePersistedState(key, initial) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

Persistence is critical because reviewers refresh constantly during iterative design review. Losing their place is a tax on every iteration.

---

## Realistic content

Pre-populate with believable data. Five items, not "Item 1, Item 2, Item 3."

- Real-sounding names with diversity
- Plausible numbers (not all $1,234)
- Dates that range across days, weeks, months
- A mix of short and long content to test layout
- A few intentional edge cases (one very long title, one missing avatar)

See [07 — Content & Copy](./07-content-and-copy.md) for the deep dive.

---

## Edge cases to design

Every prototype should demonstrate at least the happy path **and**:

- **Empty state** — what does it look like with no data?
- **Loading state** — what does it look like while data arrives?
- **Error state** — what does it look like when something fails?
- **Long content** — what about a 200-character title?
- **Many items** — what about 50 in a list?
- **Single item** — what about just one?
- **Permission states** — what if the user doesn't have access?
- **Offline state** — what if the network is gone?

You don't have to design *all* of these for *every* element. Pick the ones most relevant to the prototype's purpose.

---

## Transitions and motion

Motion in a prototype does double duty: it sells the fidelity and it explains the interaction.

Default patterns:
- Page change: fade or slight slide, 200-300ms
- Modal open: scale from 0.95 + fade, 250ms ease-out
- Item added to list: slide in from top, 200ms
- Item removed: fade + slight scale down, 150ms
- Form submit: button shows loading state, then success state, then resets

See [09 — Motion & Animation](./09-motion-and-animation.md) for the deep dive.

---

## Device frames

If the prototype is for a phone or desktop app, frame it. A bare browser window with a phone-shaped div in the middle doesn't sell the design.

- iOS / Android device bezels for mobile prototypes
- macOS / browser window chrome for desktop prototypes
- Include realistic status bar, time, battery, etc.

The frame doesn't have to be interactive — but it must be visually correct for the platform.

---

## Navigation

For multi-screen prototypes, build real navigation:

- **Tab navigation** for switching between persistent sections
- **Stack navigation** for drilling into details and back out (with a back button that actually works)
- **Modal navigation** for ephemeral flows (onboarding, settings)
- **Deep links** if possible — a way to jump directly to a state

Don't just stack screens vertically with no transitions. The navigation pattern is part of what's being designed.

---

## Demonstrating flows

When the prototype is meant to walk through a specific flow:

- **Make the entry point obvious.** A welcome screen, a clear CTA, an instructed starting point.
- **Make the happy path frictionless.** Don't make the reviewer fight the prototype to see the design.
- **Show the off-ramps.** What happens if the user backs out, cancels, errors? Even if not implemented, surface these as next states.
- **Reset easily.** A "reset prototype" button somewhere lets the reviewer start over without refreshing.

---

## Demonstrating variations

When the prototype is meant to explore multiple variations:

- **Use a tweaks panel** or in-design controls to switch between variants
- **Don't fork into multiple files** — reviewers can't A/B in their head across tabs
- **Make the variation axis obvious** — labels, segmented controls, comparison views

See [14 — Variations & Tweaks](./14-variations-and-tweaks.md).

---

## Common prototype failures

- **Looks like a real app, behaves like a slideshow.** Click anywhere → next screen. No real state, no real logic.
- **State doesn't persist.** Refresh loses everything; reviewers refresh constantly.
- **Only the happy path.** No empty, no error, no loading.
- **Real interactions only for the demo path.** Click outside the script and nothing happens.
- **Animations that look great once and tedious on the third view.**
- **Hardcoded sample data with three identical "John Smith" entries.**
- **Forms that accept anything as valid.**
- **Dark mode toggle that only changes some elements.**

---

## A prototype checklist

Before delivery:

- [ ] State persists across refresh
- [ ] At least one full flow works end-to-end
- [ ] Empty, loading, error states designed (where relevant)
- [ ] Form validation actually validates
- [ ] All interactive elements have hover, focus, active states
- [ ] Sample content is realistic and diverse
- [ ] Edge cases (long content, many items) handled
- [ ] Navigation works in both directions
- [ ] Console clean
- [ ] Works on the target device size (or framed appropriately)
- [ ] Refresh-safe, share-safe (URL state where possible)

---

*See also: [11 — State, Persistence & Data](./11-state-and-data.md), [12 — Forms & Inputs](./12-forms-and-inputs.md), [14 — Variations & Tweaks](./14-variations-and-tweaks.md)*
