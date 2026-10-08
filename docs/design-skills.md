# Codex design skill upgrade

Integrated all 14 skills from [emilkowalski/skills](https://github.com/emilkowalski/skills), reviewed at [`e8a175de22ae1e49370fc144c1f3bb9aeedf988d`](https://github.com/emilkowalski/skills/tree/e8a175de22ae1e49370fc144c1f3bb9aeedf988d) on 2026-10-08. Twelve packages are new; `animate` and `review-animations` have upgraded Codex entrypoints, metadata, documentation, and provenance. Six existing design packages have focused integration updates. The repository now contains 41 regular skills and six system snapshots, including the separately added `pstack-codex`.

## Choose the workflow

| Task | Skill |
| --- | --- |
| Focused interface craft inside the existing visual direction | `emil-design-eng` |
| New web UI animation | `animate` |
| React Native or Expo animation | `animate-expo` |
| Name an observed motion effect | `animation-vocabulary` |
| Requested Apple-inspired or Apple-platform interaction | `apple-design` |
| App-wide motion audit and improvement plans | `improve-animations` |
| Find worthwhile motion opportunities | `find-animation-opportunities` |
| Mobile-web behavior and browser chrome | `mobile-native` |
| Choose a library for a real capability gap | `pick-ui-library` |
| Working alternatives with a comparison picker | `prototype` |
| Realistic edge-case fixtures and UI resilience | `break-ui` |
| Sonner integration and troubleshooting | `ask-sonner` |
| Swift and SwiftUI implementation | `write-swift` |
| Scoped motion critique | `review-animations` |

Existing ownership stays specific: `frontend-design` establishes visual direction; `ui-design` owns its implementation and audit modes; `web-experience-design` builds a coherent page through a representative slice; `web-design-guidelines` keeps its local resilience checklist; `ui-verification` measures rendered behavior; `ui-animation` measures recordings, fits curves, diagnoses motion, tunes gesture mechanics, and gates sparse sound.

The existing motion scripts, recipes, audit rules, browser probes, and fixture files are preserved. A few routing rubrics and the local frequency guidance were adjusted to match the new boundaries and avoid treating all keyboard-triggered visual feedback as forbidden. The UI Verification runtime requirement moved from unsupported frontmatter into the body.

## What is retained

Every Emil package includes:

- A concise `SKILL.md` and Codex invocation metadata in `agents/openai.yaml`.
- A detailed working guide and Codex notes for scope, input semantics, versions, and verification.
- The exact original entrypoint as `references/upstream-SKILL.md.source`.
- Every upstream supporting file in its original package layout.
- An unchanged MIT license, pinned provenance, and SHA-256 source manifest.

The 23 retained source files cover the 14 original entrypoints, all eight package resources, and the repository's performance cheatsheet. The cheatsheet is in `emil-design-eng/references/`. Licenses are retained in all 14 packages. Source copies use a `.source` suffix to avoid registering nested skills.

The working guides omit canned readiness greetings and relocate resource links. Codex notes make author defaults conditional on the user's requirements, project tokens, accessibility, installed versions, and actual host tools. Review and discovery requests remain scoped; requested fixes can proceed without an extra upstream approval step. Cursor-only invocation flags are omitted from active entrypoints.

## Install and update

From a clone of [0xcvaliente/codex-skills](https://github.com/0xcvaliente/codex-skills), the bundled installer can install missing packages:

```bash
python3 .system/skill-installer/scripts/install-skill-from-github.py \
  --repo 0xcvaliente/codex-skills \
  --path emil-design-eng animate animate-expo animation-vocabulary apple-design \
  improve-animations find-animation-opportunities mobile-native pick-ui-library \
  prototype break-ui ask-sonner write-swift review-animations
```

The installer preserves existing destinations by refusing to overwrite them. Update existing copies only after comparing local edits, and copy whole packages so references remain together. This host uses `~/.codex/skills`; the installer also accepts `--dest` for hosts configured to discover elsewhere. Installed copies do not update when a separate checkout changes.

Instruction packages do not install UI dependencies or an Apple/Expo toolchain. Check the target project's versions and official APIs before implementation. A desktop screenshot or touch emulation does not establish physical-device, release-build, or frame-rate verification.

## Verification performed for this upgrade

Twenty changed skill entrypoints pass the bundled structural validator. All 14 new invocation metadata files parse correctly and have valid descriptions and explicit skill prompts. All 23 retained source files match their manifests and the pinned source checkout byte for byte; every retained MIT license matches upstream. All package Markdown file links resolve in the complete repository checkout. Existing helper, probe, rule, recipe, and fixture files were checked against the pre-upgrade baseline.

The existing maintenance scenarios were read and checked for instruction consistency, including discovery versus implementation, repeated keyboard actions, mobile Audit routing, preservation of real proof and branding, recording frame rates, sparse sound, browser auth gaps, hit areas, and clearing re-runs. This was a manual instruction/fixture review, not an automated model evaluation or runtime UI test. Real target applications still need their own build, interaction, visual, and device checks.

To structurally check an individual package, with Python and PyYAML installed:

```bash
python3 .system/skill-creator/scripts/quick_validate.py emil-design-eng
```

## Maintain the adaptation

Compare the pinned upstream revision before updating. For each package, verify `references/source-manifest.json`, retain the exact source and license, review changed APIs, then update the working guide and Codex notes. Preserve existing helpers and project-independent routing. Update package READMEs and the root catalog together. The installed packages do not silently fetch, execute, or replace upstream instructions at invocation.
