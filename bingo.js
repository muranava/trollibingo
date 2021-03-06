(function () {
    "use strict";

    var gridSize = 3;
    var wordsFuture = [
        "Staattinen tyypitys",
        "Microservices",
        "Haskell",
        "Clojure",
        "Lisp",
        "ES6",
        "Algebraiset tietotyypit",
        "REST",
        "Eventually consistent",
        "Bus",
        "Messaging",
        "Monadi",
        "Reaktiivinen",
        "Hajautettu",
        "Ei-rikkova",
        "Kompositio",
        "Higher-order function"
    ];
    var wordsLastSeasonAndNegative = [
        "Sivuvaikutus",
        "Broker",
        "Vuotava abstraktio",
        "Monoliittinen",
        "SOA",
        "Python",
        "HATEOAS",
    ];

	var words = wordsFuture.concat(wordsLastSeasonAndNegative);
	var suffledGood = shuffleArray(wordsFuture);
	var suffledBad = shuffleArray(wordsLastSeasonAndNegative);
	
    var template = Handlebars.default.compile(document.getElementById("grid-template").innerHTML),
        gridInstance = {
            words: shuffleArray(words).slice(0, gridSize*gridSize),
			nonsense: 
				"Nyt mennään vähän off-topiciksi, mutta järjestelmän pitäisi olla suunniteltu niin, että se on " + suffledGood[0].toLowerCase() + ". \
				Lähtökohtaisesi kannattaa fokusoitua siihen, että tulevaisuudessa kaiken ydin on " + suffledGood[1].toLowerCase()  + ".\
				Nykyisin usein sorrumme siihen, että järjestelmästä tulee aivan liian " + suffledBad[1].toLowerCase() + ".\
				" + suffledBad[2] + " on joskus paikallaan, mutta meidän arkkitehtuurissa sitä on käytetty liikaa ja turhaan. \
				Jokainen projekti/tiimi yrittää olla kovin " + suffledGood[2] + ", mutta sitten jälkikäteen todetaan, \
				että koko codebase on jälleen yksi iso " + suffledBad[1].toLowerCase() + ". \
				Asian pihvi on, että jatkossa meidän on otettava oppia termistä " + suffledGood[3] + ". \
				Olemme unohtaneet sen, sillä kustannuksella, että järjestelmästä tuli " + suffledGood[4].toLowerCase() + " (joka on kyllä tärkeää, mutta ei itse tarkoitus).\
				Pian meillä on miljoonien rivien codebase ja sen on oltava täysin " + suffledGood[5].toLowerCase() + ".\
				Sillä jos jatkamme nykyistä linjaa, lopputuloksena on " + suffledBad[3].toLowerCase() + ", \
				joka ei laadullisesti ole edes etäisesti " + suffledGood[6].toLowerCase() + ". \
				Arkkitehtuuria on kehitettävä sellaiseen suuntaan, että voimme oikeasti jonain päivänä sanoa meillä olevan " + suffledGood[7].toLowerCase() + "-systeemi. \
				" + suffledBad[3] + "-arkkitehtuurin on nyt vaihdettava olemaan " + suffledGood[8].toLowerCase() + "-arkkitehtuuri ja tähän on herättävä ajoissa. \
				On itsestään selvää, että mitä enemmän " + suffledGood[9].toLowerCase() + "-kokonaisuuksia pystymme toimittamaan, niin sitä paremmin varmistamme \
				pilvipalvelumme laadun kohti palvelua ylläpidettävämmäksi, testattavammaksi, luotettavammaksi, virhesietoisemmaksi, saatavammaksi ja kestävämmäksi \
				kokonaisuudeksi."
				
        },
        container = document.getElementById("gridContainer");

    container.innerHTML = template(gridInstance);

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

})();
