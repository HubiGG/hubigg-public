let SearchContent = [
    {
        fi: "Koti",
        en: "Home",
        href: "index.html"
    },
    {
        fi: "Uutiset",
        en: "News",
        href: "index.html#welcome"
    },
    {
        fi: "Turnaukset",
        en: "Tournaments",
        href: "tournaments.html"
    },
    {
        fi: "Tietoa meistä",
        en: "About us",
        href: "index.html#about"
    },
    {
        fi: "FAQ",
        en: "FAQ",
        href: "faq.html"
    },
    {
        fi: "Yhteystiedot",
        en: "Contacts",
        href: "index.html#contacts"
    },
    {
        fi: "Somet",
        en: "Socials",
        href: "index.html#socials"
    },
    {
        fi: "Tietosuojakäytäntö",
        en: "Privacy policy",
        href: "privacy.html"
    }
]

let SearchResultsElem = undefined;

let TeamSearchContent = undefined;

const SearchElem = document.getElementById("search");
const SearchFieldElem = SearchElem.getElementsByTagName("input")[0];

SearchFieldElem.addEventListener("focus", onSearch);
SearchFieldElem.addEventListener("mousedown", onSearch);
SearchFieldElem.addEventListener("focusout", onExitSearch);
SearchFieldElem.addEventListener("input", onSearchType);

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key == "Escape") {

        if (SearchResultsElem != undefined) {
            onExitSearch();
        }
    }
});

function onSearch(e) {

    if (SearchResultsElem != undefined) {
        return;
    }

    SearchResultsElem = document.createElement("ul");
    SearchResultsElem.id = "searchResults";

    SearchElem.appendChild(SearchResultsElem);

    refreshSearchResults();
}

function onSearchType() {

    if (SearchResultsElem == undefined) {
        onSearch();
    }

    refreshSearchResults();
}

function onExitSearch(e) {

    if (SearchResultsElem == undefined) {
        return;
    }

    SearchResultsElem.remove();
    SearchResultsElem = undefined;
}

function refreshSearchResults() {

    if (SearchResultsElem == undefined || SearchContent == undefined) {
        return;
    }

    while (SearchResultsElem.firstChild) {
        SearchResultsElem.removeChild(SearchResultsElem.firstChild);
    }

    const input = SearchFieldElem.value;
    const lang = getLanguage();

    let currentResults = [...SearchContent];

    if (input == "") {

        if (TeamSearchContent != undefined && TeamSearchContent[0] != undefined) {
            currentResults.push(Object.assign({}, TeamSearchContent[0]));
        }

        currentResults.sort((a, b) => { return a[lang].localeCompare(b[lang]); });
    }
    else {
        if (TeamSearchContent != undefined) {
            currentResults = currentResults.concat([...TeamSearchContent]);
        }

        SearchContent.sort((a, b) => {

            const a1 = a[lang][0].toLowerCase();
            const b1 = b[lang][0].toLowerCase();

            const i1 = input[0].toLowerCase();

            if (a1 == i1 && b1 == i1) {
                return 0;
            }

            if (a1 == i1) {
                return -1;
            }

            if (b1 == i1) {
                return 1;
            }
        });
    }

    for (let i = 0; i < currentResults.length; i++) {

        const r = currentResults[i];
        const title = r[lang];

        if (input == "" || title.toLowerCase().includes(input.toLowerCase())) {
            const resultElem = document.createElement("li");

            const linkElem = document.createElement("a");
            linkElem.textContent = title;
            linkElem.href = r.href;

            linkElem.onmousedown = (e) => {
                e.preventDefault();
            }

            resultElem.appendChild(linkElem);
            SearchResultsElem.appendChild(resultElem);
        }
    }

    const altLangsElem = document.createElement("dir");
    altLangsElem.id = "altLangs";
    altLangsElem.onmousedown = (e) => {
        e.preventDefault();
    }

    const fiElem = document.createElement("img");
    fiElem.src = "images/fi.png";
    fiElem.alt = "fi";
    fiElem.onclick = () => {
        forceToFinnish();
        refreshSearchResults();
    };
    altLangsElem.appendChild(fiElem);

    const currentLangElem = document.createElement("p");
    currentLangElem.textContent = getLanguage();
    altLangsElem.appendChild(currentLangElem);

    const enElem = document.createElement("img");
    enElem.src = "images/en.png";
    enElem.alt = "en";
    enElem.onclick = () => {
        forceToEnglish();
        refreshSearchResults();
    };
    altLangsElem.appendChild(enElem);

    SearchResultsElem.appendChild(altLangsElem);
}
