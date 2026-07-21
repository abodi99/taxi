/**
 * Cookie-samtycke + Google Consent Mode v2 (GDPR / EU).
 * Standard: denied. Vid godkännande: granted för ads + analytics.
 * Google-taggar laddas alltid (cookieless pings vid nekad), cookies först efter samtycke.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "stadstaxi_cookie_consent_v1";
  var BANNER_ID = "cookie-consent";

  function getCfg() {
    return (window.STADSTAXI && window.STADSTAXI.analytics) || {};
  }

  function getConsent() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e2) {}
  }

  function ensureGtag() {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== "function") {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    }
  }

  function updateConsent(granted) {
    ensureGtag();
    var state = granted ? "granted" : "denied";
    window.gtag("consent", "update", {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state
    });
  }

  function loadGoogleTags() {
    var cfg = getCfg();
    var googleTagId = String(cfg.googleTagId || cfg.measurementId || "").trim();
    var adsId = String(cfg.adsId || "").trim();
    var primaryId = googleTagId || adsId;
    if (!primaryId) return;

    ensureGtag();

    if (!window.__stadstaxiGALoaded) {
      window.__stadstaxiGALoaded = true;
      var script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(primaryId);
      document.head.appendChild(script);
      window.gtag("js", new Date());
    }

    if (!window.__stadstaxiGAConfigured) {
      window.__stadstaxiGAConfigured = true;
      /*
       * Konfigurera BARA Google-taggen (GT-…). Den har redan AW-18304182555 som destination.
       * gtag('config', GT) + gtag('config', AW) samtidigt ger ofta 2–3 “Ringklick”-rader
       * i Tag Assistant för samma enda conversion-event.
       */
      if (googleTagId) {
        window.gtag("config", googleTagId);
      } else if (adsId) {
        window.gtag("config", adsId);
      }
    }
  }

  function showBanner() {
    var banner = document.getElementById(BANNER_ID);
    if (!banner) return;
    banner.removeAttribute("hidden");
    banner.setAttribute("aria-hidden", "false");
    document.body.classList.add("cookie-consent-visible");
    var focusBtn = banner.querySelector("#cookie-consent-accept") || banner.querySelector("button");
    if (focusBtn) focusBtn.focus();
  }

  function hideBanner() {
    var banner = document.getElementById(BANNER_ID);
    if (!banner) return;
    banner.setAttribute("hidden", "");
    banner.setAttribute("aria-hidden", "true");
    document.body.classList.remove("cookie-consent-visible");
  }

  function onAccept() {
    setConsent("analytics");
    hideBanner();
    updateConsent(true);
    loadGoogleTags();
  }

  function onReject() {
    setConsent("essential");
    hideBanner();
    updateConsent(false);
    loadGoogleTags();
  }

  function init() {
    var banner = document.getElementById(BANNER_ID);
    if (!banner) return;

    var accept = document.getElementById("cookie-consent-accept");
    var reject = document.getElementById("cookie-consent-reject");
    if (accept && !accept.dataset.stadstaxiWired) {
      accept.dataset.stadstaxiWired = "1";
      accept.addEventListener("click", onAccept);
    }
    if (reject && !reject.dataset.stadstaxiWired) {
      reject.dataset.stadstaxiWired = "1";
      reject.addEventListener("click", onReject);
    }
    var settingsBtn = document.getElementById("cookie-settings-btn");
    if (settingsBtn && !settingsBtn.dataset.stadstaxiWired) {
      settingsBtn.dataset.stadstaxiWired = "1";
      settingsBtn.addEventListener("click", function () {
        showBanner();
      });
    }

    var consent = getConsent();
    if (consent === "analytics") {
      updateConsent(true);
      loadGoogleTags();
      return;
    }
    if (consent === "essential") {
      updateConsent(false);
      loadGoogleTags();
      return;
    }

    /* Väntar på val – taggar laddas med default denied (Consent Mode) */
    loadGoogleTags();
    showBanner();
  }

  window.stadstaxiCookieConsent = {
    open: showBanner,
    get: getConsent,
    accept: onAccept,
    reject: onReject
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
