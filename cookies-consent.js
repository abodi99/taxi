/**
 * Cookie-samtycke: nödvändigt lagras alltid (språk m.m. via befintlig i18n).
 * Google-tagg + Google Ads laddas endast om användaren godkänner och ID:n är satta i stadstaxi-config.js.
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

  function loadGoogleTags() {
    var cfg = getCfg();
    var googleTagId = String(cfg.googleTagId || cfg.measurementId || "").trim();
    var adsId = String(cfg.adsId || "").trim();
    var primaryId = googleTagId || adsId;
    if (!primaryId || window.__stadstaxiGALoaded) return;
    window.__stadstaxiGALoaded = true;

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(primaryId);
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());

    if (googleTagId) window.gtag("config", googleTagId);
    if (adsId) window.gtag("config", adsId);
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
    var prev = getConsent();
    setConsent("analytics");
    hideBanner();
    loadGoogleTags();
    if (prev === "essential" && window.gtag) {
      /* om användaren bytte från nej till ja utan omladdning */
    }
  }

  function onReject() {
    var prev = getConsent();
    setConsent("essential");
    hideBanner();
    if (prev === "analytics" && window.__stadstaxiGALoaded) {
      window.location.reload();
    }
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
      loadGoogleTags();
      return;
    }
    if (consent === "essential") {
      return;
    }

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
