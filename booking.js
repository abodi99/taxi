(function () {
  "use strict";

  var bookingDialog = document.getElementById("booking-dialog");
  var form = document.getElementById("booking-form");
  var thanks = document.getElementById("booking-thanks");
  var flow = document.getElementById("booking-flow");
  var immediate = document.getElementById("book-immediate");
  var datetimeFields = document.getElementById("book-datetime-fields");
  var destSelect = document.getElementById("book-to-dest");
  var fixedBlock = document.getElementById("book-fixed-block");
  var otherBlock = document.getElementById("book-other-block");
  var pricePreview = document.getElementById("book-price-preview");
  var priceSum = document.getElementById("book-price-sum");
  var priceRoute = document.getElementById("book-price-route");
  var errorIds = [
    "book-from",
    "book-from-other",
    "book-to-dest",
    "book-to",
    "book-name",
    "book-phone",
    "book-email",
    "book-date",
    "book-time"
  ];

  function tr(key) {
    return window.stadstaxiLang ? window.stadstaxiLang.t(key) : key;
  }

  function routes() {
    var cfg = window.STADSTAXI || {};
    return Array.isArray(cfg.fixedRoutes) ? cfg.fixedRoutes : [];
  }

  function findRoute(id) {
    var list = routes();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function formatPriceSek(n) {
    try {
      return new Intl.NumberFormat("sv-SE").format(n) + " kr";
    } catch (e) {
      return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " kr";
    }
  }

  function phoneToTelHref(raw) {
    var d = digitsOnly(raw);
    if (!d) return "";
    if (d.indexOf("46") === 0 && d.length >= 10) return "tel:+" + d;
    if (d.indexOf("0") === 0) return "tel:+46" + d.slice(1);
    return "tel:+" + d;
  }

  function applySiteConfig() {
    var cfg = window.STADSTAXI || {};
    if (cfg.phoneTel) {
      var tel = String(cfg.phoneTel).replace(/\s/g, "");
      document.querySelectorAll("[data-contact-phone]").forEach(function (a) {
        a.href = "tel:" + tel;
      });
    }
    if (cfg.phoneDisplay) {
      document.querySelectorAll("[data-contact-phone-display]").forEach(function (el) {
        el.textContent = cfg.phoneDisplay;
      });
    }
    if (cfg.companyName) {
      document.querySelectorAll("[data-company-name]").forEach(function (el) {
        el.textContent = cfg.companyName;
      });
    }
    if (cfg.orgNumber) {
      document.querySelectorAll("[data-org-number]").forEach(function (el) {
        el.textContent = cfg.orgNumber;
      });
    }
    var wUrl = cfg.whatsappUrl;
    if (wUrl) {
      document.querySelectorAll("[data-whatsapp-link]").forEach(function (a) {
        a.href = wUrl;
      });
    }
    fillDestinationOptions();
    updateDestinationUI();
  }

  function isOtherTrip() {
    return !!(destSelect && destSelect.value === "other");
  }

  function isFixedTrip() {
    if (!destSelect || !destSelect.value || isOtherTrip()) return false;
    var route = findRoute(destSelect.value);
    return !!(route && route.priceSek != null);
  }

  function fillDestinationOptions() {
    if (!destSelect) return;
    var current = destSelect.value;
    destSelect.innerHTML = "";

    var ph = document.createElement("option");
    ph.value = "";
    ph.disabled = true;
    ph.selected = !current;
    ph.textContent = tr("book_dest_placeholder");
    destSelect.appendChild(ph);

    routes().forEach(function (route) {
      if (route.priceSek == null) return;
      var opt = document.createElement("option");
      opt.value = route.id;
      opt.textContent = route.label + " – " + formatPriceSek(route.priceSek);
      destSelect.appendChild(opt);
    });

    var other = document.createElement("option");
    other.value = "other";
    other.textContent = tr("book_dest_other");
    destSelect.appendChild(other);

    if (current === "other" || findRoute(current)) {
      destSelect.value = current;
      ph.selected = false;
    }
  }

  function updateDestinationUI() {
    var fixed = isFixedTrip();
    var other = isOtherTrip();
    var route = fixed && destSelect ? findRoute(destSelect.value) : null;

    if (fixedBlock) fixedBlock.hidden = !fixed;
    if (otherBlock) otherBlock.hidden = !other;

    if (pricePreview) pricePreview.hidden = true;
    if (!fixed || !route) return;

    if (priceRoute) {
      priceRoute.textContent = "Helsingborg → " + route.label;
    }
    if (priceSum) priceSum.textContent = formatPriceSek(route.priceSek);
    if (pricePreview) pricePreview.hidden = false;
  }

  function selectedDestinationLabel() {
    if (isOtherTrip()) {
      return fieldValue("book-from-other") + " → " + fieldValue("book-to");
    }
    var route = destSelect ? findRoute(destSelect.value) : null;
    if (!route) return "";
    return "Helsingborg → " + route.label;
  }

  function selectedPriceLabel() {
    if (!isFixedTrip()) return "Offert – ring kund";
    var route = destSelect ? findRoute(destSelect.value) : null;
    if (!route || route.priceSek == null) return "–";
    return formatPriceSek(route.priceSek) + " (fast pris)";
  }

  function selectedFromLabel() {
    if (isFixedTrip()) return fieldValue("book-from");
    return fieldValue("book-from-other");
  }

  function setMinDate() {
    var dateInput = document.getElementById("book-date");
    if (!dateInput) return;
    var today = new Date();
    var y = today.getFullYear();
    var m = String(today.getMonth() + 1).padStart(2, "0");
    var d = String(today.getDate()).padStart(2, "0");
    dateInput.min = y + "-" + m + "-" + d;
  }

  function digitsOnly(s) {
    return String(s).replace(/\D/g, "");
  }

  function isValidPhone(value) {
    var d = digitsOnly(value);
    return d.length >= 8 && d.length <= 15;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
  }

  function showError(id, message) {
    var input = document.getElementById(id);
    var err = document.getElementById(id + "-error");
    if (input) input.setAttribute("aria-invalid", "true");
    if (err) {
      err.textContent = message;
      err.hidden = false;
    }
  }

  function clearErrors() {
    errorIds.forEach(function (id) {
      var input = document.getElementById(id);
      var err = document.getElementById(id + "-error");
      if (input) input.removeAttribute("aria-invalid");
      if (err) {
        err.textContent = "";
        err.hidden = true;
      }
    });
  }

  function isImmediate() {
    return !!(immediate && immediate.checked);
  }

  function toggleDatetimeFields() {
    if (!datetimeFields) return;
    var hide = isImmediate();
    datetimeFields.hidden = hide;
    if (hide) {
      var date = document.getElementById("book-date");
      var time = document.getElementById("book-time");
      if (date) date.value = "";
      if (time) time.value = "";
    }
  }

  function validateForm() {
    clearErrors();
    var ok = true;
    var from = document.getElementById("book-from");
    var fromOther = document.getElementById("book-from-other");
    var to = document.getElementById("book-to");
    var name = document.getElementById("book-name");
    var phone = document.getElementById("book-phone");
    var email = document.getElementById("book-email");
    var date = document.getElementById("book-date");
    var time = document.getElementById("book-time");
    var honey = document.getElementById("book-honey");

    if (honey && honey.value.trim()) return false;

    if (!destSelect || !destSelect.value) {
      showError("book-to-dest", tr("err_destination"));
      ok = false;
    } else if (isFixedTrip()) {
      if (!from || !from.value.trim()) {
        showError("book-from", tr("err_pickup"));
        ok = false;
      }
    } else if (isOtherTrip()) {
      if (!fromOther || !fromOther.value.trim()) {
        showError("book-from-other", tr("err_pickup"));
        ok = false;
      }
      if (!to || !to.value.trim()) {
        showError("book-to", tr("err_destination"));
        ok = false;
      }
    } else {
      showError("book-to-dest", tr("err_destination"));
      ok = false;
    }
    if (!name || !name.value.trim()) {
      showError("book-name", tr("err_name"));
      ok = false;
    }
    if (!phone || !phone.value.trim()) {
      showError("book-phone", tr("err_phone"));
      ok = false;
    } else if (!isValidPhone(phone.value)) {
      showError("book-phone", tr("err_phone_fmt"));
      ok = false;
    }
    if (!email || !email.value.trim()) {
      showError("book-email", tr("err_email_required"));
      ok = false;
    } else if (!isValidEmail(email.value)) {
      showError("book-email", tr("err_email"));
      ok = false;
    }
    if (!isImmediate()) {
      if (!date || !date.value) {
        showError("book-date", tr("err_date"));
        ok = false;
      }
      if (!time || !time.value) {
        showError("book-time", tr("err_time"));
        ok = false;
      }
    }
    return ok;
  }

  function fieldValue(id) {
    var el = document.getElementById(id);
    return el && el.value ? String(el.value).trim() : "";
  }

  function sendBooking(payload) {
    var cfg = window.STADSTAXI || {};
    var email = cfg.contactEmail || "info@stadtaxi.se";
    return fetch("https://formsubmit.co/ajax/" + encodeURIComponent(email), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    }).then(function (r) {
      if (!r.ok) throw new Error("send");
      return r.json();
    });
  }

  var conversionLocks = {};

  function gtagReportConversion(sendTo, url, transactionId) {
    var lockKey = String(sendTo || "default");
    var now = Date.now();
    if (conversionLocks[lockKey] && now - conversionLocks[lockKey] < 2500) {
      if (url) window.location = url;
      return false;
    }
    conversionLocks[lockKey] = now;

    var navigated = false;
    var go = function () {
      if (navigated || typeof url === "undefined" || !url) return;
      navigated = true;
      window.location = url;
    };
    if (typeof window.gtag === "function" && sendTo) {
      var payload = {
        send_to: sendTo,
        event_callback: go
      };
      if (transactionId) payload.transaction_id = String(transactionId);
      window.gtag("event", "conversion", payload);
      if (url) window.setTimeout(go, 1500);
    } else {
      go();
    }
    return false;
  }

  function bookingConversionSendTo() {
    var cfg = (window.STADSTAXI && window.STADSTAXI.analytics) || {};
    return String(cfg.bookingConversionSendTo || "AW-18304182555/KNuTCOT0pNQcEJvSjphE").trim();
  }

  function callConversionSendTo() {
    var cfg = (window.STADSTAXI && window.STADSTAXI.analytics) || {};
    return String(cfg.callConversionSendTo || "AW-18304182555/IW6ACNmEntQcEJvSjphE").trim();
  }

  window.gtag_report_conversion = function (url) {
    return gtagReportConversion(bookingConversionSendTo(), url);
  };

  function newCallTransactionId() {
    return "call-" + Date.now() + "-" + Math.random().toString(36).slice(2, 10);
  }

  window.gtag_report_call_conversion = function (url) {
    return gtagReportConversion(callConversionSendTo(), url, newCallTransactionId());
  };

  function wireCallConversionLinks() {
    if (window.__stadstaxiCallConversionWired) return;
    window.__stadstaxiCallConversionWired = true;
    document.addEventListener(
      "click",
      function (e) {
        var link = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
        if (!link) return;
        var href = link.getAttribute("href") || "";
        if (href.indexOf("tel:") !== 0) return;
        e.preventDefault();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        else e.stopPropagation();
        gtagReportConversion(callConversionSendTo(), href, newCallTransactionId());
      },
      true
    );
  }

  function showThanksView(phoneDisplay) {
    if (flow) flow.hidden = true;
    var phoneEl = document.getElementById("booking-thanks-phone");
    if (phoneEl) {
      if (phoneDisplay) {
        phoneEl.hidden = false;
        phoneEl.textContent = tr("thanks_phone_prefix") + " " + phoneDisplay;
      } else {
        phoneEl.hidden = true;
        phoneEl.textContent = "";
      }
    }
    if (thanks) {
      thanks.hidden = false;
      thanks.focus({ preventScroll: true });
    }
  }

  function resetBookingView() {
    if (!form) return;
    form.reset();
    form.hidden = false;
    if (flow) flow.hidden = false;
    if (thanks) thanks.hidden = true;
    var phoneEl = document.getElementById("booking-thanks-phone");
    if (phoneEl) {
      phoneEl.hidden = true;
      phoneEl.textContent = "";
    }
    clearErrors();
    toggleDatetimeFields();
    updateDestinationUI();
    var statusEl = document.getElementById("book-status");
    if (statusEl) {
      statusEl.hidden = true;
      statusEl.textContent = "";
      statusEl.classList.remove("book-status--error");
    }
    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = tr("btn_submit");
    }
    setMinDate();
  }

  function openBookingDialog() {
    if (!bookingDialog || typeof bookingDialog.showModal !== "function") return;
    if (!bookingDialog.open) bookingDialog.showModal();
    window.requestAnimationFrame(function () {
      if (thanks && !thanks.hidden) return;
      var first = document.getElementById("book-to-dest");
      if (first) first.focus();
    });
  }

  function closeBookingDialog() {
    if (!bookingDialog || typeof bookingDialog.close !== "function") return;
    if (bookingDialog.open) bookingDialog.close();
  }

  function wireBookingDialog() {
    document.querySelectorAll("[data-open-booking]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        openBookingDialog();
      });
    });

    if (bookingDialog) {
      bookingDialog.querySelectorAll("[data-booking-dialog-close]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          closeBookingDialog();
        });
      });
      bookingDialog.addEventListener("click", function (e) {
        if (e.target === bookingDialog) closeBookingDialog();
      });
      bookingDialog.addEventListener("close", function () {
        resetBookingView();
      });
    }
  }

  function wireForm() {
    if (!form) return;
    if (window.__stadstaxiBookingFormWired) return;
    window.__stadstaxiBookingFormWired = true;

    if (immediate) {
      immediate.addEventListener("change", toggleDatetimeFields);
    }
    if (destSelect) {
      destSelect.addEventListener("change", updateDestinationUI);
    }
    toggleDatetimeFields();
    setMinDate();
    fillDestinationOptions();
    updateDestinationUI();

    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validateForm()) {
        var first = form.querySelector("[aria-invalid='true']");
        if (first) first.focus();
        return;
      }

      var statusEl = document.getElementById("book-status");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = tr("book_sending");
      }
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = tr("book_sending");
        statusEl.classList.remove("book-status--error");
      }

      var whenLabel = isImmediate()
        ? tr("when_immediate")
        : fieldValue("book-date") + " " + fieldValue("book-time");

      var name = fieldValue("book-name");
      var phone = fieldValue("book-phone");
      var email = fieldValue("book-email");
      var destination = selectedDestinationLabel();
      var priceLabel = selectedPriceLabel();
      var telHref = phoneToTelHref(phone);

      var conversionTxnId =
        "book-" + Date.now() + "-" + Math.random().toString(36).slice(2, 10);

      /* FormSubmit → info@stadtaxi.se. _replyto gör att Svara går till kunden. */
      sendBooking({
        _subject: "Bokning: " + name + " · " + phone + " · " + destination,
        _replyto: email,
        _captcha: "false",
        _template: "table",
        "1. Ring kund": phone + (telHref ? "  →  " + telHref : ""),
        "2. Svara mejl": email,
        Namn: name,
        Typ: isFixedTrip() ? "Fastpris" : "Offert / annan resa",
        Från: selectedFromLabel(),
        Till: destination,
        "Fast pris": priceLabel,
        När: whenLabel,
        "Antal personer": fieldValue("book-passengers") || "1",
        Övrigt: fieldValue("book-message") || "–",
        "Kundtelefon": phone,
        "Kund e-post": email
      })
        .then(function () {
          gtagReportConversion(bookingConversionSendTo(), undefined, conversionTxnId);
          showThanksView(phone);
          if (statusEl) statusEl.hidden = true;
        })
        .catch(function () {
          if (statusEl) {
            statusEl.textContent = tr("book_send_error");
            statusEl.classList.add("book-status--error");
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = tr("btn_submit");
          }
        });
    });

    var resetBtn = document.getElementById("booking-thanks-reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        resetBookingView();
        var first = document.getElementById("book-to-dest");
        if (first) first.focus();
      });
    }
  }

  applySiteConfig();
  wireBookingDialog();
  wireForm();
  wireCallConversionLinks();

  function openBookingFromHash() {
    var hash = (window.location.hash || "").replace(/^#/, "");
    if (hash === "boka") openBookingDialog();
  }
  openBookingFromHash();
  window.addEventListener("hashchange", openBookingFromHash);

  document.addEventListener("stadstaxi:lang", function () {
    applySiteConfig();
    var submitBtn = form ? form.querySelector('button[type="submit"]') : null;
    if (submitBtn && !submitBtn.disabled) submitBtn.textContent = tr("btn_submit");
  });
})();
