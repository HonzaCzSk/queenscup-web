import { t as __exportAll } from "./compiler_C0vW4n3q.mjs";
import { M as createComponent, j as createAstro, v as renderComponent, x as renderTemplate } from "./render_DHxBp8Wz.mjs";
import { t as $$SchedulePage } from "./SchedulePage_5GucxQs3.mjs";
//#region src/pages/rozpis.astro
var rozpis_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Rozpis,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Rozpis = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Rozpis;
	return renderTemplate`${renderComponent($$result, "SchedulePage", $$SchedulePage, {
		"lang": "cs",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/rozpis.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/rozpis.astro";
var $$url = "/rozpis";
//#endregion
//#region \0virtual:astro:page:src/pages/rozpis@_@astro
var page = () => rozpis_exports;
//#endregion
export { page };
