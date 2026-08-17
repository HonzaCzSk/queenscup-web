import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$PhotosPage } from "./PhotosPage_sCWaFHaS.mjs";
//#region src/pages/en/photos.astro
var photos_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Photos,
	file: () => $$file,
	url: () => $$url
});
var $$Photos = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "PhotosPage", $$PhotosPage, { "lang": "en" })}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/en/photos.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/en/photos.astro";
var $$url = "/en/photos";
//#endregion
//#region \0virtual:astro:page:src/pages/en/photos@_@astro
var page = () => photos_exports;
//#endregion
export { page };
