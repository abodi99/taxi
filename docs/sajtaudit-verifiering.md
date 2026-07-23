# Sajtaudit – www-redirect & Tag Assistant

Kort checklista efter deploy av konverterings-/telefonfixar.

## 1. www → apex (Hostinger / DNS)

- Canonical på sajten: `https://stadtaxi.se/`
- Ads RSA final URL har tidigare pekat på `https://www.stadtaxi.se`
- **Mål:** permanent redirect `https://www.stadtaxi.se/*` → `https://stadtaxi.se/*` (301)
- När redirecten fungerar: uppdatera Ads final URL till `https://stadtaxi.se` så landning = kanonisk host

Kontroll: öppna `https://www.stadtaxi.se` i inkognito – ska landa på apex utan www.

## 2. Tag Assistant (1 åtgärd = 1 konvertering)

Testa i [Tag Assistant](https://tagassistant.google.com/) med consent godkänd:

1. **Ringklick:** klicka en `tel:`-länk en gång  
   - Förväntat: **en** `conversion`-event till Ringklick-send_to  
   - Payload ska innehålla `transaction_id` (prefix `call-`)  
   - Flera nätverksträffar (conversion / ccm / viewthrough) för **samma** gtag-event är normalt – det är inte tre klick

2. **Bokning:** skicka formuläret så att det lyckas  
   - Förväntat: **en** conversion först **efter** lyckad skickning  
   - `transaction_id` med prefix `book-`

3. Dubbelklick / snabb omklick inom ~2,5 s ska **inte** ge extra konverteringar (lås i `booking.js`)

## 3. Telefon i alla språk

Alla synliga `tel:` / WhatsApp-länkar ska gå till **+4642200777** (042-200 777), aldrig gamla 076-numret.
