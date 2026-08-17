import { t as __exportAll } from "./compiler_C0vW4n3q.mjs";
import { M as createComponent, j as createAstro, v as renderComponent, x as renderTemplate } from "./render_DHxBp8Wz.mjs";
import { t as $$BracketPage } from "./BracketPage_L7ahfpSS.mjs";
//#region src/pages/en/bracket.astro
var bracket_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Bracket,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Bracket = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Bracket;
	return renderTemplate`${renderComponent($$result, "BracketPage", $$BracketPage, {
		"lang": "en",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/en/bracket.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/en/bracket.astro";
var $$url = "/en/bracket";
//#endregion
//#region \0virtual:astro:page:src/pages/en/bracket@_@astro
var page = () => bracket_exports;
//#endregion
export { page };
