# Codex Skills

A collection of reusable Codex skills for product work, development, design, animation, research, and business execution. Each top-level skill directory contains a `SKILL.md` entrypoint and any supporting references, scripts, or assets. The `.system/` directory contains system skill snapshots.

## Founder Codex

[Founder Codex](founder-codex/README.md) brings founder strategy and execution into one skill, alongside the existing development and design skills. Its twelve playbooks cover diagnosis, idea validation, market research, positioning and copy, product delivery, pricing, growth and marketing, sales, finance, fundraising, operations, and agent workflows.

It reuses company context, distinguishes evidence from assumptions, and produces usable deliverables such as interview guides, product briefs, landing-page copy, pricing proposals, channel experiments, sales materials, cash analyses, and operating procedures. Additional guides cover content, conversion and analytics, search discovery, and financial inputs.

The package includes an offline Python finance helper, regression tests, source attribution, and retained upstream licenses. See the [detailed Founder Codex README](founder-codex/README.md) for the full playbook table, practical prompts, financial example, and installation details.

## Install a skill

Clone the collection into a working directory:

```bash
git clone https://github.com/0xcvaliente/codex-skills.git
```

Copy the desired skill folder into your Codex skills directory. For example:

```bash
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R codex-skills/founder-codex "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Run the copy command only if the destination does not already exist. Review existing files and preserve local changes before updating an installed skill. Read each skill's instructions for its specific requirements; tools and dependencies vary across the collection.

## Use Founder Codex

```text
$founder-codex assess my business, identify the main bottleneck,
and complete the most useful next deliverable.
```

You can also request a specific result directly, such as an MVP brief, a pricing review, a demand experiment, or a sales proposal. Relevant company facts and constraints help the skill ground its work; a complete business audit is not required for a small task.

## Update and attribution

Update the collection checkout with `git -C codex-skills pull --ff-only`, review changes, and then update the installed skill copies you use. Company-specific facts belong in their project records rather than in these reusable skill folders.

Licensing and provenance are recorded within individual skill directories. Founder Codex documents its eight source repositories and pinned revisions in its [source map](founder-codex/references/sources.md), with full upstream license texts in [founder-codex/licenses/](founder-codex/licenses/).
