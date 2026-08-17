import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$InfoPage } from "./InfoPage_CMJEThyQ.mjs";
//#region src/pages/en/info.astro
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
		"lang": "en",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/en/info.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/en/info.astro";
var $$url = "/en/info";
//#endregion
//#region \0virtual:astro:page:src/pages/en/info@_@astro
var page = () => info_exports;
//#endregion
export { page };
