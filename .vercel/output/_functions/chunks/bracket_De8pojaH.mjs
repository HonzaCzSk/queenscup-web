import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$BracketPage } from "./BracketPage_DNFkNgPW.mjs";
//#region src/pages/pl/bracket.astro
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
		"lang": "pl",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pl/bracket.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pl/bracket.astro";
var $$url = "/pl/bracket";
//#endregion
//#region \0virtual:astro:page:src/pages/pl/bracket@_@astro
var page = () => bracket_exports;
//#endregion
export { page };
