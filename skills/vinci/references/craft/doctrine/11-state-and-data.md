# 11 — State, Persistence & Data

A prototype is convincing when state behaves like it would in the real product. This chapter covers state architecture, persistence patterns, and how to invent sample data that holds up under scrutiny.

---

## State categories

Not all state is the same. Treating them differently makes prototypes much cleaner.

### UI state

Ephemeral, doesn't need persistence:
- Is this dropdown open?
- Which tab is active?
- Is the user mid-drag?
- Has this tooltip been dismissed *this session*?

Lives in `useState`. Lost on refresh, which is fine.

### Application state

Persists across the session, sometimes across refreshes:
- Current view / route
- Logged-in user (in a real app)
- Theme preference
- Layout preferences (sidebar collapsed?)

Lives in `useState` + localStorage. Survives refresh.

### Domain state

The actual content the app manages:
- Items, projects, messages, tasks, whatever
- User-created content
- Settings

Lives in `useState` + localStorage (for prototypes) or a real backend (for production). Survives refresh, and ideally would sync.

### Derived state

Computed from other state. Don't store; compute:

```jsx
// Bad - stored derived state can go stale
const [filtered, setFiltered] = useState([]);
useEffect(() => setFiltered(items.filter(...)), [items]);

// Good - computed on render
const filtered = useMemo(() => items.filter(...), [items]);
```

---

## Persistence patterns

### localStorage

The default for HTML-file prototypes. Synchronous, simple, capped at ~5-10MB.

```jsx
function usePersistedState(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Quota exceeded, etc.
    }
  }, [key, value]);

  return [value, setValue];
}
```

Use a versioned key (`my-prototype-v1`) so you can break compatibility cleanly when you change the shape of stored data.

### sessionStorage

Same API, scoped to the tab. Cleared when the tab closes. Useful for transient state that should survive refresh but not a new session.

### URL state

For anything you'd want to share — current view, selected item, filters — the URL is the right home. Hash params for HTML-file prototypes:

```jsx
function useHashState(key, initial) {
  const [value, setValue] = useState(() => {
    const params = new URLSearchParams(window.location.hash.slice(1));
    return params.get(key) ?? initial;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(1));
    if (value) params.set(key, value);
    else params.delete(key);
    window.location.hash = params.toString();
  }, [key, value]);

  return [value, setValue];
}
```

This is also how deck/slide prototypes typically remember position.

### IndexedDB

For larger structured data (binary blobs, big lists), IndexedDB. More setup, more capability. Rarely needed for prototypes.

---

## Loading and async state

Even in a prototype with no real backend, mocking async behavior makes the design feel real:

```jsx
function useFakeLoad(initial, delay = 800) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setData(initial);
      setLoading(false);
    }, delay);
    return () => clearTimeout(t);
  }, []);

  return { data, loading };
}
```

This gives you a chance to design and demonstrate the loading state. Most prototypes that skip the loading state look broken when you try them on a slow connection.

Common loading patterns:
- **Skeleton screens** — show the layout shape in muted color
- **Spinners** — for short, indeterminate loads
- **Progress bars** — for known-duration operations (uploads, exports)
- **Optimistic updates** — show the result immediately, reconcile later

---

## Error state

Error states deserve more design attention than they usually get.

A good error UI:
1. Explains what happened
2. Says why (if known)
3. Offers a recovery action
4. Doesn't make the user feel stupid

```jsx
function useFakeRequest({ failRate = 0 } = {}) {
  const [state, setState] = useState({ loading: false, data: null, error: null });

  async function go(action) {
    setState({ loading: true, data: null, error: null });
    await new Promise(r => setTimeout(r, 600));
    if (Math.random() < failRate) {
      setState({ loading: false, data: null, error: new Error('Request failed') });
    } else {
      setState({ loading: false, data: await action(), error: null });
    }
  }

  return { ...state, go };
}
```

Set `failRate: 0.2` during prototype review so the error state actually shows up sometimes. Reviewers will see it and ask about it.

---

## Sample data

Generic sample data ("Item 1, Item 2, Item 3") makes the design feel half-finished. Realistic sample data makes it convincing.

### Names

A diverse, plausible set:

```js
const SAMPLE_NAMES = [
  'Maya Anders', 'Yuki Tanaka', 'Constantine Papadopoulos',
  'Aaliyah Johnson', 'Lars Eriksson', 'Priya Krishnamurthy',
  'Wei Chen', 'Fatima Al-Rashid', 'Oliver Bennett',
  'Sofía García', 'Yi Wu', 'Madeline O\'Connor',
];
```

