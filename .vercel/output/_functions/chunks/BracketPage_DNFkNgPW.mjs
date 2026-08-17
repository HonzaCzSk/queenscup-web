import "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_55xiZ2hy.mjs";
import { a as getLang, n as getMatches, o as t, t as $$Layout } from "./global_B4o87o3X.mjs";
//#region src/components/BracketPage.astro
createAstro("https://astro.build");
var $$BracketPage = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BracketPage;
	const { lang, cat } = Astro.props;
	const locale = getLang(lang);
	const tr = t(locale);
	const matches = await getMatches(cat);
	const qfMatches = matches.filter((m) => m.matchType === "qf");
	const finalMatch = matches.find((m) => m.matchType === "final");
	const thirdMatch = matches.find((m) => m.matchType === "third");
	const fifthMatch = matches.find((m) => m.matchType === "fifth");
	const seventhMatch = matches.find((m) => m.matchType === "seventh");
	const ninthMatch = matches.find((m) => m.matchType === "ninth");
	const hasAny = qfMatches.length > 0 || finalMatch || thirdMatch;
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
	function formatTime(datetime) {
		if (!datetime) return "—";
		return new Date(datetime).toLocaleTimeString("cs-CZ", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false
		});
	}
	function isPlayed(m) {
		return m?.scoreA != null && m?.scoreB != null;
	}
	function winnerA(m) {
		return isPlayed(m) && m.scoreA > m.scoreB;
	}
	function winnerB(m) {
		return isPlayed(m) && m.scoreB > m.scoreA;
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": tr.bracket.title,
		"activePage": "bracket",
		"activeCategory": cat,
		"lang": lang
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="wrap"><section class="pagehead"><h1 class="h1">${tr.bracket.title}</h1><p class="lead">${catLabels[locale][cat]}</p></section>${!hasAny ? renderTemplate`<div class="card" style="text-align: center; padding: 40px 20px;"><p class="muted">${tr.bracket.no_bracket}</p></div>` : renderTemplate`<div class="bracket-wrap"><!-- ČTVRTFINÁLE --><div class="bracket-section"><div class="bracket-section__title">${tr.bracket.qf}</div><div class="bracket-qf-grid">${qfMatches.map((m) => renderTemplate`<div${addAttribute(`bk-game ${isPlayed(m) ? "bk-game--played" : "bk-game--upcoming"}`, "class")}><div${addAttribute(`bk-team ${winnerA(m) ? "bk-team--winner" : ""}`, "class")}><span class="bk-team__name">${m.teamA?.name ?? "?"}</span>${isPlayed(m) && renderTemplate`<span class="bk-team__score">${m.scoreA}</span>`}</div><div${addAttribute(`bk-team ${winnerB(m) ? "bk-team--winner" : ""}`, "class")}><span class="bk-team__name">${m.teamB?.name ?? "?"}</span>${isPlayed(m) && renderTemplate`<span class="bk-team__score">${m.scoreB}</span>`}</div>${!isPlayed(m) && renderTemplate`<div class="bk-game__time">${formatTime(m.datetime)}</div>`}</div>`)}</div></div><!-- ZÁPASY O UMÍSTĚNÍ --><div class="bracket-section"><div class="bracket-section__title">${tr.bracket.placement}</div><div class="bracket-placement-grid"><!-- Řada 1: Finále + O 3. místo --><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">${finalMatch && renderTemplate`<div><div class="bk-placement__label">🏆 ${tr.bracket.final}</div><div${addAttribute(`bk-game bk-game--final ${isPlayed(finalMatch) ? "bk-game--played" : "bk-game--upcoming"}`, "class")}><div${addAttribute(`bk-team ${winnerA(finalMatch) ? "bk-team--winner bk-team--gold" : ""}`, "class")}><span class="bk-team__name">${finalMatch.teamA?.name ?? "—"}</span>${isPlayed(finalMatch) && renderTemplate`<span class="bk-team__score">${finalMatch.scoreA}</span>`}</div><div${addAttribute(`bk-team ${winnerB(finalMatch) ? "bk-team--winner bk-team--gold" : ""}`, "class")}><span class="bk-team__name">${finalMatch.teamB?.name ?? "—"}</span>${isPlayed(finalMatch) && renderTemplate`<span class="bk-team__score">${finalMatch.scoreB}</span>`}</div>${!isPlayed(finalMatch) && renderTemplate`<div class="bk-game__time">${formatTime(finalMatch.datetime)}</div>`}</div></div>`}${thirdMatch && renderTemplate`<div class="bk-placement--third"><div class="bk-placement__label">🥉 ${tr.bracket.third}</div><div${addAttribute(`bk-game ${isPlayed(thirdMatch) ? "bk-game--played" : "bk-game--upcoming"}`, "class")}><div${addAttribute(`bk-team ${winnerA(thirdMatch) ? "bk-team--winner bk-team--bronze" : ""}`, "class")}><span class="bk-team__name">${thirdMatch.teamA?.name ?? "—"}</span>${isPlayed(thirdMatch) && renderTemplate`<span class="bk-team__score">${thirdMatch.scoreA}</span>`}</div><div${addAttribute(`bk-team ${winnerB(thirdMatch) ? "bk-team--winner bk-team--bronze" : ""}`, "class")}><span class="bk-team__name">${thirdMatch.teamB?.name ?? "—"}</span>${isPlayed(thirdMatch) && renderTemplate`<span class="bk-team__score">${thirdMatch.scoreB}</span>`}</div>${!isPlayed(thirdMatch) && renderTemplate`<div class="bk-game__time">${formatTime(thirdMatch.datetime)}</div>`}</div></div>`}</div><!-- Řada 2: O 5. + O 7. místo --><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">${fifthMatch && renderTemplate`<div><div class="bk-placement__label">${tr.bracket.fifth}</div><div${addAttribute(`bk-game ${isPlayed(fifthMatch) ? "bk-game--played" : "bk-game--upcoming"}`, "class")}><div${addAttribute(`bk-team ${winnerA(fifthMatch) ? "bk-team--winner" : ""}`, "class")}><span class="bk-team__name">${fifthMatch.teamA?.name ?? "—"}</span>${isPlayed(fifthMatch) && renderTemplate`<span class="bk-team__score">${fifthMatch.scoreA}</span>`}</div><div${addAttribute(`bk-team ${winnerB(fifthMatch) ? "bk-team--winner" : ""}`, "class")}><span class="bk-team__name">${fifthMatch.teamB?.name ?? "—"}</span>${isPlayed(fifthMatch) && renderTemplate`<span class="bk-team__score">${fifthMatch.scoreB}</span>`}</div>${!isPlayed(fifthMatch) && renderTemplate`<div class="bk-game__time">${formatTime(fifthMatch.datetime)}</div>`}</div></div>`}${seventhMatch && renderTemplate`<div><div class="bk-placement__label">${tr.bracket.seventh}</div><div${addAttribute(`bk-game ${isPlayed(seventhMatch) ? "bk-game--played" : "bk-game--upcoming"}`, "class")}><div${addAttribute(`bk-team ${winnerA(seventhMatch) ? "bk-team--winner" : ""}`, "class")}><span class="bk-team__name">${seventhMatch.teamA?.name ?? "—"}</span>${isPlayed(seventhMatch) && renderTemplate`<span class="bk-team__score">${seventhMatch.scoreA}</span>`}</div><div${addAttribute(`bk-team ${winnerB(seventhMatch) ? "bk-team--winner" : ""}`, "class")}><span class="bk-team__name">${seventhMatch.teamB?.name ?? "—"}</span>${isPlayed(seventhMatch) && renderTemplate`<span class="bk-team__score">${seventhMatch.scoreB}</span>`}</div>${!isPlayed(seventhMatch) && renderTemplate`<div class="bk-game__time">${formatTime(seventhMatch.datetime)}</div>`}</div></div>`}</div><!-- Řada 3: O 9. místo -->${ninthMatch && renderTemplate`<div style="max-width: 50%; padding-right: 5px;"><div class="bk-placement__label">${tr.bracket.ninth}</div><div${addAttribute(`bk-game ${isPlayed(ninthMatch) ? "bk-game--played" : "bk-game--upcoming"}`, "class")}><div${addAttribute(`bk-team ${winnerA(ninthMatch) ? "bk-team--winner" : ""}`, "class")}><span class="bk-team__name">${ninthMatch.teamA?.name ?? "—"}</span>${isPlayed(ninthMatch) && renderTemplate`<span class="bk-team__score">${ninthMatch.scoreA}</span>`}</div><div${addAttribute(`bk-team ${winnerB(ninthMatch) ? "bk-team--winner" : ""}`, "class")}><span class="bk-team__name">${ninthMatch.teamB?.name ?? "—"}</span>${isPlayed(ninthMatch) && renderTemplate`<span class="bk-team__score">${ninthMatch.scoreB}</span>`}</div>${!isPlayed(ninthMatch) && renderTemplate`<div class="bk-game__time">${formatTime(ninthMatch.datetime)}</div>`}</div></div>`}</div></div></div>`}</main>` })}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/components/BracketPage.astro", void 0);
//#endregion
export { $$BracketPage as t };
