# Ask Sonner

Configure, style, or troubleshoot Sonner toasts in React: Toaster setup, promise/loading updates, dismissal, themes, stacking, positioning, and multiple instances. Use when the project uses or explicitly requests Sonner.

Adapted for Codex from [Emil Kowalski’s skills](https://github.com/emilkowalski/skills),
pinned to [`e8a175de22ae`](https://github.com/emilkowalski/skills/tree/e8a175de22ae1e49370fc144c1f3bb9aeedf988d).

## Workflow

1. Inspect installed Sonner/framework versions, Toaster ownership, providers, theme, and overlay layering.
2. Read the matching guide/API.md section and verify current version-specific options in official docs when needed.
3. Use the right toast lifecycle and avoid duplicate Toasters or duplicate action/event delivery.
4. Preserve accessible announcements, understandable failure feedback, and the project’s visual tokens.
5. Exercise the actual trigger, loading/success/error transitions, dismissal, dark mode, and modal interactions as relevant.

## Output

A focused integration or fix, with observable lifecycle checks and remaining gaps.

## Use

```text
$ask-sonner fix these Sonner toasts appearing twice and losing the dark-mode styles.
```

From a clone of `0xcvaliente/codex-skills`, install the whole package:

```bash
python3 .system/skill-installer/scripts/install-skill-from-github.py \
  --repo 0xcvaliente/codex-skills --path ask-sonner
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
- [API.md](API.md).

## Validation and license

From the collection root, with Python and PyYAML:

```bash
python3 .system/skill-creator/scripts/quick_validate.py ask-sonner
```

Structural validation and source hashes do not establish runtime UI quality.
Verify the actual target interaction for real work. MIT, copyright 2026 Emil
Kowalski; the exact [license](LICENSE) is retained.
