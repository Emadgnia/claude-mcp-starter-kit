import { buildServer } from '../src/server.js';

const server = buildServer();
if (!server || typeof server.connect !== 'function') {
  throw new Error('Server construction failed');
}

console.log('smoke passed');
