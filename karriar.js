(function () {
  "use strict";

  var form = document.getElementById("career-form");
  var errEl = document.getElementById("career-form-error");
  if (!form || !errEl) return;

  function tr(key) {
    return window.stadstaxiLang ? window.stadstaxiLang.t(key) : key;
  }

  function showErr(msg) {
    errEl.textContent = msg;
    errEl.hidden = false;
  }

  function hideErr() {
    errEl.textContent = "";
    errEl.hidden = true;
  }

  function validEmail(s) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || "").trim());
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    hideErr();

    var name = document.getElementById("career-name");
    var email = document.getElementById("career-email");
    var phone = document.getElementById("career-phone");
    var message = document.getElementById("career-message");
    if (!name || !email || !phone || !message) return;

    var n = name.value.trim();
    var em = email.value.trim();
    var p = phone.value.trim();
    var m = message.value.trim();

    if (!n || !em || !p || !m) {
      showErr(tr("career_err_required"));
      return;
    }
    if (!validEmail(em)) {
      showErr(tr("career_err_email"));
      return;
    }

    var lang = window.stadstaxiLang && window.stadstaxiLang.getLang ? window.stadstaxiLang.getLang() : "sv";
    var subj =
      lang === "en"
        ? "Job interest – Stad Taxi"
        : lang === "da"
          ? "Job – Stad Taxi"
          : "Intresse jobb – Stad Taxi";

    var body =
      tr("career_form_name") +
      ": " +
      n +
      "\n" +
      tr("career_form_email") +
      ": " +
      em +
      "\n" +
      tr("career_form_phone") +
      ": " +
      p +
      "\n\n" +
      tr("career_form_message") +
      ":\n" +
      m;

    window.location.href =
      "mailto:jobb@stadstaxi.example?subject=" +
      encodeURIComponent(subj) +
      "&body=" +
      encodeURIComponent(body);
  });

  document.addEventListener("stadstaxi:lang", function () {
    hideErr();
  });
})();
