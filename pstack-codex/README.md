# Pstack Codex

Pstack's engineering workflows adapted into one installable Codex skill.
Based on [Lauren Tan's pstack](https://github.com/cursor/plugins/tree/main/pstack)
0.15.15. Go deep first, write less code, and verify the result against the real artifact.

The package includes native Codex routing and **all 164 original upstream files**:

| Material | Included |
|---|---|
| Main and situational workflows | 27, including poteto-mode, how, why, architect, arena, swarm, interrogate, recall, and writing/verification maintenance. |
| Engineering principles | All 24 full principle sources. |
| Poteto playbooks | All 23 originals plus Codex execution guidance for each. |
| Agent definitions | Poteto Agent and Comment Sicko as reference prompts. |
| Benny | Setup, triage, reproduction/fix, templates, control contracts, and routing/feature-map examples. |
| Documentation and assets | Full upstream README, ten-chapter guide, illustrations, logo, manifest, and license. |
| Tools | Original Bun orchestration store, PR watcher, tests, plan checker, worktree audit, bootstrap, and lockfile. |
| Native helpers | Portable decision logger and an offline complete-source integrity checker. |

The [complete catalog](references/catalog.md) links to every workflow and
playbook. The [source manifest](references/upstream-manifest.json) records each
original path, stored path, executable mode, and SHA-256. Only original filenames
`SKILL.md` become `SKILL.md.source`; every original file's bytes are unchanged.
This prevents nested Cursor skills from becoming unintended Codex entrypoints.

## Install

From the collection's installer:

```bash
python3 codex-skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo 0xcvaliente/codex-skills --path pstack-codex
```

Its default is `$CODEX_HOME/skills`, or `~/.codex/skills`. Use `--dest` for your
host's skill directory. For setups using the documented `~/.agents/skills`
location, pass `--dest ~/.agents/skills`. See the
[official skills documentation](https://learn.chatgpt.com/docs/build-skills).
You can also copy the whole `pstack-codex/` directory, preserving an existing
installation and its local edits. Copy the complete package so references and
helpers remain together. Check discovery on your next turn or in a new chat.

## Use

```text
$pstack-codex fix this bug: reproduce it, trace the cause, and verify the fix.

$pstack-codex how does cancellation flow through this subsystem?

$pstack-codex why was this caching boundary chosen?

$pstack-codex architect this API before implementing it.

$pstack-codex interrogate this branch for correctness and lifetime bugs.

$pstack-codex arena compare two isolated implementation candidates.

$pstack-codex benchmark-checklist assess these before/after measurements.

$pstack-codex babysit check PR 123 and report outstanding blockers.

$pstack-codex create-verification-skill for this app using its existing harness.

$pstack-codex help choose a workflow for this task.

$pstack-codex off
```

Use `$pstack-codex poteto-mode <task>` for the main router, or name a workflow
directly. Original `/how` and similar names are aliases within this skill, not
separate registered slash commands. Automatic skill selection remains enabled;
explicit invocation makes the intended workflow clear.

## Codex behavior

The [runtime adapter](references/codex-runtime.md),
[native playbooks](references/playbooks.md), and
[native workflows](references/workflows.md) replace Cursor-specific execution.

The default inherits your current model and needs no setup. Optional setup
records agreed project workflow preferences, not global Codex model settings.
Delegation requires user or project authorization and available collaboration
tools. Arena/swarm requests express parallel intent. The package respects host
concurrency, reports serial/same-model limitations, and reviews actual artifacts.

Native GitHub, browser/app, terminal, worktree, and automation tools are used
when available. A check request reports status; a read-only investigation stays
read-only. PR publication, messages, tickets, merging, deployment, and future
monitoring follow the user's actual authorization. No Cursor rule files, hooks,
background loops, or schedules are installed by loading the skill.

The [Benny guide](references/benny.md) adapts the optional automation pack. It
requires configured Slack/tracker access, exact source-thread coordinates, an
app-control adapter, feature maps, and action authorization. Installation alone
does not enable it. Missing required configuration prevents writes. Reproduction
requires before/after proof and produces bounded draft PRs, never automatic merges.

The original make-bot-ui workflow depends on a supported webhook service. Codex
scheduled automations alone do not supply its Cursor/Grok Bot endpoint or secret
card. The native workflow states that dependency explicitly.

## Files and requirements

`SKILL.md` is the only discoverable skill. `agents/openai.yaml` supplies UI
metadata. Native references provide Codex behavior; `references/upstream/` is a
pinned, unchanged source reference. Original source links mentioning `SKILL.md`
resolve to `SKILL.md.source`; use the catalog for clickable local navigation.

Core engineering work needs the target project's source, tools, and appropriate
verification harness. The integrity checker uses Python 3.9+ and the standard
library. The logger uses Bash and ordinary command-line utilities. Neither
requires Bun, Node, a separate LLM service, or the original Cursor plugin.

The retained Bun/forge helpers are source material with their original runtime
requirements. They have not been ported or executed as Codex integrations.
Their preservation is separate from the native workflow's operational coverage.

## Verification and maintenance

From this package:

```bash
python3 scripts/check_package.py
python3 -m unittest discover -s tests -v
bash scripts/decision-log.sh work/decisions.tsv fix "Chosen change" \
  "Reason" "Evidence path" "Verified result"
```

For an independent comparison with the original checkout:

```bash
python3 scripts/check_package.py --source /path/to/cursor-plugins/pstack
```

From the collection, with Python and PyYAML available:

```bash
python3 .system/skill-creator/scripts/quick_validate.py pstack-codex
```

The helper tests check source corruption/omission, accidental nested discovery,
and append-safe/sanitized decision records. Structural and integrity checks do
not prove every engineering workflow or external automation in a real project.
No Codex performance benchmark or live Benny integration is claimed.

To update, review upstream changes against the pinned revision, preserve local
adaptation decisions, refresh the complete source manifest, and rerun checks.
Installed copies do not automatically update when GitHub changes.

## License and provenance

MIT, copyright 2026 Lauren Tan. The [original license](LICENSE) is retained in
the package and source snapshot. Reviewed revision:
[`ccb5507cec1546dc88135c1139c811e6c59115ba`](https://github.com/cursor/plugins/tree/ccb5507cec1546dc88135c1139c811e6c59115ba/pstack),
2026-10-08. See [provenance and adaptation notes](references/provenance.md).
This is a personal Codex adaptation; no affiliation or endorsement is claimed.
