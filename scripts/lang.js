// tähän turnauksen tiedot

const TOURNAMENT = {
    prizePool: {
        fi: "",
        en: ""
    },
    entryFee: 0,

    startDate: "",
    endDate: "",
    startTime: "",

    openSignUp: true,
    signUpStartDate: "",
    signUpStartTime: "",

    name: "",

    tournamentImageSrc: "",

    sponsor: "",
    sponsorImgSrc: "",
    sponsorLink: "",
    withSponsor: {
        fi: "",
        en: ""
    },

    previous: {
        prizePool: {
            fi: 100,
            en: 100
        },
        entryFee: 0,
    
        startDate: "2023-09-16",
        endDate: "2023-09-17",
        startTime: "18:00",
    
        openSignUp: true,
        signUpStartDate: "2023-09-01",
        signUpStartTime: "18:00",
    
        name: "HubiGG Farewell CS:GO Cup",
    
        tournamentImageSrc: "images/farewell.jpg",
    
        sponsor: "",
        withSponsor: {
            fi: "",
            en: ""
        },
        sponsorImgSrc: "",
        sponsorLink: "",
    },

    newsImageSrc: "images/newsImg.jpg",
    newsLink: "https://twitter.com/HubiGG",
    giveawayImageSrc: "",
    giveawayLink: ""
}

// onko striimi päällä (hakee automaattisesti, ei tarvitse muuttaa)
let StreamStatus = false;

// vanha vai uusi sivu
let IsLegacy = false;

if (typeof document != 'undefined') {
    IsLegacy = document.getElementById("sidebar") != undefined;
}

const LANG = {
    tournament: {
        fi: "Turnaus",
        en: "Tournament"
    },

    team: {
        fi: "joukkue",
        en: "team"
    },

    noEntryFee: {
        fi: "Ei osallistumismaksua",
        en: "No entry fee"
    },

    tournaments: {
        fi: "Turnaukset",
        en: "Tournaments"
    },

    aboutUs: {
        fi: "Tietoa meistä",
        en: "About us"
    },

    privacyPolicy: {
        fi: "Tietosuoja",
        en: "Privacy policy"
    },

    termsOfUse: {
        fi: "Käyttöehdot",
        en: "Terms of use"
    },

    signInToSteam: {
        fi: "Kirjaudu Steamiin",
        en: "Sign in to Steam"
    },

    signOut: {
        fi: "Kirjaudu ulos",
        en: "Sign out"
    },

    waitDotDotDot: {
        fi: "odota hetki...",
        en: "wait..."
    },

    deprecated: {
        fi: "Tämä on vanha sivu, jota ei enään päivitetä uusilla ominaisuuksilla.",
        en: "This site is deprecated, and will no longer be updated with new features."
    },

    toNewSite: {
        fi: "Siirry uusille sivuillemme",
        en: "Move to our new site"
    },

    search: {
        fi: "Haku",
        en: "Search"
    },

    groupsAndBrackets: {
        fi: "Lohkot ja pudotuspelit",
        en: "Groups and brackets"
    },

    tournamentsFormat: {
        fi: "Turnauksen formaatti",
        en: "Tournament's format"
    },

    gamemode: {
        fi: "Pelimuoto",
        en: "Gamemode"
    },

    /* new */

    watchTournament: {
        fi: "Katso turnausta",
        en: "Watch the tournament"
    },

    streamingNow: {
        fi: "Live-striimi päällä!",
        en: "Streaming now!"
    },

    streamOffline: {
        fi: "Live-striimi poissa päältä",
        en: "Stream offline"
    },

    signUpForTournament: {
        fi: "Ilmoittaudu turnaukseen",
        en: "Sign up for the tournament"
    },

    tournamentPage: {
        fi: "Turnaussivu",
        en: "Tournament page"
    },

    prize: {
        fi: "Palkinto",
        en: "Prize"
    },

    home: {
        fi: "Koti",
        en: "Home"
    },

    entryFee: {
        fi: "Osallistumismaksu",
        en: "Entry fee"
    },

    and: {
        fi: "ja",
        en: "and"
    }
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

    UpdateLangStatic(document, IsLegacy, lang,);

    const { search, signInToSteam, home, tournaments, signOut } = LANG;

    document.getElementById("languages").getElementsByTagName("p")[0].textContent = lang;
    document.getElementById("search").getElementsByTagName("input")[0].placeholder = search[lang];

    document.getElementById("links").getElementsByTagName("a")[0].innerHTML = home[lang];
    document.getElementById("links").getElementsByTagName("a")[1].innerHTML = tournaments[lang];
}

function UpdateLangStatic(document, isLegacy, lang) {

    const { team, noEntryFee, and } = LANG;

    const { startDate, endDate, startTime, entryFee, prizePool } = TOURNAMENT;

    if (document.getElementById("startTime")) {

        if (startDate != "") {

            const start = new Date(startDate);
            const end = new Date(endDate);

            let dateText = "";

            if (typeof start.toLocaleDateString === 'function') {
                dateText += start.toLocaleDateString(lang);
                if (startDate != endDate) {
                    dateText += ` - ${end.toLocaleDateString(lang)}`;
                }
            }
            else {
                dateText += startDate;
                if (startDate != endDate) {
                    dateText += ` - ${endDate}`;
                }
            }

            dateText += `, ${startTime}`;

            document.getElementById("startTime").textContent = dateText;
        }
        else {
            document.getElementById("startTime").textContent = "";
        }
    }

    if (document.getElementById("entryFee")) {

        let feeText = entryFee;
        if (Number.isFinite(feeText)) {
            feeText = entryFee == 0 ? noEntryFee[lang] : `${entryFee}€ / ${team[lang]}}"`;
        }

        document.getElementById("entryFee").textContent = feeText;
    }

    if (document.getElementById("prizePool")) {

        let prizePoolText = prizePool[lang];
        if (Number.isFinite(prizePoolText)) {
            prizePoolText += "€";
        }

        document.getElementById("prizePool").textContent = prizePoolText;
    }

    if (!isLegacy) {

        const { privacyPolicy, termsOfUse, streamingNow, streamOffline } = LANG;

        const footerElem = document.getElementsByTagName("footer")[0];

        if (footerElem != undefined) {
            const footerInfoElem = footerElem.getElementsByClassName("info")[0];

            if (footerInfoElem != undefined) {
                footerInfoElem.getElementsByTagName("a")[0].innerHTML = `${privacyPolicy[lang]} ${and[lang]} ${termsOfUse[lang].toLowerCase()}`;
            }
        }

        if (document.getElementById("streamStatus") != undefined) {
            document.getElementById("streamStatus").innerHTML = StreamStatus ? `${streamingNow[lang]}<span class="circle"></span>` : streamOffline[lang];
        }
    }
}

function SetupStatic(document, isLegacy) {

    const { name, tournamentImageSrc } = TOURNAMENT;

    if (document.getElementById("nthCup")) {
        document.getElementById("nthCup").textContent = name;
    }

    if (!isLegacy) {
        const tourneyImgElems = [...document.getElementsByClassName("tourneyImg")];

        let src = tournamentImageSrc;
        if (src == "") {
            src = "images/headingBg.jpg";
        }

        tourneyImgElems.forEach((img) => {
            img.src = src;
            img.alt = name;
        });
    }
}

if (typeof exports != 'undefined') {
    exports.UpdateLangStatic = UpdateLangStatic;
    exports.LANG = LANG;
    exports.SetupStatic = SetupStatic;
    exports.TOURNAMENT = TOURNAMENT;
}
else {
    SetupStatic(document, IsLegacy);
    UpdateLang();
}