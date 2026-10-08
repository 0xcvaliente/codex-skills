# Source and adaptation

Reviewed on **2026-10-08** from [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail),
package version **5.0.0**, commit
[`b088b2df6e08d4306c6a3c3d575fe38c2d2d2989`](https://github.com/DietrichGebert/ponytail/tree/b088b2df6e08d4306c6a3c3d575fe38c2d2d2989).

The README was inspected using Obscura. The pinned source was cloned and read
to verify the actual skill instructions, adapters, license, and benchmark caveats.

## Sources inspected

- `skills/ponytail/SKILL.md`: smallest-complete-change ladder, levels, validation,
  safety constraints, caller tracing, and shortcut comments.
- `skills/ponytail-review/SKILL.md` and `skills/ponytail-audit/SKILL.md`: connected
  code review, expected load, concrete findings, and prioritized reporting.
- `skills/ponytail-debt/SKILL.md`: a counted ledger of deliberate shortcuts.
- `skills/ponytail-help/SKILL.md` and `skills/ponytail-gain/SKILL.md`: invocation
  guidance and limits on benchmark claims.
- `README.md`, `package.json`, `.codex-plugin/plugin.json`, and `LICENSE`:
  packaging, version, existing Codex support, and redistribution terms.
- `benchmarks/results/2026-10-07-agentic.md`: reported figures, study design,
  and limits on quality and runtime conclusions.

## Deliberate changes

This is one standalone Codex skill named `ponytail-codex`, with conditional
references for review/audit, debt, and benchmark context. Codex's `$skill-name`
mention replaces the original plugin's namespaced commands and other agents'
slash commands. UI metadata uses `agents/openai.yaml`; normal discovery remains
enabled. Packaging follows the [official skill documentation](https://learn.chatgpt.com/docs/build-skills).

The adaptation preserves the decision ladder, lite/full/ultra preferences,
connected-code checks, shortcut ledger, and prohibition on removing necessary
validation, error handling, security, or accessibility. It ties new tests to
meaningful risk or regression rather than requiring a test for every branch.
Reviews use the host's output format and report evidence without a fixed
finding quota. Users' explicit requirements and existing architecture remain
authoritative; ultra mode does not authorize refusal of an informed choice.

Hook implementations, persistent mode/configuration files, startup activation,
status lines, marketplace installers, and cross-agent adapters are not included.
Chat preferences rely on available conversation context, with no promise of
automatic injection in every turn. The optional gain workflow labels the
published study and does not claim this Codex adaptation was benchmarked.

No upstream code executes as part of the skill, and no upstream-update
automation or automatic instruction replacement is installed. Revisit the
pinned sources when deliberately maintaining the adaptation.

The upstream MIT copyright and license are retained in [LICENSE](../LICENSE).
This adaptation is distributed under those terms. No upstream affiliation or
endorsement is claimed.
