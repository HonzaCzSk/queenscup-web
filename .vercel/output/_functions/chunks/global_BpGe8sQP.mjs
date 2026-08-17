import "./compiler_C0vW4n3q.mjs";
import { E as addAttribute, M as createComponent, T as renderHead, b as renderSlot, g as renderScript, j as createAstro, v as renderComponent, x as renderTemplate } from "./render_DHxBp8Wz.mjs";
import { createClient } from "@sanity/client";
//#endregion
//#region src/i18n/index.ts
var languages = {
	cs: {
		construction_notice: "Tento web je momentálně ve výstavbě. Probíhá příprava dat, soupisek a rozpisů zápasů.",
		cookies: {
			label: "Upozornění na cookies",
			title: "Tento web ukládá vaše preference",
			desc: "Používáme localStorage pouze pro uložení zvoleného barevného motivu. Žádná osobní data neshromažďujeme.",
			accept: "Rozumím"
		},
		partners: {
			general: "Generální partner",
			main: "Hlavní partneři",
			regular: "Partneři",
			media: "Mediální partneři"
		},
		nav: {
			home: "Úvod",
			schedule: "Rozpis",
			results: "Výsledky",
			bracket: "Pavouk",
			teams: "Týmy",
			info: "Info",
			contacts: "Kontakty",
			photos: "Fotky"
		},
		categories: {
			u11: "U11 · 2015",
			u12: "U12 · 2014",
			u13: "U13 · 2013"
		},
		home: {
			hero_title: "Basketball Queens Cup",
			hero_subtitle: "Mezinárodní minibasketbalový turnaj dívek",
			hero_desc: "Mezinárodní minibasketbalový turnaj pro dívky ve třech věkových kategoriích – U11, U12 a U13. Týmy z různých koutů Evropy se utkají v Hradci Králové o celkové vítězství. Turnaj je pořádán basketbalovým klubem Hradecké lvice.",
			hero_date: "Září 2026 · Hradec Králové",
			btn_schedule: "Rozpis zápasů",
			btn_info: "Info pro návštěvníky",
			how_title: "Jak turnaj probíhá",
			why_title: "Proč přijít",
			partners_title: "Partneři turnaje",
			hero_date_u11: "11. – 13. září 2026",
			hero_date_u12: "4. – 6. září 2026",
			hero_date_u13: "4. – 6. září 2026",
			stats_matches: "zápasů",
			stats_categories: "kategorie",
			stats_nations: "národností",
			stats_days: "dní turnaje",
			stats_date: "Hradec Králové · září 2026"
		},
		schedule: {
			title: "Rozpis zápasů",
			day1: "Den 1 – Sobota",
			day2: "Den 2 – Neděle",
			no_matches: "Rozpis bude doplněn.",
			time: "Čas",
			hall: "Hala",
			match: "Zápas",
			group_label: "Skupina",
			schedule_upcoming: "Rozpis zápasů bude zveřejněn brzy."
		},
		results: {
			title: "Výsledky zápasů",
			no_matches: "Zatím nebyly odehrány žádné zápasy.",
			fin: "Konec",
			live: "LIVE",
			score: "Skóre",
			match: "Zápas",
			time: "Čas",
			hall: "Hala",
			results_upcoming: "Výsledky budou k dispozici po zahájení turnaje."
		},
		teams: {
			title: "Týmy a soupisky",
			search: "Hledat tým podle názvu...",
			coach: "Trenér / Trenérka",
			roster: "Soupiska",
			number: "Číslo",
			name: "Jméno a příjmení",
			no_teams: "V této kategorii zatím nejsou přihlášeny žádné týmy.",
			venue: "Hřiště",
			teams_upcoming: "Seznam týmů bude zveřejněn brzy.",
			roster_upcoming: "Soupiska bude doplněna."
		},
		bracket: {
			title: "Play-off (Pavouk)",
			no_bracket: "Pavouk se v této kategorii nehraje či není v harmonogramu žádné play-off utkání.",
			semis: "Semifinále",
			final: "Finále",
			third: "O 3. místo",
			winner: "Vítěz",
			playoff: "Play-off",
			qf: "Čtvrtfinále",
			placement: "Zápasy o umístění",
			fifth: "O 5. místo",
			seventh: "O 7. místo",
			ninth: "O 9. místo"
		},
		info: {
			title: "Informace pro návštěvníky",
			parking: "Parkování",
			travel: "Doprava",
			tickets: "Vstupné",
			downloads: "Ke stažení",
			venues: "Sportovní haly",
			poster: "Plakát turnaje (PDF)",
			download_btn: "Stáhnout PDF",
			parking_desc: "Parkování v okolí haly je možné. Nedaleko se nachází parkovací dům Jana Gayera, který je otevřen 24/7. V okolí haly se nachází žlutá parkovací zóna, kde je možné parkovat zdarma pouze jen v neděli. V ostatní dny je parkování zpoplatněno (20Kč/h, v pracovní dny se platí v hodinách 8-18, o víkendu 8-16).",
			travel_desc: "Nejbližší autobusová zastávka je Muzeum. Ze zastávky dojdete k hale za 2 minuty. K zástavce jezdí autobusy č. 12, 13, 16, 17 a trolejbusy 3, 4 a 7.",
			tickets_desc: "Vstup na všechna utkání ve všech halách je po celou dobu turnaje zdarma. Přijďte podpořit mladé basketbalové naděje!",
			venues_desc: "Turnaj probíhá na dvou místech v Hradci Králové: hala Sokol HK (U11, U13) a GAPA aréna (U12). Mezi halami je dobré spojení MHD i možnost parkování.",
			subtitle: "Důležité organizační informace a pokyny pro týmy a návštěvníky turnaje.",
			venue_dates: "Místo a termín",
			show_on_map: "Zobrazit na mapě →",
			free: "Zdarma",
			map: "Mapa →",
			nearest_stop: "Nejbližší zastávka"
		},
		contacts: {
			title: "Kontakty",
			organizer: "Hlavní organizátor",
			team: "Organizační tým",
			venues: "Adresy hal",
			map_link: "Zobrazit na mapě",
			organizer_club: "Klub Hradecké lvice",
			accommodation_contact: "Pořadatel turnaje",
			results_contact: "Web administrace"
		},
		photos: {
			title: "Fotogalerie",
			gallery_btn: "Zobrazit celou galerii na Zonerama",
			no_photos: "Fotogalerie bude nahrána po zahájení turnaje.",
			desc: "Zde naleznete odkazy na oficiální fotogalerie z průběhu celého turnaje Queens Cup 2026.",
			official_gallery: "Oficiální fotogalerie na Zonerama",
			gallery_desc: "Všechny fotografie z turnaje naleznete v plném rozlišení na naší Zoneramě.",
			daily_albums: "Fotoalba podle hracích dnů",
			open_album: "Otevřít album"
		},
		footer: {
			rights: "© Queens Cup – Hradec Králové",
			eu_funding: "Spolufinancováno Evropskou unií"
		}
	},
	en: {
		construction_notice: "This website is currently under construction. Tournament data, rosters, and schedules are being prepared.",
		cookies: {
			label: "Cookie Notice",
			title: "This website saves your preferences",
			desc: "We only use localStorage to store your chosen color theme. We do not collect any personal data.",
			accept: "Understood"
		},
		partners: {
			general: "General Partner",
			main: "Main Partners",
			regular: "Partners",
			media: "Media Partners"
		},
		nav: {
			home: "Home",
			schedule: "Schedule",
			results: "Results",
			bracket: "Bracket",
			teams: "Teams",
			info: "Info",
			contacts: "Contacts",
			photos: "Photos"
		},
		categories: {
			u11: "U11 · 2015",
			u12: "U12 · 2014",
			u13: "U13 · 2013"
		},
		home: {
			hero_title: "Queens Cup",
			hero_subtitle: "International Girls Minibasketball Tournament",
			hero_desc: "An international minibasketball tournament for girls across three age categories – U11, U12 and U13. Teams from across Europe will compete in Hradec Králové for the overall victory. The tournament is organized by the Hradecké lvice basketball club.",
			hero_date: "September 2026 · Hradec Králové",
			btn_schedule: "Match Schedule",
			btn_info: "Visitor Info",
			how_title: "How the tournament works",
			why_title: "Why come",
			partners_title: "Tournament Partners",
			hero_date_u11: "September 11–13, 2026",
			hero_date_u12: "September 4–6, 2026",
			hero_date_u13: "September 4–6, 2026",
			stats_matches: "matches",
			stats_categories: "categories",
			stats_nations: "nations",
			stats_days: "tournament days",
			stats_date: "Hradec Králové · September 2026"
		},
		schedule: {
			title: "Match Schedule",
			day1: "Day 1 – Saturday",
			day2: "Day 2 – Sunday",
			no_matches: "Schedule will be added soon.",
			time: "Time",
			hall: "Hall",
			match: "Match",
			group_label: "Group",
			schedule_upcoming: "The schedule will be published soon."
		},
		results: {
			title: "Match Results",
			no_matches: "No matches played yet.",
			fin: "FT",
			live: "LIVE",
			score: "Score",
			match: "Match",
			time: "Time",
			hall: "Hall",
			results_upcoming: "Results will be available once the tournament begins."
		},
		teams: {
			title: "Teams & Rosters",
			search: "Search team by name...",
			coach: "Coach",
			roster: "Roster",
			number: "Number",
			name: "Player Name",
			no_teams: "No teams registered in this category yet.",
			venue: "Venue",
			teams_upcoming: "The team list will be published soon.",
			roster_upcoming: "Roster will be added soon."
		},
		bracket: {
			title: "Play-offs (Bracket)",
			no_bracket: "No play-off matches scheduled in this category.",
			semis: "Semifinals",
			final: "Final",
			third: "3rd Place Match",
			winner: "Winner",
			playoff: "Play-offs",
			qf: "Quarter-finals",
			placement: "Placement Matches",
			fifth: "5th Place Match",
			seventh: "7th Place Match",
			ninth: "9th Place Match"
		},
		info: {
			title: "Information for Visitors",
			parking: "Parking",
			travel: "Travel",
			tickets: "Admission",
			downloads: "Downloads",
			venues: "Sports venues",
			poster: "Tournament Poster (PDF)",
			download_btn: "Download PDF",
			parking_desc: "Parking is available near the arena. The Jana Gayera parking garage is located nearby and is open 24/7. There is a yellow parking zone around the arena where parking is free only on Sundays. On other days, parking is subject to a fee (20 Kč/hour; on weekdays from 8 a.m. to 6 p.m., and on weekends from 8 a.m. to 4 p.m.).",
			travel_desc: "The nearest bus stop is Muzeum. It’s a 2-minute walk from the stop to the arena. Buses 12, 13, 16, and 17, as well as trolleybuses 3, 4, and 7, stop there.",
			tickets_desc: "Admission to all matches at all venues is free of charge for the entire duration of the tournament. Come support young basketball talents!",
			venues_desc: "The tournament is hosted across two locations in Hradec Králové: Sokol HK (U11, U13) and GAPA Arena (U12). Both venues are easily accessible via public transit and offer parking.",
			subtitle: "Important organizational information and guidelines for teams and tournament visitors.",
			venue_dates: "Venue & Dates",
			show_on_map: "Show on map →",
			free: "Free",
			map: "Map →",
			nearest_stop: "Nearest stop"
		},
		contacts: {
			title: "Contacts",
			organizer: "Main Organizer",
			team: "Organizing Team",
			venues: "Venues Addresses",
			map_link: "Show on map",
			organizer_club: "Hradecké lvice Club",
			accommodation_contact: "Tournament Organizer",
			results_contact: "Web Administration"
		},
		photos: {
			title: "Photo Gallery",
			gallery_btn: "View entire gallery on Zonerama",
			no_photos: "The photo gallery will be uploaded after the tournament starts.",
			desc: "Here you will find links to the official photo galleries from the Queens Cup 2026 tournament.",
			official_gallery: "Official Photo Gallery on Zonerama",
			gallery_desc: "All high-resolution tournament photos are available on our Zonerama profile.",
			daily_albums: "Photo Albums by Day",
			open_album: "Open Album"
		},
		footer: {
			rights: "© Queens Cup – Hradec Králové",
			eu_funding: "Co-funded by the European Union"
		}
	},
	pl: {
		construction_notice: "Ta strona jest obecnie w budowie. Dane turniejowe, składy i harmonogramy są w trakcie przygotowywania.",
		cookies: {
			label: "Informacja o cookies",
			title: "Ta strona zapisuje Twoje preferencje",
			desc: "Używamy localStorage wyłącznie do zapisywania wybranego motywu kolorystycznego. Nie zbieramy żadnych danych osobowych.",
			accept: "Rozumiem"
		},
		partners: {
			general: "Partner generalny",
			main: "Partnerzy główni",
			regular: "Partnerzy",
			media: "Partnerzy medialni"
		},
		nav: {
			home: "Strona główna",
			schedule: "Harmonogram",
			results: "Wyniki",
			bracket: "Drabinka",
			teams: "Družyny",
			info: "Info",
			contacts: "Kontakt",
			photos: "Zdjęcia"
		},
		categories: {
			u11: "U11 · 2015",
			u12: "U12 · 2014",
			u13: "U13 · 2013"
		},
		home: {
			hero_title: "Queens Cup",
			hero_subtitle: "Międzynarodowy turniej miniкосzykówki dziewcząt",
			hero_desc: "Międzynarodowy turniej miniкосzykówki dla dziewcząt w trzech kategoriach wiekowych – U11, U12 i U13. Drużyny z różnych stron Europy będą rywalizować w Hradec Králové o zwycięstwo. Turniej organizowany jest przez klub koszykarski Hradecké lvice.",
			hero_date: "Wrzesień 2026 · Hradec Králové",
			btn_schedule: "Harmonogram meczów",
			btn_info: "Info dla gości",
			how_title: "Jak przebiega turniej",
			why_title: "Dlaczego warto przyjść",
			partners_title: "Partnerzy turnieju",
			hero_date_u11: "11–13 września 2026",
			hero_date_u12: "4–6 września 2026",
			hero_date_u13: "4–6 września 2026",
			stats_matches: "meczów",
			stats_categories: "kategorie",
			stats_nations: "narodowości",
			stats_days: "dni turnieju",
			stats_date: "Hradec Králové · wrzesień 2026"
		},
		schedule: {
			title: "Harmonogram meczów",
			day1: "Dzień 1 – Sobota",
			day2: "Dzień 2 – Niedziela",
			no_matches: "Harmonogram zostanie uzupełniony.",
			time: "Czas",
			hall: "Hala",
			match: "Mecz",
			group_label: "Grupa",
			schedule_upcoming: "Harmonogram zostanie wkrótce opublikowany."
		},
		results: {
			title: "Wyniki meczów",
			no_matches: "Brak rozegranych meczów.",
			fin: "Koniec",
			live: "LIVE",
			score: "Wynik",
			match: "Mecz",
			time: "Czas",
			hall: "Hala",
			results_upcoming: "Wyniki będą dostępne po rozpoczęciu turnieju."
		},
		teams: {
			title: "Drużyny i składy",
			search: "Szukaj drużyny...",
			coach: "Trener / Trenerka",
			roster: "Skład",
			number: "Numer",
			name: "Imię i nazwisko",
			no_teams: "W tej kategorii nie ma ještě zarejestrowanych drużyn.",
			venue: "Hala",
			teams_upcoming: "Lista drużyn zostanie wkrótce opublikowana.",
			roster_upcoming: "Skład zostanie uzupełniony."
		},
		bracket: {
			title: "Play-off (Drabinka)",
			no_bracket: "W tej kategorii nie rozgrywają się mecze play-off ani nie ma ich w harmonogramie.",
			semis: "Półfinały",
			final: "Finał",
			third: "Mecz o 3. miejsce",
			winner: "Zwycięzca",
			playoff: "Play-offs",
			qf: "Ćwierćfinał",
			placement: "Mecze o miejsca",
			fifth: "Mecz o 5. miejsce",
			seventh: "Mecz o 7. miejsce",
			ninth: "Mecz o 9. miejsce"
		},
		info: {
			title: "Informacje dla odwiedzających",
			parking: "Parking",
			travel: "Transport",
			tickets: "Wstęp",
			downloads: "Do pobrania",
			venues: "Hale sportowe",
			poster: "Plakat turnieju (PDF)",
			download_btn: "Pobierz PDF",
			parking_desc: "W pobliżu hali można zaparkować. W pobliżu znajduje się parking wielopoziomowy im. Jana Gayera, który jest otwarty przez całą dobę, siedem dni w tygodniu. W okolicy hali znajduje się żółta strefa parkingowa, w której bezpłatne parkowanie jest możliwe wyłącznie w niedziele. W pozostałe dni parkowanie jest płatne (20 Kč/h, w dni robocze opłata obowiązuje w godzinach 8:00–18:00, w weekendy 8:00–16:00).",
			travel_desc: "Najbliższy przystanek autobusowy to „Muzeum”. Z przystanku do hali można dojść w 2 minuty. Do przystanku dojeżdżają autobusy nr 12, 13, 16, 17 oraz trolejbusy nr 3, 4 i 7.",
			tickets_desc: "Wstęp na wszystkie mecze we wszystkich halach przez cały czas trwania turnieju jest bezpłatny. Zapraszamy do kibicowania młodym koszykarkom!",
			venues_desc: "Turniej rozgrywany jest w dwóch lokalizacjach w Hradec Králové: hala Sokol HK (U11, U13) oraz GAPA arena (U12). Hale są dobrze skomunikowane i posiadają parkingi.",
			subtitle: "Ważne informacje organizacyjne i wskazówki dla drużyn oraz gości turnieju.",
			venue_dates: "Miejsce i termin",
			show_on_map: "Pokaż na mapie →",
			free: "Bezpłatnie",
			map: "Mapa →",
			nearest_stop: "Najbliższy przystanek"
		},
		contacts: {
			title: "Kontakt",
			organizer: "Główny organizator",
			team: "Zespół organizacyjny",
			venues: "Adresy hal",
			map_link: "Pokaż na mapie",
			organizer_club: "Klub Hradecké lvice",
			accommodation_contact: "Pořadatel turnieje",
			results_contact: "Administracja webu"
		},
		photos: {
			title: "Galeria zdjęć",
			gallery_btn: "Zobacz całą galerię w serwisie Zonerama",
			no_photos: "Galeria zdjęć zostanie udostępniona po rozpoczęciu turnieju.",
			desc: "Tutaj znajdziesz linki do oficjalnych galerii zdjęć z turnieju Queens Cup 2026.",
			official_gallery: "Oficjalna galeria na Zonerama",
			gallery_desc: "Wszystkie zdjęcia z turnieju w pełnej rozdzielczości znajdziesz na naszym profilu Zonerama.",
			daily_albums: "Albumy zdjęć według dni",
			open_album: "Otwórz album"
		},
		footer: {
			rights: "© Queens Cup – Hradec Králové",
			eu_funding: "Dofinansowane przez Unię Europejską"
		}
	}
};
function getLang(lang) {
	if (lang in languages) return lang;
	return "cs";
}
function t(lang) {
	return languages[lang];
}
//#endregion
//#region src/lib/sanity.ts
var sanityClient = createClient({
	projectId: "xn7ub1mg",
	dataset: "production",
	useCdn: true,
	apiVersion: "2024-01-01"
});
//#endregion
//#region src/lib/queries.ts
async function getPartners() {
	try {
		return await sanityClient.fetch(`
      *[_type == "partner"] | order(level asc) {
        _id,
        name,
        url,
        level,
        "logo": logo.asset->url,
      }
    `);
	} catch (error) {
		console.error("Error fetching partners from Sanity:", error);
		return [];
	}
}
async function getTeams(category) {
	try {
		return await sanityClient.fetch(`
      *[_type == "team" && category == $category && !(name in ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "__"])] | order(name asc) {
        _id,
        name,
        category,
        country,
        venue,
        coach,
        "logo": logo.asset->url,
        players
      }
    `, { category });
	} catch (error) {
		console.error(`Error fetching teams for category ${category}:`, error);
		return [];
	}
}
async function getMatches(category) {
	try {
		return await sanityClient.fetch(`
      *[_type == "match" && category == $category] | order(day asc, datetime asc) {
        _id,
        category,
        day,
        datetime,
        venue,
        court,
        matchType,
        group,
        scoreA,
        scoreB,
        status,
        quarters,
        "teamA": teamA->{ name, country },
        "teamB": teamB->{ name, country },
      }
    `, { category });
	} catch (error) {
		console.error(`Error fetching matches for category ${category}:`, error);
		return [];
	}
}
async function getSettings() {
	try {
		return await sanityClient.fetch(`
      *[_type == "settings"][0] {
        showSchedule,
        showTeams
      }
    `) || {};
	} catch (error) {
		console.error("Error fetching settings from Sanity:", error);
		return {};
	}
}
//#endregion
//#region node_modules/@vercel/speed-insights/dist/astro/index.astro
createAstro("https://astro.build");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", {
		"data-props": JSON.stringify(Astro.props),
		"data-params": JSON.stringify(Astro.params),
		"data-pathname": Astro.url.pathname
	})}${renderScript($$result, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title, description = "Mezinárodní minibasketbalový turnaj – Hradec Králové", lang = "cs", activePage = "", activeCategory = "u11" } = Astro.props;
	const tr = t(getLang(lang));
	const currentPath = Astro.url.pathname;
	const currentCat = Astro.url.searchParams.get("cat") ?? activeCategory ?? "u11";
	const catParam = `?cat=${currentCat}`;
	const tournamentName = currentCat === "u13" ? "V4 Basketball Queens Cup" : "Basketball Queens Cup";
	const pathMap = {
		"/": {
			en: "/en/",
			pl: "/pl/"
		},
		"/rozpis": {
			en: "/en/schedule",
			pl: "/pl/schedule"
		},
		"/vysledky": {
			en: "/en/results",
			pl: "/pl/results"
		},
		"/pavouk": {
			en: "/en/bracket",
			pl: "/pl/bracket"
		},
		"/tymy": {
			en: "/en/teams",
			pl: "/pl/teams"
		},
		"/info": {
			en: "/en/info",
			pl: "/pl/info"
		},
		"/kontakty": {
			en: "/en/contacts",
			pl: "/pl/contacts"
		},
		"/fotky": {
			en: "/en/photos",
			pl: "/pl/photos"
		}
	};
	const csPath = currentPath.replace(/\/$/, "").replace(/^\/en/, "").replace(/^\/pl/, "").replace(/\/(schedule|harmonogram)$/, "/rozpis").replace(/\/(results|wyniki)$/, "/vysledky").replace(/\/(bracket|drabinka)$/, "/pavouk").replace(/\/(teams|druzyny)$/, "/tymy").replace(/\/(contacts|kontakt)$/, "/kontakty").replace(/\/(photos|zdjecia)$/, "/fotky") || "/";
	const mapped = pathMap[csPath] ?? {
		en: "/en" + csPath,
		pl: "/pl" + csPath
	};
	const langUrls = {
		cs: (csPath || "/") + catParam,
		en: mapped.en + catParam,
		pl: mapped.pl + catParam
	};
	const partners = await getPartners();
	const generalPartners = partners.filter((p) => p.level === "general");
	const mainPartners = partners.filter((p) => p.level === "main");
	const regularPartners = partners.filter((p) => p.level === "partner");
	const mediaPartners = partners.filter((p) => p.level === "media");
	return renderTemplate`<html${addAttribute(lang, "lang")} data-theme="dark"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | ${tournamentName}</title><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="index, follow"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(`${title} | ${tournamentName}`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:site_name"${addAttribute(tournamentName, "content")}><meta property="og:image" content="/og-image.png"><!-- Favicon --><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/css/flag-icons.min.css"><!-- Prevent theme flash --><script>
      (function () {
        const saved = localStorage.getItem("theme");
        const sys = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
        document.documentElement.setAttribute("data-theme", saved || sys);
      })();
    <\/script>${renderHead($$result)}</head><body><!-- TOPBAR --><div class="topbar"><div class="wrap topbar__inner"><div class="brand"><span class="brand__dot"></span><a class="brand__name"${addAttribute(lang === "cs" ? "/" : `/${lang}/`, "href")}>${tournamentName}</a></div><div class="topright"><!-- Přepínač kategorií --><div class="cattabs"><a${addAttribute(`cattab ${activeCategory === "u11" ? "is-active" : ""}`, "class")}${addAttribute(`${currentPath}?cat=u11`, "href")}>${tr.categories.u11}</a><a${addAttribute(`cattab ${activeCategory === "u12" ? "is-active" : ""}`, "class")}${addAttribute(`${currentPath}?cat=u12`, "href")}>${tr.categories.u12}</a><a${addAttribute(`cattab ${activeCategory === "u13" ? "is-active" : ""}`, "class")}${addAttribute(`${currentPath}?cat=u13`, "href")}>${tr.categories.u13}</a></div><!-- Přepínač jazyků --><div class="langswitch"><a${addAttribute(`langbtn ${lang === "cs" ? "is-active" : ""}`, "class")}${addAttribute(langUrls.cs, "href")} aria-label="Čeština">CZ</a><a${addAttribute(`langbtn ${lang === "en" ? "is-active" : ""}`, "class")}${addAttribute(langUrls.en, "href")} aria-label="English">EN</a><a${addAttribute(`langbtn ${lang === "pl" ? "is-active" : ""}`, "class")}${addAttribute(langUrls.pl, "href")} aria-label="Polski">PL</a></div><!-- Dark mode toggle --><div class="theme-toggle theme-toggle--topbar" id="themeToggle" role="group" aria-label="Barevný motiv"><button class="theme-seg" data-mode="dark" type="button"><span class="theme-seg__label">D</span><span class="theme-seg__tip">Dark</span></button><button class="theme-seg" data-mode="light" type="button"><span class="theme-seg__label">L</span><span class="theme-seg__tip">Light</span></button><button class="theme-seg" data-mode="system" type="button"><span class="theme-seg__label">S</span><span class="theme-seg__tip">System</span></button></div><!-- Hamburger --><button class="menubtn" id="menuToggle" type="button" aria-label="Otevřít menu"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="16" height="2" rx="1" fill="white"></rect><rect x="0" y="5" width="16" height="2" rx="1" fill="white"></rect><rect x="5" y="10" width="11" height="2" rx="1" fill="white"></rect></svg></button></div></div></div><!-- MOBILE MENU --><div class="menu" id="mobileMenu" aria-hidden="true"><div class="menu__backdrop" data-close></div><div class="menu__panel" role="dialog" aria-modal="true" aria-label="Menu"><div class="menu__head"><div class="menu__title">Menu</div><button class="menu__close" type="button" data-close aria-label="Zavřít menu">✕</button></div><div class="menu__links"><a${addAttribute(`menu__link ${activePage === "home" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? "/" : `/${lang}/`, "href")}><span class="menu__link__icon">🏠</span>${tr.nav.home}</a><a${addAttribute(`menu__link ${activePage === "schedule" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? "/rozpis" : `/${lang}/schedule`, "href")}><span class="menu__link__icon">📅</span>${tr.nav.schedule}</a><a${addAttribute(`menu__link ${activePage === "results" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? "/vysledky" : `/${lang}/results`, "href")}><span class="menu__link__icon">🏀</span>${tr.nav.results}</a><a${addAttribute(`menu__link ${activePage === "bracket" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? "/pavouk" : `/${lang}/bracket`, "href")}><span class="menu__link__icon">🏆</span>${tr.nav.bracket}</a><a${addAttribute(`menu__link ${activePage === "teams" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? "/tymy" : `/${lang}/teams`, "href")}><span class="menu__link__icon">👥</span>${tr.nav.teams}</a><a${addAttribute(`menu__link ${activePage === "info" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? "/info" : `/${lang}/info`, "href")}><span class="menu__link__icon">ℹ️</span>${tr.nav.info}</a><a${addAttribute(`menu__link ${activePage === "contacts" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? "/kontakty" : `/${lang}/contacts`, "href")}><span class="menu__link__icon">📞</span>${tr.nav.contacts}</a><a${addAttribute(`menu__link ${activePage === "photos" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? "/fotky" : `/${lang}/photos`, "href")}><span class="menu__link__icon">📷</span>${tr.nav.photos}</a></div><!-- Jazyk + theme v menu --><div class="menu__lang"><a${addAttribute(`langbtn ${lang === "cs" ? "is-active" : ""}`, "class")}${addAttribute(langUrls.cs, "href")}>CZ</a><a${addAttribute(`langbtn ${lang === "en" ? "is-active" : ""}`, "class")}${addAttribute(langUrls.en, "href")}>EN</a><a${addAttribute(`langbtn ${lang === "pl" ? "is-active" : ""}`, "class")}${addAttribute(langUrls.pl, "href")}>PL</a><div class="menu__lang__sep"></div><div class="theme-toggle theme-toggle--menu" role="group" aria-label="Barevný motiv"><button class="theme-seg" data-mode="dark" type="button"><span class="theme-seg__label">D</span></button><button class="theme-seg" data-mode="light" type="button"><span class="theme-seg__label">L</span></button><button class="theme-seg" data-mode="system" type="button"><span class="theme-seg__label">S</span></button></div></div></div></div><!-- NAV --><nav class="nav"><div class="wrap nav__inner"><!-- Desktop NAV --><a${addAttribute(`nav__item ${activePage === "home" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? "/" : `/${lang}/`, "href")}>${tr.nav.home}</a><a${addAttribute(`nav__item ${activePage === "schedule" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? `/rozpis${catParam}` : `/${lang}/schedule${catParam}`, "href")}>${tr.nav.schedule}</a><a${addAttribute(`nav__item ${activePage === "results" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? `/vysledky${catParam}` : `/${lang}/results${catParam}`, "href")}>${tr.nav.results}</a><a${addAttribute(`nav__item ${activePage === "bracket" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? `/pavouk${catParam}` : `/${lang}/bracket${catParam}`, "href")}>${tr.nav.bracket}</a><a${addAttribute(`nav__item ${activePage === "teams" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? `/tymy${catParam}` : `/${lang}/teams${catParam}`, "href")}>${tr.nav.teams}</a><a${addAttribute(`nav__item ${activePage === "info" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? `/info${catParam}` : `/${lang}/info${catParam}`, "href")}>${tr.nav.info}</a><a${addAttribute(`nav__item ${activePage === "contacts" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? `/kontakty${catParam}` : `/${lang}/contacts${catParam}`, "href")}>${tr.nav.contacts}</a><a${addAttribute(`nav__item ${activePage === "photos" ? "is-active" : ""}`, "class")}${addAttribute(lang === "cs" ? `/fotky${catParam}` : `/${lang}/photos${catParam}`, "href")}>${tr.nav.photos}</a></div></nav><!-- UNDER CONSTRUCTION BANNER --><div class="construction-banner"><div class="wrap construction-banner__inner"><span class="construction-banner__icon">⚠️</span><span class="construction-banner__text">${tr.construction_notice}</span></div></div><!-- OBSAH STRÁNKY -->${renderSlot($$result, $$slots["default"])}<!-- FOOTER --><footer class="footer"><div class="wrap footer__wrap">${partners.length > 0 && renderTemplate`<div class="partners"><div class="partners__title">${tr.home.partners_title}</div>${generalPartners.length > 0 && renderTemplate`<div><div class="partners__general-label">${tr.partners.general}</div><div class="partners__general">${generalPartners.map((p) => renderTemplate`<a${addAttribute(p.url ?? "#", "href")} class="partner" target="_blank" rel="noopener"${addAttribute(p.name, "title")}>${p.logo ? renderTemplate`<img${addAttribute(p.logo, "src")}${addAttribute(p.name, "alt")}>` : renderTemplate`<span>${p.name}</span>`}</a>`)}</div></div>`}${mainPartners.length > 0 && renderTemplate`<div><div class="partners__section-label">${tr.partners.main}</div><div class="partners__row">${mainPartners.map((p) => renderTemplate`<a${addAttribute(p.url ?? "#", "href")} class="partner partner--main" target="_blank" rel="noopener"${addAttribute(p.name, "title")}>${p.logo ? renderTemplate`<img${addAttribute(p.logo, "src")}${addAttribute(p.name, "alt")}>` : renderTemplate`<span>${p.name}</span>`}</a>`)}</div></div>`}${regularPartners.length > 0 && renderTemplate`<div><div class="partners__section-label">${tr.partners.regular}</div><div class="partners__row">${regularPartners.map((p) => renderTemplate`<a${addAttribute(p.url ?? "#", "href")} class="partner" target="_blank" rel="noopener"${addAttribute(p.name, "title")}>${p.logo ? renderTemplate`<img${addAttribute(p.logo, "src")}${addAttribute(p.name, "alt")}>` : renderTemplate`<span>${p.name}</span>`}</a>`)}</div></div>`}${mediaPartners.length > 0 && renderTemplate`<div><div class="partners__section-label">${tr.partners.media}</div><div class="partners__row">${mediaPartners.map((p) => renderTemplate`<a${addAttribute(p.url ?? "#", "href")} class="partner" target="_blank" rel="noopener"${addAttribute(p.name, "title")}>${p.logo ? renderTemplate`<img${addAttribute(p.logo, "src")}${addAttribute(p.name, "alt")}>` : renderTemplate`<span>${p.name}</span>`}</a>`)}</div></div>`}</div>`}<div class="footer__bar"><div class="footer__left-wrap"><div class="footer__left">${tr.footer.rights.replace("Queens Cup", tournamentName)}</div>${currentCat === "u13" && renderTemplate`<div class="eu-funding"><a href="https://www.visegradfund.org" target="_blank" rel="noopener"><img src="/assets/visegrad-logo.jpg" alt="Visegrad Fund" class="visegrad-logo"></a><span class="eu-text">This event is supported by the grant No. 12610107 of${" "}<a href="https://www.visegradfund.org" target="_blank" rel="noopener" class="eu-link">Visegrad funds.</a></span></div>`}</div><div class="socialbar" aria-label="Sociální sítě"><a class="socialbtn" href="https://www.instagram.com/queens_cup_hk/" target="_blank" rel="noopener" aria-label="Instagram"><img src="/assets/social/instagram.svg" alt="Instagram"></a><a class="socialbtn socialbtn--tvcom" href="https://www.tvcom.cz/" target="_blank" rel="noopener" aria-label="TVcom"><img src="/assets/social/tvcom.svg" alt="TVcom"></a><a class="socialbtn" href="https://www.hradeckelvice.cz/" target="_blank" rel="noopener" aria-label="Hradecké lvice"><img src="/assets/social/lvice.svg" alt="Hradecké lvice"></a></div></div></div></footer><!-- COOKIE NOTICE --><div id="site-notice" role="region"${addAttribute(tr.cookies.label, "aria-label")}><div class="site-notice__inner"><div class="site-notice__icon">🍪</div><div class="site-notice__text"><strong>${tr.cookies.title}</strong><span>${tr.cookies.desc}</span></div><div class="site-notice__actions"><button class="notice-btn" id="cookie-accept" type="button">${tr.cookies.accept}</button></div></div></div><!-- SCRIPTS --><script src="/assets/js/theme.js"><\/script><script src="/assets/js/menu.js"><\/script><script src="/assets/js/preferences.js"><\/script>${renderComponent($$result, "SpeedInsights", $$Index, {})}<!-- Vercel Analytics -->${renderScript($$result, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/janvo/source/vsCodeRepos/queenscup-web/src/layouts/Layout.astro", void 0);
//#endregion
export { getLang as a, getTeams as i, getMatches as n, t as o, getSettings as r, $$Layout as t };
