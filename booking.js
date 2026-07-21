(function () {
  "use strict";

  var bookingDialog = document.getElementById("booking-dialog");
  var form = document.getElementById("booking-form");
  var thanks = document.getElementById("booking-thanks");
  var flow = document.getElementById("booking-flow");
  var immediate = document.getElementById("book-immediate");
  var datetimeFields = document.getElementById("book-datetime-fields");
  var errorIds = ["book-from", "book-to", "book-name", "book-phone", "book-email", "book-date", "book-time"];

  function tr(key) {
    return window.stadstaxiLang ? window.stadstaxiLang.t(key) : key;
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
    var to = document.getElementById("book-to");
    var name = document.getElementById("book-name");
    var phone = document.getElementById("book-phone");
    var email = document.getElementById("book-email");
    var date = document.getElementById("book-date");
    var time = document.getElementById("book-time");
    var honey = document.getElementById("book-honey");

    if (honey && honey.value.trim()) return false;

    if (!from || !from.value.trim()) {
      showError("book-from", tr("err_pickup"));
      ok = false;
    }
    if (!to || !to.value.trim()) {
      showError("book-to", tr("err_destination"));
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
    var email = cfg.contactEmail || "Alyoussefadel517@gmail.com";
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

  function gtagReportConversion(url) {
    var cfg = (window.STADSTAXI && window.STADSTAXI.analytics) || {};
    var sendTo = String(cfg.bookingConversionSendTo || "AW-18304182555/KNuTCOT0pNQcEJvSjphE").trim();
    var callback = function () {
      if (typeof url !== "undefined") {
        window.location = url;
      }
    };
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: sendTo,
        event_callback: callback
      });
    } else if (typeof url !== "undefined") {
      window.location = url;
    }
    return false;
  }

  window.gtag_report_conversion = gtagReportConversion;

  function showThanksView() {
    if (flow) flow.hidden = true;
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
    clearErrors();
    toggleDatetimeFields();
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
      var first = document.getElementById("book-from");
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

    if (immediate) {
      immediate.addEventListener("change", toggleDatetimeFields);
    }
    toggleDatetimeFields();
    setMinDate();

    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.addEventListener("click", function () {
        gtagReportConversion();
      });
    }

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

      sendBooking({
        _subject: tr("book_email_subject"),
        _captcha: "false",
        _template: "table",
        Från: fieldValue("book-from"),
        Till: fieldValue("book-to"),
        Namn: fieldValue("book-name"),
        Telefon: fieldValue("book-phone"),
        "Kund e-post": fieldValue("book-email"),
        När: whenLabel,
        "Antal personer": fieldValue("book-passengers") || "1",
        Övrigt: fieldValue("book-message") || "–"
      })
        .then(function () {
          showThanksView();
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
        var first = document.getElementById("book-from");
        if (first) first.focus();
      });
    }
  }

  applySiteConfig();
  wireBookingDialog();
  wireForm();

  document.addEventListener("stadstaxi:lang", function () {
    applySiteConfig();
    var submitBtn = form ? form.querySelector('button[type="submit"]') : null;
    if (submitBtn && !submitBtn.disabled) submitBtn.textContent = tr("btn_submit");
  });
})();
