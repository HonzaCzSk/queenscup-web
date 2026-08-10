(function () {
  const KEY = "theme";
  const mql = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function systemPrefersDark() {
    return !!(mql && mql.matches);
  }

  function getSaved() {
    const v = localStorage.getItem(KEY);
    return (v === "light" || v === "dark") ? v : null;
  }

  function resolveTheme(saved) {
    if (saved === "dark" || saved === "light") return saved;
    return systemPrefersDark() ? "dark" : "light";
  }

  function updateUI(saved) {
    const active = saved ?? "system";
    const names = { dark: "Dark", light: "Light", system: "System" };
    // Vyber všechny segmenty napříč všemi wrappy najednou
    document.querySelectorAll(".theme-seg[data-mode]").forEach(btn => {
      const mode = btn.dataset.mode;
      const isActive = mode === active;
      btn.classList.toggle("is-active", isActive);
      const label = btn.querySelector(".theme-seg__label");
      if (label) label.textContent = isActive ? names[mode] : names[mode][0];
    });
  }

  function applyTheme(saved) {
    document.documentElement.setAttribute("data-theme", resolveTheme(saved));
    updateUI(saved);
  }

  // Init – spusť až je DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => applyTheme(getSaved()));
  } else {
    applyTheme(getSaved());
  }

  // Klik na libovolný segment
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".theme-seg[data-mode]");
    if (!btn) return;
    const mode = btn.dataset.mode;
    if (mode === "system") {
      localStorage.removeItem(KEY);
      applyTheme(null);
    } else {
      localStorage.setItem(KEY, mode);
      applyTheme(mode);
    }
  });

  // Změna systémového nastavení
  if (mql) {
    mql.addEventListener("change", () => {
      if (getSaved() === null) applyTheme(null);
    });
  }
})();