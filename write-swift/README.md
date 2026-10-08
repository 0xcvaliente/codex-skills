# Write Swift

Write, review, or migrate Swift with value modeling, optionals/errors, ownership, protocols, generics, concurrency, performance, and Swift Testing. Use for Swift implementation and diagnostics; inspect toolchain and build flags before applying newer language features.

Adapted for Codex from [Emil Kowalski’s skills](https://github.com/emilkowalski/skills),
pinned to [`e8a175de22ae`](https://github.com/emilkowalski/skills/tree/e8a175de22ae1e49370fc144c1f3bb9aeedf988d).

## Workflow

1. Inspect Swift/Xcode version, deployment target, language mode, actor-isolation settings, and package/app boundaries.
2. Read only the relevant guide sections for the model, diagnostic, concurrency, ARC, performance, or testing issue.
3. Use value types and explicit ownership where appropriate. Keep UI isolation correct and expensive work off the UI actor when required.
4. Treat Swift 6.2 concurrency behavior as dependent on actual compiler features/settings; do not rewrite a general-purpose library to main-actor-by-default.
5. Use project builds/tests and targeted diagnostics. Change compiler settings or adopt new features only when compatible and necessary.

## Output

Version-appropriate Swift code or findings, relevant build/test evidence, and unresolved runtime limitations.

## Use

```text
$write-swift fix this Swift concurrency error while preserving the package’s public API and compiler settings.
```

From a clone of `0xcvaliente/codex-skills`, install the whole package:

```bash
python3 .system/skill-installer/scripts/install-skill-from-github.py \
  --repo 0xcvaliente/codex-skills --path write-swift
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
python3 .system/skill-creator/scripts/quick_validate.py write-swift
```

Structural validation and source hashes do not establish runtime UI quality.
Verify the actual target interaction for real work. MIT, copyright 2026 Emil
Kowalski; the exact [license](LICENSE) is retained.
