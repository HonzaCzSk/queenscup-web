(() => {
  const KEY = "mcr_cookie_consent_v1";

  function hasConsent() {
    try { return localStorage.getItem(KEY) === "granted"; } catch { return true; }
  }

  function grant() {
    try { localStorage.setItem(KEY, "granted"); } catch {}
    const el = document.getElementById("site-notice");
    if (el) el.classList.remove("is-visible");
  }

  function show() {
    const el = document.getElementById("site-notice");
    if (!el) return;

    el.classList.add("is-visible");
    const acceptBtn = document.getElementById("cookie-accept");
    if (acceptBtn) acceptBtn.addEventListener("click", grant);
  }

  function init() {
    if (hasConsent()) return;
    show();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();