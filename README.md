# Codex Skills

**Reusable instruction packages for building software, designing interfaces, working with business evidence, and producing specialized creative artifacts with Codex.**

This repository collects workflows that give an agent task-specific judgment and practical tools: how to navigate a repository, design a module, implement a Figma frame, verify a UI in a browser, tune motion, create 3D assets, review security, work with Payload CMS, support a founder, or package an animated pet.

The collection currently contains **25 regular skills** and **six system skill snapshots**. Every skill directory has a `SKILL.md` entrypoint and a detailed README describing its scope, workflow, requirements, outputs, example requests, and supporting files.

## What this repository provides

A skill packages knowledge the agent can reuse across projects. Its frontmatter describes what the skill does and when it applies; its body contains the working method, constraints, and links to deeper guidance. Some packages are entirely Markdown. Others include deterministic helpers, visual assets, regression tests, or evaluation scenarios.

The collection covers both decisions and execution. A design skill may establish an interface's visual system, while another implements it or measures its behavior. A founder workflow may connect a pricing decision to real costs and customer evidence, then produce the requested model or sales material. These packages explain how to choose and validate the work, as well as how to carry it out.

Cloning the repository gives you the instruction packages and their resources. It does not install GSAP, create a Payload application, connect Figma, provision a browser driver, configure image generation, or publish a website. Those capabilities come from the target project and the active Codex environment. Each skill's README explains the relevant requirements.

## Who the collection is for

- Developers working on architecture, React or Next.js applications, CMS integration, and focused security work.
- Designers and design engineers translating visual intent into production interfaces, motion, and browser-verified behavior.
- Game developers and creators producing editable 3D props, figures, characters, and interactive online model previews.
- Founders connecting product, positioning, pricing, marketing, sales, finance, and operations through shared company context.
- People creating specialized assets such as animated pets, or studying how reusable skills and plugins are structured.

Install the packages relevant to your work. Several skills cover neighboring concerns, so choosing the appropriate owner is more useful than invoking every related package on every task.

## Skill catalog

### Repository understanding and architecture

| Skill | What it does | Typical result |
|---|---|---|
| [Repo Context](repo-context/README.md) | Navigates projects with compact notes, filename maps, and checks against recorded source evidence. | Updated project notes, a scoped inventory, and stale-evidence status. |
| [Codebase Design](codebase-design/README.md) | Designs deep modules with small interfaces and useful seams. | Interface proposals, design comparisons, and testable restructuring. |
| [Domain Modeling](domain-modeling/README.md) | Resolves business terminology and records consequential tradeoffs. | A precise `CONTEXT.md` glossary and selective ADRs. |

### Interface design, construction, and verification

| Skill | What it does | Typical result |
|---|---|---|
| [Frontend Design](frontend-design/README.md) | Grounds visual direction, typography, layout, and copy in the actual brief. | A distinctive visual plan and implemented interface. |
| [UI Design](ui-design/README.md) | Routes direction, extraction, building, auditing, variants, scaffolding, retrofits, and componentization. | UI code, `design-system.md`, or confirmed findings and scoped fixes. |
| [Web Experience Design](web-experience-design/README.md) | Plans and builds substantial product, narrative, cinematic, and 3D web experiences. | A coherent experience developed through a representative slice and rendered checks. |
| [Web Design Guidelines](web-design-guidelines/README.md) | Applies local accessibility, interaction, resilience, responsive, and performance guidance. | Robust UI changes or a focused file-level audit. |
| [UI Verification](ui-verification/README.md) | Exercises a running app with browser probes and records reproducible evidence. | Measurements, captures, reproduced or rejected findings, and clearing re-runs. |
| [Vercel React Best Practices](vercel-react-best-practices/README.md) | Improves React and Next.js performance while preserving rendering, caching, and authorization correctness. | Focused optimizations or prioritized, version-grounded findings. |

### Animation and motion engineering

