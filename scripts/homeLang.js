
const homeLANG = {

    subHeader: {
        fi: "Suomalaista esports toimintaa ja turnauksia kaikille.",
        en: "Finnish esports-activities and tournaments for all."
    },

    aboutUsDescription: {
        fi:
            `
            <h3>Tietoa meistä</h3>
            <h4>Keitä olemme?</h4>
            <p> 
            Olemme ryhmä kavereita, joilla on aina ollut kova intohimo pelaamista ja e-urheilua kohtaan. 
            HubiGG on itsenäisesti aloittamamme projekti, jonka parissa tavoitteenamme on sekä järjestää esports-turnauksia, että auttaa pelaajia löytämään uusia pelikavereita. 
            Meidät tunnetaan parhaiten pienimuotoisten CS:GO turnausten järjestämisestä, joihin käytetty raha ja produktio tulevat kokonaan omalta porukaltamme.
            </p>
            <h4>Mistä HubiGG alkoi?</h4>
            <p>
            Aloitimme HubiGG:n perustamalla Discord serverin, jonka tarkoituksena oli tuoda yhteisöömme pelaajia useista eri peleistä, auttaa heitä löytämään pelikavereita, sekä järjestää turnauksia joihin osallistua. 
            Serveri kasvoikin yllättävän nopeasti, ja huomasimme varsinkin CS:GO turnausten herättävän erityistä kiinnostusta.
            Pian päätimmekin keskittää serverimme toiminnan täysin CS:GO:n ympärille.
            </p>
            <h4>Mitä teemme?</h4>
            <p>
            Vaikka turnausten järjestäminen onkin hauskaa, on se lukion ohella silti varsin työlästä hommaa. Haluamme järjestää turnaukset omilla servereillämme taataksemme korkealaatuisen pelikokemuksen.
            Kesän aikana päätimmekin siis aloittaa omien nettisivujen rakentamisen helpottamaan servereiden operointia niin meille järjestäjille, kuin teille pelaajillekin.
            Sivumme ovat alusta loppuun itse tehdyt ilman ulkopuolista rahoitusta ja niiden ansiosta turnausten järjestäminen on lähes täysin automatisoitua, tästä hatunnosto meidän IT-jäbille.
            Nyt HubiGG on aivan uudella tasolla, emmekä malta odottaa, että pääsemme jälleen järjestämään aktiivisesti turnauksia teille pelaajille.
            </p>
            `
        ,
        en:
            `
            <h3>About us</h3>
            <h4>Who are we?</h4>
            <p> 
            We are a group of friends, that have always had a huge passion towards gaming and esports. 
            HubiGG is our independently started project, in which our target is to organise esports tournaments, and help gamers find new mates to play with. 
            We are best known as an organiser of smaller scale CS:GO tournaments, in which the money spent and the production come solely from our friend group.
            </p>
            <h4>How did HubiGG begin?</h4>
            <p>
            We started HubiGG by making a Discord server, that had a purpose of bringing gamers from multiple games to our community, help them find play mates, and to organise tournaments that they can join in. 
            The server grew unexpectedly quick, and we noticed that especially our CS:GO tournaments got huge interest.
            And soon we decided to focus the whole server's activities towards CS:GO.
            </p>
            <h4>What do we do?</h4>
            <p>
            Even though organising tournaments is fun, it is a lot with our studies on the side. We want to organise our tournaments on our own servers, to guarantee the best possible gaming experience.
            That's why during the summer we started building our own website to ease the operating of our servers to us, the organisers, as for you, the gamers.
            The website is made from beginning to end by ourselves, without outside funding, and that has made organising tournaments almost fully automatic, and for that a huge salute to our IT-guys.
            Now HubiGG is on a whole new level, and we can't wait to actively organise the best possible tournaments for you.
            </p>
            `
    },

    contactUs: {
        fi: "Ota yhteyttä:",
        en: "Contact us:"
    },

    contacts: {
        fi:
            `
            <h3>Ota yhteyttä:</h3>
            <p>hubigg.business@gmail.com</p>
            `
        ,
        en:
            `
            <h3>Contact us:</h3>
            <p>hubigg.business@gmail.com</p>
            `
    },

    welcomeToNewSite: {
        fi: "Tervetuloa uusille sivuillemme",
        en: "Welcome to our new website"
    },

    giveaway: {
        fi: "Uutta!",
        en: "New!"
    },

    spotlight: {
        fi: "Ajankohtaista",
        en: "Spotlight"
    },

    checkSocials: {
        fi: "Ota somet haltuun",
        en: "Check out our socials"
    },

    joinGiveaway: {
        fi: "Katso",
        en: "View"
    },

    viewNews: {
        fi: "Katso uutiset",
        en: "View news"
    },

    news: {
        fi: "Uutiset",
        en: "News"
    },

    sponsoredBy1: {
        fi: "Sponsorina" /*"Yhteistyössä"*/ ,
        en: "Sponsored by"/*"In collaboration with"*/
    },

    sponsoredBy2: {
        fi: "",
        en: ""
    }
}

