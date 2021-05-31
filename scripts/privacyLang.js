const privacyLANG = {

    header: {
        fi: "Tietosuojakäytäntö",
        en: "Privacy policy"
    },

    subHeader: {
        fi: "Tietosuoja, käyttöehdot ja evästeiden kaltaiset teknologiat",
        en: "Privacy policy, terms of use and technologies similar to cookies"
    },

    privacyPolicyContents: {
        fi:
            `<div>
                <h3>Tietosuoja</h3>
                <p>
                    HubiGG saa Steamin kirjautumisen avulla tunnisteen, jota käytetään käyttäjän yksilöimiseen.
                    <br><br>
                    HubiGG saa kyseisellä tunnisteella haettua Steamista käyttäjän profiiliin liittyviä tietoja, kuten käyttäjänimen, profiilikuvan tms. 
                    <br><br>
                    HubiGG ei luovuta näitä tietoja kenellekään ulkopuoliselle.
                </p>
            </div>
            <div>
                <h3>Käyttöehdot</h3>
                <p> Käyttäjä lupaa olla vahingoittamatta HubiGG:tä ja käyttää sen palveluja vain annettuun tarkoitukseen. </p>
            </div>
            <div>
                <h3>Evästeiden kaltaiset teknologiat</h3>
                <p>HubiGG tallentaa käyttäjän selaimeen tietoja, joita käytetään palvelun toimintaan.</p>
            </div>`
        ,
        en:
            `<div>
                <h3>Privacy policy</h3>
                <p>
                    During the Steam sign-in progress HubiGG acquires a tag that can be used to identify users.
                    <br><br>
                    With this tag HubiGG can retrieve information about the user's Steam profile, such as username and profile picture.
                    <br><br>
                    HubiGG doesn't give the acquired information to any third parties.
                </p>
            </div>
            <div>
                <h3>Terms of use</h3>
                <p> The user promises not to damage HubiGG and only uses its services for the intended purpose.</p>
            </div>
            <div>
                <h3>Technologies similar to cookies</h3>
                <p>HubiGG saves information to the user's browser, which is used for the operation of the service.</p>
            </div>`
    }
}

function updateLang() {
    const lang = getLanguage();

    updateLangStatic(document, IsLegacy, lang);
}

function updateLangStatic(document, isLegacy, lang) {

    const { header, subHeader, privacyPolicyContents } = privacyLANG;

    document.getElementById("mainContent").innerHTML = privacyPolicyContents[lang];

    if (isLegacy) {
        document.getElementById("mainHeader").getElementsByTagName("h4")[0].textContent = subHeader[lang];
    }
    else {
        document.getElementsByTagName("header")[0].getElementsByTagName("h1")[0].textContent = header[lang];
        document.getElementsByTagName("header")[0].getElementsByTagName("p")[0].textContent = subHeader[lang];
    }
}

if (typeof exports != 'undefined') {
    exports.updateLangStatic = updateLangStatic;
    exports.privacyLANG = privacyLANG;
}
else {
    updateLang();
}