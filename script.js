(function () {
  "use strict";

  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var yearEl = document.getElementById("year");
  var form = document.getElementById("booking-form");
  var bookingSection = document.getElementById("booking-modal-root");
  var bookingDialog = document.getElementById("booking-dialog");
  var thanksPanel = document.getElementById("thanks-panel");
  var thanksReset = document.getElementById("thanks-reset");
  var bookingStep = 1;
  var submitBtn = form ? form.querySelector('button[type="submit"]') : null;
  var refreshChatOnLang = function () {};

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function tr(key) {
    return window.stadstaxiLang ? window.stadstaxiLang.t(key) : key;
  }

  function setMinDate() {
    var dateInput = document.getElementById("date");
    if (!dateInput) return;
    var today = new Date();
    var y = today.getFullYear();
    var m = String(today.getMonth() + 1).padStart(2, "0");
    var d = String(today.getDate()).padStart(2, "0");
    dateInput.min = y + "-" + m + "-" + d;
  }
  setMinDate();

  if (navToggle && siteNav) {
    var firstNavLink = siteNav.querySelector("a");

    function setNavOpen(open) {
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      siteNav.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      document.body.style.overflow = open ? "hidden" : "";

      if (open) {
        if (firstNavLink) {
          firstNavLink.focus();
        }
      } else {
        navToggle.focus();
      }
    }

    navToggle.addEventListener("click", function () {
      var open = navToggle.getAttribute("aria-expanded") === "true";
      setNavOpen(!open);
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      var dlg = document.getElementById("contact-dialog");
      if (dlg && typeof dlg.open === "boolean" && dlg.open) return;
      var bookDlg = document.getElementById("booking-dialog");
      if (bookDlg && typeof bookDlg.open === "boolean" && bookDlg.open) return;
      setNavOpen(false);
    });
  }

  var errorFieldIds = ["pickup", "postal", "date", "time", "name", "phone"];

  function clearErrors() {
    errorFieldIds.forEach(function (id) {
      var input = document.getElementById(id);
      var err = document.getElementById(id + "-error");
      if (input) {
        input.removeAttribute("aria-invalid");
        if (id === "phone") {
          input.setAttribute("aria-describedby", "phone-hint");
        } else if (id === "postal") {
          input.setAttribute("aria-describedby", "postal-hint");
        } else if (id === "pickup") {
          input.setAttribute("aria-describedby", "pickup-hint");
        } else {
          input.removeAttribute("aria-describedby");
        }
      }
      if (err) {
        err.hidden = true;
        err.textContent = "";
      }
    });
  }

  function showError(id, message) {
    var input = document.getElementById(id);
    var err = document.getElementById(id + "-error");
    if (input) {
      input.setAttribute("aria-invalid", "true");
      if (id === "phone") {
        input.setAttribute("aria-describedby", "phone-hint " + id + "-error");
      } else if (id === "postal") {
        input.setAttribute("aria-describedby", "postal-hint " + id + "-error");
      } else if (id === "pickup") {
        input.setAttribute("aria-describedby", "pickup-hint " + id + "-error");
      } else {
        input.setAttribute("aria-describedby", id + "-error");
      }
    }
    if (err) {
      err.textContent = message;
      err.hidden = false;
    }
  }

  function digitsOnly(s) {
    return String(s).replace(/\D/g, "");
  }

  function isValidPhone(value) {
    var d = digitsOnly(value);
    return d.length >= 8 && d.length <= 15;
  }

  function isValidSwedishPostal(value) {
    var t = String(value).replace(/\s/g, "");
    return /^\d{5}$/.test(t);
  }

  function isFutureOrTodayDate(dateStr, timeStr) {
    var now = new Date();
    var chosen = new Date(dateStr + "T" + (timeStr || "00:00"));
    if (Number.isNaN(chosen.getTime())) return false;
    var startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var chosenDay = new Date(chosen.getFullYear(), chosen.getMonth(), chosen.getDate());
    if (chosenDay.getTime() < startOfToday.getTime()) return false;
    if (chosenDay.getTime() > startOfToday.getTime()) return true;
    return chosen.getTime() >= now.getTime() - 60000;
  }

  function getWhenType() {
    var el = document.querySelector('input[name="when_type"]:checked');
    return el && el.value === "tid" ? "tid" : "snarast";
  }

  function applySnarast() {
    var dateInput = document.getElementById("date");
    var timeInput = document.getElementById("time");
    if (!dateInput || !timeInput) return;
    var now = new Date();
    now.setMinutes(now.getMinutes() + 25);
    var y = now.getFullYear();
    var m = String(now.getMonth() + 1).padStart(2, "0");
    var d = String(now.getDate()).padStart(2, "0");
    var hh = String(now.getHours()).padStart(2, "0");
    var mm = String(now.getMinutes()).padStart(2, "0");
    dateInput.value = y + "-" + m + "-" + d;
    timeInput.value = hh + ":" + mm;
  }

  function toggleScheduledFields() {
    var tid = getWhenType() === "tid";
    var box = document.getElementById("scheduled-fields");
    var dateInput = document.getElementById("date");
    var timeInput = document.getElementById("time");
    if (!box || !dateInput || !timeInput) return;
    box.hidden = !tid;
    if (tid) {
      dateInput.setAttribute("required", "required");
      timeInput.setAttribute("required", "required");
    } else {
      dateInput.removeAttribute("required");
      timeInput.removeAttribute("required");
      applySnarast();
    }
  }

  function setSubmitEnabled(on) {
    if (submitBtn) submitBtn.disabled = !on;
  }

  function updateStepIndicators() {
    document.querySelectorAll(".booking-wizard__track-item").forEach(function (li) {
      var n = parseInt(li.getAttribute("data-step-indicator"), 10);
      li.classList.toggle("is-current", n === bookingStep);
      li.classList.toggle("is-done", n < bookingStep);
      if (n === bookingStep) {
        li.setAttribute("aria-current", "step");
      } else {
        li.removeAttribute("aria-current");
      }
    });
  }

  function updateWizardStatus() {
    var el = document.getElementById("booking-wizard-status");
    if (!el) return;
    var key = "wiz_status" + bookingStep;
    el.textContent = tr(key) || tr("wiz_status1");
  }

  function focusBookingStep(step) {
    var panel = document.querySelector('[data-booking-step="' + step + '"]');
    if (!panel) return;
    window.requestAnimationFrame(function () {
      var el =
        panel.querySelector("input:not([type=radio]):not([type=checkbox]), select, textarea, button");
      if (el) el.focus();
    });
  }

  function showBookingStep(step) {
    bookingStep = step;
    document.querySelectorAll("[data-booking-step]").forEach(function (el) {
      var s = parseInt(el.getAttribute("data-booking-step"), 10);
      el.hidden = s !== step;
    });
    updateStepIndicators();
    updateWizardStatus();
    setSubmitEnabled(step === 3);
    if (step === 3) {
      populateSummary();
    }
  }

  function populateSummary() {
    var sum = document.getElementById("booking-summary");
    if (!sum) return;
    var pickup = document.getElementById("pickup");
    var postal = document.getElementById("postal");
    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var passengers = document.getElementById("passengers");
    var invoice = document.getElementById("invoice");
    var destination = document.getElementById("destination");
    var whenLabel =
      getWhenType() === "snarast"
        ? tr("sum_when_soon")
        : date && time && date.value && time.value
          ? escapeHtml(date.value) + tr("sum_datetime_sep") + escapeHtml(time.value)
          : "–";
    var latEl = document.getElementById("pickup_lat");
    var lngEl = document.getElementById("pickup_lng");
    var lines = [
      "<strong>" + tr("sum_pickup") + "</strong> " + (pickup && pickup.value ? escapeHtml(pickup.value) : "–")
    ];
    if (latEl && lngEl && latEl.value && lngEl.value) {
      lines.push(
        "<strong>" + escapeHtml(tr("sum_coords")) + "</strong> " +
          escapeHtml(latEl.value + ", " + lngEl.value)
      );
    }
    lines.push(
      postal && postal.value.trim()
        ? "<strong>" + tr("sum_postal") + "</strong> " + escapeHtml(postal.value.trim())
        : "",
      "<strong>" + tr("sum_when") + "</strong> " + escapeHtml(whenLabel),
      "<strong>" + tr("sum_contact") + "</strong> " +
        (name && name.value ? escapeHtml(name.value) : "–") +
        " · " +
        (phone && phone.value ? escapeHtml(phone.value) : "–"),
      passengers ? "<strong>" + tr("sum_passengers") + "</strong> " + escapeHtml(passengers.value) : ""
    );
    lines = lines.filter(Boolean);
    if (destination && destination.value.trim()) {
      lines.push("<strong>" + tr("sum_destination") + "</strong> " + escapeHtml(destination.value.trim()));
    }
    if (invoice && invoice.checked) {
      lines.push(
        "<strong>" +
          escapeHtml(tr("sum_invoice_label")) +
          "</strong> " +
          escapeHtml(tr("sum_invoice_detail"))
      );
    }
    sum.innerHTML =
      "<p class=\"booking-summary__title\">" +
      escapeHtml(tr("sum_title")) +
      "</p><ul class=\"booking-summary__list\">" +
      lines.map(function (line) {
        return "<li>" + line + "</li>";
      }).join("") +
      "</ul>";
  }

  function wireLocationAndStorage() {
    var btn = document.getElementById("btn-use-location");
    var pickup = document.getElementById("pickup");
    var postal = document.getElementById("postal");
    var latEl = document.getElementById("pickup_lat");
    var lngEl = document.getElementById("pickup_lng");
    var statusEl = document.getElementById("geo-status");
    var remember = document.getElementById("remember-contact");
    var STORAGE_KEY = "stadstaxi_saved_contact";

    function setGeoStatus(msg, isError) {
      if (!statusEl) return;
      if (!msg) {
        statusEl.textContent = "";
        statusEl.hidden = true;
        statusEl.classList.remove("geo-status--error");
        return;
      }
      statusEl.textContent = msg;
      statusEl.hidden = false;
      statusEl.classList.toggle("geo-status--error", !!isError);
    }

    function loadSavedContact() {
      if (!remember) return;
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
          remember.checked = false;
          return;
        }
        var o = JSON.parse(raw);
        if (!o || typeof o !== "object") {
          remember.checked = false;
          return;
        }
        var nameEl = document.getElementById("name");
        var phoneEl = document.getElementById("phone");
        if (nameEl && o.name) nameEl.value = String(o.name);
        if (phoneEl && o.phone) phoneEl.value = String(o.phone);
        remember.checked = true;
      } catch (e0) {
        remember.checked = false;
      }
    }

    function saveContact() {
      if (!remember || !remember.checked) return;
      var nameEl = document.getElementById("name");
      var phoneEl = document.getElementById("phone");
      var name = nameEl && nameEl.value.trim();
      var phone = phoneEl && phoneEl.value.trim();
      if (!name || !phone) return;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ name: name, phone: phone }));
      } catch (e1) {}
    }

    function clearSavedContact() {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e2) {}
    }

    function normalizeSePostcode(pc) {
      var d = String(pc || "").replace(/\D/g, "");
      if (d.length !== 5) return "";
      return d.slice(0, 3) + " " + d.slice(3);
    }

    function applyGeoResult(lat, lng, data) {
      if (latEl) latEl.value = String(lat);
      if (lngEl) lngEl.value = String(lng);
      var pc = "";
      if (data && data.address && data.address.postcode) {
        pc = normalizeSePostcode(data.address.postcode);
      }
      var line = "";
      if (data && data.display_name) {
        line = String(data.display_name).trim();
      }
      if (!line && data && data.address) {
        var a = data.address;
        if (a.road || a.pedestrian || a.suburb) {
          var bits = [];
          if (a.house_number && a.road) bits.push(a.house_number + " " + a.road);
          else if (a.road) bits.push(a.road);
          else if (a.pedestrian) bits.push(a.pedestrian);
          var city = a.village || a.town || a.city || a.suburb || a.municipality || "";
          if (city) bits.push(city);
          line = bits.filter(Boolean).join(", ");
        }
      }
      if (!line) {
        line =
          tr("geo_fallback_prefix") +
          Number(lat).toFixed(5) +
          ", " +
          Number(lng).toFixed(5) +
          tr("geo_fallback_suffix");
        setGeoStatus(tr("geo_bad_address"), true);
      } else {
        setGeoStatus(tr("geo_ok"), false);
      }
      if (pickup) pickup.value = line;
      if (postal && pc) postal.value = pc;
    }

    function reverseGeocode(lat, lng, done) {
      var url =
        "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" +
        encodeURIComponent(lat) +
        "&lon=" +
        encodeURIComponent(lng) +
        "&email=" +
        encodeURIComponent("info@stadstaxi.example");
      var lang = document.documentElement.lang || "sv";
      fetch(url, {
        headers: {
          Accept: "application/json",
          "Accept-Language": lang === "en" ? "en" : lang === "da" ? "da,en" : "sv,en"
        }
      })
        .then(function (r) {
          if (!r.ok) throw new Error("nom");
          return r.json();
        })
        .then(function (data) {
          done(null, data);
        })
        .catch(function () {
          done(new Error("net"));
        });
    }

    if (pickup) {
      pickup.addEventListener("input", function () {
        if (latEl) latEl.value = "";
        if (lngEl) lngEl.value = "";
      });
    }

    if (remember) {
      remember.addEventListener("change", function () {
        if (!remember.checked) {
          clearSavedContact();
        } else {
          saveContact();
        }
      });
    }

    var nameEl = document.getElementById("name");
    var phoneEl = document.getElementById("phone");
    function trySaveContactBlur() {
      if (remember && remember.checked) saveContact();
    }
    if (nameEl) nameEl.addEventListener("blur", trySaveContactBlur);
    if (phoneEl) phoneEl.addEventListener("blur", trySaveContactBlur);

    if (btn) {
      btn.addEventListener("click", function () {
        if (!navigator.geolocation) {
          setGeoStatus(tr("geo_fail"), true);
          return;
        }
        setGeoStatus(tr("geo_working"), false);
        btn.disabled = true;
        navigator.geolocation.getCurrentPosition(
          function (pos) {
            var lat = pos.coords.latitude;
            var lng = pos.coords.longitude;
            reverseGeocode(lat, lng, function (err, data) {
              btn.disabled = false;
              if (err) {
                if (latEl) latEl.value = String(lat);
                if (lngEl) lngEl.value = String(lng);
                if (pickup) {
                  pickup.value =
                    tr("geo_fallback_prefix") +
                    Number(lat).toFixed(5) +
                    ", " +
                    Number(lng).toFixed(5) +
                    tr("geo_fallback_suffix");
                }
                setGeoStatus(tr("geo_net"), true);
                return;
              }
              applyGeoResult(lat, lng, data);
            });
          },
          function (geoErr) {
            btn.disabled = false;
            if (latEl) latEl.value = "";
            if (lngEl) lngEl.value = "";
            if (geoErr && geoErr.code === 1) {
              setGeoStatus(tr("geo_denied"), true);
            } else {
              setGeoStatus(tr("geo_fail"), true);
            }
          },
          { enableHighAccuracy: true, maximumAge: 120000, timeout: 20000 }
        );
      });
    }

    loadSavedContact();
    window.stadstaxiLoadSavedContact = loadSavedContact;
    window.stadstaxiSaveContact = saveContact;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function chatwootAvailable() {
    return !!(window.stadstaxiChatwootActive && window.$chatwoot && window.$chatwoot.toggle);
  }

  function setChatwootLocaleFromPage() {
    if (!window.$chatwoot || typeof window.$chatwoot.setLocale !== "function") return;
    var l = window.stadstaxiLang && window.stadstaxiLang.getLang ? window.stadstaxiLang.getLang() : "sv";
    var map = { sv: "sv", da: "da", en: "en" };
    try {
      window.$chatwoot.setLocale(map[l] || "sv");
    } catch (e0) {}
  }

  function wireContactAndChat() {
    var launcher = document.getElementById("chat-launcher");
    var dialog = document.getElementById("contact-dialog");
    var closeEls = document.querySelectorAll("[data-contact-dialog-close]");

    var wUrl = window.STADSTAXI && window.STADSTAXI.whatsappUrl;
    if (wUrl) {
      document.querySelectorAll("[data-whatsapp-link]").forEach(function (a) {
        a.href = wUrl;
      });
    }

    function setExpanded(open) {
      var v = open ? "true" : "false";
      document.querySelectorAll("[data-chat-trigger]").forEach(function (el) {
        el.setAttribute("aria-expanded", v);
      });
    }

    function openHelp() {
      if (chatwootAvailable()) {
        window.$chatwoot.toggle("open");
        setExpanded(true);
        return;
      }
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
        setExpanded(true);
        var xBtn = dialog.querySelector(".contact-dialog__close");
        if (xBtn) xBtn.focus();
      }
    }

    function closeHelp() {
      if (chatwootAvailable()) {
        window.$chatwoot.toggle("close");
        setExpanded(false);
        return;
      }
      if (dialog && dialog.open) {
        dialog.close();
      }
      setExpanded(false);
    }

    function toggleHelp() {
      if (chatwootAvailable()) {
        window.$chatwoot.toggle(window.$chatwoot.isOpen ? "close" : "open");
        setExpanded(!!window.$chatwoot.isOpen);
        return;
      }
      if (dialog && dialog.open) {
        dialog.close();
        setExpanded(false);
      } else {
        openHelp();
      }
    }

    document.querySelectorAll("[data-chat-trigger]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        toggleHelp();
      });
    });

    closeEls.forEach(function (btn) {
      btn.addEventListener("click", function () {
        closeHelp();
      });
    });

    if (dialog) {
      dialog.addEventListener("close", function () {
        setExpanded(false);
        if (launcher) launcher.focus();
      });
      dialog.addEventListener("click", function (e) {
        if (e.target === dialog) {
          dialog.close();
        }
      });
    }

    window.addEventListener("stadstaxi:chatwoot-ready", function () {
      if (dialog && dialog.open) {
        dialog.close();
      }
      setExpanded(false);
      setChatwootLocaleFromPage();
    });

    window.addEventListener("chatwoot:opened", function () {
      setExpanded(true);
    });
    window.addEventListener("chatwoot:closed", function () {
      setExpanded(false);
    });

    refreshChatOnLang = function () {
      setChatwootLocaleFromPage();
    };
  }

  wireContactAndChat();

  function validateStep1(skipClear) {
    if (!skipClear) clearErrors();
    var ok = true;
    var pickup = document.getElementById("pickup");
    var postal = document.getElementById("postal");
    var date = document.getElementById("date");
    var time = document.getElementById("time");

    if (!pickup || !pickup.value.trim()) {
      showError("pickup", tr("err_pickup"));
      ok = false;
    }

    if (postal && postal.value.trim() && !isValidSwedishPostal(postal.value)) {
      showError("postal", tr("err_postal"));
      ok = false;
    }

    if (getWhenType() === "tid") {
      if (!date || !date.value) {
        showError("date", tr("err_date"));
        ok = false;
      }
      if (!time || !time.value) {
        showError("time", tr("err_time"));
        ok = false;
      }
      if (date && time && date.value && time.value && !isFutureOrTodayDate(date.value, time.value)) {
        showError("time", tr("err_time_past"));
        ok = false;
      }
    } else {
      applySnarast();
    }

    return ok;
  }

  function validateStep2(skipClear) {
    if (!skipClear) clearErrors();
    var ok = true;
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");

    if (!name || !name.value.trim()) {
      showError("name", tr("err_name"));
      ok = false;
    }

    if (!phone || !phone.value.trim()) {
      showError("phone", tr("err_phone"));
      ok = false;
    } else if (!isValidPhone(phone.value)) {
      showError("phone", tr("err_phone_fmt"));
      ok = false;
    }

    return ok;
  }

  function validateAll() {
    clearErrors();
    if (!validateStep1(true)) return false;
    if (!validateStep2(true)) return false;
    return true;
  }

  function showThanks() {
    if (!bookingSection || !thanksPanel) return;
    bookingSection.classList.add("is-thanks");
    thanksPanel.hidden = false;
    thanksPanel.focus({ preventScroll: true });
    try {
      thanksPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } catch (eScroll) {}
  }

  function hideThanks() {
    if (!bookingSection || !thanksPanel || !form) return;
    bookingSection.classList.remove("is-thanks");
    thanksPanel.hidden = true;
    form.reset();
    setMinDate();
    clearErrors();
    var snarast = document.getElementById("when-snarast");
    var tid = document.getElementById("when-tid");
    if (snarast) snarast.checked = true;
    if (tid) tid.checked = false;
    toggleScheduledFields();
    bookingStep = 1;
    showBookingStep(1);
    var gs = document.getElementById("geo-status");
    if (gs) {
      gs.textContent = "";
      gs.hidden = true;
      gs.classList.remove("geo-status--error");
    }
    if (typeof window.stadstaxiLoadSavedContact === "function") {
      window.stadstaxiLoadSavedContact();
    }
    var first = document.getElementById("pickup");
    if (first) first.focus();
  }

  function openBookingDialog() {
    if (!bookingDialog || typeof bookingDialog.showModal !== "function") return;
    var cd = document.getElementById("contact-dialog");
    if (cd && cd.open && typeof cd.close === "function") cd.close();
    if (!bookingDialog.open) bookingDialog.showModal();
    window.requestAnimationFrame(function () {
      if (bookingSection && bookingSection.classList.contains("is-thanks")) {
        var th = document.getElementById("thanks-panel");
        if (th) th.focus();
        return;
      }
      var p = document.getElementById("pickup");
      if (p) p.focus();
      else {
        var tt = document.getElementById("booking-dialog-title");
        if (tt) tt.focus();
      }
    });
  }

  function closeBookingDialog() {
    if (!bookingDialog || typeof bookingDialog.close !== "function") return;
    if (bookingDialog.open) bookingDialog.close();
  }

  function wireBookingDialog() {
    if (!bookingDialog) return;
    function onOpenBooking(e) {
      e.preventDefault();
      openBookingDialog();
    }
    document.querySelectorAll("[data-open-booking]").forEach(function (el) {
      el.addEventListener("click", onOpenBooking);
    });
    bookingDialog.querySelectorAll("[data-booking-dialog-close]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        closeBookingDialog();
      });
    });
    bookingDialog.addEventListener("click", function (e) {
      if (e.target === bookingDialog) closeBookingDialog();
    });
    bookingDialog.addEventListener("close", function () {
      if (bookingSection && bookingSection.classList.contains("is-thanks") && form) {
        hideThanks();
      }
    });
    if (window.location.hash === "#boka") {
      try {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      } catch (eHash) {}
      openBookingDialog();
    }
  }

  function wireWhenTypeRadios() {
    document.querySelectorAll('input[name="when_type"]').forEach(function (radio) {
      radio.addEventListener("change", toggleScheduledFields);
    });
    toggleScheduledFields();
  }

  function wireWizardNav() {
    if (!form) return;
    form.addEventListener("click", function (e) {
      var t = e.target;
      if (!t || !t.getAttribute) return;
      var go = t.getAttribute("data-go-step");
      if (!go) return;
      var step = parseInt(go, 10);
      if (t.classList.contains("booking-wizard__next")) {
        if (bookingStep === 1 && step === 2) {
          if (!validateStep1()) {
            var inv = form.querySelector('[aria-invalid="true"]');
            if (inv) inv.focus();
            return;
          }
          showBookingStep(2);
          focusBookingStep(2);
        } else if (bookingStep === 2 && step === 3) {
          if (!validateStep2()) {
            var inv2 = form.querySelector('[aria-invalid="true"]');
            if (inv2) inv2.focus();
            return;
          }
          if (typeof window.stadstaxiSaveContact === "function") {
            window.stadstaxiSaveContact();
          }
          showBookingStep(3);
          focusBookingStep(3);
        }
      }
      if (t.classList.contains("booking-wizard__back")) {
        if (step >= 1 && step <= 3) {
          clearErrors();
          showBookingStep(step);
          focusBookingStep(step);
        }
      }
    });
  }

  if (form) {
    wireWhenTypeRadios();
    wireWizardNav();
    wireLocationAndStorage();
    setSubmitEnabled(false);
    showBookingStep(1);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (bookingStep !== 3) return;
      if (!validateAll()) {
        if (!validateStep1()) {
          showBookingStep(1);
          focusBookingStep(1);
        } else if (!validateStep2()) {
          showBookingStep(2);
          focusBookingStep(2);
        }
        var firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      showThanks();
    });
  }

  if (thanksReset) {
    thanksReset.addEventListener("click", hideThanks);
  }

  wireBookingDialog();

  document.addEventListener("stadstaxi:lang", function () {
    updateWizardStatus();
    if (bookingStep === 3) {
      populateSummary();
    }
    refreshChatOnLang();
    if (typeof window.stadstaxiLoadSavedContact === "function") {
      window.stadstaxiLoadSavedContact();
    }
  });
})();
