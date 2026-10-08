# Mobile Native Web

Fix mobile web and PWA platform details such as sticky hover, viewport units, input zoom, touch feedback, scrolling, safe areas, keyboard layout, and theme chrome. Use for web apps that feel wrong on a phone; use animate-expo for React Native.

Adapted for Codex from [Emil Kowalski’s skills](https://github.com/emilkowalski/skills),
pinned to [`e8a175de22ae`](https://github.com/emilkowalski/skills/tree/e8a175de22ae1e49370fc144c1f3bb9aeedf988d).

## Workflow

1. Match the reported symptom to the guide and inspect the existing viewport, styles, and support matrix.
2. Apply capability queries, suitable viewport units, safe-area padding, and input/gesture semantics where their rationale applies.
3. Keep zoom and selectable content available. Separate immediate press feedback from action activation.
4. Avoid global scroll/selection suppression on document content and preserve native link behavior.
5. Verify available browser/keyboard states and state which behaviors still require a physical device.

## Output

Focused CSS/meta/interaction fixes with reasons and honest hardware-validation limits.

## Use

```text
$mobile-native fix this mobile web screen’s viewport, input zoom, safe areas, and sticky hover behavior.
```

From a clone of `0xcvaliente/codex-skills`, install the whole package:

```bash
python3 .system/skill-installer/scripts/install-skill-from-github.py \
  --repo 0xcvaliente/codex-skills --path mobile-native
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

## Validation and license

From the collection root, with Python and PyYAML:

```bash
python3 .system/skill-creator/scripts/quick_validate.py mobile-native
```

Structural validation and source hashes do not establish runtime UI quality.
Verify the actual target interaction for real work. MIT, copyright 2026 Emil
Kowalski; the exact [license](LICENSE) is retained.
