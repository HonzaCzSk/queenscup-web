import { t as __exportAll } from "./compiler_C0vW4n3q.mjs";
import { M as createComponent, j as createAstro, v as renderComponent, x as renderTemplate } from "./render_DHxBp8Wz.mjs";
import { t as $$InfoPage } from "./InfoPage_Dc5avPhx.mjs";
//#region src/pages/info.astro
var info_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Info,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Info = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Info;
	return renderTemplate`${renderComponent($$result, "InfoPage", $$InfoPage, {
		"lang": "cs",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/info.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/info.astro";
var $$url = "/info";
//#endregion
//#region \0virtual:astro:page:src/pages/info@_@astro
var page = () => info_exports;
//#endregion
export { page };
