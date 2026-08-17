import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$PhotosPage } from "./PhotosPage_sCWaFHaS.mjs";
//#region src/pages/pl/photos.astro
var photos_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Photos,
	file: () => $$file,
	url: () => $$url
});
var $$Photos = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "PhotosPage", $$PhotosPage, { "lang": "pl" })}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pl/photos.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pl/photos.astro";
var $$url = "/pl/photos";
//#endregion
//#region \0virtual:astro:page:src/pages/pl/photos@_@astro
var page = () => photos_exports;
//#endregion
export { page };
