# Stad Taxi – webbutkast

Statisk landningssida (mobil först): ring-CTA, bokningsdialog med FormSubmit och prislista.

## Öppna lokalt

```bash
cd stadstaxi-web
python3 -m http.server 8080
```

Öppna `http://localhost:8080`. Efter deploy: höj `?v=` på `styles.css` och skript vid större ändringar så mobilcache uppdateras.

## Konfiguration

Uppdatera [`stadstaxi-config.js`](stadstaxi-config.js):

| Fält | Beskrivning |
|------|-------------|
| `companyName` | Företagsnamn |
| `orgNumber` | Org.nr |
| `contactEmail` | Mottagare för bokningar (FormSubmit) |
| `phoneDisplay` / `phoneTel` | Telefon i UI respektive `tel:`-länk |
| `whatsappUrl` | Valfri WhatsApp-länk |

## SEO vid go-live

1. **Domän**: Ersätt `https://www.stadstaxi.se/` i `index.html`, `robots.txt`, `sitemap.xml` och JSON-LD om er adress skiljer sig.
2. **Open Graph**: Uppdatera `og:image` vid behov (helst 1200×630 för delning).
3. **Strukturerad data**: JSON-LD `TaxiService` på startsidan – fyll i `PostalAddress` om ni har besöksadress.
4. **`robots.txt`** och **`sitemap.xml`** ska serveras från webbrot.

## Filer

- `index.html` – startsida
- `booking.js` – bokningsdialog och FormSubmit
- `script.js` – meny och år i sidfot
- `i18n.js` – språk (sv/da/en)
- `cookies-consent.js` – cookie-banner
- `stadstaxi-config.js` – telefon, e-post, företagsuppgifter
- `styles.css` – layout och färger
- `integritet.html`, `villkor.html`, `cookies.html`, `tillganglighet.html` – juridiska sidor (utkast)
- `robots.txt`, `sitemap.xml` – SEO
- `images/` – `logo-stadstaxi.png`, `hero-helsingborg.png`, `hero-helsingborg-mobile.webp`
