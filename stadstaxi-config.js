/**
 * Produktionsinställningar – uppdatera här vid behov.
 * contactEmail skickas aldrig synligt till besökare på sidan (endast via FormSubmit).
 */
window.STADSTAXI = window.STADSTAXI || {};
window.STADSTAXI.companyName = "Stad Taxi";
window.STADSTAXI.orgNumber = "7612012745";
window.STADSTAXI.contactEmail = "info@stadtaxi.se";
window.STADSTAXI.phoneDisplay = "042-200 777";
window.STADSTAXI.phoneTel = "+4642200777";
window.STADSTAXI.whatsappUrl =
  "https://wa.me/4642200777?text=Hej%20Stad%20Taxi";

/**
 * Fastpris från Helsingborg – samma belopp som på #priser.
 * Visas som "Helsingborg → …" i bokningsformuläret.
 */
window.STADSTAXI.fixedRoutes = [
  { id: "kastrup", label: "Kastrup (Köpenhamns flygplats)", priceSek: 2499 },
  { id: "sturup", label: "Sturup (Malmö flygplats)", priceSek: 1600 },
  { id: "angelholm", label: "Ängelholm & flygplats", priceSek: 695 },
  { id: "hoganas", label: "Höganäs", priceSek: 600 },
  { id: "landskrona", label: "Landskrona", priceSek: 700 },
  { id: "malmo", label: "Malmö", priceSek: 1495 },
  { id: "lund", label: "Lund", priceSek: 1200 }
];

window.STADSTAXI.analytics = {
  /** Google-tagg (container) – laddas först efter cookie-godkännande */
  googleTagId: "GT-T5MFV4LS",
  /** Google Ads – konvertering / remarketing */
  adsId: "AW-18304182555",
  /** Google Ads – klick-konvertering på bokningsknapp (Boka taxi) */
  bookingConversionSendTo: "AW-18304182555/KNuTCOT0pNQcEJvSjphE",
  /** Google Ads – klick-konvertering på ring-knapp (042-200 777) */
  callConversionSendTo: "AW-18304182555/IW6ACNmEntQcEJvSjphE"
};
