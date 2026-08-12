<p align="center">
  <img src="assets/maestro-vinci-banner.png" alt="Maestro: Vinci painting a product interface beside typography, image, color, and layout studies" width="100%" />
</p>

<h1 align="center">Maestro: Vinci</h1>

<p align="center"><strong>Make the interface specific. Prove it in pixels.</strong></p>

<p align="center">
  <a href="https://github.com/mbanderas/maestro-vinci/actions/workflows/validate.yml"><img alt="Validation status" src="https://github.com/mbanderas/maestro-vinci/actions/workflows/validate.yml/badge.svg" /></a>
  <a href="LICENSE"><img alt="MIT license" src="https://img.shields.io/badge/license-MIT-18d9e8" /></a>
</p>

A polished interface can still feel interchangeable. Maestro: Vinci gives Codex, Claude Code, and Agent Skills-compatible hosts a design specialist that turns product context into a specific visual direction, then inspects the rendered result before claiming success.

Vinci works inside the product already in front of it. It reads the repository, preserves the incumbent system, makes the design decisions the brief requires, and treats external references as bounded evidence rather than a style to copy.

> Direction before decoration. Product logic before novelty. Rendered pixels before confidence.

## Why Vinci exists

Coding agents can produce valid interfaces while leaving the consequential design decisions unresolved: hierarchy, rhythm, density, type, color, responsive behavior, edge states, motion, and imagery. Vinci makes those decisions explicit and testable.

- **Specific to the product:** direction starts from audience, content, brand, and existing components.
- **Built for real repositories:** Vinci preserves the target stack and extends the system already in use.
- **Useful critique:** findings connect observation to consequence and repair.
- **Complete state thinking:** loading, empty, error, focus, keyboard, reduced-motion, responsive, and zoom states stay in scope.
- **Verified output:** authored surfaces are rendered, inspected, repaired, and re-rendered before completion claims.

## What Vinci controls

| Capability | What it does |
|---|---|
| Product and interface design | Establishes hierarchy, layout, type, color, state, responsive behavior, motion, and imagery from the brief and incumbent system |
| Visual critique | Separates defects from preferences and writes each finding as observation, consequence, and repair |
| Design systems | Reads and extends existing tokens, components, patterns, and interaction grammar without silently replacing them |
| Anti-template review | Tests whether the result is specific to the product, content, audience, and brand |
| Accessibility | Checks semantics, contrast, focus, keyboard paths, touch targets, reduced motion, responsive behavior, and zoom |
| Rendered validation | Renders required states, inspects actual pixels, repairs confirmed defects, and re-renders before claiming success |
| Reference judgment | Uses a metadata-only external catalog with explicit retrieval caps, evidence limits, and do-not-copy rules |

## Install from GitHub

### Codex

```sh
codex plugin marketplace add mbanderas/maestro-vinci
codex plugin add maestro-vinci@maestro-vinci
```

### Claude Code

```text
/plugin marketplace add mbanderas/maestro-vinci
/plugin install maestro-vinci@maestro-vinci
```

Start a new task or restart the host after installation so its skill registry reloads.

### Portable local install

Clone the repository, then install the reviewed skill for Codex, Claude Code, or both:

```sh
git clone https://github.com/mbanderas/maestro-vinci.git
cd maestro-vinci
node scripts/install.mjs --target universal --scope user
```

The universal user install writes to:

- `~/.agents/skills/vinci` for Codex and Agent Skills-compatible hosts;
- `~/.claude/skills/vinci` for Claude Code.

Select one host, project scope, or a dry run:

```sh
node scripts/install.mjs --target codex --scope user
node scripts/install.mjs --target claude --scope project
node scripts/install.mjs --target universal --scope project
node scripts/install.mjs --target universal --scope user --dry-run
```

Use `--force` only when replacing a different copy at the exact `vinci` destination.

### npm

After npm publication, install the same reviewed skill for shared Agent Skills and Claude Code:

```sh
npx -y @maestrovinci/vinci
```

The npm package is not published yet. The GitHub and local installation paths above are available now.

## Invoke Vinci

Use `$vinci` in Codex or `/vinci` in a host that exposes skills as slash commands:

```text
$vinci Critique this account settings screen. Rank confirmed defects by user impact and preserve the existing component system.
```

```text
/vinci Design the responsive visual contract for this onboarding flow. Include loading, error, empty, keyboard, reduced-motion, and 200 percent zoom states.
```

```text
/vinci Redesign this landing page around the supplied product evidence. Keep the framework, tokens, routes, and approved claims unchanged.
```

## Design loop

1. Vinci classifies the task mode and change scope independently.
2. It inspects target-repository instructions, tokens, components, content, states, and same-type shipped surfaces.
3. It states a direction in observable terms before styling.
4. It builds semantic structure, layout, typography, surfaces, states, responsive behavior, motion, and imagery in that order.
5. It stress-tests realistic content and edge states while building.
6. It renders required frames, inspects the pixels, repairs confirmed defects, and re-renders.
7. It returns the artifact or critique with evidence, residuals, and the exact boundary of work not performed.

## Built for

- product teams that need distinctive interfaces without replacing their working design system;
- engineers who want design decisions expressed as buildable structure, states, and responsive behavior;
- designers who need a rigorous critique partner inside the repository;
- agent builders who want a portable design specialist with explicit evidence and validation boundaries.

## Included knowledge

The public skill contains:

- a portable Vinci runtime adapter and persona;
- condensed design doctrine;
- the 19-chapter craft manual and two delivery checklists;
- operating and rendered-interface evaluation methods;
- a safe visual-validation loop;
- a metadata-only catalog of bounded public design observations, patterns, source URLs, risks, and do-not-copy rules.

The package excludes raw external images, training sources, audits, holdouts, private memory, meta-prompts, browser profiles, databases, logs, and private Git objects or history. The [export manifest](EXPORT_MANIFEST.json) records public release provenance, input hashes, transformations, and the exclusion boundary without disclosing a private source repository or commit identifier.

## Evidence boundary

The external catalog does not contain screenshots. Its entries are time-bound observations, not accessibility certifications, runtime tests, performance claims, conversion claims, or permission to reproduce protected identity.

Vinci requires rendered evidence for claims about authored pixels. When a required render, browser, independent review, or accessibility check cannot run, the result records `not-run` or a residual. Missing evidence does not become a pass.

## From interface quality to market visibility

Strong design gives a product a clear point of view. Buyers still need to find it in answer engines.

- **[CiteSurge](https://citesurge.com)**: Applies Maestro's evidence-first discipline to enterprise GEO: measure what answer engines say, turn findings into prioritized action, and document what changed.

## Development

Requirements: Node.js 18 or later and npm.

```sh
npm ci
npm run check
```

`npm run check` validates manifests and skill structure, runs installer and release-tool tests, scans package hygiene, and inspects the exact npm archive allowlist.

The repository is cross-platform. CI runs the full check on Windows and Ubuntu.

## Legal and security

- [License](LICENSE)
- [Privacy](PRIVACY.md)
- [Security](SECURITY.md)
- [Disclaimer](DISCLAIMER.md)
- [Third-party notices](THIRD_PARTY_NOTICES.md)
- [Asset provenance](assets/PROVENANCE.md)
