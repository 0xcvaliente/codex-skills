# Review Agent — System Snapshot

`review-agent` performs a read-only, defect-first review of a specified code change. It examines the full requested diff and surrounding code, confirms actionable regressions through relevant tests and call sites, and returns findings an author would reasonably fix.

This directory preserves a **system review skill snapshot**. It contains instructions and interface metadata, not a running reviewer service or an automatic GitHub review integration.

## When to use it

The workflow is intended for a review delegated by another agent. Targets include uncommitted changes, a base-branch comparison, a commit, or custom review instructions.

It does not edit files, commit, push, post comments, or delegate the review again. Creating a review worker or sending its findings somewhere is an orchestration action outside this package's read-only review scope.

## How it works

1. Read applicable repository instructions.
2. Inspect the complete requested diff and enough surrounding code to understand each changed path.
3. Continue through the whole scope after finding an issue.
4. Confirm the affected scenario using implementation, call sites, and tests.
5. Return qualifying findings in severity order, followed by a short overall assessment and meaningful validation gaps.

For a base-branch review, the skill resolves the appropriate comparison reference and reviews the merge-base diff. This avoids confusing unrelated changes on the branch tip with changes that would actually merge.

A finding must be introduced by the reviewed change, meaningful, discrete, actionable, and demonstrable from code. Speculative concerns, pre-existing problems, intentional changes, and ordinary style nits do not qualify.

## Requirements and output

The workflow requires access to the repository, diff, and relevant comparison refs. Git is needed for local history comparisons. There are no bundled scripts or review dependencies.

Each finding has a priority, an imperative title, an exact path and line, and a short explanation of the wrong behavior. Priorities range from `P0` for a universal blocker or critical failure to `P3` for a low-impact issue worth fixing. If no issue qualifies, the expected result says `No findings.`

Code inspection supports concrete findings, but unavailable tests and unverified runtime assumptions must remain visible in the assessment.

## Example review assignments

```text
Review the uncommitted changes in this repository using
$review-agent. Inspect the complete diff and return every
confirmed regression without modifying files.

Use $review-agent to compare this branch with its upstream base
from the merge base and report exact locations for actionable issues.
```

## Package guide

- [SKILL.md](SKILL.md): read-only scope, evidence criteria, diff selection, and finding format.
- [agents/openai.yaml](agents/openai.yaml): interface metadata.

See the [main README](../../README.md) for the system-snapshot policy.
