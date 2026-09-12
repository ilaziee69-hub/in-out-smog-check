import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import "@/fixes.css";

const rootEl = document.getElementById("root");

// When the HTML was prerendered at build time (build/{route}/index.html has
// content), hydrate that content instead of overwriting it. Falls back to a
// normal client-side render in dev / when no prerender is present.
if (rootEl && rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootEl,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
