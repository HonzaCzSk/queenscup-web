import { t as __exportAll } from "./compiler_C0vW4n3q.mjs";
import { M as createComponent, j as createAstro, v as renderComponent, x as renderTemplate } from "./render_DHxBp8Wz.mjs";
import { t as $$SchedulePage } from "./SchedulePage_5GucxQs3.mjs";
//#region src/pages/pl/schedule.astro
var schedule_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Schedule,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Schedule = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Schedule;
	return renderTemplate`${renderComponent($$result, "SchedulePage", $$SchedulePage, {
		"lang": "pl",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pl/schedule.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pl/schedule.astro";
var $$url = "/pl/schedule";
//#endregion
//#region \0virtual:astro:page:src/pages/pl/schedule@_@astro
var page = () => schedule_exports;
//#endregion
export { page };
