# Skill maintenance — 2026-10-10

Reviewed all **51 installed personal/system packages**, **28 native registered plugins**, and the additional host-provided **Obscura** and **Tunnel MCP** packages. Discovered **83 plugin skill entrypoints** under the selected package versions, and checked **46 repository heads**. Dates use Europe/Oslo; the JSON also records UTC check time.

## Installed changes

| Package | Result |
|---|---|
| Diagram Craft | **1.1.0**: selects the first meaningful root SVG for checks and PNG capture, normalizes translated geometry to the root canvas, and reports unsupported transforms. Nine browser regression cases pass. |
| Strix Codex | Reviewed the nine new runtime/test files, advanced the complete **540-file** baseline to `62b496430da5`, and corrected the stale NOTICE revision. Native assessment instructions remain compatible. |
| Tunnel MCP | Upgraded the existing debug plugin **0.1.4 → 0.1.6**, including conditional detailed-health guidance and process supervision documentation. All 69 MCP tests pass. |
| Bundled Browser, Chrome, Computer Use | Repaired missing skill entrypoints through native `codex plugin add`; source versions were already current. |
| Sites | Native CLI briefly supplied 1.0.0 despite a 1.0.1 catalog entry. The host restored **1.0.1**; verified its on-disk manifest and backed up the recovered bundle. |

The remaining personal/system packages were retained after checking their sources. No arbitrary version bump or wholesale replacement of Codex adaptations was needed. All 14 remote plugins were refreshed against the authenticated marketplace. All 14 local native plugin packages now have matching source/cache entrypoints. The owned Pinterest and Obscura skill files match their current 0.1.0 releases.

## Changes that did not apply

