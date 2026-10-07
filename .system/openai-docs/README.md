# OpenAI Docs — System Snapshot

`openai-docs` guides research and explanation of OpenAI products, APIs, models, and Codex behavior using current official documentation. It distinguishes documentation questions from generic software work that happens to mention Codex.

This directory is a **system skill snapshot**. Its references and helpers describe the preserved workflow, not guaranteed current model availability, pricing, product behavior, or account access. Live answers require current sources and the tools available in the active environment.

## When to use it

Use the workflow for Codex settings, setup, skills, troubleshooting, model or pricing questions, OpenAI API implementation, SDK behavior, model selection or migration, prompting, agents, and evaluations. It also covers ChatGPT Work and product comparisons.

The skill preserves an explicitly requested model. A newer model is not substituted merely because it exists or because a bundled guide discusses it.

## How it works

The source order begins with a concise search for the exact topic, followed by opening the relevant official page. Search snippets alone do not establish an answer. The workflow uses official OpenAI domains and places citations beside the claims they support.

Straightforward factual questions usually need no route reference. More involved work selects at most one primary route for model migration, model selection, unresolved API or product implementation, explicitly requested local documentation integration, or broad Codex orientation.

The preserved instructions allow a manual-first exception only for a genuinely broad, explicitly requested Codex synthesis. Narrow feature, model, or error questions remain documentation-first. Helpers and additional references are conditional rather than a checklist to load in full.

## Requirements and output

The workflow needs official-documentation search and page retrieval, or suitable browsing. Some optional helpers use Node.js or local shell access. Building or running API-backed tools can require separately configured credentials; read-only documentation and conceptual examples do not inherently require a key.

Outputs include cited explanations, model tradeoff analysis, migration guidance, implementation help, or troubleshooting grounded in the actual sources. Pricing and availability remain uncertain when official pages do not establish them.

## Example requests

```text
$openai-docs check the official documentation for this Responses
API behavior and cite the page that establishes the answer.

$openai-docs compare the models I named for this workload using
current official capability and pricing information.
```

## Package guide

- [SKILL.md](SKILL.md): topic routing, source order, and execution boundaries.
- [references/](references/): specialized documentation, migration, prompting, and troubleshooting guidance.
- [scripts/](scripts/): optional manual and model-information helpers.
- [agents/openai.yaml](agents/openai.yaml), [assets/](assets/), and [LICENSE.txt](LICENSE.txt): interface metadata, icons, and licensing.

See the [main README](../../README.md) for the system-snapshot policy.
