import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$ContactsPage } from "./ContactsPage_CeEfh2SI.mjs";
//#region src/pages/kontakty.astro
var kontakty_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Kontakty,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Kontakty = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Kontakty;
	return renderTemplate`${renderComponent($$result, "ContactsPage", $$ContactsPage, {
		"lang": "cs",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/kontakty.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/kontakty.astro";
var $$url = "/kontakty";
//#endregion
//#region \0virtual:astro:page:src/pages/kontakty@_@astro
var page = () => kontakty_exports;
//#endregion
export { page };
