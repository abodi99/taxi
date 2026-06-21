/**
 * Stad Taxi – UI-översättningar (sv / danska / engelska).
 * Alla strängar från betrodd källa (egen kod). HTML i strängar endast för kända nycklar.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "stadstaxi_lang";
  var SUPPORTED = ["sv", "da", "en"];

  var DICT = {
    sv: {
      doc_title: "Stad Taxi – ring eller boka taxi i Helsingborg",
      meta_description:
        "Ring 042-200 777 eller boka taxi hos Stad Taxi i Helsingborg. Fast pris till flygplatser och städer – dygnet runt.",
      skip: "Hoppa till innehåll",
      logo_aria: "Stad Taxi – till startsidan",
      nav_aria: "Huvudmeny",
      nav_home: "Hem",
      nav_book: "Boka",
      nav_prices: "Priser",
      nav_about: "Om oss",
      nav_careers: "Karriär",
      nav_contact: "Kontakt",
      about_title: "Om oss",
      about_lead:
        "Stad Taxi är en lokal taxitjänst med fokus på trygga resor i vardagen. Byt denna text mot er korta verksamhetsbeskrivning.",
      about_mission_title: "Vårt uppdrag",
      about_mission_text:
        "Vi ska ta er från A till B med tydlig kommunikation, punktliga tider och respekt för varje resenär – i stan och närområdet.",
      about_contact_title: "Så når ni oss",
      about_contact_text:
        'Skicka en bokningsförfrågan via formuläret eller <a href="tel:+46760207444">ring oss</a>. Funderar du på att köra eller jobba runt trafikledning? Läs mer under <a href="karriar.html">Karriär</a>.',
      contact_dialog_lead:
        "Ring oss, boka taxi, skriv på WhatsApp eller skicka e-post – välj hur du vill nå oss.",
      careers_title: "Karriär",
      careers_lead:
        "Vi söker ibland nya kollegor – både förare med rätt behörighet och vissa roller runt dispatch. Här är en kort bild av hur det kan vara att jobba hos oss (ersätt med era faktiska krav och process).",
      careers_li1:
        "Taxiyrket: flexibla pass, kollegor som hjälper varandra och möte med människor varje dag.",
      careers_li2:
        "Vi värdesätter punktlighet, säkerhet och ett lugnt bemötande – oavsett om du kör eller jobbar i luren.",
      careers_li3:
        "Intresseanmälan sker via formuläret på den här sidan eller per telefon – formellt rekryteringsflöde lägger ni till vid behov.",
      careers_note:
        "Vi diskriminerar inte. Krav på taxiförarlegitimation och trafiktillstånd följer svensk lag – uppdatera texten med ert läge.",
      careers_btn_mail: "Maila intresse",
      careers_btn_phone: "Ring oss",
      careers_img_alt: "Taxi i stadsmiljö – symbol för kollegialt arbete på väg.",
      career_doc_title: "Karriär – jobb som taxiförare & intresseanmälan | Stad Taxi",
      career_meta_description:
        "Jobba hos Stad Taxi? Vi söker ibland taxiförare och medarbetare vid dispatch. Skicka intresseanmälan via formuläret eller ring oss.",
      career_back: "Till startsidan",
      career_form_title: "Intresseanmälan",
      career_form_name: "Namn",
      career_form_email: "E-post",
      career_form_phone: "Telefon",
      career_form_message: "Meddelande",
      career_form_hint:
        "När du skickar öppnas din e-postapp med en förifylld adress – komplettera gärna i mailet. Vid skarp drift kan formuläret kopplas till ert rekryteringssystem.",
      career_form_submit: "Skicka via e-post",
      career_err_required: "Fyll i alla obligatoriska fält.",
      career_err_email: "Ange en giltig e-postadress.",
      ring: "Ring",
      header_call: "Ring",
      menu: "Meny",
      lang_aria: "Språk",
      lang_sv: "Svenska",
      lang_da: "Dansk",
      lang_en: "English",
      hero_title:
        'Välkommen till <span class="hero__title-accent">Stad</span> <span class="hero__title-accent">Taxi</span>',
      hero_lead: "Taxi i Helsingborg och Skåne – dygnet runt.",
      hero_call_label: "Ring eller boka online",
      hero_phone_display: "042-200 777",
      hero_call_btn: "Ring nu",
      hero_contact_aria: "Snabbkontakt",
      hero_call: "Ring 042-200 777",
      hero_write: "Skicka förfrågan",
      hero_whatsapp: "WhatsApp",
      hero_chat: "Chatt",
      hero_caption: "Lokal taxi – här när du behöver oss.",
      book_title: "Boka taxi",
      book_cta_text: "Fyll i formuläret så återkommer vi direkt – eller ring om det är bråttom.",
      book_lead:
        'Fyll i formuläret – vi återkommer direkt. Vill du åka nu? Ring <a href="tel:+4642200777" data-contact-phone><span data-contact-phone-display>042-200 777</span></a>.',
      book_email_subject: "Bokningsförfrågan – Stad Taxi",
      book_sending: "Skickar …",
      book_send_error: "Kunde inte skicka just nu. Ring oss på 042-200 777 i stället.",
      book_open_cta: "Boka taxi",
      book_dialog_close_aria: "Stäng bokningsfönster",
      book_dialog_close_btn: "Stäng",
      lbl_from: "Från",
      lbl_to: "Till",
      lbl_email: "E-post",
      ph_email: "namn@example.com",
      lbl_extras: "Övrigt",
      ph_extras: "Flygnummer / barnstol",
      when_immediate: "Omgående",
      err_email_required: "Ange e-postadress.",
      err_email: "Ange en giltig e-postadress.",
      wiz_track1: "Var & när",
      wiz_track2: "Kontakt",
      wiz_track3: "Tillval",
      wiz_status1: "Steg 1 av 3 – var ska vi hämta dig, och när?",
      wiz_status2: "Steg 2 av 3 – hur når vi dig?",
      wiz_status3: "Steg 3 av 3 – tillval och skicka förfrågan.",
      step1_title: "Var och när",
      step1_intro:
        "Skriv adress som i Sverige vanligtvis anges: gata, nummer och gärna <strong>ort eller postnummer</strong> om du kan.",
      lbl_pickup: "Hämtadress",
      lbl_postal: "Postnummer",
      opt_optional: "(valfritt)",
      hint_pickup:
        "Med postnummer blir det enklare för föraren att hitta rätt i hitta.se och GPS.",
      hint_postal: "Svenskt format: fem siffror, mellanslag valfritt.",
      ph_pickup: "T.ex. Storgatan 12, 212 34 Malmö",
      ph_postal: "123 45",
      wiz_steps_aria: "Steg i bokningen",
      sum_datetime_sep: " kl. ",
      sticky_book_aria: "Gå till bokning",
      when_legend: "När behöver du taxi?",
      when_soon:
        "<strong>Så snart som möjligt</strong> – vi tolkar det som närmaste tid och ringer upp dig.",
      when_pick:
        "<strong>Jag vill välja datum och klockslag</strong> (t.ex. flyg eller tåg)",
      lbl_date: "Datum",
      lbl_time: "Tid",
      wiz_next1: "Nästa: kontakt",
      step2_title: "Kontakt",
      step2_intro:
        "Vi använder bara detta för att ringa tillbaka och bekräfta körningen – som vanligt vid taxibokning i Sverige.",
      lbl_name: "Namn",
      lbl_phone: "Telefonnummer",
      hint_phone:
        "Svenskt nummer (07…, 08…) eller +46. Vi SMS:ar inte utan att fråga först.",
      lbl_passengers: "Antal personer",
      passengers_more: "5 eller fler",
      btn_back: "Tillbaka",
      wiz_next2: "Nästa: tillval",
      step3_title: "Tillval och övrigt",
      step3_intro:
        "Nästan klart – fyll i det som stämmer. Allt här är valfritt utom bekräftelsen längst ner.",
      lbl_destination: "Destination",
      lbl_when: "När",
      ph_when: "T.ex. idag kl. 14 eller imorgon 08:00",
      ph_destination: "T.ex. flygplats, sjukhus, adress dit du ska",
      legend_extras: "Tillval",
      chk_child: "Barnstol önskas",
      chk_luggage: "Extra bagage / stor väska",
      chk_invoice:
        "Företag – jag vill ha <strong>faktura</strong> (ange org.nr i övrigt)",
      lbl_message: "Övrigt",
      ph_message: "T.ex. portkod, rullstol, tyst resa, husdjur i bur",
      summary_aria: "Sammanfattning av din förfrågan",
      form_note:
        "När du skickar öppnas din e-postapp med en sammanfattning – granska och skicka till oss.",
      btn_submit: "Boka taxi",
      aside_img_alt: "Taxi på stadsgata.",
      thanks_title: "Tack!",
      thanks_text: "Vi har tagit emot din bokning och återkommer så snart vi kan.",
      thanks_reset: "Ny bokning",
      features_title: "Varför välja Stad Taxi?",
      feature_safety_title: "Säkerhet framför allt",
      feature_safety_text:
        "Trygga resor med erfarna förare och tydliga rutiner – varje gång.",
      feature_local_title: "Lokal expertis",
      feature_local_text:
        "Förare som kan Helsingborg och Skåne – snabbast väg till din destination.",
      feature_drivers_title: "Professionella förare",
      feature_drivers_text:
        "Vänligt bemötande och punktlig service, oavsett tid på dygnet.",
      feature_247_title: "Dygnet runt",
      feature_247_text: "Ring när du behöver oss – vi svarar och hjälper dig vidare direkt.",
      cta_band_title: "Redo att åka?",
      cta_band_text:
        "Ring oss direkt – det går snabbast. Du kan också skicka en bokningsförfrågan online.",
      price_title: "Priser från Helsingborg",
      price_intro:
        "Fast pris på populära sträckor. Ring oss för offert på andra destinationer.",
      price_route_kastrup: "Helsingborg – Kastrup (Köpenhamns flygplats)",
      price_route_sturup: "Helsingborg – Sturup (Malmö flygplats)",
      price_route_angelholm: "Helsingborg – Ängelholm & flygplats",
      price_route_hoganas: "Helsingborg – Höganäs",
      price_route_landskrona: "Helsingborg – Landskrona",
      price_route_malmo: "Helsingborg – Malmö",
      price_route_lund: "Helsingborg – Lund",
      price_disclaimer:
        "Priserna gäller enkel resa. Kontakta oss vid fler passagerare, väntetid eller särskilda önskemål.",
      footer_hours_title: "Öppettider",
      footer_hours_booking_label: "Beställning & kundtjänst",
      footer_hours_booking_value: "Dygnet runt",
      footer_pay_icons_aria:
        "Betalningsalternativ: Visa, Mastercard, Swish, Klarna, Apple Pay, Google Pay och kontant",
      footer_tag: "Taxi i Helsingborg och Skåne – dygnet runt.",
      footer_org: "Org.nr",
      footer_contact: "Kontakt",
      footer_phone: "Telefon:",
      footer_email: "E-post:",
      footer_company: "Bolag & postadress",
      sticky_aria: "Snabbring",
      sticky_ring: "Ring oss",
      sticky_book: "Boka",
      sum_title: "Så här ser din förfrågan ut",
      sum_pickup: "Hämtplats:",
      sum_postal: "Postnummer:",
      sum_when: "När:",
      sum_when_soon: "Så snart som möjligt",
      sum_contact: "Kontakt:",
      sum_passengers: "Passagerare:",
      sum_destination: "Destination:",
      sum_invoice_label: "Faktura",
      sum_invoice_detail: "Ja (se övrigt för org.nr)",
      geo_btn: "Använd min plats",
      geo_btn_aria: "Fyll i hämtadress utifrån enhetens plats",
      geo_working: "Hämtar plats …",
      geo_ok: "Adress ifylld utifrån plats – justera vid behov.",
      geo_denied: "Plats kunde inte användas (tillstånd saknas i webbläsaren).",
      geo_fail: "Kunde inte läsa av platsen. Försök igen eller skriv adress manuellt.",
      geo_bad_address: "Adressuppslag misslyckades. Koordinater sparade som hjälp – skriv gärna om adressen.",
      geo_net: "Nätverksfel vid adressuppslag. Försök igen.",
      geo_fallback_prefix: "Plats (GPS): ",
      geo_fallback_suffix: " – komplettera adressen manuellt.",
      remember_contact:
        "Spara <strong>namn och telefon</strong> lokalt i denna webbläsare (utkast, ingen server).",
      remember_hint:
        "Avmarkera raderas uppgifterna från enheten. Används inte för spårning mellan webbplatser.",
      sum_coords: "Ungefärlig plats (GPS):",
      err_pickup: "Ange var du vill bli hämtad.",
      err_destination: "Ange vart du ska.",
      err_postal: "Ange postnummer med fem siffror (t.ex. 123 45).",
      err_date: "Välj datum.",
      err_time: "Välj tid.",
      err_time_past: "Välj en tid som inte redan passerat idag.",
      err_name: "Ange namn.",
      err_phone: "Ange telefonnummer.",
      err_phone_fmt:
        "Ange ett giltigt nummer (minst 8 siffror, t.ex. 070 eller +46).",
      contact_launch: "Kontakta oss",
      contact_hint:
        "Vill du ringa eller boka taxi? Använd knappen Kontakta oss längst ner till höger.",
      contact_dock_aria: "Flytande knapp: Kontakta oss",
      wa_aria: "Skriv till oss på WhatsApp",
      chat_open_aria: "Öppna kontakt – ring, boka eller e-post",
      chat_close_aria: "Stäng kontakt",
      chat_title: "Kontakta oss",
      chat_welcome:
        "Hej! Jag är en enkel hjälpbot på sidan (utkast). Välj ett alternativ nedan eller skriv ett kort meddelande – vid brådska ringer du säkrast oss.",
      chat_chip_book: "Boka taxi",
      chat_chip_prices: "Priser",
      chat_chip_call: "Ring dispatch",
      chat_chip_whatsapp: "WhatsApp",
      chat_reply_book:
        'Toppen – använd <a href="index.html#boka">bokningsformuläret</a> eller ring så guidar vi dig direkt.',
      chat_reply_prices:
        'Du hittar exempelpriser under <a href="index.html#priser">Prislista</a>. Vid osäkerhet – fråga i samband med bokning.',
      chat_reply_call:
        'Ring <a href="tel:+46760207444">076-020 74 44</a> dygnet runt för snabbast hjälp.',
      chat_reply_whatsapp:
        'Använd den gröna WhatsApp-knappen här på sidan, eller <a href="https://wa.me/46760207444?text=Hej%20Stad%20Taxi" rel="noopener noreferrer">öppna WhatsApp direkt</a>.',
      chat_placeholder: "Skriv här (utkast)…",
      chat_send: "Skicka",
      chat_thanks:
        "Tack! Vi läser inte meddelanden live i detta utkast – <strong>ring</strong> eller använd WhatsApp om något är brådskande.",
      social_follow: "Följ oss",
      social_instagram_aria: "Instagram",
      social_facebook_aria: "Facebook",
      social_linkedin_aria: "LinkedIn",
      social_note:
        "Platshållarlänkar – byt till era riktiga konton vid lansering.",
      footer_legal_aria: "Juridisk information",
      footer_privacy: "Integritetspolicy",
      footer_terms: "Användarvillkor",
      footer_cookies: "Cookies",
      footer_accessibility: "Tillgänglighet",
      cookie_settings: "Cookie-inställningar",
      cookie_banner_region_aria: "Information om cookies och val",
      cookie_banner_title: "Cookies och analys",
      cookie_banner_lead:
        "Vi använder nödvändig lagring för språkval m.m. Om du godkänner kan vi också samla in anonym besöksstatistik för att förbättra sidan.",
      cookie_banner_read: "Läs mer om cookies",
      cookie_reject: "Endast nödvändigt",
      cookie_accept: "Godkänn analys"
    },
    da: {
      doc_title: "Stad Taxi – taxibooking, prisliste & telefon",
      meta_description:
        "Book taxi hos Stad Taxi: ring døgnet rundt eller send en skriftlig forespørgsel. Se prisliste, betal med kort eller Swish i bilen. Lokalt taxiselskab i Sverige.",
      skip: "Spring til indhold",
      logo_aria: "Stad Taxi – til forsiden",
      nav_aria: "Hovedmenu",
      nav_home: "Hjem",
      nav_book: "Book",
      nav_prices: "Priser",
      nav_about: "Om os",
      nav_careers: "Karriere",
      nav_contact: "Kontakt",
      about_title: "Om os",
      about_lead:
        "Stad Taxi er et lokalt taxiselskab med fokus på trygge kørsler i hverdagen. Udskift denne tekst med jeres korte virksomhedsbeskrivelse.",
      about_mission_title: "Vores mission",
      about_mission_text:
        "Vi skal køre jer fra A til B med tydelig kommunikation, punktlighed og respekt for hver passager – i byen og nærområdet.",
      about_contact_title: "Sådan kontakter I os",
      about_contact_text:
        'Send en bookingforespørgsel via formularen eller <a href="tel:+46760207444">ring til os</a>. Overvejer du at køre eller arbejde omkring dispatch? Læs mere under <a href="karriar.html">Karriere</a>.',
      contact_dialog_lead:
        "Ring til os, book taxi, skriv på WhatsApp eller send e-mail – vælg hvordan du vil kontakte os.",
      careers_title: "Karriere",
      careers_lead:
        "Vi leder af og til efter nye kolleger – både chauffører med de rigtige papirer og visse roller omkring dispatch. Her er et kort indtryk (udskift med jeres faktiske krav og proces).",
      careers_li1:
        "Taxiarbejde: fleksible vagter, kollegaer der hjælper hinanden og mødet med mennesker hver dag.",
      careers_li2:
        "Vi værdsætter punktlighed, sikkerhed og en rolig tone – uanset om du kører eller sidder i telefonen.",
      careers_li3:
        "I dette udkast viser du interesse via formularet på denne side eller telefon – formelt rekrutteringsflow tilføjer I efter behov.",
      careers_note:
        "Vi diskriminerer ikke. Krav til kørekort, legitimation og tilladelser følger gældende regler – opdater teksten til jeres situation.",
      careers_btn_mail: "Send interesse",
      careers_btn_phone: "Ring os",
      careers_img_alt: "Taxi i bymiljø – illustrerer arbejde på vejen.",
      career_doc_title: "Karriere – job som chauffør & interessehenvendelse | Stad Taxi",
      career_meta_description:
        "Job hos Stad Taxi? Vi søger af og til chauffører og medarbejdere omkring dispatch. Send en interessehenvendelse via formularen eller ring.",
      career_back: "Til forsiden",
      career_form_title: "Interessehenvendelse",
      career_form_name: "Navn",
      career_form_email: "E-mail",
      career_form_phone: "Telefon",
      career_form_message: "Besked",
      career_form_hint:
        "Når du sender, åbnes din mail med forudfyldt adresse – tilføj gerne mere i mailen. Senere kan formularen kobles til jeres rekrutteringssystem.",
      career_form_submit: "Send via e-mail",
      career_err_required: "Udfyld alle obligatoriske felter.",
      career_err_email: "Angiv en gyldig e-mailadresse.",
      ring: "Ring",
      menu: "Menu",
      lang_aria: "Sprog",
      lang_sv: "Svenska",
      lang_da: "Dansk",
      lang_en: "English",
      hero_eyebrow: "Din lokale taxi",
      hero_title:
        'Velkommen til <span class="hero__title-accent">Stad</span> <span class="hero__title-accent">Taxi</span>',
      hero_lead:
        "Udfyld en kort bookingforespørgsel nedenfor – eller tryk Kontakt os nederst til højre, hvis du vil ringe.",
      hero_contact_aria: "Hurtig kontakt",
      hero_call: "Ring 076-020 74 44",
      hero_write: "Send forespørgsel",
      hero_whatsapp: "WhatsApp",
      hero_chat: "Chat",
      hero_caption: "Lokal taxi – klar når du har brug for os.",
      book_title: "Book taxi",
      book_cta_text: "Udfyld formularen – vi vender tilbage hurtigt. Ring hvis det haster.",
      book_lead:
        "Du behøver ikke have alle svar klar. Udfyld det, du ved – <strong>vi vender tilbage ud fra dine kontaktoplysninger</strong>, når forespørgslen kan modtages.",
      book_email_subject: "Bookingforespørgsel – Stad Taxi",
      book_sending: "Sender …",
      book_send_error: "Kunne ikke sende lige nu. Ring os på 042-200 777 i stedet.",
      book_teaser_text:
        "Book i tre enkle trin – åbn formularen, når det passer dig.",
      book_teaser_hint: "Samme flow som før – formularen åbner i et vindue.",
      book_open_cta: "Book taxi",
      book_dialog_close_aria: "Luk booking",
      book_dialog_close_btn: "Luk",
      lbl_from: "Fra",
      lbl_to: "Til",
      lbl_email: "E-mail",
      ph_email: "navn@example.com",
      lbl_extras: "Øvrigt",
      ph_extras: "Flynummer / barnesæde",
      when_immediate: "Straks",
      err_email_required: "Angiv e-mailadresse.",
      err_email: "Angiv en gyldig e-mailadresse.",
      wiz_track1: "Hvor & hvornår",
      wiz_track2: "Kontakt",
      wiz_track3: "Valg",
      wiz_status1: "Trin 1 af 3 – hvor skal vi hente dig, og hvornår?",
      wiz_status2: "Trin 2 af 3 – hvordan kontakter vi dig?",
      wiz_status3: "Trin 3 af 3 – valgmuligheder og send forespørgsel.",
      step1_title: "Hvor og hvornår",
      step1_intro:
        "Skriv adressen som i Sverige: gade, nummer og gerne <strong>by eller postnummer</strong> hvis du kan.",
      lbl_pickup: "Afhentningsadresse",
      lbl_postal: "Postnummer",
      opt_optional: "(valgfrit)",
      hint_pickup:
        "Med postnummer er det lettere for chaufføren at finde frem.",
      hint_postal: "Svensk format: fem cifre, mellemrum valgfrit.",
      ph_pickup: "Fx Storgatan 12, 212 34 Malmö",
      ph_postal: "123 45",
      wiz_steps_aria: "Trin i bookingen",
      sum_datetime_sep: " kl. ",
      sticky_book_aria: "Gå til booking",
      when_legend: "Hvornår har du brug for taxi?",
      when_soon:
        "<strong>Så hurtigt som muligt</strong> – vi tolker det som snarest og ringer dig op.",
      when_pick:
        "<strong>Jeg vil vælge dato og klokkeslæt</strong> (fx fly eller tog)",
      lbl_date: "Dato",
      lbl_time: "Tid",
      wiz_next1: "Næste: kontakt",
      step2_title: "Kontakt",
      step2_intro:
        "Vi bruger kun dette til at ringe tilbage og bekræfte kørslen – som ved taxibooking i Sverige.",
      lbl_name: "Navn",
      lbl_phone: "Telefonnummer",
      hint_phone:
        "Svensk nummer (07…, 08…) eller +46. Vi SMS'er ikke uden at spørge.",
      lbl_passengers: "Antal personer",
      passengers_more: "5 eller flere",
      btn_back: "Tilbage",
      wiz_next2: "Næste: valg",
      step3_title: "Valg og øvrigt",
      step3_intro:
        "Næsten færdigt – udfyld det, der passer. Her er alt valgfrit undtagen bekræftelsen nederst.",
      lbl_destination: "Destination",
      ph_destination: "Fx lufthavn, hospital, adresse",
      legend_extras: "Valg",
      chk_child: "Barnesæde ønskes",
      chk_luggage: "Ekstra bagage / stor taske",
      chk_invoice:
        "Virksomhed – jeg vil have <strong>faktura</strong> (angiv CVR i øvrigt)",
      lbl_message: "Øvrigt",
      ph_message: "Fx dørkode, kørestol, stille tur, kæledyr i bur",
      summary_aria: "Opsummering af din forespørgsel",
      form_note:
        '<span class="req" aria-hidden="true">*</span> obligatoriske felter er udfyldt i trinene ovenfor. Udkast: ingen data sendes til server – <strong>booking afsluttes efter den rutine, I sætter op</strong>, når flowet går i drift.',
      btn_submit: "Book taxi",
      aside_img_alt: "Taxa på bygade – vi hjælper dig videre.",
      thanks_title: "Tak – din del er gjort",
      thanks_text:
        "I dette udkast gemmes intet automatisk. <strong>Vi hører fra dig</strong>, så snart vi kan. Vil du rette noget, vælger du <strong>Ny forespørgsel</strong> nedenfor.",
      thanks_reset: "Ny forespørgsel",
      price_title: "Prisliste",
      price_intro:
        "Eksempelpriser i udkast – opdater beløb efter jeres taxameter og lokale regler.",
      price_disclaimer:
        "Slutpris kan påvirkes af kø, ventetid, afvigende rute eller tillæg. Spørg chaufføren ved tvivl.",
      footer_hours_title: "Åbningstider",
      footer_hours_booking_label: "Bestilling & kundeservice",
      footer_hours_booking_value: "Døgnet rundt",
      footer_pay_icons_aria:
        "Betalingsmuligheder: Visa, Mastercard, Swish, Klarna, Apple Pay, Google Pay og kontanter",
      footer_tag: "Lille firma – stor service.",
      footer_contact: "Kontakt",
      footer_phone: "Telefon:",
      footer_email: "E-mail:",
      footer_company: "Virksomhed & adresse",
      sticky_aria: "Hurtig ring",
      sticky_ring: "Ring til os",
      sticky_book: "Book",
      sum_title: "Sådan ser din forespørgsel ud",
      sum_pickup: "Afhentning:",
      sum_postal: "Postnr.:",
      sum_when: "Hvornår:",
      sum_when_soon: "Så hurtigt som muligt",
      sum_contact: "Kontakt:",
      sum_passengers: "Passagerer:",
      sum_destination: "Destination:",
      sum_invoice_label: "Faktura",
      sum_invoice_detail: "Ja (se øvrigt for org.nr)",
      geo_btn: "Brug min placering",
      geo_btn_aria: "Udfyld afhentningsadresse ud fra enhedens placering",
      geo_working: "Henter placering …",
      geo_ok: "Adresse udfyldt ud fra placering – ret gerne efter behov.",
      geo_denied: "Placering kunne ikke bruges (tilladelse mangler i browseren).",
      geo_fail: "Placering kunne ikke læses. Prøv igen eller skriv adressen manuelt.",
      geo_bad_address: "Adresseopslag mislykkedes. Koordinater gemt som hjælp – skriv gerne adressen om.",
      geo_net: "Netværksfejl ved adresseopslag. Prøv igen.",
      geo_fallback_prefix: "Placering (GPS): ",
      geo_fallback_suffix: " – udfyld adressen manuelt.",
      remember_contact:
        "Gem <strong>navn og telefon</strong> lokalt i denne browser (udkast, ingen server).",
      remember_hint:
        "Fjern markeringen for at slette på enheden. Bruges ikke til sporing på tværs af websites.",
      sum_coords: "Omtrentlig placering (GPS):",
      err_pickup: "Angiv hvor du vil hentes.",
      err_destination: "Angiv hvor du skal hen.",
      err_postal: "Angiv postnummer med fem cifre (fx 123 45).",
      err_date: "Vælg dato.",
      err_time: "Vælg tid.",
      err_time_past: "Vælg et tidspunkt der ikke allerede er passeret i dag.",
      err_name: "Angiv navn.",
      err_phone: "Angiv telefonnummer.",
      err_phone_fmt:
        "Angiv et gyldigt nummer (mindst 8 cifre, fx 070 eller +46).",
      contact_launch: "Kontakt os",
      contact_hint:
        "Vil du ringe eller booke taxi? Brug knappen Kontakt os nederst til højre.",
      contact_dock_aria: "Flydende knap: Kontakt os",
      wa_aria: "Skriv til os på WhatsApp",
      chat_open_aria: "Åbn kontakt – ring, book eller e-mail",
      chat_close_aria: "Luk kontakt",
      chat_title: "Kontakt os",
      chat_welcome:
        "Hej! Jeg er en simpel hjælpebot på siden (udkast). Vælg et alternativ nedenfor eller skriv en kort besked – ved hast ring direkte.",
      chat_chip_book: "Book taxi",
      chat_chip_prices: "Priser",
      chat_chip_call: "Ring dispatch",
      chat_chip_whatsapp: "WhatsApp",
      chat_reply_book:
        'Brug <a href="index.html#boka">bookingformularen</a> eller ring, så guider vi dig.',
      chat_reply_prices:
        'Se eksempelpriser under <a href="index.html#priser">Prisliste</a>. Ved tvivl – spørg når du booker.',
      chat_reply_call:
        'Ring <a href="tel:+46760207444">076-020 74 44</a> døgnet rundt for hurtigst hjælp.',
      chat_reply_whatsapp:
        'Brug den grønne WhatsApp-knap på siden, eller <a href="https://wa.me/46760207444?text=Hej%20Stad%20Taxi" rel="noopener noreferrer">åbn WhatsApp</a>.',
      chat_placeholder: "Skriv her (udkast)…",
      chat_send: "Send",
      chat_thanks:
        "Tak! Vi læser ikke beskeder live i dette udkast – <strong>ring</strong> eller brug WhatsApp ved hast.",
      social_follow: "Følg os",
      social_instagram_aria: "Instagram",
      social_facebook_aria: "Facebook",
      social_linkedin_aria: "LinkedIn",
      social_note:
        "Pladsholderlinks – skift til jeres rigtige profiler ved lancering.",
      footer_legal_aria: "Juridisk information",
      footer_privacy: "Privatlivspolitik",
      footer_terms: "Vilkår for brug",
      footer_cookies: "Cookies",
      footer_accessibility: "Tilgængelighed",
      cookie_settings: "Cookie-indstillinger",
      cookie_banner_region_aria: "Information om cookies og valg",
      cookie_banner_title: "Cookies og analyse",
      cookie_banner_lead:
        "Vi bruger nødvendig lagring til sprogvalg m.m. Hvis du accepterer, kan vi også indsamle anonym besøgsstatistik for at forbedre siden.",
      cookie_banner_read: "Læs mere om cookies",
      cookie_reject: "Kun nødvendige",
      cookie_accept: "Acceptér analyse"
    },
    en: {
      doc_title: "Stad Taxi – taxi booking, prices & phone",
      meta_description:
        "Book a taxi with Stad Taxi: call anytime or send a written booking request. See prices, pay by card or Swish in the car. Local taxi service in Sweden.",
      skip: "Skip to content",
      logo_aria: "Stad Taxi – home",
      nav_aria: "Main menu",
      nav_home: "Home",
      nav_book: "Book",
      nav_prices: "Prices",
      nav_about: "About us",
      nav_careers: "Careers",
      nav_contact: "Contact",
      about_title: "About us",
      about_lead:
        "Stad Taxi is a local taxi service focused on safe everyday journeys. Replace this with your short company description.",
      about_mission_title: "Our mission",
      about_mission_text:
        "We get you from A to B with clear communication, punctual timing, and respect for every passenger – in town and nearby.",
      about_contact_title: "How to reach us",
      about_contact_text:
        'Send a booking request through the form or <a href="tel:+46760207444">call us</a>. Thinking about driving or working around dispatch? Read more on <a href="karriar.html">Careers</a>.',
      contact_dialog_lead:
        "Call us, book a taxi, message on WhatsApp, or email – choose how you want to reach us.",
      careers_title: "Careers",
      careers_lead:
        "We sometimes look for new colleagues – licensed drivers and certain dispatch-related roles. Here’s a short snapshot (replace with your real requirements and hiring process).",
      careers_li1:
        "Taxi work: flexible shifts, colleagues who help each other, and meeting people every day.",
      careers_li2:
        "We value punctuality, safety, and a calm tone – whether you drive or work the phones.",
      careers_li3:
        "In this draft you can apply using the form on this page or by phone – add a formal recruitment flow when you’re ready.",
      careers_note:
        "We do not discriminate. Driver licensing and permit rules follow Swedish law – update this text for your situation.",
      careers_btn_mail: "Email your interest",
      careers_btn_phone: "Call us",
      careers_img_alt: "Taxi in an urban setting – work on the road.",
      career_doc_title: "Careers – taxi driver jobs & expression of interest | Stad Taxi",
      career_meta_description:
        "Work with Stad Taxi? We sometimes hire taxi drivers and dispatch-related roles. Send an expression of interest via the form or call us.",
      career_back: "Back to home",
      career_form_title: "Expression of interest",
      career_form_name: "Name",
      career_form_email: "Email",
      career_form_phone: "Phone",
      career_form_message: "Message",
      career_form_hint:
        "When you send, your email app opens with a pre-filled message – add any details there. Later you can connect this form to your ATS.",
      career_form_submit: "Send via email",
      career_err_required: "Please fill in all required fields.",
      career_err_email: "Enter a valid email address.",
      ring: "Call",
      menu: "Menu",
      lang_aria: "Language",
      lang_sv: "Svenska",
      lang_da: "Dansk",
      lang_en: "English",
      hero_eyebrow: "Your local taxi",
      hero_title:
        'Welcome to <span class="hero__title-accent">Stad</span> <span class="hero__title-accent">Taxi</span>',
      hero_lead:
        "Fill in a short booking request below – or tap Contact us at the bottom if you want to call.",
      hero_contact_aria: "Quick contact",
      hero_call: "Call 076-020 74 44",
      hero_write: "Book online",
      hero_whatsapp: "WhatsApp",
      hero_chat: "Chat",
      hero_caption: "Local taxi – here when you need us.",
      book_title: "Book a taxi",
      book_cta_text: "Fill in the form and we'll get back to you quickly – or call if it's urgent.",
      book_lead:
        "You don’t need every answer ready. Fill in what you know – <strong>we’ll follow up using your contact details</strong> when the request can be received.",
      book_email_subject: "Booking request – Stad Taxi",
      book_sending: "Sending …",
      book_send_error: "Could not send right now. Please call us on 042-200 777 instead.",
      book_teaser_text:
        "Book in three quick steps – open the form whenever it suits you.",
      book_teaser_hint: "Same steps as before – the form opens in a window so the page stays simple.",
      book_open_cta: "Book taxi",
      book_dialog_close_aria: "Close booking",
      book_dialog_close_btn: "Close",
      lbl_from: "From",
      lbl_to: "To",
      lbl_email: "Email",
      ph_email: "name@example.com",
      lbl_extras: "Notes",
      ph_extras: "Flight number / child seat",
      when_immediate: "Immediate",
      err_email_required: "Enter your email address.",
      err_email: "Enter a valid email address.",
      wiz_track1: "Where & when",
      wiz_track2: "Contact",
      wiz_track3: "Extras",
      wiz_status1: "Step 1 of 3 – where should we pick you up, and when?",
      wiz_status2: "Step 2 of 3 – how do we reach you?",
      wiz_status3: "Step 3 of 3 – options and send request.",
      step1_title: "Where and when",
      step1_intro:
        "Enter the address as in Sweden: street, number and preferably <strong>city or postcode</strong> if you know it.",
      lbl_pickup: "Pickup address",
      lbl_postal: "Postcode",
      opt_optional: "(optional)",
      hint_pickup:
        "A postcode makes it easier for the driver to find the right place.",
      hint_postal: "Swedish format: five digits, space optional.",
      ph_pickup: "E.g. Main Street 12, 212 34 Malmö",
      ph_postal: "123 45",
      wiz_steps_aria: "Booking steps",
      sum_datetime_sep: " at ",
      sticky_book_aria: "Go to booking",
      when_legend: "When do you need a taxi?",
      when_soon:
        "<strong>As soon as possible</strong> – we’ll treat this as soonest available and call you back.",
      when_pick:
        "<strong>I want to pick date and time</strong> (e.g. flight or train)",
      lbl_date: "Date",
      lbl_time: "Time",
      wiz_next1: "Next: contact",
      step2_title: "Contact",
      step2_intro:
        "We only use this to call you back and confirm the ride – as usual for taxi bookings in Sweden.",
      lbl_name: "Name",
      lbl_phone: "Phone number",
      hint_phone:
        "Swedish number (07…, 08…) or +46. We won’t text without asking.",
      lbl_passengers: "Number of people",
      passengers_more: "5 or more",
      btn_back: "Back",
      wiz_next2: "Next: extras",
      step3_title: "Extras and notes",
      step3_intro:
        "Almost done – fill in what applies. Everything here is optional except sending at the bottom.",
      lbl_destination: "Destination",
      ph_destination: "E.g. airport, hospital, address",
      legend_extras: "Options",
      chk_child: "Child seat requested",
      chk_luggage: "Extra luggage / large bag",
      chk_invoice:
        "Business – I want an <strong>invoice</strong> (add org. no. in notes)",
      lbl_message: "Other",
      ph_message: "E.g. door code, wheelchair, quiet ride, pet in carrier",
      summary_aria: "Summary of your request",
      form_note:
        '<span class="req" aria-hidden="true">*</span> required fields were completed in the steps above. Draft: no data is sent to a server yet – <strong>how the booking is finalised follows the process you set up</strong> when you go live.',
      btn_submit: "Book taxi",
      aside_img_alt: "Taxi on a city street – we’ll help you get sorted.",
      thanks_title: "Thanks – you’re done on your side",
      thanks_text:
        "Nothing is saved automatically in this draft. <strong>We’ll be in touch</strong> as soon as we can. Need to change something? Choose <strong>New request</strong> below.",
      thanks_reset: "New request",
      price_title: "Price list",
      price_intro:
        "Example prices for this draft – update amounts to match your meter and local rules.",
      price_disclaimer:
        "Final price may depend on queue time, waiting, route or extras. Ask the driver if unsure.",
      footer_hours_title: "Opening hours",
      footer_hours_booking_label: "Bookings & customer care",
      footer_hours_booking_value: "Open 24 hours a day",
      footer_pay_icons_aria:
        "Payment options: Visa, Mastercard, Swish, Klarna, Apple Pay, Google Pay, and cash",
      footer_tag: "Small company – big service.",
      footer_contact: "Contact",
      footer_phone: "Phone:",
      footer_email: "Email:",
      footer_company: "Company & address",
      sticky_aria: "Quick call",
      sticky_ring: "Call us",
      sticky_book: "Book",
      sum_title: "Your request at a glance",
      sum_pickup: "Pickup:",
      sum_postal: "Postcode:",
      sum_when: "When:",
      sum_when_soon: "As soon as possible",
      sum_contact: "Contact:",
      sum_passengers: "Passengers:",
      sum_destination: "Destination:",
      sum_invoice_label: "Invoice",
      sum_invoice_detail: "Yes (see notes for org. no.)",
      geo_btn: "Use my location",
      geo_btn_aria: "Fill pickup address from your device location",
      geo_working: "Getting location…",
      geo_ok: "Address filled from location – please adjust if needed.",
      geo_denied: "Location could not be used (permission denied in the browser).",
      geo_fail: "Could not read location. Try again or enter the address manually.",
      geo_bad_address: "Address lookup failed. Coordinates saved as a hint – please refine the address.",
      geo_net: "Network error during address lookup. Try again.",
      geo_fallback_prefix: "Location (GPS): ",
      geo_fallback_suffix: " – please complete the address manually.",
      remember_contact:
        "Save <strong>name and phone</strong> locally in this browser (draft, no server).",
      remember_hint:
        "Uncheck to remove from this device. Not used for cross-site tracking.",
      sum_coords: "Approximate location (GPS):",
      err_pickup: "Enter where you want to be picked up.",
      err_destination: "Enter your destination.",
      err_postal: "Enter a five-digit postcode (e.g. 123 45).",
      err_date: "Choose a date.",
      err_time: "Choose a time.",
      err_time_past: "Choose a time that has not already passed today.",
      err_name: "Enter your name.",
      err_phone: "Enter phone number.",
      err_phone_fmt:
        "Enter a valid number (at least 8 digits, e.g. 070 or +46).",
      contact_launch: "Contact us",
      contact_hint:
        "Want to call or book a taxi? Use the Contact us button at the bottom right.",
      contact_dock_aria: "Floating button: Contact us",
      wa_aria: "Message us on WhatsApp",
      chat_open_aria: "Open contact – call, book, or email",
      chat_close_aria: "Close contact",
      chat_title: "Contact us",
      chat_welcome:
        "Hi! I’m a simple on-page helper (draft). Pick an option below or type a short message – for urgent trips, calling is fastest.",
      chat_chip_book: "Book a taxi",
      chat_chip_prices: "Prices",
      chat_chip_call: "Call dispatch",
      chat_chip_whatsapp: "WhatsApp",
      chat_reply_book:
        'Great – use the <a href="index.html#boka">booking form</a> or call us and we’ll guide you.',
      chat_reply_prices:
        'Example prices are under <a href="index.html#priser">Prices</a>. If unsure, ask when you book.',
      chat_reply_call:
        'Call <a href="tel:+46760207444">076-020 74 44</a> anytime for the fastest help.',
      chat_reply_whatsapp:
        'Use the green WhatsApp button on this page, or <a href="https://wa.me/46760207444?text=Hi%20Stad%20Taxi" rel="noopener noreferrer">open WhatsApp</a>.',
      chat_placeholder: "Type here (draft)…",
      chat_send: "Send",
      chat_thanks:
        "Thanks! This draft doesn’t read messages live – <strong>call</strong> or use WhatsApp if it’s urgent.",
      social_follow: "Follow us",
      social_instagram_aria: "Instagram",
      social_facebook_aria: "Facebook",
      social_linkedin_aria: "LinkedIn",
      social_note:
        "Placeholder links – replace with your real profiles at launch.",
      footer_legal_aria: "Legal information",
      footer_privacy: "Privacy policy",
      footer_terms: "Terms of use",
      footer_cookies: "Cookies",
      footer_accessibility: "Accessibility",
      cookie_settings: "Cookie settings",
      cookie_banner_region_aria: "Cookie information and choices",
      cookie_banner_title: "Cookies and analytics",
      cookie_banner_lead:
        "We use essential storage for language preferences and similar. If you accept, we may also collect anonymous visit statistics to improve the site.",
      cookie_banner_read: "Read more about cookies",
      cookie_reject: "Essential only",
      cookie_accept: "Accept analytics"
    }
  };

  var lang = "sv";
  try {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.indexOf(stored) >= 0) lang = stored;
  } catch (e1) {}

  function t(key) {
    var pack = DICT[lang];
    if (pack && Object.prototype.hasOwnProperty.call(pack, key)) return pack[key];
    if (DICT.sv && Object.prototype.hasOwnProperty.call(DICT.sv, key)) return DICT.sv[key];
    return key;
  }

  function applyDom() {
    var careerPage = document.documentElement.getAttribute("data-page") === "career";
    document.documentElement.lang = lang === "da" ? "da" : lang === "en" ? "en" : "sv";
    document.title = careerPage ? t("career_doc_title") : t("doc_title");
    var md = document.getElementById("meta-description");
    if (md) md.setAttribute("content", careerPage ? t("career_meta_description") : t("meta_description"));

    var socialTitle = careerPage ? t("career_doc_title") : t("doc_title");
    var socialDesc = careerPage ? t("career_meta_description") : t("meta_description");
    var ogLocale = lang === "da" ? "da_DK" : lang === "en" ? "en_US" : "sv_SE";
    function setMetaQuery(sel, content) {
      var el = document.querySelector(sel);
      if (el) el.setAttribute("content", content);
    }
    setMetaQuery('meta[property="og:title"]', socialTitle);
    setMetaQuery('meta[property="og:description"]', socialDesc);
    setMetaQuery('meta[property="og:locale"]', ogLocale);
    setMetaQuery('meta[name="twitter:title"]', socialTitle);
    setMetaQuery('meta[name="twitter:description"]', socialDesc);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      if (el.getAttribute("data-i18n-html") === "true") {
        el.innerHTML = t(key);
      } else {
        el.textContent = t(key);
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key) el.setAttribute("placeholder", t(key));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria-label");
      if (key) el.setAttribute("aria-label", t(key));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var altKey = el.getAttribute("data-i18n-alt");
      if (altKey) el.setAttribute("alt", t(altKey));
    });

    syncLangDropdown();

    document.dispatchEvent(
      new CustomEvent("stadstaxi:lang", { detail: { lang: lang } })
    );
  }

  function setLang(next) {
    if (SUPPORTED.indexOf(next) < 0) return;
    lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e2) {}
    applyDom();
  }

  var FLAG_BY_LANG = { sv: "🇸🇪", da: "🇩🇰", en: "🇬🇧" };
  var CODE_BY_LANG = { sv: "SV", da: "DA", en: "EN" };
  var LANG_TITLE_KEY = { sv: "lang_sv", da: "lang_da", en: "lang_en" };

  function syncLangDropdown() {
    var root = document.getElementById("lang-dropdown");
    var toggle = document.getElementById("lang-dropdown-toggle");
    var list = document.getElementById("lang-dropdown-list");
    if (!root || !toggle || !list) return;

    list.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    root.classList.remove("is-open");

    var flagEl = root.querySelector("[data-lang-current-flag]");
    var codeEl = root.querySelector("[data-lang-current-code]");
    if (flagEl) flagEl.textContent = FLAG_BY_LANG[lang] || FLAG_BY_LANG.sv;
    if (codeEl) codeEl.textContent = CODE_BY_LANG[lang] || CODE_BY_LANG.sv;

    var nameKey = LANG_TITLE_KEY[lang] || "lang_sv";
    toggle.setAttribute("aria-label", t("lang_aria") + " – " + t(nameKey));

    root.querySelectorAll(".lang-dropdown__option[data-set-lang]").forEach(function (btn) {
      var ls = btn.getAttribute("data-set-lang");
      if (ls === lang) btn.setAttribute("aria-current", "true");
      else btn.removeAttribute("aria-current");
    });
  }

  function wireLangDropdown() {
    var root = document.getElementById("lang-dropdown");
    if (!root || root.dataset.langDropdownWired === "1") return;
    root.dataset.langDropdownWired = "1";

    var toggle = document.getElementById("lang-dropdown-toggle");
    var list = document.getElementById("lang-dropdown-list");
    if (!toggle || !list) return;

    function close() {
      list.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      root.classList.remove("is-open");
    }

    function open() {
      list.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      root.classList.add("is-open");
    }

    function isOpen() {
      return toggle.getAttribute("aria-expanded") === "true";
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (isOpen()) close();
      else open();
    });

    document.addEventListener("click", function (e) {
      if (!isOpen()) return;
      if (!root.contains(e.target)) close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (!isOpen()) return;
      close();
      toggle.focus();
    });
  }

  function wireLangSwitch() {
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-set-lang"));
      });
    });
  }

  function init() {
    applyDom();
    wireLangSwitch();
    wireLangDropdown();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.stadstaxiLang = {
    t: t,
    setLang: setLang,
    getLang: function () {
      return lang;
    },
    applyDom: applyDom
  };
})();
