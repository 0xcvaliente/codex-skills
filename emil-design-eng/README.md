# Emil Design Engineering

Polish or review interface details using Emil Kowalski’s design engineering guidance: component feedback, spacing, typography, shadows, motion, and interaction continuity. Use for UI craft or Emil-style polish; keep brand direction with frontend-design and project audits with ui-design.

Adapted for Codex from [Emil Kowalski’s skills](https://github.com/emilkowalski/skills),
pinned to [`e8a175de22ae`](https://github.com/emilkowalski/skills/tree/e8a175de22ae1e49370fc144c1f3bb9aeedf988d).

## Workflow

1. Inspect the brief, design system, components, and current rendered states.
2. Read only the relevant guide sections for the named craft problem; use the performance cheatsheet for performance diagnosis.
3. Improve concrete details while preserving visual identity, accessible semantics, and user constraints.
4. Use animate for motion construction, review-animations for critique, and mobile-native for mobile browser behavior when installed.
5. Verify the actual affected states and report measured results separately from craft judgment.

## Output

Requested UI changes, or a Before / After / Why review with concrete locations and verification limits.

## Use

```text
$emil-design-eng polish this settings panel while preserving its visual identity and existing components.
```

From a clone of `0xcvaliente/codex-skills`, install the whole package:

```bash
python3 .system/skill-installer/scripts/install-skill-from-github.py \
  --repo 0xcvaliente/codex-skills --path emil-design-eng
```

The collection installer defaults to `$CODEX_HOME/skills` or `~/.codex/skills`.
Use `--dest` for another host, including `--dest ~/.agents/skills` where that is
the configured discovery directory. Preserve local edits before replacing an
existing copy. See the [official skills documentation](https://learn.chatgpt.com/docs/build-skills).

## Codex behavior and requirements

The skill uses existing project tools and available native browser/app/terminal
capabilities. It does not install a runtime by being loaded. Read-only requests
produce findings; requested fixes proceed within their scope. Dependencies and
version-sensitive APIs must match the actual project. Physical-device, release
build, and performance claims require corresponding evidence. Normal automatic
selection is enabled with a scoped description; explicit invocation identifies
the desired workflow.

## Package contents

- [SKILL.md](SKILL.md): concise Codex routing, workflow, and output.
- [Detailed guide](references/guide.md): the complete working guidance, loaded by relevant section.
- [Codex notes](references/codex-notes.md): scope, tools, versions, input semantics, and verification.
- [Original entrypoint](references/upstream-SKILL.md.source): exact upstream source without nested skill discovery.
- [Source manifest](references/source-manifest.json) and [provenance](references/provenance.md).

- [Performance cheatsheet](references/performance-cheatsheet.md).

## Validation and license

From the collection root, with Python and PyYAML:

```bash
python3 .system/skill-creator/scripts/quick_validate.py emil-design-eng
```

Structural validation and source hashes do not establish runtime UI quality.
Verify the actual target interaction for real work. MIT, copyright 2026 Emil
Kowalski; the exact [license](LICENSE) is retained.
