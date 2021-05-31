const faqLANG = {
    faq: {
        fi: [
            {
                q: 'Mitä <em>sininen</em> väri merkitsee pelaajalistassa?',
                a: 'Mikäli pelaajan väri on listattu <em>sinisellä</em>, hänet on luokiteltu varapelaajaksi.'

            },
            {
                q: 'Miten varapelaajat toimivat?',
                a: 'Ilmoittautuneet varapelaajat voivat tarvittaessa pelata puuttuvan joukkueen jäsenen tilalla. Otteluissa pelaavat aina 5 ensimmäisenä palvelimelle liittynyttä pelaajaa per joukkue.'
            },
            {
                q: 'Kuinka monta pelaajaa varalle voi ilmoittautua?',
                a: '5:n ensimmäisen pelaajan jälkeen loput joukkueeseen liittyvät katsotaan varapelaajiksi. Rajaa varapelaajien määrälle ei ole asetettu.'
            },
            {
                q: 'Tuli muuta menoa, miten perun osallistumisen?',
                a: 'Osallistumista ei tarvitse erikseen perua, mutta joukkuetovereille kannattaa kyllä ilmoittaa. Turnausta edeltää noin tunnin pituinen check-in vaihe, jolloin joukkueilta vaaditaan vielä erillinen vahvistus osallistumisesta. Jos kukaan jäsenistä ei vahvista osallistumista, joukkue poistetaan.'
            },
            {
                q: 'Miten poistan joukkueen?',
                a: 'Jos kukaan jäsenistä ei vahvista osallistumista check-in vaiheessa, joukkue poistetaan automaattisesti.'
            },
            {
                q: 'Joukkueessa on vähemmän kuin 5 pelaajaa, miten käy?',
                a: 'Joukkueet joissa on vähemmän kuin 5 pelaajaa poistetaan check-in vaiheen alkaessa.'
            },
            {
                q: 'Joukkueen luominen ei onnistu, mikä vikana?',
                a: 'Jokaisella joukkueella täytyy olla uniikki nimi, joten tarkista listasta, onko haluamanne nimi mahdollisesti jo käytössä. Joukkueiden nimissä ei myöskään saa esiintyä merkkiä ", ja pääsykoodin täytyy olla tasan 5:n merkin pituinen.'
            },
            {
                q: 'Mikä on joukkueiden maksimimäärä turnauksessa?',
                a: 'Suurin joukkuemäärä jolla tällä hetkellä pidämme turnauksia, on 16 joukkuetta.'
            },
            {
                q: 'Mitä <em>sininen</em> väri ja <em>+</em> merkki tarkoittavat joukkuelistassa?',
                a: 'Samoin kuin joukkueiden sisäisissä pelaaja listoissa, <em>sininen</em> väri merkitsee varajoukkuetta, ja <em>+</em> merkki joukkuelaskurissa niiden määrää.'
            },
            {
                q: `Mitä ovat 'varajoukkueet'?`,
                a: `Ensimmäisen 16 joukkueen jälkeen ilmoitetut joukkueet ovat ns. 'varajoukkueita'. Varajoukkue pääsee pelaamaan turnauksessa, jos jokin ensimmäisistä 16: sta joukkueesta ei saa tarpeeksi pelaajia kasaan, tai ei vahvista osallistumistaan check-in vaiheessa.`
            },
            {
                q: 'Striimataanko pelejä?',
                a: 'Finaalit striimataan aina. Tämän lisäksi striimaamme yleensä muutaman pelin lohkoista. Linkin Twitch-kanavallemme löydät sivun oikeasta yläkulmasta.'
            },
            {
                q: 'Tarvitseeko minun luoda tallenne omasta näkökulmastani? Tai saako pelattujen pelien demoja omaan käyttööni turnauksen jälkeen?',
                a: 'Turnausjärjestäjä ei vaadi pelaajilta tallennetta pelistä. Mutta jos haluat saada demon omaan henkilökohtaiseen käyttöösi, voit laittaa consoleen komennon record "demon nimi". Lopettaaksesi demon tallentamisen, laita consoleen komento stop, tai lähde pelistä.Tallenteet löytää pelin tiedostoista.'
            },
            {
                q: 'Miten palkintorahat maksetaan voittajille?',
                a: 'Mahdolliset palkintorahat maksetaan PayPalin kautta.'
            },
            {
                a: `Mikäli jokin jäi epäselväksi, tai kaipaat apua ongelman kanssa, ota meihin yhteyttä <em>Discord</em> kanavallamme, linkki etusivulla.`
            }
        ],
        en: [
            {
                q: 'What does a <em>blue</em> username mean?',
                a: `If a player's name is listed in <em>blue</em>, they are listed as a substitute player.`
            },
            {
                q: 'How does the subsitute system work?',
                a: 'Players assigned with the role of substitute, can replace a missing player in any match the team participates in. The first 5 players of the team who join the server are the ones who will play the match.'
            },
            {
                q: 'How many players can be listed as substitutes?',
                a: `Anyone who joins the team after the first 5 players, will be listed as a substitute. There currently isn't a limit on how many subsitutes a team can have.`
            },
            {
                q: `Something came up and I can't play. How do I cancel my signup?`,
                a: `You don't have to cancel the singup yourself, the system will do it for you before the tournament begins. There is an hour long check-in period before the tournament starts. One player from each team has to check their team in. If a team fails to do so, they will be removed from the tournament automatically.`
            },
            {
                q: 'How do I delete my team?',
                a: 'If the team fails to check-in in time, the team will be removed by the system.'
            },
            {
                q: 'My team has less than 5 players listed. What happens in that situation?',
                a: 'Teams with less than 5 players will automatically removed in the beginning of the check-in phase.'
            },
            {
                q: `I'm having issues with creating a team. What could be wrong?`,
                a: `Each team has to have a unique name. So please be aware of any already existing team names. Team names can't include the character ". The passcode for the team must be exactly 5 characters long.`
            },
            {
                q: `What is the maximum amount of teams that are able to participate?`,
                a: 'The maximum amount of teams as of now is 16.'
            },
            {
                q: `My team's name is listed in <em>blue</em> with the character <em>+</em>. What does that mean ?`,
                a: `If a team's name is listed in <em>blue</em> with a <em>+</em>, it means that the team is listed as a replacement team.`
            },
            {
                q: 'What are replacement teams?',
                a: `Teams that have been signed up after the first 16 teams are called replacement teams. If one or more of the teams fail to check in or is left with less than 5 players, they will be removed and the next team in queue will get a spot in the tournament. In each tournament there has been multiple teams who do not end up showing up to the tournament, so don't hesitate to sign up your team even if the maximum amount of team has been reached.`
            },
            {
                q: 'Will any of the matches be streamed live?',
                a: 'The final is always streamed live on our Twitch channel, HubiGGFI. We often also provide broadcasts on some groupstage matches. You can find a link to our Twitch channel in the top right- hand corner on the site.'
            },
            {
                q: 'Do I have to record my own POV? Do the organisers provide me with demos of the games I play?',
                a: `You don't have to record your POV. If you however wish to get a demo of your match, simply write the command record "name of the demo" to the console. To stop the recording, write the command stop to the console or just simply quit the game.`
            },
            {
                q: 'How will the prize money be transferred to winners?',
                a: 'Possible prize money will be transferred via PayPal.'
            },
            {
                a: `If you have any questions about the tournament or anything else for that matter, feel free to message us on <em>Discord</em>. You can find an invite to our Discord server on the front page.`
            }
        ]
    }
}

function updateLang() {
    const lang = getLanguage();

    updateLangStatic(document, IsLegacy, lang);
}

function updateLangStatic(document, isLegacy, lang) {
    const faqElem = document.getElementById("faqContent");

    if (faqElem != undefined) {

        while (faqElem.firstChild) {
            faqElem.removeChild(faqElem.firstChild);
        }

        faqLANG.faq[lang].forEach(desc => {
            const qaElem = document.createElement("p");

            if (desc.q != undefined) {
                const questionElem = document.createElement("span");
                questionElem.innerHTML = `Q: ${desc.q}`;
                qaElem.appendChild(questionElem);

                qaElem.innerHTML += `<br><br>A: ${desc.a}`;
            }
            else {
                qaElem.innerHTML += desc.a;
            }

            faqElem.appendChild(qaElem);
        });
    }
}

if (typeof exports != 'undefined') {
    exports.updateLangStatic = updateLangStatic;
}
else {
    updateLang();
}