| Original source | Review outcome |
|---|---|
| [anthropics/skills](https://github.com/anthropics/skills/compare/683bc88e56f3e09ba94f7055977f3d3aa499f202...dbd4588f9e1033efb41dad4bef2f7947c8993d44) | 54 changed files concern Claude API guidance and managed-agent workflows. Installed frontend-design and the business-document inspiration folders did not change. |
| [mattpocock/skills](https://github.com/mattpocock/skills/compare/b0618bc436ad893b3c5e84e55fba86586d34a404...49dd158d1076134a641b33efb035946536778336) | Three files changed in the wizard template, changeset and out-of-scope example. Installed codebase-design/domain-modeling source material did not change. |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/compare/1a2c459b35f26116fd165b0a0f30597f252749ff...50d8a7de0900119855614541f15a1a616691eb33) | Ten files add Amazon Q installer support. Codex guidance and the relevant design data did not change. |
| [h4ckf0r0day/obscura](https://github.com/h4ckf0r0day/obscura/compare/66c4545a0c7dd0ff744e7a73832be7862d673188...1f8eb76437f4da4ac7ccb301986e71059e3ea497) | 13 engine/rendering and regression files changed; CLI/MCP surfaces and license unchanged. Owned plugin 0.1.0 skill files match its current release; engine updates are separate. |

DOMPurify, Next.js, and Satori reference heads also advanced. These are supporting libraries, not new versions of the installed skill sources; project dependencies were not changed. CodeGraph’s current npm release remains **1.6.2**, matching the installed reviewed runtime.

## Complete personal/system inventory

Every entry below passed the skill-creator structural validator. Exact source revisions and review decisions are in the [machine-readable report](maintenance-2026-10-10.json). Local-only packages are inventoried without publishing their private material.

| Skill | Original source(s) | Decision |
|---|---|
| `.system/imagegen` | [openai/skills](https://github.com/openai/skills) | Retained |
| `.system/openai-docs` | [openai/skills](https://github.com/openai/skills) | Retained |
| `.system/review-agent` | [openai/skills](https://github.com/openai/skills) | Retained |
| `.system/skill-creator` | [openai/skills](https://github.com/openai/skills) | Retained |
| `.system/skill-installer` | [openai/skills](https://github.com/openai/skills) | Retained |
| `animate` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `animate-expo` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `animation-vocabulary` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `apple-design` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `ask-sonner` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `break-ui` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `business-sales-documents` | [anildash/better-documents](https://github.com/anildash/better-documents), [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills), [sauewi/industrial-product-brochure](https://github.com/sauewi/industrial-product-brochure), [anthropics/skills](https://github.com/anthropics/skills), [thatrebeccarae/claude-marketing](https://github.com/thatrebeccarae/claude-marketing) | Retained |
| `codebase-design` | [mattpocock/skills](https://github.com/mattpocock/skills) | Retained |
| `codegraph` | [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Retained |
| `create-3d-assets` | Own collection | Retained |
| `credo-design` | Local original / synthesis | Retained |
| `diagram-craft` | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Upgraded 1.1.0 |
| `domain-modeling` | [mattpocock/skills](https://github.com/mattpocock/skills) | Retained |
| `emil-design-eng` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `figma` | [openai/skills](https://github.com/openai/skills) | Retained |
| `figma-create-design-system-rules` | [openai/skills](https://github.com/openai/skills) | Retained |
| `figma-implement-design` | [openai/skills](https://github.com/openai/skills) | Retained |
| `find-animation-opportunities` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `founder-codex` | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills), [emotixco/claude-skills-founder](https://github.com/emotixco/claude-skills-founder), [Jakeschincariol/founder-skill](https://github.com/Jakeschincariol/founder-skill), [Varnan-Tech/opendirectory](https://github.com/Varnan-Tech/opendirectory), [anthropics/launch-your-agent](https://github.com/anthropics/launch-your-agent), [getagentseal/founder-playbook](https://github.com/getagentseal/founder-playbook), [ognjengt/founder-skills](https://github.com/ognjengt/founder-skills), [ericosiu/ai-marketing-skills](https://github.com/ericosiu/ai-marketing-skills) | Retained |
| `frontend-design` | [anthropics/skills](https://github.com/anthropics/skills) | Retained |
| `gsap-core` | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | Retained |
| `gsap-react` | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | Retained |
| `gsap-scrolltrigger` | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | Retained |
| `gsap-timeline` | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | Retained |
| `hatch-pet` | Own collection | Retained; disabled |
| `improve-animations` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `mobile-native` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `orbit-macos` | Local original / synthesis | Retained |
| `outlook-email-automation` | Local original / synthesis | Retained |
| `payload` | [payloadcms/skills](https://github.com/payloadcms/skills) | Retained |
| `pick-ui-library` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `ponytail-codex` | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Retained |
| `prototype` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `pstack-codex` | [cursor/plugins](https://github.com/cursor/plugins) | Retained |
| `repo-context` | Own collection | Retained |
| `review-animations` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |
| `security-best-practices` | [openai/skills](https://github.com/openai/skills) | Retained |
| `security-threat-model` | [openai/skills](https://github.com/openai/skills) | Retained |
| `strix-codex` | [usestrix/strix](https://github.com/usestrix/strix) | Reviewed baseline updated |
| `ui-animation` | [mblode/agent-skills](https://github.com/mblode/agent-skills) | Retained |
| `ui-design` | [mblode/agent-skills](https://github.com/mblode/agent-skills) | Retained |
| `ui-verification` | [mblode/agent-skills](https://github.com/mblode/agent-skills) | Retained |
| `vercel-react-best-practices` | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Retained |
| `web-design-guidelines` | [vercel-labs/web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines) | Retained |
| `web-experience-design` | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), [MustBeSimo/web-design-studio](https://github.com/MustBeSimo/web-design-studio) | Retained |
| `write-swift` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | Retained |

## Native plugin inventory

Versions below are the verified final state, not a claim that each version changed in this run.

| Plugin | Version | Result |
|---|---|
| `pinterest-inspo@valiente-personal` | `0.1.0` | verified current source skill files; retained |
| `documents@openai-primary-runtime` | `26.1007.11041` | verified current source skill files; retained |
| `pdf@openai-primary-runtime` | `26.1007.11041` | verified current source skill files; retained |
| `spreadsheets@openai-primary-runtime` | `26.1007.11041` | verified current source skill files; retained |
| `presentations@openai-primary-runtime` | `26.1007.11041` | verified current source skill files; retained |
| `template-creator@openai-primary-runtime` | `26.1007.11041` | verified current source skill files; retained |
| `codex-app-tools@openai-bundled` | `0.1.5` | verified current source skill files; retained |
| `browser@openai-bundled` | `26.1002.52244` | repaired missing browser entrypoints through native plugin add |
| `unified-computer-use@openai-bundled` | `26.1002.52244` | verified current source skill files; retained |
| `chrome@openai-bundled` | `26.1002.52244` | repaired missing browser entrypoints through native plugin add |
| `computer-use@openai-bundled` | `1.0.1001394` | repaired missing browser entrypoints through native plugin add |
| `code-review@openai-bundled` | `26.1002.52244` | verified current source skill files; retained |
| `visualize@openai-bundled` | `1.0.47` | verified current source skill files; retained |
| `codex-office@codex-office-local` | `0.1.5` | verified current source skill files; retained |
| `notion@openai-curated-remote` | `3.0.0` | refreshed from authenticated native marketplace; installed version current |
| `app-6a3293e129088191abf0875820e839da@openai-curated-remote` | `2.1.0` | refreshed from authenticated native marketplace; installed version current |
| `github@openai-curated-remote` | `0.1.12-5f7cd798dc99` | refreshed from authenticated native marketplace; installed version current |
| `outlook-email@openai-curated-remote` | `0.1.8` | refreshed from authenticated native marketplace; installed version current |
| `google-drive@openai-curated-remote` | `0.1.20` | refreshed from authenticated native marketplace; installed version current |
| `plugin-creator@openai-curated-remote` | `0.1.23` | refreshed from authenticated native marketplace; installed version current |
| `google-calendar@openai-curated-remote` | `1.2.7` | refreshed from authenticated native marketplace; installed version current |
| `figma@openai-curated-remote` | `15.0.0` | refreshed from authenticated native marketplace; installed version current |
| `canva@openai-curated-remote` | `17.0.1` | refreshed from authenticated native marketplace; installed version current |
| `openai-templates@openai-curated-remote` | `0.1.1` | refreshed from authenticated native marketplace; installed version current |
| `pages@openai-curated-remote` | `0.1.21` | refreshed from authenticated native marketplace; installed version current |
| `sites@openai-curated-remote` | `1.0.1` | retained 1.0.1 after host restored a transient stale 1.0.0 CLI artifact; manifest verified and recovered copy backed up |
| `plugin-management@openai-curated-remote` | `0.1.0` | refreshed from authenticated native marketplace; installed version current |
| `work-pets@openai-curated-remote` | `0.1.6` | refreshed from authenticated native marketplace; installed version current |

Host-only Obscura remains **0.1.0**; Tunnel MCP is **0.1.6**. The host also exposes a second Pinterest entrypoint for the same **0.1.0** personal package. The JSON lists all 83 discovered plugin entrypoints individually.

## Verification and limits

- **51/51** personal/system packages pass structural validation; **83/83** plugin entrypoints have parseable frontmatter with names/descriptions.
- **202** actual relative entrypoint links resolve. Two illustrative links in a skill-creator fenced example were excluded.
- **187** pinned upstream source files across **15** manifest-bearing packages match their SHA-256 records.
- Diagram checks: **13** Python tests and **9** browser cases. Strix: **17** checker tests and live freshness status `current`. Tunnel MCP: **69** tests and router help pass.
- The **11** changed collection files match the installed Diagram Craft and Strix copies byte-for-byte.
- Codex configuration is byte-identical to its pre-maintenance snapshot. All **28** native plugin enablement states and the disabled Hatch Pet preference are preserved.

**Remaining prerequisite:** Tunnel MCP’s engine binary was already missing: its old hint pointed to a removed Homebrew installation. The upgraded skill and plugin bundle are installed, but live tunnel actions still require a separately installed `tunnel-client`. No tunnel was created and no runtime credentials/state were changed.

This was a source freshness review with targeted adaptation and helper tests. It did not exercise every connected API or certify every upstream code path. Private settings, account details, brand assets, and local-only skill contents are omitted from this public report.

## Preservation and future maintenance

A local personal-skill backup preceded edits. The original Tunnel MCP bundle was backed up before replacement, and the recovered Sites 1.0.1 package was archived. Private configuration snapshots stay local. The source installer for Tunnel MCP ran in an isolated staging home; only its reviewed plugin bundle was synchronized into the existing debug cache, preserving the real Codex configuration and tunnel state.

Start a new Codex session to reload skill/plugin instructions. See the [maintenance procedure](skill-maintenance.md) for source review, backups, native refresh, validation, and publication.
