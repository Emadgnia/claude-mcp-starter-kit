# Claude MCP Starter Kit

A practical starter repository for building Claude-compatible MCP plugins using Node.js.

## Scope

This repository is plugin-only.

For installable shared skills, use the companion repo:

- [claude-agent-skills](https://github.com/Emadgnia/claude-agent-skills)

## What You Get

- Runnable MCP server over stdio
- Example utility tools (`echo`, `utc_now`, `slugify`)
- Smoke test and basic lint check
- Open-source community standards files

## Quick Start

```bash
npm install
npm run smoke
npm start
```

## Example Claude MCP Configuration

Use your Claude client MCP settings to run this server command:

```json
{
  "claude-mcp-starter-kit": {
    "command": "node",
    "args": ["/absolute/path/to/claude-mcp-starter-kit/src/server.js"]
  }
}
```

## Scripts

- `npm start` — run MCP server over stdio
- `npm run smoke` — validate starter bootstraps correctly
- `npm run lint` — syntax check for server source

## Open Source Standards

This repo includes:

- `LICENSE` (MIT)
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- GitHub issue + PR templates

## License

MIT. See [`LICENSE`](LICENSE).
