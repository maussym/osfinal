import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist-vercel');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, 'public'), output, { recursive: true });
await writeFile(path.join(output, 'styles.css'), await readFile(path.join(root, 'app/globals.css')));
await writeFile(path.join(output, 'index.html'), `<!doctype html>
<html lang="en" data-progress-storage="local">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#111410">
  <meta name="description" content="Operating Systems study notes, previous questions, flashcards, Bash examples and saved practice.">
  <title>OS Final Prep</title>
  <link rel="icon" type="image/svg+xml" href="/mark.svg">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="stylesheet" href="/styles.css">
</head>
<body class="antialiased">
  <a class="skip" href="#main">Skip to content</a>
  <div class="layout">
    <aside class="sidebar" id="sidebar"></aside>
    <button class="veil" id="veil" aria-label="Close navigation" hidden></button>
    <div class="workspace">
      <header id="topbar" class="topbar"></header>
      <main id="main" tabindex="-1"><div class="panel"><h1>OS Final Prep</h1><p>Loading your study space…</p></div></main>
    </div>
  </div>
  <div id="notice" role="status" aria-live="polite"></div>
  <input type="file" id="backup-file" accept="application/json,.json" hidden>
  <noscript>Enable JavaScript to use the study course and save your progress.</noscript>
  <script type="module" src="/study-app.js" data-os-app="true"></script>
</body>
</html>
`);
console.log('Vercel static build ready: dist-vercel/index.html (no Next.js manifest required).');
