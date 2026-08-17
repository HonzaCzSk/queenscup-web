import "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_55xiZ2hy.mjs";
import { a as getLang, o as t, t as $$Layout } from "./global_B4o87o3X.mjs";
//#region src/components/IndexPage.astro
createAstro("https://astro.build");
var $$IndexPage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$IndexPage;
	const { lang, cat } = Astro.props;
	const locale = getLang(lang);
	const tr = t(locale);
	const scheduleUrl = lang === "cs" ? `/rozpis?cat=${cat}` : `/${lang}/schedule?cat=${cat}`;
	const infoUrl = lang === "cs" ? `/info?cat=${cat}` : `/${lang}/info?cat=${cat}`;
	({
		cs: [
			"U11 · ročník 2015 · Sokol HK",
			"U12 · ročník 2014 · GAPA aréna",
			"U13 · ročník 2013 · Sokol HK"
		],
		en: [
			"U11 · born 2015 · Sokol HK",
			"U12 · born 2014 · GAPA Arena",
			"U13 · born 2013 · Sokol HK"
		],
		pl: [
			"U11 · rocznik 2015 · Sokol HK",
			"U12 · rocznik 2014 · GAPA Arena",
			"U13 · rocznik 2013 · Sokol HK"
		]
	})[locale];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": tr.nav.home,
		"activePage": "home",
		"activeCategory": cat,
		"lang": lang
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="wrap"><section class="hero"><div class="hero__text"><h1 class="h1">${cat === "u13" ? "V4 Basketball Queens Cup" : tr.home.hero_title}</h1><p class="muted">${tr.home.hero_subtitle}</p><p style="font-size: 14px; margin: 8px 0 10px 0;">${tr.home.hero_desc}</p><p class="lead">${cat === "u13" ? tr.home.hero_date_u13 : cat === "u12" ? tr.home.hero_date_u12 : tr.home.hero_date_u11}</p><div class="cta"><a class="btn btn--primary"${addAttribute(scheduleUrl, "href")}>${tr.home.btn_schedule}</a><a class="btn btn--ghost"${addAttribute(infoUrl, "href")}>${tr.home.btn_info}</a></div></div><div class="hero__panel"><div class="stats-grid"><div class="stat-card"><div class="stat-num-row"><span class="stat-num" data-target="100">0</span><span class="stat-plus">+</span></div><span class="stat-label">${tr.home.stats_matches}</span></div><div class="stat-card"><span class="stat-num" data-target="3">0</span><span class="stat-label">${tr.home.stats_categories}</span></div><div class="stat-card"><span class="stat-num" data-target="8">0</span><span class="stat-label">${tr.home.stats_nations}</span></div><div class="stat-card"><span class="stat-num" data-target="6">0</span><span class="stat-label">${tr.home.stats_days}</span></div><div class="stat-card stat-card--flags"><div class="stat-flags"><span class="fi fi-cz" title="Česká republika"></span><span class="fi fi-pl" title="Polsko"></span><span class="fi fi-sk" title="Slovensko"></span><span class="fi fi-hu" title="Maďarsko"></span><span class="fi fi-de" title="Německo"></span><span class="fi fi-lv" title="Lotyšsko"></span><span class="fi fi-it" title="Itálie"></span><span class="fi fi-si" title="Slovinsko"></span></div><span class="stat-label">${tr.home.stats_date}</span></div></div></div><script>
        (function () {
          function animateCounter(el) {
            const target = parseInt(el.getAttribute("data-target"));
            const duration = 1200;
            const start = performance.now();

            function update(now) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(ease * target);
              if (progress < 1) requestAnimationFrame(update);
              else el.textContent = target;
            }
            requestAnimationFrame(update);
          }

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target
                    .querySelectorAll(".stat-num[data-target]")
                    .forEach(animateCounter);
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.3 },
          );

          const grid = document.querySelector(".stats-grid");
          if (grid) observer.observe(grid);
        })();
      <\/script></section></main>` })}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/components/IndexPage.astro", void 0);
//#endregion
export { $$IndexPage as t };
