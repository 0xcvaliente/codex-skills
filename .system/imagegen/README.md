# Imagegen — System Snapshot

`imagegen` guides raster image generation and editing: photos, illustrations, textures, sprites, product mockups, covers, and transparent cutouts. It organizes the user's visual intent, preserves the important parts of edit targets, and inspects the result before delivery.

This directory is a **system skill snapshot** preserved in the collection. It does not install a hosted image tool or guarantee that the tools and API options described here match a particular current Codex environment. Use the host's installed system skill for live work unless intentionally maintaining this snapshot.

## When to use it

Use the workflow when the output should be a bitmap image: generate a new asset, use references for composition or identity, remove or replace an object, change a background, or produce visual variants.

Existing editable SVGs, simple code-native diagrams, and established vector icon systems are generally better handled in their native format. Reference images and edit targets have different roles and should be identified explicitly.

## How it works

The default route uses the built-in `image_gen` tool. Normal generation, edits, and transparency requests stay on that route; it does not require a user-supplied API key. The separate CLI route is used only when explicitly chosen or confirmed.

The workflow collects the subject, intended use, constraints, exact text, and image roles. It normalizes the prompt without adding unrelated creative requirements, generates or edits, inspects composition and invariants, and iterates with targeted changes.

Project-bound images are copied into the workspace and referenced from the project. Preview-only images can remain in the generation destination. Existing assets are preserved unless replacement is requested. Transparent output must retain its real alpha channel.

## Requirements and output

The built-in route depends on an available image generation tool. The fallback [scripts/image_gen.py](scripts/image_gen.py) supports `generate`, `edit`, and `generate-batch`; live API use requires local `OPENAI_API_KEY` configuration and the Python `openai` package. Pillow supports optional local inspection or processing. Keys should not be pasted into chat.

Outputs are raster images, saved asset paths for project use, and the prompt or prompt set. CLI options and model behavior are specific to the snapshot and need checking against the actual chosen execution environment.

## Example requests

```text
$imagegen create a transparent plush fox reference for a pet;
keep the whole body visible and avoid text or detached effects.

$imagegen edit this product image to replace the background,
preserving the product shape, logo, and camera perspective.
```

## Package guide

- [SKILL.md](SKILL.md): modes, prompt shaping, generation and edit rules, and output handling.
- [Prompting](references/prompting.md) and [sample prompts](references/sample-prompts.md): shared visual guidance.
- [CLI](references/cli.md), [Image API](references/image-api.md), and [network notes](references/codex-network.md): fallback-specific documentation.
- [scripts/](scripts/): CLI generation and chroma-key processing helpers.
- [agents/openai.yaml](agents/openai.yaml), [assets/](assets/), and [LICENSE.txt](LICENSE.txt): metadata, icons, and licensing.

See [Hatch Pet](../../hatch-pet/README.md) for a specialized spritesheet workflow and the [main README](../../README.md) for the collection's system-snapshot policy.