let GamesHaveStarted = false;

function updateLang() {
    const lang = getLanguage();

    updateLangStatic(document, IsLegacy, lang, LANG, TOURNAMENT);
}

function updateLangStatic(document, isLegacy, lang, { signUpForTournament, watchTournament, tournaments, tournamentPage }, { withSponsor }) {

    if (isLegacy) {
        const { subHeader, aboutUsDescription, contactUs } = homeLANG;

        document.getElementById("mainHeader").getElementsByTagName("h4")[0].innerHTML = subHeader[lang];
        document.getElementById("description").innerHTML = aboutUsDescription[lang];

        document.getElementById("contacts").getElementsByTagName("h3")[0].textContent = contactUs[lang]
    }
    else {
        const { subHeader, aboutUsDescription, contactUs, spotlight, news, giveaway, checkSocials, joinGiveaway, viewNews, sponsoredBy1, sponsoredBy2 } = homeLANG;

        document.getElementById("about").innerHTML = aboutUsDescription[lang];
        document.getElementsByTagName("address")[0].getElementsByTagName("h4")[0].textContent = contactUs[lang];

        document.getElementsByTagName("header")[0].getElementsByTagName("p")[0].textContent = subHeader[lang];

        document.getElementById("spotlight").getElementsByTagName("h3")[0].textContent = spotlight[lang];
        document.getElementById("news").getElementsByTagName("h3")[0].textContent = news[lang];

        document.getElementById("socials").getElementsByTagName("h3")[0].textContent = checkSocials[lang];

        document.getElementById("tournamentLinks").getElementsByTagName("button")[0].textContent = GamesHaveStarted ? tournamentPage[lang] : signUpForTournament[lang];
        document.getElementById("tournamentLinks").getElementsByTagName("button")[1].textContent = tournaments[lang];
        document.getElementById("tournamentLinks").getElementsByTagName("button")[2].textContent = watchTournament[lang];

        document.getElementById("news").getElementsByTagName("button")[0].textContent = viewNews[lang];

        let sponsorText = "";
        if (withSponsor[lang] != null && withSponsor[lang] != "") {
            sponsorText = `${sponsoredBy1[lang]} ${withSponsor[lang]} ${sponsoredBy2[lang]}`;
        }

        document.getElementById("tournamentSponsor").getElementsByTagName("p")[0].textContent = sponsorText;
    }
}

function setupStatic(document, isLegacy, { sponsorImgSrc, sponsor, sponsorLink, newsImageSrc, newsLink, giveawayImageSrc, giveawayLink, openSignUp }) {

    if (!isLegacy) {

        let src = sponsorImgSrc;
        if (src == "") {
            src = "images/hubiPNG_Large.png";
        }

        document.getElementById("tournamentSponsor").getElementsByTagName("img")[0].src = src;
        document.getElementById("tournamentSponsor").getElementsByTagName("img")[0].alt = sponsor;

        document.getElementById("tournamentSponsor").getElementsByTagName("a")[0].href = sponsorLink;

        document.getElementById("news").getElementsByTagName("img")[0].src = newsImageSrc;
        document.getElementById("news").getElementsByTagName("a")[0].href = newsLink;
    }
}

if (typeof exports != 'undefined') {
    exports.updateLangStatic = updateLangStatic;
    exports.homeLANG = homeLANG;
    exports.setupStatic = setupStatic;
}
else {
    setupStatic(document, IsLegacy, TOURNAMENT);
    updateLang();
}
