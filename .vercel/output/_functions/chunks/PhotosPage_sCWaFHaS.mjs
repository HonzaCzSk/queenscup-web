import "./compiler_DiN-pB3z.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead } from "./server_55xiZ2hy.mjs";
import { a as getLang, o as t, t as $$Layout } from "./global_B4o87o3X.mjs";
//#region src/components/PhotosPage.astro
createAstro("https://astro.build");
var $$PhotosPage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PhotosPage;
	const { lang } = Astro.props;
	const locale = getLang(lang);
	const tr = t(locale);
	const cat = Astro.url.searchParams.get("cat") ?? "u11";
	const photoAlbums = {
		cs: [
			{
				title: "Den 1 – Sobota (Zápasy)",
				desc: "Fotky ze zápasů základní části"
			},
			{
				title: "Den 2 – Neděle (Play-off)",
				desc: "Fotky z play-off a finálových bojů"
			},
			{
				title: "Slavnostní zakončení",
				desc: "Vyhlášení výsledků a předávání pohárů"
			}
		],
		en: [
			{
				title: "Day 1 – Saturday (Matches)",
				desc: "Photos from group stage games"
			},
			{
				title: "Day 2 – Sunday (Play-offs)",
				desc: "Photos from play-off rounds and finals"
			},
			{
				title: "Closing Ceremony",
				desc: "Award ceremony and team photos"
			}
		],
		pl: [
			{
				title: "Dzień 1 – Sobota (Mecze)",
				desc: "Zdjęcia z meczów fazy grupowej"
			},
			{
				title: "Dzień 2 – Niedziela (Play-off)",
				desc: "Zdjęcia z fazy pucharowej i finałów"
			},
			{
				title: "Ceremonia zakończenia",
				desc: "Wręczenie nagród i zdjęcia grupowe"
			}
		]
	}[locale];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": tr.photos.title,
		"activePage": "photos",
		"activeCategory": cat,
		"lang": lang
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="wrap"><section class="pagehead"><h1 class="h1">${tr.photos.title}</h1><p class="lead">${tr.photos.desc}</p></section><!-- Zonerama Primary CTA --><div class="card card--accent" style="margin-bottom: 24px; padding: 24px; text-align: center;"><h2 class="h2" style="font-size: 16px; margin-bottom: 8px;">${tr.photos.official_gallery}</h2><p class="muted" style="font-size: 14px; margin-bottom: 16px;">${tr.photos.gallery_desc}</p><a href="https://zonerama.com" target="_blank" rel="noopener" class="btn btn--primary" style="display: inline-flex;">${tr.photos.gallery_btn}</a></div><!-- Album Blocks (Dashed Thumbnails) --><div class="card"><h2 class="h2" style="margin-bottom: 16px;">${tr.photos.daily_albums}</h2><div class="gallery" style="margin-top: 14px;">${photoAlbums.map((album) => renderTemplate`<a href="https://zonerama.com" target="_blank" rel="noopener" class="thumb" style="flex-direction: column; text-align: center; padding: 14px; gap: 4px;"><span style="font-size: 14px; font-weight: 800; color: var(--accent); line-height: 1.2;">${album.title}</span><span class="muted" style="font-size: 11px; font-weight: 500; margin-top: 2px;">${album.desc}</span><span style="font-size: 11px; font-weight: 700; opacity: 0.65; margin-top: auto; text-transform: uppercase;">${tr.photos.open_album} ↗</span></a>`)}</div></div></main>` })}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/components/PhotosPage.astro", void 0);
//#endregion
export { $$PhotosPage as t };
