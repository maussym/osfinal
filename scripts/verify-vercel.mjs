import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const files = new Map();
globalThis.localStorage = {
  getItem: key => files.get(key) ?? null,
  setItem: (key, value) => files.set(key, value),
};
globalThis.window = new EventTarget();
globalThis.document = { documentElement: { dataset: { progressStorage: 'local' } }, addEventListener() {} };
let fetches = 0;
globalThis.fetch = () => { fetches++; throw new Error('Static deployments must not call the cloud API'); };
const first = await import('../public/sync.js?test=initial');
assert.equal(await first.loadProgress(), null);
const progress = { completed: { 1: true }, cards: { 2: true }, code: {}, attempts: { 'ma-1': { correct: 1 } }, history: [], active: { index: 1 }, ui: { theme: 'light', collapsed: true } };
first.storeProgress(progress);
assert.equal(first.syncInfo().label, 'Saved on this device');
assert.equal(JSON.parse(files.get('os-final-prep-sync-v1')).dirty, false);
const reloaded = await import('../public/sync.js?test=reload');
assert.deepEqual(await reloaded.loadProgress(), progress, 'Reload must restore lessons, cards, answers, active session and settings');
reloaded.retrySync();
assert.equal(fetches, 0);
const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
assert.equal(config.framework, null);
assert.equal(config.installCommand, '');
assert.equal(config.buildCommand, 'node scripts/build-vercel.mjs');
const index = await readFile(new URL('../dist-vercel/index.html', import.meta.url), 'utf8');
for (const id of ['sidebar', 'veil', 'topbar', 'main', 'notice', 'backup-file']) assert.ok(index.includes(`id="${id}"`), id);
for (const file of ['study-app.js', 'sync.js', 'content.js', 'styles.css', 'mark.svg', 'OS_Study_Guide_RU_EN.pdf']) assert.ok((await readFile(new URL(`../dist-vercel/${file}`, import.meta.url))).length > 0, file);
assert.ok(index.includes('data-progress-storage="local"'));
console.log('PASS: Vercel config/output; local progress and settings survive reloads without cloud requests.');
