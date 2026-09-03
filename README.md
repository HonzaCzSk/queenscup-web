# 🏀 Queens Cup – Official Website

Oficiální web mezinárodního minibasketbalového turnaje **Queens Cup** konaného v Hradci Králové.

## O turnaji

Queens Cup je mezinárodní turnaj v minibasketbalu pro dívky ve třech kategoriích:

| Kategorie | Ročník narození | Hala |
| ----------- | ---------------- | ------ |
| U11 | 2015 | Sokol HK |
| U12 | 2014 | GAPA aréna |
| U13 | 2013 | Sokol HK |

Turnaj se koná tento rok první dva víkendy v září v Hradci Králové.

Zúčastňují se týmy z České republiky, Polska, Slovenska a dalších evropských zemí.

### Hrací dny

4-6. a 11-13. září

## Technologie

- **[Astro](https://astro.build/)** – statický site builder
- **Vlastní CSS** – design převzatý z MČR webů (base, dark, screen, print, preferences)
- **[Sanity.io](https://www.sanity.io/)** – headless CMS pro správu obsahu
- **[Vercel](https://vercel.com/)** – hosting a automatický deployment

## Funkce

- 🌍 Vícejazyčnost – čeština, angličtina, polština
- 🌙 Dark / Light mode
- 📱 Plně responzivní design
- 🏆 Tři kategorie – U11, U12, U13
- 📋 Rozpis zápasů, výsledky, pavouk
- 👥 Týmy a hráčky
- 🤝 Partneři turnaje
- 📸 Fotogalerie

## Lokální spuštění

### Požadavky

- Node.js 18+
- npm

### Astro (frontend)

```bash
npm install
npm run dev
```

Web běží na `http://localhost:4321`

### Sanity Studio (CMS)

```bash
cd sanity
npm install
npm run dev
```

Studio běží na `http://localhost:3333`

## Struktura projektu

```queenscup-web/
├── src/
│   ├── pages/        # stránky webu (cs/en/pl)
│   ├── components/   # znovupoužitelné komponenty
│   ├── layouts/      # layouty stránek
│   ├── i18n/         # překlady
│   └── styles/       # globální styly
├── sanity/           # Sanity Studio + schémata
└── public/           # statické soubory
```

## Deployment

Web je nasazen na **Vercel** a automaticky se aktualizuje při každém `git push` na větev `main`.

## Autor

**Jan Votroubek** – správce webových stránek  
Hradecké lvice / Queens Cup organizační tým

---

### Spolufinancováno s podporou EU
