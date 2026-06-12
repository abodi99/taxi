/**
 * Stadstaxi – UI-översättningar (sv / danska / engelska).
 * Alla strängar från betrodd källa (egen kod). HTML i strängar endast för kända nycklar.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "stadstaxi_lang";
  var SUPPORTED = ["sv", "da", "en"];

  var DICT = {
    sv: {
      doc_title: "Taxi & bokning | Stadstaxi",
      meta_description:
        "Boka taxi hos Stadstaxi – ring dygnet runt eller lämna en bokningsförfrågan. Se prislista och betala med kort eller Swish i bilen. Lokal taxitjänst för trygga resor i stan.",
      skip: "Hoppa till innehåll",
      logo_aria: "Stadstaxi – till startsidan",
      nav_aria: "Huvudmeny",
      nav_home: "Hem",
      nav_book: "Boka",
      nav_prices: "Priser",
      nav_careers: "Karriär",
      nav_contact: "Kontakt",
      contact_dialog_lead:
        "Välj hur du vill nå oss. När Chatwoot är aktiverat (websiteToken i stadstaxi-config.js) öppnas er livechatt i stället för denna ruta.",
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
      career_doc_title: "Karriär | Stadstaxi",
      career_meta_description:
        "Sök jobb eller skicka intresseanmälan till Stadstaxi – förare och andra roller. Uppdatera efter ert rekryteringsupplägg.",
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
      menu: "Meny",
      lang_aria: "Språk",
      lang_sv: "Svenska",
      lang_da: "Dansk",
      lang_en: "English",
      hero_eyebrow: "Din lokala taxi",
      hero_title: "Stadstaxi tar dig dit du ska",
      hero_lead:
        "Ring om du vill ha svar direkt – annars fyller du i en kort bokningsförfrågan nedan så hör vi av oss.",
      hero_contact_aria: "Snabbkontakt",
      hero_call: "Ring 070-123 45 67",
      hero_write: "Boka skriftligt",
      hero_whatsapp: "WhatsApp",
      hero_chat: "Chatt",
      hero_caption: "Lokal taxi – här när du behöver oss.",
      facts_why: "Varför Stadstaxi",
      fact1_title: "Dygnet runt",
      fact1_text:
        "Vi kör i stan och runt knuten – från snäva gränder till större vägar, när du behöver oss.",
      fact2_title: "Fasta priser",
      fact2_text:
        "Tydliga besked innan du kliver in – inga överraskningar. Se vår prislista nedan.",
      fact3_title: "Kort, Swish & mer",
      fact3_text:
        "Betala i bilen med kort, Swish eller Klarna där det finns – fråga gärna föraren om utbudet i just den bilen.",
      fact3_img_alt: "Kortterminal för kontaktlös betalning i taxin.",
      book_title: "Boka taxi",
      book_lead:
        'Du behöver inte ha alla svar klara. Skriv det du vet – <strong>resten löser vi när vi ringer</strong>. Bråttom? <a href="tel:+46701234567">Ring oss direkt</a> så slipper du formuläret helt.',
      book_teaser_text:
        'Vill du boka skriftligt? Öppna formuläret – tre enkla steg. Bråttom? <a href="tel:+46701234567">Ring</a> så hjälper vi dig direkt.',
      book_teaser_hint: "Samma upplägg som tidigare – formuläret visas i ett fönster så sidan blir enklare.",
      book_open_cta: "Öppna bokningsformulär",
      book_dialog_close_aria: "Stäng bokningsfönster",
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
      lbl_name: "För- och efternamn",
      lbl_phone: "Mobil eller telefon",
      hint_phone:
        "Svenskt nummer (07…, 08…) eller +46. Vi SMS:ar inte utan att fråga först.",
      lbl_passengers: "Antal passagerare",
      passengers_more: "5 eller fler",
      btn_back: "Tillbaka",
      wiz_next2: "Nästa: tillval",
      step3_title: "Tillval och övrigt",
      step3_intro:
        "Nästan klart – fyll i det som stämmer. Allt här är valfritt utom bekräftelsen längst ner.",
      lbl_destination: "Destination",
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
        '<span class="req" aria-hidden="true">*</span> obligatoriska uppgifter är ifyllda i stegen ovan. Utkastläge: ingen data skickas till server – <strong>ring oss efteråt</strong> för att bekräfta bokningen.',
      btn_submit: "Skicka förfrågan",
      aside_img_alt: "Taxibil på stadsgata – vi hjälper dig vidare.",
      thanks_title: "Tack – du är klar med din del",
      thanks_text:
        "I detta utkast sparas inget automatiskt. <strong>Ring oss när du kan</strong> så bekräftar vi tillsammans tid och plats – då slipper du undra om något fastnat.",
      thanks_reset: "Ny förfrågan",
      price_title: "Prislista",
      price_intro:
        "Exempelpriser för utkast – uppdatera siffrorna så de stämmer med ert taxameterunderlag och lokala regler.",
      price_disclaimer:
        "Slutpris kan påverkas av kötid, väntetid, avvikande rutt eller tillval. Vid tvekan – fråga alltid föraren eller vår dispatch innan resan.",
      trust_title: "Trygghet & service",
      trust_pay:
        "<strong>Betalning:</strong> Kort, Swish, Klarna (där avtal finns), Apple Pay / Google Pay om terminalen stödjer det, samt kontant. Frågor om kvitto eller betalning i taxin besvaras via kontaktuppgifterna i sidfoten.",
      footer_tag: "Liten firma – stor service.",
      footer_contact: "Kontakt",
      footer_phone: "Telefon:",
      footer_email: "E-post:",
      footer_company: "Bolag & postadress",
      footer_copy: "Utkast för intern test.",
      sticky_aria: "Snabbring",
      sticky_ring: "Ring Stadstaxi",
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
      err_pickup: "Ange hämtadress.",
      err_postal: "Ange postnummer med fem siffror (t.ex. 123 45).",
      err_date: "Välj datum.",
      err_time: "Välj tid.",
      err_time_past: "Välj en tid som inte redan passerat idag.",
      err_name: "Ange för- och efternamn.",
      err_phone: "Ange telefonnummer.",
      err_phone_fmt:
        "Ange ett giltigt nummer (minst 8 siffror, t.ex. 070 eller +46).",
      contact_dock_aria: "Snabbkontakt: WhatsApp och chatt",
      wa_aria: "Skriv till oss på WhatsApp",
      chat_open_aria: "Öppna chatt",
      chat_close_aria: "Stäng chatt",
      chat_title: "Stadstaxi – snabbhjälp",
      chat_welcome:
        "Hej! Jag är en enkel hjälpbot på sidan (utkast). Välj ett alternativ nedan eller skriv ett kort meddelande – vid brådska ringer du säkrast oss.",
      chat_chip_book: "Boka taxi",
      chat_chip_prices: "Priser",
      chat_chip_call: "Ring dispatch",
      chat_chip_careers: "Karriär",
      chat_chip_whatsapp: "WhatsApp",
      chat_reply_book:
        'Toppen – använd <a href="index.html#boka">bokningsformuläret</a> eller ring så guidar vi dig direkt.',
      chat_reply_prices:
        'Du hittar exempelpriser under <a href="index.html#priser">Prislista</a>. Vid osäkerhet – fråga i samband med bokning.',
      chat_reply_call:
        'Ring <a href="tel:+46701234567">070-123 45 67</a> dygnet runt för snabbast hjälp.',
      chat_reply_careers:
        'Lämna en intresseanmälan på <a href="karriar.html">karriärsidan</a> eller maila <a href="mailto:jobb@stadstaxi.example?subject=Intresse%20jobb%20Stadstaxi">jobb@stadstaxi.example</a>.',
      chat_reply_whatsapp:
        'Använd den gröna WhatsApp-knappen här på sidan, eller <a href="https://wa.me/46701234567?text=Hej%20Stadstaxi" rel="noopener noreferrer">öppna WhatsApp direkt</a>.',
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
      doc_title: "Taxi & booking | Stadstaxi",
      meta_description:
        "Book taxi hos Stadstaxi – ring døgnet rundt eller send en forespørgsel. Se prisliste og betal med kort eller Swish i bilen. Lokalt taxiselskab.",
      skip: "Spring til indhold",
      logo_aria: "Stadstaxi – til forsiden",
      nav_aria: "Hovedmenu",
      nav_home: "Hjem",
      nav_book: "Book",
      nav_prices: "Priser",
      nav_careers: "Karriere",
      nav_contact: "Kontakt",
      contact_dialog_lead:
        "Vælg hvordan du vil kontakte os. Når Chatwoot er slået til (websiteToken i stadstaxi-config.js), åbner jeres livechat i stedet for denne boks.",
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
      career_doc_title: "Karriere | Stadstaxi",
      career_meta_description:
        "Ansøg om job eller send en interessehenvendelse til Stadstaxi – chauffører og andre roller. Opdater efter jeres rekruttering.",
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
      hero_title: "Stadstaxi kører dig, hvor du skal",
      hero_lead:
        "Ring hvis du vil have svar med det samme – ellers udfylder du en kort bookingforespørgsel nedenfor, så hører du fra os.",
      hero_contact_aria: "Hurtig kontakt",
      hero_call: "Ring 070-123 45 67",
      hero_write: "Book skriftligt",
      hero_whatsapp: "WhatsApp",
      hero_chat: "Chat",
      hero_caption: "Lokal taxi – klar når du har brug for os.",
      facts_why: "Hvorfor Stadstaxi",
      fact1_title: "Døgnet rundt",
      fact1_text:
        "Vi kører i byen og omegnen – når du har brug for os.",
      fact2_title: "Faste priser",
      fact2_text:
        "Klare beskeder. Se vores prisliste nedenfor.",
      fact3_title: "Kort, Swish m.m.",
      fact3_text:
        "Betal i bilen med kort, Swish eller Klarna hvor det findes – spørg chaufføren om udvalget i den pågældende bil.",
      fact3_img_alt: "Kortterminal til kontaktløs betaling i taxien.",
      book_title: "Book taxi",
      book_lead:
        'Du behøver ikke have alle svar klar. Skriv det, du ved – <strong>resten finder vi ud af, når vi ringer</strong>. Travlt? <a href="tel:+46701234567">Ring direkte</a> og spring formularen over.',
      book_teaser_text:
        'Vil du booke skriftligt? Åbn formularen – tre enkle trin. Travlt? <a href="tel:+46701234567">Ring</a>, så hjælper vi med det samme.',
      book_teaser_hint: "Samme flow som før – formularen åbner i et vindue.",
      book_open_cta: "Åbn bookingformular",
      book_dialog_close_aria: "Luk booking",
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
      lbl_name: "For- og efternavn",
      lbl_phone: "Mobil eller telefon",
      hint_phone:
        "Svensk nummer (07…, 08…) eller +46. Vi SMS'er ikke uden at spørge.",
      lbl_passengers: "Antal passagerer",
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
        '<span class="req" aria-hidden="true">*</span> obligatoriske felter er udfyldt i trinene ovenfor. Udkast: ingen data sendes til server – <strong>ring bagefter</strong> for at bekræfte bookingen.',
      btn_submit: "Send forespørgsel",
      aside_img_alt: "Taxa på bygade – vi hjælper dig videre.",
      thanks_title: "Tak – din del er gjort",
      thanks_text:
        "I dette udkast gemmes intet automatisk. <strong>Ring når du kan</strong>, så bekræfter vi tid og sted sammen.",
      thanks_reset: "Ny forespørgsel",
      price_title: "Prisliste",
      price_intro:
        "Eksempelpriser i udkast – opdater beløb efter jeres taxameter og lokale regler.",
      price_disclaimer:
        "Slutpris kan påvirkes af kø, ventetid, afvigende rute eller tillæg. Spørg chaufføren ved tvivl.",
      trust_title: "Tryghed & service",
      trust_pay:
        "<strong>Betaling:</strong> Kort, Swish, Klarna (hvor der er aftale), Apple Pay / Google Pay hvis terminalen understøtter det, samt kontanter. Spørgsmål om kvittering eller betaling i taxien besvares via kontaktoplysningerne i sidefoden.",
      footer_tag: "Lille firma – stor service.",
      footer_contact: "Kontakt",
      footer_phone: "Telefon:",
      footer_email: "E-mail:",
      footer_company: "Virksomhed & adresse",
      footer_copy: "Udkast til intern test.",
      sticky_aria: "Hurtig ring",
      sticky_ring: "Ring Stadstaxi",
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
      err_pickup: "Angiv afhentningsadresse.",
      err_postal: "Angiv postnummer med fem cifre (fx 123 45).",
      err_date: "Vælg dato.",
      err_time: "Vælg tid.",
      err_time_past: "Vælg et tidspunkt der ikke allerede er passeret i dag.",
      err_name: "Angiv for- og efternavn.",
      err_phone: "Angiv telefonnummer.",
      err_phone_fmt:
        "Angiv et gyldigt nummer (mindst 8 cifre, fx 070 eller +46).",
      contact_dock_aria: "Hurtig kontakt: WhatsApp og chat",
      wa_aria: "Skriv til os på WhatsApp",
      chat_open_aria: "Åbn chat",
      chat_close_aria: "Luk chat",
      chat_title: "Stadstaxi – hurtig hjælp",
      chat_welcome:
        "Hej! Jeg er en simpel hjælpebot på siden (udkast). Vælg et alternativ nedenfor eller skriv en kort besked – ved hast ring direkte.",
      chat_chip_book: "Book taxi",
      chat_chip_prices: "Priser",
      chat_chip_call: "Ring dispatch",
      chat_chip_careers: "Karriere",
      chat_chip_whatsapp: "WhatsApp",
      chat_reply_book:
        'Brug <a href="index.html#boka">bookingformularen</a> eller ring, så guider vi dig.',
      chat_reply_prices:
        'Se eksempelpriser under <a href="index.html#priser">Prisliste</a>. Ved tvivl – spørg når du booker.',
      chat_reply_call:
        'Ring <a href="tel:+46701234567">070-123 45 67</a> døgnet rundt for hurtigst hjælp.',
      chat_reply_careers:
        'Udfyld vores <a href="karriar.html">karriereside</a> eller skriv til <a href="mailto:jobb@stadstaxi.example?subject=Job%20Stadstaxi">jobb@stadstaxi.example</a>.',
      chat_reply_whatsapp:
        'Brug den grønne WhatsApp-knap på siden, eller <a href="https://wa.me/46701234567?text=Hej%20Stadstaxi" rel="noopener noreferrer">åbn WhatsApp</a>.',
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
      doc_title: "Taxi & booking | Stadstaxi",
      meta_description:
        "Book a taxi with Stadstaxi – call anytime or send a booking request. See prices and pay by card or Swish in the car. Local taxi service.",
      skip: "Skip to content",
      logo_aria: "Stadstaxi – home",
      nav_aria: "Main menu",
      nav_home: "Home",
      nav_book: "Book",
      nav_prices: "Prices",
      nav_careers: "Careers",
      nav_contact: "Contact",
      contact_dialog_lead:
        "Choose how to reach us. When Chatwoot is enabled (websiteToken in stadstaxi-config.js), your live chat opens instead of this box.",
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
      career_doc_title: "Careers | Stadstaxi",
      career_meta_description:
        "Apply for a job or send an expression of interest to Stadstaxi – drivers and other roles. Update for your real hiring process.",
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
      hero_title: "Stadstaxi gets you where you need to go",
      hero_lead:
        "Call if you want an answer right away – otherwise fill in a short booking request below and we’ll get back to you.",
      hero_contact_aria: "Quick contact",
      hero_call: "Call 070-123 45 67",
      hero_write: "Book in writing",
      hero_whatsapp: "WhatsApp",
      hero_chat: "Chat",
      hero_caption: "Local taxi – here when you need us.",
      facts_why: "Why Stadstaxi",
      fact1_title: "Around the clock",
      fact1_text:
        "We drive in town and nearby – narrow streets to main roads, whenever you need us.",
      fact2_title: "Fixed prices",
      fact2_text:
        "Clear information. See our price list below.",
      fact3_title: "Card, Swish & more",
      fact3_text:
        "Pay in the car by card, Swish or Klarna where available—ask the driver what that vehicle accepts.",
      fact3_img_alt: "Card terminal for contactless payment in the taxi.",
      book_title: "Book a taxi",
      book_lead:
        'You don’t need every answer ready. Write what you know – <strong>we’ll sort the rest when we call</strong>. In a hurry? <a href="tel:+46701234567">Call us directly</a> and skip the form.',
      book_teaser_text:
        'Prefer to book in writing? Open the form – three quick steps. In a hurry? <a href="tel:+46701234567">Call us</a> and we’ll help right away.',
      book_teaser_hint: "Same steps as before – the form opens in a window so the page stays simple.",
      book_open_cta: "Open booking form",
      book_dialog_close_aria: "Close booking",
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
      lbl_name: "First and last name",
      lbl_phone: "Mobile or phone",
      hint_phone:
        "Swedish number (07…, 08…) or +46. We won’t text without asking.",
      lbl_passengers: "Number of passengers",
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
        '<span class="req" aria-hidden="true">*</span> required fields were completed in the steps above. Draft: no data is sent to a server – <strong>call us afterwards</strong> to confirm the booking.',
      btn_submit: "Send request",
      aside_img_alt: "Taxi on a city street – we’ll help you get sorted.",
      thanks_title: "Thanks – you’re done on your side",
      thanks_text:
        "Nothing is saved automatically in this draft. <strong>Call when you can</strong> and we’ll confirm time and place together.",
      thanks_reset: "New request",
      price_title: "Price list",
      price_intro:
        "Example prices for this draft – update amounts to match your meter and local rules.",
      price_disclaimer:
        "Final price may depend on queue time, waiting, route or extras. Ask the driver if unsure.",
      trust_title: "Safety & service",
      trust_pay:
        "<strong>Payment:</strong> Card, Swish, Klarna (where contracted), Apple Pay / Google Pay if the terminal supports it, plus cash. For receipts or paying in the taxi, use the contact details in the footer.",
      footer_tag: "Small company – big service.",
      footer_contact: "Contact",
      footer_phone: "Phone:",
      footer_email: "Email:",
      footer_company: "Company & address",
      footer_copy: "Draft for internal testing.",
      sticky_aria: "Quick call",
      sticky_ring: "Call Stadstaxi",
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
      err_pickup: "Enter pickup address.",
      err_postal: "Enter a five-digit postcode (e.g. 123 45).",
      err_date: "Choose a date.",
      err_time: "Choose a time.",
      err_time_past: "Choose a time that has not already passed today.",
      err_name: "Enter first and last name.",
      err_phone: "Enter phone number.",
      err_phone_fmt:
        "Enter a valid number (at least 8 digits, e.g. 070 or +46).",
      contact_dock_aria: "Quick contact: WhatsApp and chat",
      wa_aria: "Message us on WhatsApp",
      chat_open_aria: "Open chat",
      chat_close_aria: "Close chat",
      chat_title: "Stadstaxi – quick help",
      chat_welcome:
        "Hi! I’m a simple on-page helper (draft). Pick an option below or type a short message – for urgent trips, calling is fastest.",
      chat_chip_book: "Book a taxi",
      chat_chip_prices: "Prices",
      chat_chip_call: "Call dispatch",
      chat_chip_careers: "Careers",
      chat_chip_whatsapp: "WhatsApp",
      chat_reply_book:
        'Great – use the <a href="index.html#boka">booking form</a> or call us and we’ll guide you.',
      chat_reply_prices:
        'Example prices are under <a href="index.html#priser">Prices</a>. If unsure, ask when you book.',
      chat_reply_call:
        'Call <a href="tel:+46701234567">070-123 45 67</a> anytime for the fastest help.',
      chat_reply_careers:
        'Use our <a href="karriar.html">careers page</a> to apply, or email <a href="mailto:jobb@stadstaxi.example?subject=Job%20interest%20Stadstaxi">jobb@stadstaxi.example</a>.',
      chat_reply_whatsapp:
        'Use the green WhatsApp button on this page, or <a href="https://wa.me/46701234567?text=Hi%20Stadstaxi" rel="noopener noreferrer">open WhatsApp</a>.',
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

    var flagEl = root.querySelector("[data-lang-current-flag]");
    var codeEl = root.querySelector("[data-lang-current-code]");
    if (flagEl) flagEl.textContent = FLAG_BY_LANG[lang] || FLAG_BY_LANG.sv;
    if (codeEl) codeEl.textContent = CODE_BY_LANG[lang] || CODE_BY_LANG.sv;

    var nameKey = LANG_TITLE_KEY[lang] || "lang_sv";
    toggle.setAttribute("aria-label", t("lang_aria") + " – " + t(nameKey));

    root.querySelectorAll(".lang-dropdown__option[data-set-lang]").forEach(function (btn) {
      var l = btn.getAttribute("data-set-lang");
      btn.setAttribute("aria-selected", l === lang ? "true" : "false");
      var tk = LANG_TITLE_KEY[l];
      if (tk) btn.setAttribute("title", t(tk));
    });

    list.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    root.classList.remove("is-open");
  }

  function wireLangDropdown() {
    var root = document.getElementById("lang-dropdown");
    var toggle = document.getElementById("lang-dropdown-toggle");
    var list = document.getElementById("lang-dropdown-list");
    if (!root || !toggle || !list) return;

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = !list.hidden;
      if (open) {
        list.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        root.classList.remove("is-open");
      } else {
        list.hidden = false;
        toggle.setAttribute("aria-expanded", "true");
        root.classList.add("is-open");
      }
    });

    document.addEventListener("click", function (e) {
      if (list.hidden) return;
      if (!root.contains(e.target)) {
        list.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        root.classList.remove("is-open");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape" || list.hidden) return;
      list.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      root.classList.remove("is-open");
      toggle.focus();
    });
  }

  function wireLangSwitch() {
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-set-lang"));
      });
    });
    wireLangDropdown();
  }

  function init() {
    applyDom();
    wireLangSwitch();
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
