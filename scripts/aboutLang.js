const subHeaderLang = {
    fi: "<h4>Suomalaista esports-toimintaa, CS:GO Turnauksia</h4>",
    en: "<h4>Finnish esports-activities, CS:GO Tournaments</h4>"
}

const aboutUsDescriptionLang = {
    fi:
    `
    <h3>Tietoa meistä</h3>
    <p> Olemme ryhmä lukioikäisiä kavereita, joilla on aina ollut kova intohimo pelaamista ja e-urheilua kohtaan. 
    <span style="color: #da6b44;">HubiGG</span>
    on itsenäisesti aloittamamme projekti, jonka parissa tavoitteenamme on sekä järjestää esports-turnauksia, että auttaa pelaajia löytämään uusia pelikavereita. 
    Meidät tunnetaan parhaiten pienimuotoisten 
    <span style="color: darkgoldenrod;">CS:GO</span> 
    turnausten järjestämisestä, joihin käytetty raha ja produktio tulevat kokonaan omalta porukaltamme.
    <br><br>
    Aloitimme 
    <span style="color: #da6b44;">HubiGG</span>
    :n perustamalla 
    <a href="https://discord.gg/vZpC4fA" target="_blank" rel="noopener noreferrer">Discord</a>
    serverin, jonka tarkoituksena oli tuoda yhteisöömme pelaajia useista eri peleistä, auttaa heitä löytämään pelikavereita, sekä järjestää turnauksia joihin osallistua. 
    Serveri kasvoikin yllättävän nopeasti, ja huomasimme varsinkin 
    <span style="color: darkgoldenrod;">CS:GO</span> 
    turnausten herättävän erityistä kiinnostusta. Pian päätimmekin keskittää serverimme toiminnan täysin 
    <span style="color: darkgoldenrod;">CS:GO</span>
    :n ympärille.
    <br><br>
    Vaikka turnausten järjestäminen onkin hauskaa, on se lukion ohella silti varsin työlästä hommaa. Haluamme järjestää turnaukset omilla servereillämme taataksemme korkealaatuisen pelikokemuksen.
    Kesän aikana päätimmekin siis aloittaa omien nettisivujen rakentamisen helpottamaan servereiden operointia niin meille järjestäjille, kuin teille pelaajillekin.
    Sivumme ovat alusta loppuun itse tehdyt ilman ulkopuolista rahoitusta ja niiden ansiosta turnausten järjestäminen on lähes täysin automatisoitua, tästä hatunnosto meidän 
    <i>IT-jäbille.</i>
    Nyt 
    <span style="color: #da6b44;">HubiGG</span>
    on aivan uudella tasolla, emmekä malta odottaa, että pääsemme jälleen järjestämään aktiivisesti turnauksia teille pelaajille.</p>
    `
    ,
    en:
    `
    <h3>About us</h3>
    <p> We are a group of high school friends, that have always had a huge passion towards gaming and esports. 
    <span style="color: #da6b44;">HubiGG</span>
    is our independently started project, in which our target is to organise esports tournaments, and help gamers find new mates to play with. 
    We are best known as an organiser of smaller scale 
    <span style="color: darkgoldenrod;">CS:GO</span> 
    tournaments, in which the money spent and the production come solely from our friend group.
    <br><br>
    We started 
    <span style="color: #da6b44;">HubiGG</span>
    by making a 
    <a href="https://discord.gg/vZpC4fA" target="_blank" rel="noopener noreferrer">Discord</a>
    server, that had a purpose of bringing gamers from multiple games to our community, help them find play mates, and to organise tournaments that they can join in. 
    The server grew unexpectedly quick, and we noticed that especially our
    <span style="color: darkgoldenrod;">CS:GO</span> 
    tournaments got huge interest. And soon we decided to focus the whole server's activities towards
    <span style="color: darkgoldenrod;">CS:GO</span>
    <br><br>
    Even though organising tournaments is fun, it is a lot with our studies on the side. We want to organise our tournaments on our own servers, to guarantee the best possible gaming experience.
    That's why during the summer we started building our own website to ease the operating of our servers to us, the organisers, as for you, the gamers.
    The website is made from beginning to end by ourselves, without outside funding, and that has made organising tournaments almost fully automatic, and for that a huge salute to our
    <i>IT-guys.</i>
    Now 
    <span style="color: #da6b44;">HubiGG</span>
    is on a whole new level, and we can't wait to actively organise the best possible tournaments for you.</p>
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