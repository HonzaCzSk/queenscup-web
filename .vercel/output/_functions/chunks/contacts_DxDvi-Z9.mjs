import { t as __exportAll } from "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate } from "./server_55xiZ2hy.mjs";
import { t as $$ContactsPage } from "./ContactsPage_CeEfh2SI.mjs";
//#region src/pages/pl/contacts.astro
var contacts_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contacts,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Contacts = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Contacts;
	return renderTemplate`${renderComponent($$result, "ContactsPage", $$ContactsPage, {
		"lang": "pl",
		"cat": Astro.url.searchParams.get("cat") ?? "u11"
	})}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pl/contacts.astro", void 0);
var $$file = "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/pages/pl/contacts.astro";
var $$url = "/pl/contacts";
//#endregion
//#region \0virtual:astro:page:src/pages/pl/contacts@_@astro
var page = () => contacts_exports;
//#endregion
export { page };
