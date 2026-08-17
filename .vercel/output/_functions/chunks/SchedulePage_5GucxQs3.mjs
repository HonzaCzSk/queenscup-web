import "./compiler_C0vW4n3q.mjs";
import { E as addAttribute, M as createComponent, j as createAstro, v as renderComponent, w as maybeRenderHead, x as renderTemplate, y as Fragment } from "./render_DHxBp8Wz.mjs";
import { a as getLang, n as getMatches, o as t, r as getSettings, t as $$Layout } from "./global_BpGe8sQP.mjs";
//#region src/components/SchedulePage.astro
createAstro("https://astro.build");
var $$SchedulePage = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SchedulePage;
	const { lang, cat } = Astro.props;
	const locale = getLang(lang);
	const tr = t(locale);
	const matches = await getMatches(cat);
	const showSchedule = (await getSettings())?.showSchedule?.[cat] ?? true;
	const den1 = matches.filter((m) => m.day === 1);
	const den2 = matches.filter((m) => m.day === 2);
	const den3 = matches.filter((m) => m.day === 3);
	const courts = {
		court1: "Court 1 – Sokol HK",
		court2: "Court 2 – Sokol HK",
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
	}[locale];
	const showStream = cat === "u13";
	function formatTime(datetime) {
		if (!datetime) return "—";
		return new Date(datetime).toLocaleTimeString(locale === "cs" ? "cs-CZ" : locale === "pl" ? "pl-PL" : "en-US", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false
		});
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": tr.schedule.title,
		"activePage": "schedule",
		"activeCategory": cat,
		"lang": lang
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="wrap"><section class="pagehead"><h1 class="h1">${tr.schedule.title}</h1><p class="lead">${catLabels[cat]}</p></section>${!showSchedule ? renderTemplate`<section class="card" style="text-align: center; padding: 48px 24px;"><p style="font-size: 18px; font-weight: 700; opacity: 0.5;">${tr.schedule.schedule_upcoming}</p></section>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<!-- Den 1 --><section class="card"><h2 class="h2">${dayLabels.day1}</h2><div class="tablewrap"><table class="schedule"><colgroup><col style="width: 80px;"><col style="width: 140px;"><col>${showStream && renderTemplate`<col style="width: 110px;">`}</colgroup><thead><tr><th>${tr.schedule.time}</th><th>${tr.schedule.hall}</th><th>${tr.schedule.match}</th>${showStream && renderTemplate`<th>Stream</th>`}</tr></thead><tbody>${den1.length === 0 ? renderTemplate`<tr><td colspan="4" class="muted" style="text-align:center; padding:20px;">${tr.schedule.no_matches}</td></tr>` : den1.map((m) => renderTemplate`<tr><td>${formatTime(m.datetime)}</td><td><span${addAttribute(`pill ${m.court === "court1" ? "pill--h1" : "pill--h2"}`, "class")}>${courts[m.court] ?? m.court ?? "—"}</span></td><td><div style="font-weight: 700;">${m.teamA?.name ?? "?"} – ${m.teamB?.name ?? "?"}</div>${m.matchType && m.matchType !== "group" && (matchTypes[m.matchType] || m.matchType) && renderTemplate`<div class="muted" style="font-size: 12px; font-weight: normal; margin-top: 2px;">${matchTypes[m.matchType] ?? m.matchType}</div>`}${m.matchType === "group" && m.group && renderTemplate`<div class="muted" style="font-size: 12px; font-weight: normal; margin-top: 2px;">${tr.schedule.group_label} ${m.group}</div>`}</td>${showStream && renderTemplate`<td>${m.court === "court1" ? renderTemplate`<a href="https://www.tvcom.cz/" target="_blank" rel="noopener" class="tvcom-badge"><span>STREAM</span></a>` : renderTemplate`<span class="tvcom-badge--empty">—</span>`}</td>`}</tr>`)}</tbody></table></div></section><!-- Den 2 --><section class="card" style="margin-top: 24px;"><h2 class="h2">${dayLabels.day2}</h2><div class="tablewrap"><table class="schedule"><colgroup><col style="width: 80px;"><col style="width: 140px;"><col>${showStream && renderTemplate`<col style="width: 110px;">`}</colgroup><thead><tr><th>${tr.schedule.time}</th><th>${tr.schedule.hall}</th><th>${tr.schedule.match}</th>${showStream && renderTemplate`<th>Stream</th>`}</tr></thead><tbody>${den2.length === 0 ? renderTemplate`<tr><td colspan="4" class="muted" style="text-align:center; padding:20px;">${tr.schedule.no_matches}</td></tr>` : den2.map((m) => renderTemplate`<tr><td>${formatTime(m.datetime)}</td><td><span${addAttribute(`pill ${m.court === "court1" ? "pill--h1" : "pill--h2"}`, "class")}>${courts[m.court] ?? m.court ?? "—"}</span></td><td><div style="font-weight: 700;">${m.teamA?.name ?? "?"} – ${m.teamB?.name ?? "?"}</div>${m.matchType && m.matchType !== "group" && (matchTypes[m.matchType] || m.matchType) && renderTemplate`<div class="muted" style="font-size: 12px; font-weight: normal; margin-top: 2px;">${matchTypes[m.matchType] ?? m.matchType}</div>`}${m.matchType === "group" && m.group && renderTemplate`<div class="muted" style="font-size: 12px; font-weight: normal; margin-top: 2px;">${tr.schedule.group_label} ${m.group}</div>`}</td>${showStream && renderTemplate`<td>${m.court === "court1" ? renderTemplate`<a href="https://www.tvcom.cz/" target="_blank" rel="noopener" class="tvcom-badge"><span>STREAM</span></a>` : renderTemplate`<span class="tvcom-badge--empty">—</span>`}</td>`}</tr>`)}</tbody></table></div></section><!-- Den 3 -->${den3.length > 0 && renderTemplate`<section class="card" style="margin-top: 24px;"><h2 class="h2">${dayLabels.day3}</h2><div class="tablewrap"><table class="schedule"><colgroup><col style="width: 80px;"><col style="width: 140px;"><col>${showStream && renderTemplate`<col style="width: 110px;">`}</colgroup><thead><tr><th>${tr.schedule.time}</th><th>${tr.schedule.hall}</th><th>${tr.schedule.match}</th>${showStream && renderTemplate`<th>Stream</th>`}</tr></thead><tbody>${den3.map((m) => renderTemplate`<tr><td>${formatTime(m.datetime)}</td><td><span${addAttribute(`pill ${m.court === "court1" ? "pill--h1" : "pill--h2"}`, "class")}>${courts[m.court] ?? m.court ?? "—"}</span></td><td><div style="font-weight: 700;">${m.teamA?.name ?? "?"} – ${m.teamB?.name ?? "?"}</div>${m.matchType && m.matchType !== "group" && (matchTypes[m.matchType] || m.matchType) && renderTemplate`<div class="muted" style="font-size: 12px; font-weight: normal; margin-top: 2px;">${matchTypes[m.matchType] ?? m.matchType}</div>`}${m.matchType === "group" && m.group && renderTemplate`<div class="muted" style="font-size: 12px; font-weight: normal; margin-top: 2px;">${tr.schedule.group_label} ${m.group}</div>`}</td>${showStream && renderTemplate`<td>${m.court === "court1" ? renderTemplate`<a href="https://www.tvcom.cz/" target="_blank" rel="noopener" class="tvcom-badge"><span>STREAM</span></a>` : renderTemplate`<span class="tvcom-badge--empty">—</span>`}</td>`}</tr>`)}</tbody></table></div></section>`}` })}`}</main>` })}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/components/SchedulePage.astro", void 0);
//#endregion
export { $$SchedulePage as t };
