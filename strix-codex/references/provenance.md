# Sources and adaptation boundaries

Reviewed for this adaptation: **2026-10-09**.

Primary source: [usestrix/strix](https://github.com/usestrix/strix), revision [`f5a900416b6e1d8023e7c2ce11885232ffa8b806`](https://github.com/usestrix/strix/tree/f5a900416b6e1d8023e7c2ce11885232ffa8b806). The machine-readable [baseline](upstream.json) records that commit, its tree, and a complete file inventory for update detection. The review focused on the sources below; the inventory is not a full source audit.

| Upstream source at the reviewed revision | Adapted purpose |
|---|---|
| [`AGENTS.md`](https://github.com/usestrix/strix/blob/f5a900416b6e1d8023e7c2ce11885232ffa8b806/AGENTS.md), `README.md` | Consumer workflow map, local/cloud differences, artifact and exit-code semantics |
| `skills/application-security-testing`, `find-security-vulnerabilities-in-code`, `web-app-penetration-testing`, `api-security-testing`, `owasp-top-10-testing` | Asset selection, source/runtime correlation, scoped testing, auth/tenant cases, category coverage |
| `skills/penetration-testing-with-strix`, `managed-pentesting-with-strix`, `ci-security-scanning-with-strix`, `fix-security-vulnerabilities-with-strix` | Optional headless/managed integration, verified upload digest, budget/completion caveats, fix and retest loop |
| `strix/agents/prompts/system_prompt.jinja`, `strix/skills/coordination/source_aware_whitebox.md` | Mapping, hypotheses, static triage feeding dynamic testing; native Codex execution replaces the source runtime |
| `strix/skills/analysis/counterevidence.md`, `fix_verification.md`, `severity_calibration.md` | Named controls, unresolved proof gaps, separate confidence/severity, security closure and preserved behavior |
| `strix/skills/README.md`, specialist pack inventory, `strix/tools/reporting/tool.py` | Conditional specialist discovery, evidence/locations and deduplication; no Strix tool API is assumed in Codex |

All upstream relative paths above resolve under the linked reviewed tree. This package consolidates nine consumer skills and adapts selected methodology; it does not bundle their full text, the specialist pack library, scanners, Docker image, sandbox, agent runtime, managed client, or credentials. Specialist source packs can be fetched selectively at a pinned revision. Actual Strix execution remains an optional separately installed integration.

The Codex entrypoint, condensed playbooks, upstream checker, tests, UI metadata, and package README were authored/adapted on 2026-10-09. They preserve the evidence-led approach while replacing Strix-specific lifecycle calls and orchestration with capabilities actually available in Codex. Fixed scanner quotas, unsupported "every finding is proven" claims, presumed authorization, automatic cloud fallback, and implicit payment/upload/account changes are not inherited.

The upstream source is Apache-2.0, with **Copyright 2025 OmniSecure Inc.** in its license. The full source license is retained in [LICENSE](../LICENSE), and [NOTICE](../NOTICE) identifies this modified adaptation. No upstream `NOTICE` file was present at the reviewed revision. The adapted package is distributed under Apache-2.0. No affiliation or endorsement by Strix, OmniSecure, OpenAI, or OWASP is claimed.

Changes after the reviewed revision are governed by [upstream maintenance](upstream-maintenance.md). Checks do not silently advance this record or rewrite installed instructions.

## Reviewed update — 2026-10-09

Reviewed all 15 changed files since `278b6a280bfb458ef02187943df25ef8731e781f`,
including MCP catalog warmup/status, stream bounds and cancellation reasons,
provider/error logging, retry classification, cost tracking, and their regression
cases. Added connection-evidence and optional-engine diagnostic guidance. The
engine implementation and retry policy remain upstream runtime behavior, not
code or unconditional retry instructions installed in Codex. Consumer workflow
APIs and license notices did not change.
