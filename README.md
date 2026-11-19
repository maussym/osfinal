# OS Final Prep

Operating Systems study application adapted from the owner's [DAA Final Prep](https://github.com/maussym/daa_final).

Includes 58 previous questions (20 midterm A, 18 midterm B, 20 endterm), 30 authored practice questions, 40 bilingual flashcards, 9 lecture topics plus syllabus revision, 8 Bash examples, a PDF guide, randomized timed sessions and mistake review. Original English questions are preserved where correct; documented wording corrections and equivalent accepted answers are shown in the explanation. Set A had answers only, so its distractors are authored practice material.

The frontend is in `public/study-app.js`, `public/content.js` and `app/globals.css`. Course data is already generated and ready to edit directly. The application uses a Vinext host and Cloudflare D1 for progress tied to the authenticated Site user. A browser backup protects recent work while offline. JSON export/import offers a separate portable backup. Conflicting cloud revisions are rejected rather than silently overwriting another device.

## Run and verify

Use the repository's install/build scripts and the Sites workflow. `npm run dev` starts the local Vinext preview. Set the D1 binding in `.openai/hosting.json`; the checked-in SQL migration defines the progress table. Local preview needs its own migration applied as described by the Sites runtime. `node scripts/verify.mjs` checks course integrity, Bash syntax, authorization, per-user isolation, concurrency and saved sessions. Hash navigation keeps all course screens on the same route.

This project is hosted privately. The API only accepts authenticated platform identity headers; it does not implement a separate login system. No provider secrets are included. Deploying on a different platform requires replacing the D1/auth integration; the old static DAA Vercel configuration is not sufficient for cloud progress.

The supplied previous questions are study notes, not a verified future exam bank. Two equivalent answers are accepted in midterm B Q16 and endterm Q1. Endterm Q17 uses the actual lowercase `k` command. Midterm B Q14–15 were absent from the supplied file. Topic 10 is syllabus/revision, not a claimed Lecture-10. Source references and limits are available on the Materials page and in `course-audit.json`.


## Deploy to Vercel

`vercel.json` selects the Other framework preset, skips dependency installation, runs the dependency-free `node scripts/build-vercel.mjs` build, and publishes `dist-vercel`. It does not use the Cloudflare/Vinext build as a Next.js build, so a `.next/routes-manifest.json` is not required. The checked-in Vercel configuration overrides the corresponding project build settings. Use the repository root as the Vercel Root Directory.

On Vercel, all study screens, questions, PDF downloads and JSON export/import work as a static application. Progress, theme, lesson completion and active sessions persist in this browser's localStorage across reloads. Different browsers/devices have separate progress; use Export backup / Import backup to transfer it. No cloud sync endpoint or sign-in is claimed by this Vercel deployment. The original Sites deployment retains its authenticated D1 cloud sync; its build scripts and API are unchanged.

Run `npm run build:vercel` to verify the Vercel output locally. This build uses Node.js built-ins only.


## Assignment question practice

The Previous questions section includes the existing 58 midterm/endterm questions and 80 new questions based on Assignments 1-8 (ten per assignment). Choose the Assignments set to study only those 80, or All sets to mix them with the previous questions. Practice 40 random starts a saved session with up to 40 unique questions from the current filters, with randomized answer choices and RU/EN feedback after submission. Existing questions and saved progress IDs are retained. The mock-final pool also includes an Assignment practice option and a 40-question count where available.

Each individual assignment is also selectable in the Question set filter with its ten questions. Random practice uses up to forty questions from the current filter; a single assignment therefore gives ten randomized questions.
