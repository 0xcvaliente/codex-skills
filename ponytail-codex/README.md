# Ponytail Codex

The smallest complete change, packaged as a standalone Codex skill. Adapted
from [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) 5.0.0.

Codex reads the task and connected code, reuses what the project already has,
and chooses the simplest implementation that meets the requirements. It keeps
necessary validation, error handling, security, accessibility, and meaningful
verification. Reviews and audits examine correctness and expected load as well
as opportunities to remove unnecessary code.

## Workflows

| Request | Result |
|---|---|
| Coding task | Complete implementation using existing project patterns, with relevant verification. |
| `lite` | Requested implementation plus a brief smaller alternative when useful. |
| `full` | Smallest complete solution; the default level. |
| `ultra` | Also challenges unnecessary scope while honoring explicit requirements. |
| `review` | Prioritized findings for a diff, branch, PR, commit, or named files, including connected callers. |
| `audit` | Repository or package assessment with explicit coverage and workload assumptions. |
| `debt` | Counted ledger of actual `ponytail:` shortcut comments, including missing revisit triggers. |
| `gain` | Attributed upstream benchmark figures and limitations; no claim of measured Codex savings. |
| `help` / `off` | Usage guidance, or stop applying the skill in the current chat. |

Review, audit, debt, gain, and help are one-shot reports. Reviews and audits
produce findings by default; include a request to fix them when you want edits.

## Install and use

From a clone of `0xcvaliente/codex-skills`:

```bash
python3 .system/skill-installer/scripts/install-skill-from-github.py \
  --repo 0xcvaliente/codex-skills --path ponytail-codex
```

The collection's installer defaults to `$CODEX_HOME/skills`, or
`~/.codex/skills`, and refuses to overwrite an existing destination. Use
`--dest` for a different host's skill root. Codex CLI's current documented
user-level discovery location is `~/.agents/skills`; for that setup, pass
`--dest ~/.agents/skills`. You can also copy the complete package into your
host's skill directory after checking for an existing copy. See the
[official skill documentation](https://learn.chatgpt.com/docs/build-skills)
for current discovery behavior.

```text
$ponytail-codex fix this bug in the shared helper and update affected callers.

$ponytail-codex lite build the requested settings form using our components.

$ponytail-codex ultra simplify this cache design for a single-process CLI.

$ponytail-codex review the staged changes, including affected callers.

$ponytail-codex audit this API package for bugs, expected load, and needless code.

$ponytail-codex debt list our shortcuts and flag missing revisit triggers.

$ponytail-codex gain explain the upstream benchmark and its limits.

$ponytail-codex off
```

Normal discovery is enabled for coding and Ponytail requests. Explicit mentions
make the intended workflow clear. Levels are preferences in the current chat
while its context is available. This instruction package does not install hooks,
write global mode settings, or guarantee activation in every turn.

## Deliberate shortcuts

Use the project's comment syntax to record an accepted limit and when to revisit it:

```python
# ponytail: one worker only; revisit when adding workers; use a shared store
```

The debt workflow searches comments and excludes prose examples and string
literals. A marker without a meaningful revisit trigger is tagged `no-trigger`.
A shortcut cannot remove a requirement or necessary safety control.

## Requirements and verification

The workflow is instruction-only. It needs the target project's source and
appropriate tools/checks; Git is useful for diffs and `rg` for source searches.
No Ponytail runtime, Node dependency, external LLM account, or plugin is required.

`SKILL.md` holds the core workflow. `agents/openai.yaml` supplies Codex metadata.
`references/` contains review/audit, shortcut ledger, benchmark, and provenance
guidance, loaded only when relevant.

From the collection root, validate structure with Python and PyYAML:

```bash
python3 .system/skill-creator/scripts/quick_validate.py ponytail-codex
```

Structural validation does not establish behavioral quality or benchmark
performance. This adaptation has not been independently benchmarked in Codex.

## License and source

Distributed under the retained upstream [MIT license](LICENSE), copyright
2026 DietrichGebert. Reviewed source revision:
[`b088b2df6e08d4306c6a3c3d575fe38c2d2d2989`](https://github.com/DietrichGebert/ponytail/tree/b088b2df6e08d4306c6a3c3d575fe38c2d2d2989),
2026-10-08. See [provenance](references/provenance.md) for inspected sources and
adaptation choices. No affiliation or endorsement is claimed.
