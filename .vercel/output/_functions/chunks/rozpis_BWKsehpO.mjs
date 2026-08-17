import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$SchedulePage } from "./SchedulePage_B1Tff8TR.mjs";
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