| Skill | What it does | Typical result |
|---|---|---|
| [Animate](animate/README.md) | Decides whether an interaction should animate, then constructs its motion in a deliberate sequence. | Animation code with purpose, timing, interruption, and accessibility choices. |
| [UI Animation](ui-animation/README.md) | Builds, reviews, discovers, debugs, and measures motion, gestures, springs, and sparse interface sound. | Motion code, recording analysis, fitted parameters, and handoff specifications. |
| [Review Animations](review-animations/README.md) | Reviews motion against a strict craft standard and defined correction hierarchy. | Before/after/why findings and a Block or Approve verdict. |
| [GSAP Core](gsap-core/README.md) | Explains tweens, easing, stagger, transforms, playback, and responsive setup. | Correctly configured GSAP animations. |
| [GSAP React](gsap-react/README.md) | Handles React refs, scoped selectors, `useGSAP`, contexts, and lifecycle cleanup. | Component-owned GSAP integration. |
| [GSAP ScrollTrigger](gsap-scrolltrigger/README.md) | Configures reveals, scrub, pinning, custom scrollers, refresh, and scroll-driven timelines. | Scroll interactions with deliberate geometry and teardown. |
| [GSAP Timeline](gsap-timeline/README.md) | Coordinates steps through labels, positions, defaults, nesting, and playback. | Maintainable, controllable sequences. |

### 3D assets and web viewers

| Skill | What it does | Typical result |
|---|---|---|
| [Create 3D Assets](create-3d-assets/README.md) | Chooses an authoring route, builds editable meshes, exports for a game or viewer, and checks the delivered asset. | Blender sources or procedural geometry, GLB or engine exports, model inventories, and inspected previews. |

The default workflow is Blender Python → GLB → target-runtime verification. Simple web shapes can use procedural Three.js; complex figures can start from suitable licensed meshes or authorized AI drafts followed by cleanup. The package includes researched tool comparisons and a dependency-free glTF inventory helper.

### Figma workflows

| Skill | What it does | Typical result |
|---|---|---|
| [Figma](figma/README.md) | Retrieves design context, screenshots, variables, and assets through Figma MCP. | Design information, integrated implementation, or connection diagnosis. |
| [Figma Implement Design](figma-implement-design/README.md) | Carries a Figma frame through retrieval, asset reuse, implementation, and visual validation. | UI code fitted to existing components and tokens. |
| [Figma Create Design System Rules](figma-create-design-system-rules/README.md) | Encodes repository conventions for repeated Figma-to-code work. | Project-specific rules for Codex, Claude Code, or Cursor. |

### Security

| Skill | What it does | Typical result |
|---|---|---|
| [Security Best Practices](security-best-practices/README.md) | Applies Python, JavaScript/TypeScript, and Go guidance during explicitly requested security work. | Secure coding guidance or a prioritized report with code locations. |
| [Security Threat Model](security-threat-model/README.md) | Maps assets, boundaries, attacker capabilities, and abuse paths from repository evidence. | A scoped model with calibrated priorities and specific mitigations. |

### CMS development

| Skill | What it does | Typical result |
|---|---|---|
| [Payload](payload/README.md) | Builds and troubleshoots collections, access, hooks, endpoints, transactions, and framework integration. | Version-appropriate implementation and focused validation. |

### Business strategy and execution

| Skill | What it does | Typical result |
|---|---|---|
| [Founder Codex](founder-codex/README.md) | Connects twelve business playbooks through company context and explicit evidence quality. | Decisions, research, copy, product briefs, pricing, sales assets, calculations, and operating processes. |

Founder Codex includes an offline finance helper, six supporting guides, regression tests, and a source map for eight upstream inspirations. Its playbooks are references within one skill, so a specific copy or pricing request does not require a complete business audit.

### Animated pets

| Skill | What it does | Typical result |
|---|---|---|
| [Hatch Pet](hatch-pet/README.md) | Generates and repairs grounded artwork, assembles exact v2 geometry, and validates motion and look directions. | A packaged 8 × 11 pet atlas, manifest, previews, and QA artifacts. |

## System snapshots

