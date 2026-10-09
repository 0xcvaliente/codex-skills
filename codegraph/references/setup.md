# Setup and troubleshooting

Reviewed with CodeGraph 1.6.2 and `codex-cli 0.162.1` on macOS arm64. Use the
chosen scope and preserve existing configuration; a setup request does not
authorize changing other agents or indexing unrelated repositories.

## Install the instruction package

From a clone of this collection:

```sh
python3 .system/skill-installer/scripts/install-skill-from-github.py \
  --repo 0xcvaliente/codex-skills --path codegraph
```

Alternatively copy the entire `codegraph/` folder to
`${CODEX_HOME:-$HOME/.codex}/skills/codegraph`, preserving an existing copy's
modifications. Discovery may need a new turn or session in the active host.

## Install the reviewed runtime

With npm available:

```sh
npm install -g --ignore-scripts --no-audit --no-fund @colbymchenry/codegraph@1.6.2
CODEGRAPH_TELEMETRY=0 CODEGRAPH_NO_DOWNLOAD=1 codegraph --version
```

The published npm package selects a platform bundle with its own Node runtime;
it differs from a source checkout's build requirements. The npm shim still
needs Node to launch. Keep optional dependencies: they contain the platform
bundle. `CODEGRAPH_NO_DOWNLOAD=1` makes a missing bundle fail with guidance
rather than downloading a replacement when a command runs.

Without npm, inspect the appropriate pinned asset and checksum from the
[v1.6.2 release](https://github.com/colbymchenry/codegraph/releases/tag/v1.6.2).
Do not silently substitute an unreviewed rolling installer.

## Connect Codex

Check `codex mcp get codegraph --json` or `codex mcp list` for an existing entry
before changing it. For a new server:

```sh
codex mcp add codegraph \
  --env CODEGRAPH_TELEMETRY=0 \
  --env CODEGRAPH_NO_DOWNLOAD=1 \
  -- codegraph serve --mcp
codex mcp get codegraph --json
```

This uses the active Codex home and configures just the stdio server. GUI hosts
may need an absolute executable path when their PATH differs from a terminal's.
A direct platform-bundle `bin/codegraph` launcher on macOS/Linux uses bundled
Node and avoids the npm shim's dependency on Node being on the GUI's PATH.

For manually managed config, the equivalent user-level TOML is:

```toml
[mcp_servers.codegraph]
command = "/absolute/path/to/codegraph"
args = ["serve", "--mcp"]

[mcp_servers.codegraph.env]
CODEGRAPH_TELEMETRY = "0"
CODEGRAPH_NO_DOWNLOAD = "1"
```

Edit existing tables rather than appending duplicates. Project-level
`.codex/config.toml` requires host support and project trust; do not change trust
settings to activate CodeGraph. For a server tied to one repository, add
`--path`, `/absolute/project` to its args. Otherwise pass an explicit
`projectPath` in queries.

Reconnect the Codex host after changing MCP configuration. An enabled entry
establishes registration, not that a running session has loaded the tool. T3
and other harnesses can maintain their own MCP catalogs; use CLI retrieval
until the host exposes `codegraph_explore`.

The upstream alternative, `codegraph install --target=codex --location=global
--yes`, also writes a CodeGraph section to `AGENTS.md` in 1.6.2. Use it only
when those instruction edits are wanted. Do not configure all agents to satisfy
a Codex-only setup request.

## Initialize a selected project

Once indexing the particular repository is requested:

```sh
CODEGRAPH_TELEMETRY=0 codegraph init /absolute/project
CODEGRAPH_TELEMETRY=0 codegraph status /absolute/project
CODEGRAPH_TELEMETRY=0 codegraph explore --path /absolute/project --max-files 4 'knownSymbol'
```

`init` creates the database and indexes immediately; it does not connect Codex.
Respect ignored paths and keep `.codegraph/` out of commits. Do not index a home
directory or filesystem root or override that refusal for orientation.

Use interactive initialization when watching is disabled and hooks have not
been requested: **1.6.2 `init --yes` installs fallback Git hooks in a Git
repository when live watching is disabled.** Choose manual syncing in the
prompt if hooks are outside scope. Non-Git temporary fixtures, as used by this
package's smoke test, have no such hook side effect.

An MCP session normally watches its primary project. Watching can lag edits;
additional `projectPath` indexes may be unwatched. Refresh an existing index:

```sh
CODEGRAPH_TELEMETRY=0 codegraph sync /absolute/project
```

Use `codegraph index /absolute/project` for a full rebuild when required by
schema/configuration changes or failed incremental recovery. Do not delete a
database or force an unlock to address an ordinary stale result; inspect the
reported lock owner and running writer first.

## Diagnose a failure

- **No tool:** check registration and reconnect; use the CLI if available.
  Installing a skill alone never exposes an MCP tool.
- **No index / wrong project:** verify the selected root and index location.
  Continue with source tools when indexing was not requested. Do not silently
  initialize every service in a monorepo.
- **Empty or ambiguous result:** check actual names, language and ignore rules,
  then inspect relevant source. A missing edge is not an absence proof.
- **Stale result:** read affected source, sync the authorized index, and retry.
  Disabled/recovering watching affects the whole index; per-file notices affect
  listed files.
- **Missing platform bundle:** check optional dependencies and registry access,
  then reinstall the pinned runtime. The offline flag deliberately blocks the
  shim's automatic GitHub download fallback.
- **Unexpected tool menu:** 1.6.2 defaults to explore only. Additional tools need
  `CODEGRAPH_MCP_TOOLS`; use the CLI for a one-off caller/status query rather
  than widening every session's menu.

Telemetry is disabled in these examples. Upstream documents usage statistics
separately from local source storage in
[TELEMETRY.md](https://github.com/colbymchenry/codegraph/blob/v1.6.2/TELEMETRY.md).
Use `CODEGRAPH_TELEMETRY=0` for CLI runs too; an MCP setting applies only to that
server process.

## Verify or remove

With Python 3.9+ and an installed runtime, run from the collection root:

```sh
python3 codegraph/scripts/smoke_test.py --codegraph /absolute/path/to/codegraph
```

The helper indexes only temporary non-Git TypeScript/Python fixtures, exercises
CLI retrieval and edit/sync behavior, then checks MCP from an unindexed root
with explicit `projectPath`. It disables telemetry, downloads, watching, and
daemon detachment, and terminates its server. It does not call an LLM, install
packages, change Codex config, or measure savings.

`codex mcp remove codegraph` removes a native registration. Remove an installed
skill/runtime only when requested, after checking its path and ownership.
`codegraph uninit /absolute/project` removes that index and may remove CodeGraph
sync hooks; it is not a routine troubleshooting step.
