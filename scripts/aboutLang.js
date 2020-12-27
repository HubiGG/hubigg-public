const subHeaderLang = {
    fi: "<h4>Suomalaista esports-toimintaa, CS:GO Turnauksia</h4>",
    en: "<h4>Finnish esports-activities, CS:GO Tournaments</h4>"
}

const aboutUsDescriptionLang = {
    fi:
    `
    <h3>Tietoa meistä</h3>
    <h4>Keitä olemme?</h4>
    <p> 
    Olemme ryhmä lukioikäisiä kavereita, joilla on aina ollut kova intohimo pelaamista ja e-urheilua kohtaan. 
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
    We are a group of high school friends, that have always had a huge passion towards gaming and esports. 
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
}

const contactsLang = {
    fi:
    `
    <h3>Yhteistiedot</h3>
    <p>hubigg.business@gmail.com</p>
    `
    ,
    en:
    `
    <h3>Contacts</h3>
    <p>hubigg.business@gmail.com</p>
    `
}

function updateLang() {
    const lang = getLanguage();

    document.getElementById("mainHeader").getElementsByTagName("h4")[0].innerHTML = subHeaderLang[lang];
    document.getElementById("description").innerHTML = aboutUsDescriptionLang[lang];
    document.getElementById("contacts").innerHTML = contactsLang[lang];
}

updateLang();