The `.system/` directory preserves system skill packages separately from the regular installable collection. These snapshots are useful for reference and intentional maintenance; their presence does not mean the repository supplies a current live system capability.

| Snapshot | Preserved capability |
|---|---|
| [Imagegen](.system/imagegen/README.md) | Built-in image generation and editing, with an explicitly chosen CLI fallback. |
| [OpenAI Docs](.system/openai-docs/README.md) | Official-documentation research, model guidance, API help, and Codex troubleshooting. |
| [Plugin Creator](.system/plugin-creator/README.md) | Local plugin scaffolding, manifests, marketplace entries, and development updates. |
| [Review Agent](.system/review-agent/README.md) | Read-only review of a delegated change with confirmed actionable findings. |
| [Skill Creator](.system/skill-creator/README.md) | Skill design, initialization, metadata, progressive disclosure, and structural validation. |
| [Skill Installer](.system/skill-installer/README.md) | Listing and downloading skill folders from GitHub. |

Use the active host's installed system skills for live work. Avoid copying the entire `.system/` directory or replacing managed system skills during routine collection installation. Snapshot API assumptions, CLI behavior, metadata, and references can age independently of the host.

## How packages are organized

```text
codex-skills/
├── README.md
├── <regular-skill>/
│   ├── README.md           # Human-readable guide
│   ├── SKILL.md            # Selection metadata and agent workflow
│   ├── agents/openai.yaml  # Optional UI and invocation metadata
│   ├── references/         # Optional deeper, task-specific guidance
│   ├── scripts/            # Optional deterministic helpers
│   ├── assets/             # Optional icons or output resources
│   ├── tests/              # Optional executable regression tests
│   └── evaluations/        # Optional behavioral scenarios and fixtures
└── .system/
    └── <system-snapshot>/
```

Directories vary by package; every skill does not need every folder. Some also keep focused guides at the package root, `evals/` scenarios, or retained license files. The README is the human-facing introduction; `SKILL.md` is the operational entrypoint. References and scripts are loaded or run selectively.

## Install a regular skill

Clone the repository into a working directory:

```bash
git clone https://github.com/0xcvaliente/codex-skills.git
```

The bundled installer can download regular skills without overwriting an existing destination. From the directory containing your clone:

```bash
python3 codex-skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo 0xcvaliente/codex-skills \
  --path repo-context ui-design founder-codex
```

This script's default destination is `$CODEX_HOME/skills`, or `~/.codex/skills` when `CODEX_HOME` is unset. If your environment uses a different location, select it with `--dest`. Use `--ref` for a chosen branch, tag, or commit. The helper needs Python and GitHub network access; its Git fallback needs Git.

To install directly from the clone, copy a whole regular skill directory so relative references and helpers remain together. From inside the clone, this example preserves an existing destination:

```bash
task_skill_root="${CODEX_HOME:-$HOME/.codex}/skills"
mkdir -p "$task_skill_root"
if [ ! -e "$task_skill_root/repo-context" ] && [ ! -L "$task_skill_root/repo-context" ]; then
  cp -R repo-context "$task_skill_root/"
else
  echo "repo-context already exists; compare and preserve local changes before updating."
fi
```

The snapshot installer says newly installed skills are available on the next turn. Check the active host's discovery behavior if a skill is not visible. Installing an instruction package does not satisfy its external tool or application dependencies automatically.

## Use and combine skills

Invoke a skill by name and provide the target, constraints, and desired result:

```text
$repo-context locate the checkout flow and check the relevant architecture notes.

$ui-design audit and fix the named settings-page files, preserving our tokens.

$ui-verification reproduce the focus findings and verify the fixes in the browser.

$founder-codex compare these pricing packages using our costs and customer evidence.

$create-3d-assets create a stylized robot with editable Blender source,
export a GLB, and verify it in an interactive web viewer.
```

Normal selection depends on a skill's description and invocation policy. Explicit invocation makes the intended workflow clear, but does not configure missing tools or authorize unrelated actions.

