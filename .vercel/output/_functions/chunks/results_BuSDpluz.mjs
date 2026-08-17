import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$ResultsPage } from "./ResultsPage_DNBQsfAH.mjs";
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
