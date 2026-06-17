import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const spaRedirect = sessionStorage.getItem("spa-redirect");

if (spaRedirect) {
  sessionStorage.removeItem("spa-redirect");

  const redirectUrl = new URL(spaRedirect);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = redirectUrl.pathname.startsWith(base)
    ? redirectUrl.pathname.slice(base.length) || "/"
    : redirectUrl.pathname;

  window.history.replaceState(
    null,
    "",
    `${base}${path === "/" ? "" : path}${redirectUrl.search}${redirectUrl.hash}`,
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
