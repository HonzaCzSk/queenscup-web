import "./compiler_C0vW4n3q.mjs";
import { E as addAttribute, M as createComponent, j as createAstro, v as renderComponent, w as maybeRenderHead, x as renderTemplate, y as Fragment } from "./render_DHxBp8Wz.mjs";
import { a as getLang, i as getTeams, o as t, r as getSettings, t as $$Layout } from "./global_BpGe8sQP.mjs";
//#region src/components/TeamsPage.astro
createAstro("https://astro.build");
var $$TeamsPage = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TeamsPage;
	const { lang, cat } = Astro.props;
	const locale = getLang(lang);
	const tr = t(locale);
	const teams = await getTeams(cat);
	const showTeams = (await getSettings())?.showTeams?.[cat] ?? false;
	const countryFlags = {
		CZ: "cz",
		PL: "pl",
		SK: "sk",
		HU: "hu",
		DE: "de",
		LV: "lv",
		IT: "it",
		OTHER: ""
	};
	const venues = {
		cs: {
			sokol: "Sokol HK",
			gapa: "GAPA aréna"
		},
		en: {
			sokol: "Sokol HK",
			gapa: "GAPA Arena"
		},
		pl: {
			sokol: "Sokol HK",
			gapa: "GAPA Arena"
		}
	}[locale];
	const catLabels = {
		cs: {
			u11: "U11 · Sokol HK",
			u12: "U12 · GAPA aréna",
			u13: "U13 · Sokol HK"
		},
		en: {
			u11: "U11 · Sokol HK",
			u12: "U12 · GAPA Arena",
			u13: "U13 · Sokol HK"
		},
		pl: {
			u11: "U11 · Sokol HK",
			u12: "U12 · GAPA Arena",
			u13: "U13 · Sokol HK"
		}
	}[locale];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": tr.teams.title,
		"activePage": "teams",
		"activeCategory": cat,
		"lang": lang
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="wrap"><section class="pagehead"><h1 class="h1">${tr.teams.title}</h1><p class="lead">${catLabels[cat]}</p></section>${!showTeams ? renderTemplate`<section class="card" style="text-align: center; padding: 48px 24px;"><p style="font-size: 18px; font-weight: 700; opacity: 0.5;">${tr.teams.teams_upcoming}</p></section>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<!-- Hledání --><div style="margin-bottom: 24px;"><input type="text" id="teamSearch"${addAttribute(tr.teams.search, "placeholder")} class="team-search__input" style="width: 100%; max-width: 400px; padding: 10px 14px; border-radius: 12px; border: 1px solid var(--line); font-size: 14px;"></div>${teams.length === 0 ? renderTemplate`<div class="card" style="text-align: center; padding: 40px 20px;"><p class="muted">${tr.teams.no_teams}</p></div>` : renderTemplate`<div class="stack" id="teamsList">${teams.map((t) => renderTemplate`<div class="team"${addAttribute(t.name.toLowerCase(), "data-name")}><button class="team__head" aria-expanded="false" type="button"><div style="display: flex; align-items: center; gap: 14px; width: 100%;"><div class="teamlogo">${t.logo ? renderTemplate`<img${addAttribute(t.logo, "src")}${addAttribute(t.name, "alt")} style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px;">` : renderTemplate`<span class="teamlogo--ph">${t.name.substring(0, 2).toUpperCase()}</span>`}</div><div style="flex: 1;"><h2 class="h2" style="margin: 0; display: inline-flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 800;">${t.name}</h2><div class="team-meta" style="margin-top: 4px;">${t.country && renderTemplate`<span class="pill" style="display:inline-flex; align-items:center; gap:6px;">${countryFlags[t.country] && renderTemplate`<span${addAttribute(`fi fi-${countryFlags[t.country]}`, "class")}></span>`}${t.country}</span>`}${t.venue && renderTemplate`<span class="pill muted">${tr.teams.venue}: ${venues[t.venue] ?? t.venue}</span>`}${t.coach && renderTemplate`<span class="pill muted">${tr.teams.coach}: ${t.coach}</span>`}</div></div></div><span class="team__chev"></span></button><div class="team__panel" style="display: none;"><h3 class="h3" style="font-size: 14px; text-transform: uppercase; font-weight: 900; margin-bottom: 12px; border-bottom: 1px solid var(--line); padding-bottom: 6px;">${tr.teams.roster}</h3>${!t.players || t.players.length === 0 ? renderTemplate`<p class="muted" style="font-size: 13px;">${tr.teams.roster_upcoming}</p>` : renderTemplate`<div class="tablewrap" style="max-width: 500px;"><table class="schedule roster__table"><colgroup><col style="width: 80px;"><col></colgroup><thead><tr><th>${tr.teams.number}</th><th>${tr.teams.name}</th></tr></thead><tbody>${t.players.map((p) => renderTemplate`<tr><td style="font-weight: 900; text-align: center;">${p.number ?? "—"}</td><td>${p.name}</td></tr>`)}</tbody></table></div>`}</div></div>`)}</div>`}` })}`}</main>` })}<script>
  // Accordion toggle logic
  document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".team");
    accordions.forEach((acc) => {
      const btn = acc.querySelector(".team__head");
      const panel = acc.querySelector(".team__panel");
      if (btn && panel) {
        btn.addEventListener("click", () => {
          const isExpanded = btn.getAttribute("aria-expanded") === "true";
          btn.setAttribute("aria-expanded", !isExpanded ? "true" : "false");
          panel.style.display = !isExpanded ? "block" : "none";
        });
      }
    });

    // Client-side search logic
    const searchInput = document.getElementById("teamSearch");
    const teamsList = document.getElementById("teamsList");
    if (searchInput && teamsList) {
      const teamItems = teamsList.querySelectorAll(".team");
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        teamItems.forEach((item) => {
          const name = item.getAttribute("data-name") || "";
          if (name.includes(query)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    }
  });
<\/script>`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/components/TeamsPage.astro", void 0);
//#endregion
export { $$TeamsPage as t };
