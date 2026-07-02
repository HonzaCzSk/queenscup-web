(function () {
  const KEY = "theme";
  const wrap = document.getElementById("themeToggle");
  if (!wrap) return;

  const mql = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function systemPrefersDark() {
    return !!(mql && mql.matches);
  }

  function getSaved() {
    const v = localStorage.getItem(KEY);
    return (v === "light" || v === "dark") ? v : null;
  }

  // "dark" | "light" | null(=system) -> aktuální data-theme hodnota
  function resolveTheme(saved) {
    if (saved === "dark" || saved === "light") return saved;
    return systemPrefersDark() ? "dark" : "light";
  }

  // saved: "dark" | "light" | null
  function updateUI(saved) {
    const active = saved ?? "system";
    wrap.querySelectorAll(".theme-seg").forEach(btn => {
      const mode = btn.dataset.mode;
      const isActive = mode === active;
      btn.classList.toggle("is-active", isActive);
      // aktivní = celý název, neaktivní = první písmeno
      const names = { dark: "Dark", light: "Light", system: "System" };
      btn.querySelector(".theme-seg__label").textContent = isActive ? names[mode] : names[mode][0];
    });
  }

  function applyTheme(saved) {
    document.documentElement.setAttribute("data-theme", resolveTheme(saved));
    updateUI(saved);
  }

  // init
  applyTheme(getSaved());

  // klik na segment
  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".theme-seg");
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

  // změna systému – jen když je nastaven system
  if (mql) {
    mql.addEventListener("change", () => {
      if (getSaved() === null) applyTheme(null);
    });
  }
})();