Mix:
- Cultural backgrounds
- Name lengths (short, medium, very long)
- Special characters (apostrophes, accents)
- Hyphenated names
- Single names

### Numbers

Mix small, medium, large. Don't round everything:

```js
const SAMPLE_PRICES = [12.40, 89.00, 192.75, 1240.00, 7.50, 459.20];
const SAMPLE_COUNTS = [3, 24, 1, 187, 42, 9, 1247];
```

### Dates

Range across recent past, with some near now and some farther away:

```js
const now = Date.now();
const SAMPLE_DATES = [
  now - 1000 * 60 * 5,      // 5 min ago
  now - 1000 * 60 * 60 * 2, // 2 hr ago
  now - 1000 * 60 * 60 * 24, // yesterday
  now - 1000 * 60 * 60 * 24 * 4, // 4 days ago
  now - 1000 * 60 * 60 * 24 * 30, // a month ago
];
```

Use relative date formatting in the UI ("2 hours ago," "yesterday," "Apr 12") rather than absolute timestamps.

### Content

Don't repeat the same string across multiple items. Write 8-12 distinct, plausible titles:

```js
const SAMPLE_PROJECTS = [
  'Q3 marketing landing page',
  'Mobile onboarding redesign',
  'Pricing experiment v2',
  'Brand refresh — internal review',
  'Customer dashboard refactor',
  'Annual report 2025',
  'New help center IA',
  'Email template overhaul',
];
```

Mix lengths to test how the design handles each.

### Avatars

If you don't have real photos:

```jsx
function Avatar({ name, size = 40 }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('');
  const hue = name.charCodeAt(0) * 7 % 360;

  return (
    <div style={{
      width: size, height: size,
      borderRadius: '50%',
      background: `oklch(60% 0.12 ${hue})`,
      color: 'white',
      display: 'grid', placeItems: 'center',
      fontWeight: 600,
      fontSize: size * 0.4,
    }}>{initials}</div>
  );
}
```

Hash-based color from the name gives consistent (but distinct) colors per person.

---

## Faking backends

For prototypes that need to feel like they're talking to a server:

### Local "API"

Wrap your data access in a tiny service module:

```js
const fakeApi = {
  async getItems() {
    await delay(300);
    return load('items') ?? [];
  },
  async addItem(item) {
    await delay(200);
    const items = load('items') ?? [];
    const newItem = { ...item, id: Date.now() };
    save('items', [...items, newItem]);
    return newItem;
  },
  async deleteItem(id) {
    await delay(200);
    const items = load('items') ?? [];
    save('items', items.filter(i => i.id !== id));
  },
};

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }
function load(key) { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } }
function save(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
```

Now your components have realistic async APIs to consume. Add failure modes:

```js
async getItems() {
  await delay(300);
  if (Math.random() < 0.1) throw new Error('Network error');
  return load('items') ?? [];
}
```

### Simulated real-time

For collaborative or live-updating prototypes:

```jsx
function useSimulatedActivity() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents(e => [...e, {
        id: Date.now(),
        user: pickRandom(SAMPLE_NAMES),
        action: pickRandom(['commented', 'updated', 'shared']),
        at: new Date(),
      }].slice(-20));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return events;
}
```

A trickle of fake activity makes a static prototype feel alive.

---

## Data shape

Even in a prototype, take a moment to model the shape of your data:

```ts
type Project = {
  id: string;
  title: string;
  description?: string;
  status: 'draft' | 'active' | 'archived';
  createdAt: number;
  updatedAt: number;
  ownerId: string;
  memberIds: string[];
  tags: string[];
};
```

Even without TypeScript, having this shape in a comment makes the rest of the prototype consistent. Reviewers will also be able to imagine extensions and edge cases more easily.

---

## State debugging

When state behavior is off:

- Is the right component holding the state? (Lifted enough? Too high?)
- Is state being mutated rather than replaced? (`items.push(x)` vs. `[...items, x]`)
- Are effects running too often? (Missing dependencies? Stale closures?)
- Is derived state stored when it should be computed?
- Does the prototype survive refresh?
- Does back/forward navigation work?

---

*See also: [10 — Interactive Prototypes](./10-interactive-prototypes.md), [12 — Forms & Inputs](./12-forms-and-inputs.md)*
