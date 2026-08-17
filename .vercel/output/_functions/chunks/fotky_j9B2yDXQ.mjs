import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$PhotosPage } from "./PhotosPage_sCWaFHaS.mjs";
//#region src/pages/fotky.astro
var fotky_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Fotky,
	file: () => $$file,
	url: () => $$url
});
var $$Fotky = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "PhotosPage", $$PhotosPage, { "lang": "cs" })}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/fotky.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/fotky.astro";
var $$url = "/fotky";
//#endregion
//#region \0virtual:astro:page:src/pages/fotky@_@astro
var page = () => fotky_exports;
//#endregion
export { page };
