import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$TeamsPage } from "./TeamsPage_dMT69T67.mjs";
//#region src/pages/tymy.astro
var tymy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tymy,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Tymy = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tymy;
	return renderTemplate`${renderComponent($$result, "TeamsPage", $$TeamsPage, {
		"lang": "cs",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/tymy.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/tymy.astro";
var $$url = "/tymy";
//#endregion
//#region \0virtual:astro:page:src/pages/tymy@_@astro
var page = () => tymy_exports;
//#endregion
export { page };
