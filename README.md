# Stadstaxi – webbutkast

Statisk landningssida (mobil först): ring-CTA, bokningsformulär med validering och tack-vy **utan server** (ingen data skickas).

## Öppna lokalt

```bash
cd stadstaxi-web
python3 -m http.server 8080
```

Öppna sedan `http://localhost:8080` i webbläsaren. Du kan också dubbelklicka på `index.html` för en snabb visning (vissa funktioner fungerar bäst via en lokal server).

## Platshållare att uppdatera innan produktion

Sök och ersätt i [`index.html`](index.html), [`karriar.html`](karriar.html) (och vid behov i denna README):

| Vad | Nuvarande exempel | Åtgärd |
|-----|-------------------|--------|
| Telefon (visning) | `070-123 45 67` | Ert riktiga nummer |
| Telefon (`tel:`-länk) | `+46701234567` | E164-format, t.ex. `+46701234567` |
| E-post | `info@stadstaxi.example` | Ert riktiga kontaktmejl |
| Org.nr | `556XXX-XXXX` | Ert organisationsnummer |
| Adress | `Exempelgatan 1, 123 45 Stad` | Postadress |
| **SEO: kanonisk URL** | `https://www.stadstaxi.se/` | `<link rel="canonical">`, `og:url`, JSON-LD `url` – byt till er riktiga domän |
| **SEO: delningsbild** | Unsplash-URL i `og:image` / `twitter:image` | Byt till absolut URL till er `og.jpg` (t.ex. `https://erdomän.se/og.jpg`) |
| Prislista | kort under **Prislista** | Zoner och belopp enligt taxa/regler |
| Trygghet / öppettider | punktlistan under **Trygghet** | Faktiska tider och tillståndsnummer |
| **WhatsApp** | `wa.me/...` i HTML + valfritt `whatsappUrl` i `stadstaxi-config.js` | Sätt `whatsappUrl` för en gemensam URL till alla element med `data-whatsapp-link`; annars gäller `href` i HTML (samma nummer som i `tel:`, E164 utan `+` i wa.me). |
| **Jobb / karriär** | `jobb@stadstaxi.example` i sektionen **Jobba hos oss** | Ert riktiga HR- eller rekryteringsmejl; uppdatera krav och process i `i18n.js` + `index.html` |
| **Betalning i copy** | Punkten *Betalning* under **Trygghet** (`trust_pay` i `i18n.js`) | Uppdatera efter ert faktiska utbud; länka vid behov till kontakt i stället för borttagen sidfotsrad |
| **Plats & sparade uppgifter** | `stadstaxi_saved_contact` i **localStorage** (ej cookies) | Raderas om användaren avmarkerar rutan; byt `email=` i Nominatim-URL om ni byter kontaktmejl |

## Plats i bokningen (utkast)

- **Geolocation** fyller i hämtadress och försöker sätta postnummer via **OpenStreetMap Nominatim** (reverse geocoding). Följ [Nominatims användarvillkor](https://operations.osmfoundation.org/policies/nominatim/) vid hög trafik (cache, attribution, rimlig volym).
- **GPS-koordinater** sparas i dolda fält och visas i **sammanfattningen** på sista steget.
- **”Spara namn och telefon”** lagrar bara lokalt i webbläsaren; ingen server i detta utkast. Lägg till integritetspolicy innan skarp drift om ni utökar datainsamling.


## SEO vid go-live (checklista)

1. **Domän**: Ersätt överallt i `index.html` där `https://www.stadstaxi.se/` förekommer (canonical, `og:url`, JSON-LD `url`) om er adress skiljer sig.
2. **Open Graph / Twitter**: Uppdatera `og:title`, `og:description`, `og:image` (helst **1200×630 px**, egen bild på er bil/ort) och motsvarande `twitter:*` om texterna ändras.
3. **Strukturerad data**: I JSON-LD (`TaxiService`): justera `telephone`, `email`, `address`, `areaServed` till verkliga värden.
4. **`robots.txt`**: På servern, tillåt indexering av startsidan (t.ex. `User-agent: *` + `Allow: /`).
5. **`sitemap.xml`**: Lägg till en enkel sitemap med er kanoniska URL när sajten ligger på fast domän (hjälper Google hitta sidan).
6. **Lokal test**: Verifiera meta-taggar med [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) eller motsvarande för OG, och Rich Results Test för JSON-LD.

## Filer

- `index.html` – struktur och innehåll (start)
- `integritet.html`, `villkor.html`, `cookies.html`, `tillganglighet.html` – platshållare för policy / villkor (byt ut innan produktion)
- `karriar.html` – separat karriärsida med intresseformulär (öppnas från menyn «Karriär»)
- `karriar.js` – validering och `mailto:` för karriärformuläret
- `styles.css` – layout, färger, sticky ringfält på mobil
- `stadstaxi-config.js` – Chatwoot-token, bas-URL och valfri gemensam WhatsApp-URL (synkron, före övriga skript)
- `chatwoot-bootstrap.js` – laddar Chatwoot SDK när token finns; döljer standardbubblan
- `script.js` – meny (scroll-lås, fokus), formulärvalidering med `aria-describedby`, tack-vy, kontaktdialog / Chatwoot-toggle
- `i18n.js` – språk (sv/da/en) inkl. chatt- och socialtexter
- `images/` – enkla SVG för Swish-yta och dekorativ taxi-ikon (`taxi-betalning.svg`, valfritt)

## Bilder & ikoner

- **Foton**: Unsplash (se tidigare avsnitt).
- **`images/`**: `swish-mark.svg` (förenklad – byt mot officiell Swish-grafik), `logo-taxi.svg`, ev. `taxi-betalning.svg` för illustrationer
- **Betalningsloggor (CDN)**: Klarna, Visa, Mastercard, Apple Pay och Google Pay länkas som SVG från [Simple Icons](https://simpleicons.org/) via jsDelivr. Ersätt med leverantörernas egna filer vid krav på exakt varumärkesanvändning.

## Nästa steg (valfritt)

- Koppla formulär till t.ex. Formspree eller e-post-API
- Lägg till `favicon.ico` och ev. logotypbild
- Integritetspolicy: ersätt innehållet i `integritet.html` (och footer-länken pekar redan dit tillsammans med villkor, cookies och tillgänglighet).
