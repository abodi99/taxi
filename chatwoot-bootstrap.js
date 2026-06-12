/**
 * Laddar Chatwoot-widget när websiteToken är satt i stadstaxi-config.js.
 * @see https://www.chatwoot.com/hc/user-guide/en/categories/website-live-chat
 */
(function () {
  "use strict";

  var cfg = window.STADSTAXI && window.STADSTAXI.chatwoot;
  if (!cfg || !cfg.websiteToken) {
    window.stadstaxiChatwootActive = false;
    return;
  }

  var base = String(cfg.baseUrl || "https://app.chatwoot.com").replace(/\/$/, "");

  window.chatwootSettings = Object.assign(
    { hideMessageBubble: true },
    window.chatwootSettings || {}
  );

  var sc = document.createElement("script");
  sc.src = base + "/packs/js/sdk.js";
  sc.async = true;
  sc.onload = function () {
    if (window.chatwootSDK) {
      window.chatwootSDK.run({
        websiteToken: cfg.websiteToken,
        baseUrl: base
      });
    }
  };
  document.head.appendChild(sc);

  window.addEventListener("chatwoot:ready", function () {
    window.stadstaxiChatwootActive = true;
    try {
      if (window.$chatwoot && window.$chatwoot.toggleBubbleVisibility) {
        window.$chatwoot.toggleBubbleVisibility("hide");
      }
    } catch (e1) {}
    window.dispatchEvent(new CustomEvent("stadstaxi:chatwoot-ready"));
  });
})();
