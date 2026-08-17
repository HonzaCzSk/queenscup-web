import "./compiler_C0vW4n3q.mjs";
import { E as addAttribute, M as createComponent, j as createAstro, k as unescapeHTML, v as renderComponent, w as maybeRenderHead, x as renderTemplate, y as Fragment } from "./render_DHxBp8Wz.mjs";
import { a as getLang, n as getMatches, o as t, r as getSettings, t as $$Layout } from "./global_BpGe8sQP.mjs";
//#region src/components/ResultsPage.astro
createAstro("https://astro.build");
var $$ResultsPage = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ResultsPage;
	const { lang, cat } = Astro.props;
	const locale = getLang(lang);
	const tr = t(locale);
	const matches = await getMatches(cat);
	const showSchedule = (await getSettings())?.showSchedule?.[cat] ?? true;
	const den1 = matches.filter((m) => m.day === 1);
	const den2 = matches.filter((m) => m.day === 2);
	const den3 = matches.filter((m) => m.day === 3);
	const courts = {
		court1: "Court 1",
		court2: "Court 2",
		sokol: "Sokol HK",
		gapa: "GAPA aréna"
	};
	const matchTypes = {
		cs: {
			qf: "Čtvrtfinále",
			ninth: "O 9. místo",
			seventh: "O 7. místo",
			fifth: "O 5. místo",
			third: "O 3. místo",
			final: "Finále"
		},
		en: {
			qf: "Quarterfinal",
			ninth: "9th Place Match",
			seventh: "7th Place Match",
			fifth: "5th Place Match",
			third: "3rd Place Match",
			final: "Final"
		},
		pl: {
			qf: "Ćwierćfinał",
			ninth: "Mecz o 9. miejsce",
			seventh: "Mecz o 7. miejsce",
			fifth: "Mecz o 5. miejsce",
			third: "Mecz o 3. miejsce",
			final: "Finał"
		}
	};
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
	};
	const dayLabels = {
		cs: {
			day1: "Den 1 – Pátek",
			day2: "Den 2 – Sobota",
			day3: "Den 3 – Neděle"
		},
		en: {
			day1: "Day 1 – Friday",
			day2: "Day 2 – Saturday",
			day3: "Day 3 – Sunday"
		},
		pl: {
			day1: "Dzień 1 – Piątek",
			day2: "Dzień 2 – Sobota",
			day3: "Dzień 3 – Niedziela"
		}
	};
	function formatTime(datetime) {
		if (!datetime) return "—";
		return new Date(datetime).toLocaleTimeString("cs-CZ", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false
		});
	}
	function getRowClass(m) {
		if (m.status === "live") return "is-live";
		if (m.status === "finished" || m.scoreA != null && m.scoreB != null) return "is-fin";
		return "";
	}
	function getStatusBadge(m, locale) {
		if (m.status === "live") return `<span class="badge badge--live">LIVE</span>`;
		if (m.status === "finished" || m.scoreA != null && m.scoreB != null) return `<span class="badge badge--fin">${locale === "en" ? "FT" : "FIN"}</span>`;
		return `<span class="badge">—</span>`;
	}
	function getScore(m) {
		if (m.scoreA != null && m.scoreB != null) return `${m.scoreA} : ${m.scoreB}`;
		if (m.status === "live") return "0 : 0";
		return "—";
	}
	function getQuarters(m) {
		if (!m.quarters || m.quarters.length === 0) return null;
		return m.quarters;
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": tr.results.title,
		"activePage": "results",
		"activeCategory": cat,
		"lang": lang
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="wrap"><section class="pagehead"><h1 class="h1">${tr.results.title}</h1><p class="lead">${catLabels[locale][cat]}</p></section>${!showSchedule ? renderTemplate`<section class="card" style="text-align: center; padding: 48px 24px;"><p style="font-size: 18px; font-weight: 700; opacity: 0.5;">${tr.results.results_upcoming}</p></section>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${[
		{
			label: dayLabels[locale].day1,
			matches: den1
		},
		{
			label: dayLabels[locale].day2,
			matches: den2
		},
		{
			label: dayLabels[locale].day3,
			matches: den3
		}
	].map(({ label, matches }) => matches.length > 0 && renderTemplate`<section class="card"><h2 class="h2">${label}</h2><div class="tablewrap"><table class="schedule results"><colgroup><col style="width: 75px;"><col style="width: 110px;"><col><col style="width: 110px;"><col style="width: 80px;"></colgroup><thead><tr><th>${tr.results.time}</th><th>${tr.results.hall}</th><th>${tr.results.match}</th><th>${tr.results.score}</th><th>Status</th></tr></thead><tbody>${matches.map((m) => {
		const quarters = getQuarters(m);
		return renderTemplate`<tr${addAttribute(getRowClass(m), "class")}><td>${formatTime(m.datetime)}</td><td><span${addAttribute(`pill ${m.court === "court1" ? "pill--h1" : "pill--h2"}`, "class")}>${courts[m.court] ?? m.court ?? "—"}</span></td><td><div style="font-weight: 700;">${m.teamA?.name ?? "?"} –${" "}${m.teamB?.name ?? "?"}</div>${m.matchType && m.matchType !== "group" && (matchTypes[locale][m.matchType] || m.matchType) && renderTemplate`<div class="muted" style="font-size: 11px; font-weight: normal; margin-top: 2px;">${matchTypes[locale][m.matchType] ?? m.matchType}</div>`}${m.matchType === "group" && m.group && renderTemplate`<div class="muted" style="font-size: 11px; font-weight: normal; margin-top: 2px;">${locale === "en" ? "Group" : locale === "pl" ? "Grupa" : "Skupina"}${" "}${m.group}</div>`}</td><td><div class="score-main">${getScore(m)}</div>${quarters && renderTemplate`<div class="qscore" style="margin-top: 4px;"><table class="quarters" style="font-size: 11px; opacity: 0.7;"><thead><tr>${quarters.map((_, i) => renderTemplate`<th style="padding: 1px 6px; text-align:center;">Q${i + 1}</th>`)}</tr></thead><tbody><tr>${quarters.map((q) => renderTemplate`<td style="padding: 1px 6px; text-align:center;">${q.scoreA ?? "—"}</td>`)}</tr><tr>${quarters.map((q) => renderTemplate`<td style="padding: 1px 6px; text-align:center;">${q.scoreB ?? "—"}</td>`)}</tr></tbody></table></div>`}</td><td>${unescapeHTML(getStatusBadge(m, locale))}</td></tr>`;
	})}</tbody></table></div></section>`)}` })}`}</main>` })}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/components/ResultsPage.astro", void 0);
//#endregion
export { $$ResultsPage as t };
