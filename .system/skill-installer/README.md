# Skill Installer — System Snapshot

`skill-installer` lists available skills and installs selected skill folders from GitHub. Its helpers support curated or experimental collections and explicit repository paths, including private repositories when suitable credentials are already configured.

This directory is a **system skill snapshot**. Cloning the collection does not install it as a new system capability. The scripts' behavior and destination described below are the behavior preserved here.

## When to use it

Use the workflow to list installable skills, install a known skill, or install a package from a GitHub URL or repository path. Listing alone does not install everything returned.

The default source is the curated skills directory in `openai/skills`. An experimental source or another repository can be selected explicitly. Existing system skills are normally supplied by the host environment and do not need replacement.

## How it works

The listing helper fetches the chosen catalog and marks skills that are already installed. The installation helper uses a direct download by default and can fall back to a Git sparse checkout when suitable.

Installation validates the selected package and aborts if the destination skill directory already exists. It can accept several paths in one request, choose a revision, change the destination, or use a particular download method. Review local modifications separately before updating an existing installed copy.

## Helper examples

From this collection's repository root:

```bash
python3 .system/skill-installer/scripts/list-skills.py
python3 .system/skill-installer/scripts/list-skills.py --path skills/.experimental
python3 .system/skill-installer/scripts/install-skill-from-github.py \
  --repo 0xcvaliente/codex-skills --path repo-context
```

The installer supports `--ref`, `--dest`, and `--method auto|download|git`. Its default destination is `$CODEX_HOME/skills`, or `~/.codex/skills` when that variable is unset. Explicit `--name` can override the installed folder name for a single selected path.

## Requirements and output

The helpers need Python and network access to GitHub; the Git fallback needs Git. Private repositories can use existing Git credentials or optional locally configured `GITHUB_TOKEN` or `GH_TOKEN` values. The scripts do not require credentials for every public repository.

Outputs are a catalog with installed annotations or installed skill directories. The preserved instructions say newly installed skills are available on the next turn; actual discovery behavior should be checked in the current host if it differs from this snapshot.

## Example requests

```text
$skill-installer show the available curated skills and identify
which ones are already installed.

$skill-installer install repo-context from 0xcvaliente/codex-skills
without replacing any existing local copy.
```

## Package guide

- [SKILL.md](SKILL.md): source selection, communication, options, and destination behavior.
- [scripts/list-skills.py](scripts/list-skills.py): catalog retrieval.
- [scripts/install-skill-from-github.py](scripts/install-skill-from-github.py): package download and installation.
- [scripts/github_utils.py](scripts/github_utils.py): shared GitHub request helper.
- [agents/openai.yaml](agents/openai.yaml), [assets/](assets/), and [LICENSE.txt](LICENSE.txt): metadata, icons, and licensing.

See the [main README](../../README.md) for installation of regular collection skills and the system-snapshot policy.
