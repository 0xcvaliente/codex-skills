# Maintaining this Codex skill collection

Use the original source and the installed state as separate evidence. An upstream
repository may advance without changing a particular skill. A Codex adaptation
may also have local helpers, constraints, or metadata that a raw upstream copy
would remove.

The latest full inventory is the [2026-10-10 report](maintenance-2026-10-10.md),
with [exact revisions and per-package results](maintenance-2026-10-10.json).

## Inventory and back up

1. Inventory actual `SKILL.md` entrypoints under the installed personal and
   system roots. Compare installed package hashes with this collection.
2. Use `codex plugin list --json` and `codex plugin marketplace list --json`
   to inventory native plugins. Include additional host-exposed packages and
   distinguish duplicate surfaces from different releases.
3. Before refreshing anything, back up personal skills, installed plugin
   caches, and the Codex configuration. Keep snapshots private: configuration
   and local-only resources may contain account details or private material.
4. Record enablement and selected runtime paths. Preserve user preferences and
   existing runtime state during updates.

## Establish the original source

- Read each package's provenance, attribution notice, source manifest, and
  repository metadata. Distinguish copied source, Codex adaptations, original
  synthesis, and private brand/project instructions.
- Resolve GitHub default-branch heads using `git ls-remote --symref`. Record
  both the previous baseline and observed head. Fetch changed revisions into
  an isolated checkout and compare relevant source paths.
- Preserve the original byte checksums of retained upstream material. Advance
  a reviewed baseline only after reviewing the corresponding changes.
- Use the authenticated native marketplace or owning host runtime for managed
  plugins. A public repository snapshot can be older or different from the
  installed product package. Verify owned personal plugins against their
  current backend release.
- Track referenced library heads separately. A new Next.js or renderer commit
  does not justify upgrading every user's project dependency.

## Review and upgrade

For a changed source, inspect its changed instructions, helper code, APIs,
tests, and license notices. Incorporate applicable changes in the Codex
adaptation; record unrelated changes as reviewed without replacing working
instructions. Keep source copies, manifests, provenance, package README, and
entrypoint metadata consistent with actual changes.

Native plugin refresh uses `codex plugin add <name>@<marketplace> --json`.
Check the result against the previous version **and the actual on-disk
manifest**. If the service delivers an older package, restore the backed-up
newer bundle and record the discrepancy. Avoid repeated refreshes that keep
reinstalling an older artifact. Use the owning runtime's upgrade flow for
bundled/local packages. Compare source and cache files even when versions
match, because entrypoints can be missing.

For public source plugins, follow their documented installer and inspect the
installer's mutation scope. An isolated staging home can assemble a reviewed
bundle before synchronizing only the intended plugin directory. Keep binary
and service prerequisites explicit; updating instruction files does not prove
that a separate engine or connected service works.

## Verify and publish

- Validate every installed personal/system entrypoint with the skill-creator
  structural validator. Parse managed plugin frontmatter under its owning
  schema; do not rewrite official metadata just to fit a different validator.
- Check actual local links, excluding illustrative code examples. Verify
  retained source manifests against their SHA-256 records.
- Run helper tests appropriate to changed behavior. Use browser checks when
  rendering, geometry, accessibility naming, or export targeting changed.
- Recheck installed manifests, synchronized file hashes, enablement, and
  configuration. Report failed prerequisites separately from passing checks.
- Update package documentation and create a dated Markdown/JSON inventory
  with original sources, revisions, decisions, verification, and limits.
  Publish reusable package changes and sanitized reports to this collection;
  keep private settings and local-only assets out of the commit.

This is an intentional maintenance procedure, not a background updater. A
new Codex session may be needed to load changed instruction packages.
