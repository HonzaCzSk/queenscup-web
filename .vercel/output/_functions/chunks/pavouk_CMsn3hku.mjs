import { t as __exportAll } from "./compiler_C0vW4n3q.mjs";
import { M as createComponent, j as createAstro, v as renderComponent, x as renderTemplate } from "./render_DHxBp8Wz.mjs";
import { t as $$BracketPage } from "./BracketPage_L7ahfpSS.mjs";
//#region src/pages/pavouk.astro
var pavouk_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Pavouk,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Pavouk = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pavouk;
	return renderTemplate`${renderComponent($$result, "BracketPage", $$BracketPage, {
		"lang": "cs",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pavouk.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pavouk.astro";
var $$url = "/pavouk";
//#endregion
//#region \0virtual:astro:page:src/pages/pavouk@_@astro
var page = () => pavouk_exports;
//#endregion
export { page };
