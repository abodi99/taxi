/**
 * Kopiera till produktion och fyll i websiteToken från Chatwoot → Inställningar → Inbäddning.
 * Lämna websiteToken tom för att bara använda kontaktdialogen (telefon, WhatsApp, länkar).
 */
window.STADSTAXI = window.STADSTAXI || {};
window.STADSTAXI.chatwoot = {
  websiteToken: "",
  baseUrl: "https://app.chatwoot.com"
};
window.STADSTAXI.whatsappUrl = "https://wa.me/46760207444?text=Hej%20Stadstaxi";

/**
 * Webbanalys (valfritt): sätt measurementId till ert GA4-id (t.ex. "G-XXXXXXXX") efter samtycke.
 * Lämna tom för att aldrig ladda analysskript även om besökaren godkänner.
 */
window.STADSTAXI.analytics = {
  measurementId: ""
};