Useful combinations include:

- **Understand and restructure:** Repo Context locates verified code; Codebase Design evaluates interfaces; Domain Modeling records business language where needed.
- **Build and verify UI:** Frontend Design or UI Design establishes direction; UI Design or Web Experience Design implements; UI Verification exercises the rendered result.
- **Implement from Figma:** the Figma packages retrieve the exact design and fit it to project conventions, with rules recorded for repeated work if requested.
- **Engineer motion:** Animate or UI Animation establishes purpose and behavior; GSAP packages supply library patterns; Review Animations critiques the result.
- **Build a 3D web experience:** Create 3D Assets produces and checks the mesh; Web Experience Design integrates its presentation; UI Verification exercises the surrounding interface.
- **Connect business and delivery:** Founder Codex grounds the decision and deliverable; a specialist skill handles the requested implementation or artifact format.

Some entrypoints mention companion skills **not included** here, such as `product-design`, `typography-audit`, `ax-audit`, `animate-text`, or additional GSAP packages. Those mentions are routing guidance, not bundled dependencies. Consult each README and use the tools actually available in the session.

## Dependencies and verification

There is no single application build or universal test command for this collection. Requirements follow the task:

| Workflow | Relevant requirement |
|---|---|
| Repository mapping | Git and Python 3.9+ for the Repo Context helper. |
| Offline founder calculations | Python 3.8+; the finance helper uses the standard library. |
| Recorded motion analysis | ffmpeg; OpenCV, NumPy, and SciPy for tracking and fitting. |
| 3D asset authoring | Installed Blender for Blender workflows; a configured renderer for procedural web geometry. The inventory helper uses Python 3.9+ and the standard library. |
| 3D delivery and optional generation | A target engine or web viewer; optional glTF Transform/Khronos validation. AI services or Blender bridges must actually be available, with service access and authorized spend where applicable. |
| Pet assembly | Codex workspace-dependency access, its bundled Python with Pillow, image generation, and review workers. |
| Browser verification | A reachable app, capable browser driver, and relevant auth or seeded data. |
| Figma work | An accessible Figma MCP connection and the target design. |
| GSAP, React, Next.js, or Payload implementation | The target app's installed libraries, configuration, and validation workflow. |
| Snapshot skill validation | Python and PyYAML for the bundled structural validator. |

Tests check helper behavior; evaluation scenarios are maintenance rubrics for skill routing and decisions. Neither automatically validates every real-world task.

For example, run the Founder Codex finance tests from the collection root:

```bash
python3 -m unittest discover -s founder-codex/tests -v
```

For a changed skill entrypoint, the snapshot validator can check structure when its dependencies are available:

```bash
python3 .system/skill-creator/scripts/quick_validate.py ui-design
```

Structural success does not prove semantic quality. Validate changed helpers with meaningful cases and use actual browser or visual checks for claims about rendered behavior.

## Updating and maintaining the collection

Review local changes before pulling. For a clean checkout:

```bash
git -C codex-skills pull --ff-only
```

Installed copies do not update automatically when the clone changes. Compare them before replacement and preserve local modifications. Keep project-specific architecture, design, and business records in their project rather than in a globally installed reusable skill.

When adding or changing a package, keep its description precise, preserve user scope, link deeper guidance where relevant, and update its README and this catalog. Add scripts for reliable reusable mechanics. Record only checks actually performed and distinguish missing verification from a pass.

## Licensing and provenance

Licensing is recorded within individual packages; this repository has no single root license file establishing one license for the entire collection. Some packages retain license texts, some declare terms in frontmatter, and others document sources in the entrypoint. Check relevant material before reuse or redistribution rather than assuming a uniform license.

Founder Codex retains eight source license texts and a [source map with pinned revisions and adaptation notes](founder-codex/references/sources.md). Other skills describe inspirations or local adaptations in their documentation. Preserve those notices and verify missing terms when licensing matters. Inclusion does not imply affiliation, endorsement, or a guarantee that a snapshot remains current.
