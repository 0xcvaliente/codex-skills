# Skill Creator — System Snapshot

`skill-creator` helps create or update reusable Codex skills with precise activation descriptions, task-relevant instructions, and only the supporting resources the workflow needs. Its central principle is to give a capable agent useful, non-obvious guidance without expanding the user's assignment.

This directory is a **system skill snapshot**. It documents and implements helper behavior preserved in the repository; the active host's installed skill and supported metadata schema may evolve separately.

## When to use it

Use it to turn a repeatable workflow into a skill, revise a skill that demonstrably misroutes work, add a reliable helper, or maintain interface metadata. A narrow correction need not become a wholesale rewrite.

For packaging several capabilities as a plugin, use [Plugin Creator](../plugin-creator/README.md). For downloading an existing package, use [Skill Installer](../skill-installer/README.md).

## How it works

The workflow starts with the actual requests the skill should handle. Choose a clear name and frontmatter description, then write the shared purpose, constraints, and routing in `SKILL.md`. Large mode-specific procedures belong in linked references.

Scripts are useful when repeated logic benefits from deterministic execution. Assets belong in generated output rather than being loaded as instructions. Optional `agents/openai.yaml` metadata controls the skill's UI presentation and invocation policy; existing unrelated settings should be preserved.

The bundled initializer can create a new skill and selected resource directories. Existing skills are edited in place. Structural validation checks frontmatter, naming, and unfinished scaffold placeholders, while realistic usage checks assess whether the instructions actually help.

Progressive disclosure has three stages: a skill's name and description help selection, its body is read when it applies, and references or helpers are used only as needed. The workflow discourages boilerplate and auxiliary documentation unless the user or packaging requirements call for it.

## Requirements and output

Writing instructions requires no external service. The Python helpers support initialization and metadata generation; `quick_validate.py` requires PyYAML. Meaningful behavioral testing can use an isolated workspace and an independent worker when the task warrants it and delegation is available and authorized.

The result is a discoverable skill directory with `SKILL.md` and any justified resources. A valid structure does not establish that every behavioral scenario is correct, and a new skill does not imply permission to install unrelated dependencies or perform external actions.

## Example requests

```text
$skill-creator create a skill for our recurring API compatibility
review, using the supplied examples and existing report format.

$skill-creator narrow this skill's description so ordinary UI
changes stop activating its specialized audit workflow.
```

## Package guide

- [SKILL.md](SKILL.md): design principles, anatomy, creation, maintenance, and validation.
- [references/openai_yaml.md](references/openai_yaml.md): UI and invocation metadata guidance.
- [scripts/init_skill.py](scripts/init_skill.py): new-package scaffolding.
- [scripts/generate_openai_yaml.py](scripts/generate_openai_yaml.py): metadata generation.
- [scripts/quick_validate.py](scripts/quick_validate.py): structural validation.
- [agents/openai.yaml](agents/openai.yaml), [assets/](assets/), and [license.txt](license.txt): metadata, icons, and licensing.

See the [main README](../../README.md) for the system-snapshot policy.
