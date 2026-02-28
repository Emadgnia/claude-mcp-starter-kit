#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

export function buildServer() {
  const server = new McpServer({
    name: 'claude-mcp-starter-kit',
    version: '0.1.0'
  });

  server.registerTool(
    'echo',
    {
      title: 'Echo Text',
      description: 'Return the input text back to the caller.',
      inputSchema: { text: z.string().min(1) }
    },
    async ({ text }) => ({
      content: [{ type: 'text', text }]
    })
  );

  server.registerTool(
    'utc_now',
    {
      title: 'UTC Timestamp',
      description: 'Return the current UTC timestamp in ISO format.'
    },
    async () => ({
      content: [{ type: 'text', text: new Date().toISOString() }]
    })
  );

  server.registerTool(
    'slugify',
    {
      title: 'Slugify Text',
      description: 'Convert input text into a URL-safe slug.',
      inputSchema: { text: z.string().min(1) }
    },
    async ({ text }) => {
      const slug = text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

      return {
        content: [{ type: 'text', text: slug || 'n-a' }]
      };
    }
  );

  return server;
}

async function main() {
  const server = buildServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

if (process.argv.includes('--help')) {
  console.log('claude-mcp-starter-kit');
  console.log('Runs an MCP server over stdio for Claude clients.');
  process.exit(0);
}

main().catch((error) => {
  console.error('[mcp-server] fatal:', error);
  process.exit(1);
});
