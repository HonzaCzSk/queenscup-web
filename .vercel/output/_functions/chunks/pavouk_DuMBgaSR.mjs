import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$BracketPage } from "./BracketPage_DNFkNgPW.mjs";
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
