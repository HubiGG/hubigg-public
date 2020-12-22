const tournamentsLang = {
    fi: "Turnaukset",
    en: "Tournaments"
}

const aboutUsLang = {
    fi: "Tietoa meistä",
    en: "About us"
}

const nextTournamentLang = {
    fi: "Seuraava turnaus järjestetään tammikuussa.",
    en: "The next tournament will be held in January."
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
        timeFrameEl.textContent = nextTournamentLang[lang];
    }
}

UpdateLang();