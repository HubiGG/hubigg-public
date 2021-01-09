const tournamentsLang = {
    fi: "Turnaukset",
    en: "Tournaments"
}

const aboutUsLang = {
    fi: "Tietoa meistä",
    en: "About us"
}

const nextTournamentLang = {
    fi: "HubiGG Winter Cupin ensimmäinen karsinta pidetään 15.1.<br><br> Ilmoittautuminen avautuu maanantaina 11.1. klo 18:00.",
    en: "HubiGG Winter Cup's first qualifying round will be held on January 15th.<br><br> Sign up will open on Monday, January 11th at 18:00."
}

function forceToFinnish() {
    sessionStorage.setItem("selectedLang", "fi");

    UpdateLang();

    if (typeof updateLang === 'function') {
        updateLang();
    }
}

function forceToEnglish() {
    sessionStorage.setItem("selectedLang", "en");

    UpdateLang();

    if (typeof updateLang === 'function') {
        updateLang();
    }
}

function getLanguage() {
    const navLang = sessionStorage.getItem("selectedLang") === null ? navigator.languages : [sessionStorage.getItem("selectedLang")];
    const lang = navLang.includes("fi") ? "fi" : "en";

    return lang;
}

function UpdateLang() {
    const lang = getLanguage();

    const buttons = document.getElementById("sidebar").getElementsByClassName("landscape");

    buttons[0].innerHTML = tournamentsLang[lang];
    buttons[1].innerHTML = aboutUsLang[lang];

    document.getElementById("languages").getElementsByTagName("h4")[0].textContent = lang;

    const timeFrameEl = document.getElementById("timeFrame");

    if (timeFrameEl != undefined) {
        timeFrameEl.innerHTML = nextTournamentLang[lang];
    }
}

UpdateLang();