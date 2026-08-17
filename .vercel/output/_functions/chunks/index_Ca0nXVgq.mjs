import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$IndexPage } from "./IndexPage_9heL98tq.mjs";
//#region src/pages/pl/index.astro
var pl_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => "/pl"
});
createAstro("https://astro.build");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	return renderTemplate`${renderComponent($$result, "IndexPage", $$IndexPage, {
		"lang": "pl",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pl/index.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pl/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/pl/index@_@astro
var page = () => pl_exports;
//#endregion
export { page };
