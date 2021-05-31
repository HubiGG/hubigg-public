const tournamentsLANG = {

    upcomingTournaments: {
        fi: "Tulevat turnaukset",
        en: "Upcoming tournaments"
    },
    previousTournaments: {
        fi: "Päättyneet turnaukset",
        en: "Previous tournaments"
    },
    viewPreviousTournaments: {
        fi: ">Katso kaikki päättyneet turnaukset",
        en: ">View all previous tournaments"
    }, 
    questionsAboutTournament: {
        fi: "Kysyttävää turnauksista?",
        en: "Questions about the tournament?"
    },
    aboutTournaments: {
        fi: "Tietoa turnauksista",
        en: "About the tournaments"
    },
    date: {
        fi: "Päivämäärä ja aika",
        en: "Date and time"
    },
    signUpOpens: {
        fi: "Ilmoittautuminen",
        en: "Sign up"
    },
    questionsDescription: {
        fi: 
        `Katso alapuolelta tai yläpalkista useinten kysyttyjä kysymyksiä ja vastauksia. 
        Jos et löydä tarvitsemaasi tietoa, otathan yhteyttä HubiGG:n ylläpitoon esimerkiksi Discord-palvelimellamme.`,
        en: 
        `See frequently asked questions from down below or from the top navigation bar.
        If you can't find your desired information, please contact the admins of HubiGG, for example, on our Discord-server.`
    },
    aboutTournamentDescription: {
        fi: "Lisätietoa turnasten historiasta ja niiden järjestämisestä saat alapuolelta tai yläpalkista löytyvästä 'Tietoa meistä' osiosta.",
        en: "Additional information about our tournaments can be found down below or from the navigation bar at the top."
    },
    previousTournament: {
        fi: "Viimeksi pelattu turnaus",
        en: "Previous tournament"
    },
    finalists: {
        fi: "Finalistit",
        en: "Finalists"
    }
}

let GamesHaveStarted = false;

function updateLang() {
    const lang = getLanguage();

    updateLangStatic(document, IsLegacy, lang, LANG, TOURNAMENT);
}

function updateLangStatic(document, isLegacy, lang, { tournaments, signUpForTournament, tournamentPage, aboutUs, prize, tournament }, { name, prizePool, startDate, endDate, startTime, signUpStartDate, signUpStartTime, previous}) {

    const { upcomingTournaments, previousTournament, previousTournaments, viewPreviousTournaments, questionsAboutTournament, questionsDescription, aboutTournaments, aboutTournamentDescription, date, signUpOpens, finalists } = tournamentsLANG;

    document.getElementById("welcome").textContent = upcomingTournaments[lang];
    document.getElementsByTagName("header")[0].getElementsByTagName("h1")[0].textContent = tournaments[lang];

    document.getElementById("next").getElementsByTagName("button")[0].textContent = GamesHaveStarted ? tournamentPage[lang] : signUpForTournament[lang];

    document.getElementById("previous").getElementsByTagName("h3")[0].textContent = previousTournaments[lang];
    document.getElementById("previous").getElementsByTagName("button")[0].textContent = tournamentPage[lang];

    document.getElementById("previous").getElementsByTagName("a")[1].textContent = viewPreviousTournaments[lang];
    document.getElementById("previous").getElementsByTagName("img")[0].src = previous.tournamentImageSrc;
    document.getElementById("previous").getElementsByTagName("img")[0].alt = previous.name;

    const prevStart = new Date(previous.startDate);
    const prevEnd = new Date(previous.endDate);

    const previousDate = typeof prevStart.toLocaleDateString === 'function'
        ? `${previousTournament[lang]}: <span>${previous.name}</span><span>${prevStart.toLocaleDateString(lang)} - ${prevEnd.toLocaleDateString(lang)}</span>`
        : `${previousTournament[lang]}: <span>${previous.name}</span><span>${previous.startDate} - ${previous.endDate}</span>`;

    document.getElementById("previous").getElementsByTagName("p")[0].innerHTML = previousDate;

    document.getElementById("questions").getElementsByTagName("h3")[0].textContent = questionsAboutTournament[lang];
    document.getElementById("questions").getElementsByTagName("p")[0].textContent = questionsDescription[lang];

    document.getElementById("aboutTournaments").getElementsByTagName("h3")[0].textContent = aboutTournaments[lang];
    document.getElementById("aboutTournaments").getElementsByTagName("p")[0].textContent = aboutTournamentDescription[lang];
    document.getElementById("aboutTournaments").getElementsByTagName("button")[0].textContent = aboutUs[lang];

    const detailsElem = document.getElementById("next").getElementsByTagName("p");

    if (name == "") {
        detailsElem[0].innerHTML = "";
    }
    else {
        detailsElem[0].innerHTML = `${tournament[lang]}: <span>${name}</span>`;
    }

    if (Number.isFinite(prizePool[lang])) {
        detailsElem[1].innerHTML = `${prize[lang]}: <span>${prizePool[lang]}€</span>`;
    }
    else if (prizePool[lang] == "") {
        detailsElem[1].innerHTML = "";
    }
    else {
        detailsElem[1].innerHTML = `${prize[lang]}: <span>${prizePool[lang]}</span>`;
    }

    if (startDate != "") {
        const start = new Date(startDate);
        const end = new Date(endDate);

        let dateText = "";

        if (typeof start.toLocaleDateString === 'function') {
            dateText += `${date[lang]}: <span>${start.toLocaleDateString(lang)}`;
            if (startDate != endDate) {
                dateText +=  ` - ${end.toLocaleDateString(lang)}`;
            }
        }
        else {
            dateText += `${date[lang]}: <span>${startDate}`;
            if (startDate != endDate) {
                dateText += ` - ${endDate}`;
            }
        }

        dateText += `, ${startTime}</span>`;

        detailsElem[2].innerHTML = dateText;
    }
    else {
        detailsElem[2].innerHTML = `${date[lang]}: <span>TBA</span>`;
    }

    if (signUpStartDate != "") {
        const signUpStart = new Date(signUpStartDate);
        let signUpTimeFrame = "";

        if (typeof signUpStart.toLocaleDateString === 'function') {
            signUpTimeFrame = `${signUpOpens[lang]}: <span>${signUpStart.toLocaleDateString(lang)}, ${signUpStartTime}</span>`;
        }
        else {
            signUpTimeFrame = `${signUpOpens[lang]}: <span>${signUpStartDate}, ${signUpStartTime}</span>`;
        }

        detailsElem[3].innerHTML = signUpTimeFrame;
    }
    else {
        detailsElem[3].innerHTML = "";
    }
    
    if (document.getElementById("finalists")) {
        document.getElementById("finalists").textContent = `${finalists[lang]}:`;
    }
}

function setupStatic(document, isLegacy, { openSignUp }) {
    document.getElementById("next").getElementsByTagName("p")[3].style.display = openSignUp ? "block" : "none";
}

if (typeof exports != 'undefined') {
    exports.updateLangStatic = updateLangStatic;
    exports.tournamentsLANG = tournamentsLANG;
    exports.setupStatic = setupStatic;
}
else {
    setupStatic(document, IsLegacy, TOURNAMENT);
    updateLang();
}