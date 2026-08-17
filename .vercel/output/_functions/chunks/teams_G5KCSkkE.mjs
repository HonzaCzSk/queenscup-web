import { t as __exportAll } from "./compiler_C0vW4n3q.mjs";
import { M as createComponent, j as createAstro, v as renderComponent, x as renderTemplate } from "./render_DHxBp8Wz.mjs";
import { t as $$TeamsPage } from "./TeamsPage_Donvhu6g.mjs";
//#region src/pages/en/teams.astro
var teams_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Teams,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Teams = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Teams;
	return renderTemplate`${renderComponent($$result, "TeamsPage", $$TeamsPage, {
		"lang": "en",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/en/teams.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/en/teams.astro";
var $$url = "/en/teams";
//#endregion
//#region \0virtual:astro:page:src/pages/en/teams@_@astro
var page = () => teams_exports;
//#endregion
export { page };
