import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$ResultsPage } from "./ResultsPage_DNBQsfAH.mjs";
//#region src/pages/vysledky.astro
var vysledky_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Vysledky,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Vysledky = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Vysledky;
	return renderTemplate`${renderComponent($$result, "ResultsPage", $$ResultsPage, {
		"lang": "cs",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/vysledky.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/vysledky.astro";
var $$url = "/vysledky";
//#endregion
//#region \0virtual:astro:page:src/pages/vysledky@_@astro
var page = () => vysledky_exports;
//#endregion
export { page };
