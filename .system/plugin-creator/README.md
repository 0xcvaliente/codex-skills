# Plugin Creator — System Snapshot

`plugin-creator` scaffolds local Codex plugin directories and maintains their manifest and marketplace structure. It combines deterministic helpers with instructions for selecting valid names, creating optional resources, validating packages, and updating a development plugin's installation metadata.

This is a **system skill snapshot**, not a plugin installed by cloning this repository. Manifest rules, marketplace discovery, and CLI behavior should be checked against the active Codex environment when using the workflow.

## When to use it

Use it to create a personal plugin, add required companion files, generate a marketplace entry, or update a local plugin during development. A plugin may package skills, scripts, assets, hooks, MCP configuration, or app configuration as needed by the actual request.

For a single reusable instruction package, [Skill Creator](../skill-creator/README.md) is the smaller workflow. A plugin has its own `.codex-plugin/plugin.json` manifest and may group multiple capabilities.

## How it works

1. Normalize the plugin name and scaffold a matching directory and manifest.
2. Populate concrete metadata rather than leaving TODO placeholders.
3. Create optional resource directories or companion configuration only when needed.
4. Create or update a marketplace entry if the plugin should appear through that workflow.
5. Validate the package before handing it back.
6. For existing development plugins, follow the documented cachebuster and reinstall flow rather than manually rewriting marketplace configuration.

The bundled scaffold defaults to `~/plugins/<plugin-name>` and a personal marketplace at `~/.agents/plugins/marketplace.json` when marketplace creation is requested. Repository or team destinations are explicit alternatives. Existing names, display names, ordering, and unrelated metadata are preserved unless changes are requested.

## Requirements and output

The helpers require Python and filesystem access to the selected destination. Installation and update steps can also need the Codex CLI. The snapshot's skill validator uses PyYAML; consult the helper imports and active environment before execution.

The output is a plugin directory with the required manifest, requested companion resources, and an optional marketplace entry. A scaffold alone does not implement an MCP server or external integration. Validation checks package structure; actual capabilities still need their own tests and configuration.

## Example requests

```text
$plugin-creator scaffold a personal plugin containing these two
skills and validate its manifest and marketplace entry.

$plugin-creator update this local development plugin using its
existing marketplace and the documented reinstall workflow.
```

## Package guide

- [SKILL.md](SKILL.md): scaffold, naming, marketplace, and handoff rules.
- [Manifest specification](references/plugin-json-spec.md): canonical package and marketplace shapes.
- [Installing and updating](references/installing-and-updating.md): development update flow.
- [scripts/](scripts/): creation, identifier checks, marketplace inspection, cachebuster, and validation.
- [agents/openai.yaml](agents/openai.yaml) and [assets/](assets/): interface metadata and icons.

See the [main README](../../README.md) for the system-snapshot policy and licensing guidance.
