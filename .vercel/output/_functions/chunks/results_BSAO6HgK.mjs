import { t as __exportAll } from "./compiler_C0vW4n3q.mjs";
import { M as createComponent, j as createAstro, v as renderComponent, x as renderTemplate } from "./render_DHxBp8Wz.mjs";
import { t as $$ResultsPage } from "./ResultsPage_CxJpKUrN.mjs";
//#region src/pages/pl/results.astro
var results_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Results,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Results = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Results;
	return renderTemplate`${renderComponent($$result, "ResultsPage", $$ResultsPage, {
		"lang": "pl",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pl/results.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pl/results.astro";
var $$url = "/pl/results";
//#endregion
//#region \0virtual:astro:page:src/pages/pl/results@_@astro
var page = () => results_exports;
//#endregion
export { page };
