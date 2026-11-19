"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    if (document.querySelector('script[data-os-app]')) return;
    const script = document.createElement('script');
    script.type = 'module'; script.src = '/study-app.js'; script.dataset.osApp = 'true';
    document.body.appendChild(script);
  }, []);
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <div className="layout">
      <aside className="sidebar" id="sidebar" />
      <button className="veil" id="veil" aria-label="Close navigation" hidden />
      <div className="workspace">
        <header id="topbar" className="topbar" />
        <main id="main" tabIndex={-1}><div className="panel"><h1>OS Final Prep</h1><p>Loading your study space…</p></div></main>
      </div>
    </div>
    <div id="notice" role="status" aria-live="polite" />
    <input type="file" id="backup-file" accept="application/json,.json" hidden />
  </>;
}
