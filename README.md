# Stadstaxi – webbutkast

Statisk landningssida (mobil först): ring-CTA, bokningsformulär med validering och tack-vy **utan server** (ingen data skickas).

## Öppna lokalt

```bash
cd stadstaxi-web
python3 -m http.server 8080
```

Öppna sedan `http://localhost:8080` i webbläsaren. Du kan också dubbelklicka på `index.html` för en snabb visning (vissa funktioner fungerar bäst via en lokal server).

### Mobil visar fel tills inkognito (cache)

Vanlig **webbläsarcache** (särskilt på mobil) kan låsa in gamla `styles.css` / `i18n.js` efter deploy. **Inkognito** har tom cache → därför ser det rätt ut där. Efter uppladdning: rensa webbplatsdata för domänen, eller vänta tills cache går ut. I HTML används `?v=…` på stylesheet och skript – **höj siffran** (t.ex. `?v=3` → `?v=4`) vid varje större deploy så tvingas nya filer ner.

## Platshållare att uppdatera innan produktion

Sök och ersätt i [`index.html`](index.html), [`karriar.html`](karriar.html) (och vid behov i denna README):

| Vad | Nuvarande exempel | Åtgärd |
|-----|-------------------|--------|
| Telefon (visning) | `076-020 74 44` | Ert riktiga nummer |
| Telefon (`tel:`-länk) | `+46760207444` | E164-format, t.ex. `+46760207444` |
| E-post | `info@stadstaxi.example` | Ert riktiga kontaktmejl |
| Org.nr | `556XXX-XXXX` | Ert organisationsnummer |
| Adress | `Exempelgatan 1, 123 45 Stad` | Postadress |
| **SEO: kanonisk URL** | `https://www.stadstaxi.se/` | `<link rel="canonical">`, `og:url`, JSON-LD `url` – byt till er riktiga domän |
| **SEO: delningsbild** | `https://www.stadstaxi.se/images/hero-stockholm.png` i `og:image` / `twitter:image` (även `karriar.html`) + JSON-LD `image` | Vid behov: separat **1200×630** `og.jpg` för maximal kompatibilitet i flöden; uppdatera URL + `og:image:width`/`height` |
| Prislista | kort under **Prislista** | Zoner och belopp enligt taxa/regler |
| **Öppettider** | Sidfot (`footer_hours_*` i `i18n.js`) | Uppdatera om ni får begränsade tider; nu satt till dygnet runt |
| **Betalningsikoner** | Sidfot (Visa, MC, Swish, Klarna, Apple Pay, Google Pay, kontant) | Ta bort ikoner ni inte erbjuder; följ respektive varumärkesriktlinjer |
| **WhatsApp** | `wa.me/...` i HTML + valfritt `whatsappUrl` i `stadstaxi-config.js` | Sätt `whatsappUrl` för en gemensam URL till alla element med `data-whatsapp-link`; annars gäller `href` i HTML (samma nummer som i `tel:`, E164 utan `+` i wa.me). |
| **Jobb / karriär** | `jobb@stadstaxi.example` i sektionen **Jobba hos oss** | Ert riktiga HR- eller rekryteringsmejl; uppdatera krav och process i `i18n.js` + `index.html` |
| **Plats & sparade uppgifter** | `stadstaxi_saved_contact` i **localStorage** (ej cookies) | Raderas om användaren avmarkerar rutan; byt `email=` i Nominatim-URL om ni byter kontaktmejl |

## Plats i bokningen (utkast)

- **Geolocation** fyller i hämtadress och försöker sätta postnummer via **OpenStreetMap Nominatim** (reverse geocoding). Följ [Nominatims användarvillkor](https://operations.osmfoundation.org/policies/nominatim/) vid hög trafik (cache, attribution, rimlig volym).
- **GPS-koordinater** sparas i dolda fält och visas i **sammanfattningen** på sista steget.
- **”Spara namn och telefon”** lagrar bara lokalt i webbläsaren; ingen server i detta utkast. Lägg till integritetspolicy innan skarp drift om ni utökar datainsamling.


## SEO vid go-live (checklista)

1. **Domän**: Ersätt överallt i `index.html`, `karriar.html`, `robots.txt`, `sitemap.xml` och JSON-LD där `https://www.stadstaxi.se/` förekommer om er adress skiljer sig (även `og:url` och kanoniska länkar).
2. **Open Graph / Twitter**: Uppdatera `og:title`, `og:description`, `og:image` (helst **1200×630 px**, egen bild på er bil/ort) och motsvarande `twitter:*` om texterna ändras. `i18n.js` synkar titel/beskrivning till OG/Twitter när besökaren byter språk (karriärsidan har samma beteende).
3. **Strukturerad data**: I JSON-LD på startsidan (`WebSite` + `TaxiService`): fyll i verklig **serviceort** i `areaServed` (t.ex. stad + omnejd), lägg till `PostalAddress` och `email` när uppgifterna är riktiga – undvik exempeldata i markup. `sameAs` läggs lämpligen till när era sociala profiler finns.
4. **`robots.txt`**: Finns i repots rot som mall (`User-agent: *`, `Allow: /`, `Sitemap:`). Se till att den **serveras** från webbrot vid publicering.
5. **`sitemap.xml`**: Finns i roten med startsida och `karriar.html` (endast sidor som ska indexeras). Uppdatera domän och utöka med fler indexerbara sidor när innehållet är klart.
6. **Lokal test**: Verifiera meta-taggar med [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) eller motsvarande för OG, och Rich Results Test för JSON-LD.

## Filer

- `index.html` – struktur och innehåll (start)
- `robots.txt`, `sitemap.xml` – indexeringshjälp (mallar med er kanoniska domän)
- `integritet.html`, `villkor.html`, `cookies.html`, `tillganglighet.html` – platshållare för policy / villkor (byt ut innan produktion)
- `karriar.html` – separat karriärsida med intresseformulär (öppnas från menyn «Karriär»)
- `karriar.js` – validering och `mailto:` för karriärformuläret
- `styles.css` – layout, färger, sticky ringfält på mobil
- `stadstaxi-config.js` – Chatwoot-token, bas-URL och valfri gemensam WhatsApp-URL (synkron, före övriga skript)
- `chatwoot-bootstrap.js` – laddar Chatwoot SDK när token finns; döljer standardbubblan
- `script.js` – meny (scroll-lås, fokus), formulärvalidering med `aria-describedby`, tack-vy, kontaktdialog / Chatwoot-toggle
- `i18n.js` – språk (sv/da/en) inkl. chatt- och socialtexter
- `images/` – logotyp (`logo-stadstaxi.png`), Swish-yta (`swish-mark.svg`) och ev. dekorativ taxi (`taxi-betalning.svg`)

## Bilder & ikoner

- **Foton**: Unsplash (se tidigare avsnitt).
- **`images/`**: `logo-stadstaxi.png` (huvudlogotyp), `swish-mark.svg` (förenklad – byt mot officiell Swish-grafik), ev. `taxi-betalning.svg` för illustrationer
- **Betalningsloggor (CDN)**: Klarna, Visa, Mastercard, Apple Pay och Google Pay länkas som SVG från [Simple Icons](https://simpleicons.org/) via jsDelivr. Ersätt med leverantörernas egna filer vid krav på exakt varumärkesanvändning.

## Nästa steg (valfritt)

- Koppla formulär till t.ex. Formspree eller e-post-API
- Lägg till `favicon.ico` och ev. logotypbild
- Integritetspolicy: ersätt innehållet i `integritet.html` (och footer-länken pekar redan dit tillsammans med villkor, cookies och tillgänglighet).
