# Rendered Interface Evaluation

Apply to rendered interactive web and product interfaces. Use deck, document, or brand-asset quality checks for other media. A score never replaces accessibility, factual integrity, or visual inspection.

## Evidence requirement

Score from rendered pixels across at least three relevant widths, every supported color mode, and all reachable primary states. Record concrete observations. Source-only scoring is invalid.

## Weights

| Category | Base | Marketing | Product UI | Dashboard | Mobile |
|---|---:|---:|---:|---:|---:|
| Visual hierarchy | 12 | 10 | 12 | 14 | 11 |
| Task clarity | 12 | 10 | 14 | 15 | 12 |
| Layout and spacing | 10 | 9 | 8 | 12 | 8 |
| Typography | 10 | 12 | 7 | 7 | 8 |
| Color and visual language | 8 | 8 | 6 | 8 | 7 |
| Component behavior and states | 10 | 6 | 14 | 8 | 11 |
| Responsive behavior or mobile ergonomics | 8 | 8 | 8 | 6 | 12 |
| Accessibility | 12 | 12 | 12 | 12 | 14 |
| Content and UX writing | 6 | 8 | 6 | 6 | 6 |
| Distinctiveness | 5 | 10 | 2 | 1 | 3 |
| Coherence and consistency | 4 | 4 | 8 | 8 | 3 |
| Implementation quality | 3 | 3 | 3 | 3 | 5 |

Every column totals 100.

## Anchors

Score each category from 0 to 4, then calculate `points = anchor / 4 x weight`.

| Anchor | Meaning |
|---:|---|
| 0 | Absent or actively harmful |
| 1 | Weak, defective, or recognizable default output |
| 2 | Acceptable; functional but generic or incompletely verified |
| 3 | Strong, deliberate, consistent, and verified |
| 4 | Exceptional, distinctive, task-serving, and verified under stress |

An anchor needs evidence. Examples: blur-test hierarchy, primary-action location, measured alignment, line measure, contrast ratio, observed state list, tested widths, keyboard route, exact weak string, repeated distinctive move, token exceptions, console result.

## Automatic rejection

Any one rejects the interface regardless of total score:

1. text or meaningful non-text contrast below required threshold;
2. keyboard-unreachable control or missing visible focus;
3. form control without a programmatic label;
4. primary-content horizontal scroll at 320px or clipping at 200% zoom;
5. missing empty, loading, or error state on a surface that can enter it;
6. meaning conveyed by color alone;
7. fabricated logo, customer, testimonial, statistic, certification, or product capability presented as real;
8. placeholder or lorem content in delivered work;
9. initial-render console error or failed required asset;
10. non-trivial motion without a reduced-motion path;
11. destructive action without confirmation, undo, or explicit consequence;
12. touch target below the WCAG hard floor on a touch surface.
13. a multi-line authored text block ending in one short rendered word, or a claimed long-word exception without the comparative evidence required by `design-operations.md`.
14. content-insensitive geometry: a stretched decorative container with no semantic or brand role, or a forced-height stage whose content-sized comparison preserves purpose and hierarchy while removing dead space.

## Verdict

| Score | Verdict |
|---:|---|
| below 55 | Reject; return to structure |
| 55-69 | Below bar; repair two weakest weighted categories |
| 70-84 | Acceptable |
| 85-94 | Strong |
| 95-100 | Exceptional; requires full evidence |

Additionally require zero automatic rejections and no category below half its available weight. A numeric pass with missing evidence is `not-run`, not acceptable.

## Anti-slop interpretation

Distinctiveness is not decoration count. Score it from one repeated, brief-derived decision that helps the task. Penalize framework-default composition, generic centered hero plus equal cards, arbitrary gradients, stretched decorative pills, unearned fixed-height stages, card soup, decorative dashboards, fake proof, interchangeable copy, and motion without a job. Do not penalize a conventional pattern that is correct for a high-frequency product task.

## Output record

```text
Surface:
Viewports and modes:
States inspected:
Category anchors and evidence:
Total:
Automatic rejections:
Categories below half weight:
Verdict:
Top repairs in operating-method order:
```
