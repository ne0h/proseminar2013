var audimax = {
	id : 1534,
	name : "Audimax",
	building : "30.95",
	address : {
		street : "Straße am Forum 1",
		zipCode : "76131",
		city : "Karlsruhe",
		country : "Deutschland"
	},
	geolocation : {
		latitude : 49.0134868,
		longitude : 8.4162783
	},
	tags : [ "Hörsaal", "Veranstaltungen" ],
	description : "Der größte Hörsaal des KIT ist das 2002 eröffnete Audimax (Auditorium maximum), welches 734 Plätze hat. Dahinter folgt der Gerthsen-Hörsaal mit 705 Plätzen.",
	audio : "http://www.prototyp.kit.edu/audio/1534.wav",
	facts : {
		buildDate : "2002-02-17",
		seats : 734,
		special : [ "Getränke- und Snackautomat" ]
	},
	website : null

};
var akk = {
	id : 1535,
	name : "AKK",
	address : {
		street : "Straße am Forum 1",
		zipCode : "76131",
		city : "Karlsruhe",
		country : "Deutschland"
	},
	geolocation : {
		latitude : 49.0134868,
		longitude : 8.4162783
	},
	tags : [ "Kultur", "Freizeit", "Café", "Veranstaltungen" ],
	description : "Im Alten Stadion befindet sich des Weiteren der Arbeitskreis Kultur und Kommunikation. Dieser Arbeitskreis, basierend allein auf Ehrenamtlichen, hat sich der Förderung von kulturellen Angeboten für Studierende gewidmet.",
	audio : "http://www.prototyp.kit.edu/audio/1534.wav",
	facts : {
		buildDate : "1934-05-13",
		seats : 100,
		special : [ "2.537 Kaffeetassen" ]
	},
	website : null
};
var bib = {
	id : 1536,
	name : "KIT-Bibliothek Süd",
	address : {
		street : "Straße am Forum 1",
		zipCode : "76131",
		city : "Karlsruhe",
		country : "Deutschland"
	},
	geolocation : {
		latitude : 49.0134868,
		longitude : 8.4162783
	},
	tags : [ "Arbeitsraum", "Bibliothek" ],
	description : "Die KIT-Bibliothek ist die zentrale Bibliothek des Karlsruher Instituts für Technologie (KIT). Sie ist Ende des Jahres 2009 entstanden infolge des Zusammenschlusses der ehemaligen Universität Karlsruhe und des Forschungszentrums Karlsruhe.",
	audio : "http://www.prototyp.kit.edu/audio/1534.wav",
	facts : {
		buildDate : "1418-01-11",
		seats : 790,
		special : [ "24 Stunden geöffnet", "329.684 Bücher" ]
	},
	website : null
};

var maschbau = {
	id : 1537,
	name : "Maschinenbau-Hochhaus",
	address : {
		street : "Straße am Forum 1",
		zipCode : "76131",
		city : "Karlsruhe",
		country : "Deutschland"
	},
	geolocation : {
		latitude : 49.0134868,
		longitude : 8.4162783
	},
	tags : [ "Einzelarbeitsplätze" ],
	description : "Im grünen Maschinenbau-Hochhaus an der Kaiserstraße gibt es nur Einzelarbeitsplätze.",
	audio : "http://www.prototyp.kit.edu/audio/1534.wav",
	facts : {
		buildDate : "1984-06-25",
		seats : 200,
		special : [ "Kaffeeautomat" ]
	},
	website : null
};

var chemie = {
	id : 1538,
	name : "Chemie-Gebäude",
	address : {
		street : "Straße am Forum 1",
		zipCode : "76131",
		city : "Karlsruhe",
		country : "Deutschland"
	},
	geolocation : {
		latitude : 49.0134868,
		longitude : 8.4162783
	},
	tags : [ "Einzelarbeitsplätze", "Gruppenarbeitsplätze" ],
	description : "Das Chemie-Gebäude liegt neben dem Forum und bietet viele Arbeitsplätze für Einzelne und Gruppen.",
	audio : "http://www.prototyp.kit.edu/audio/1534.wav",
	facts : {
		buildDate : "1984-06-25",
		seats : 200,
		special : [ "Studierende in weißen Kitteln" ]
	},
	website : null
};

var poisWithDetails = [ audimax, akk, maschbau, bib, chemie ];
var pois = [];
for (key in poisWithDetails) {
	var poiWithDetail = poisWithDetails[key];
	var poi = {};
	poi.id = poiWithDetail.id;
	poi.name = poiWithDetail.name;
	poi.tags = poiWithDetail.tags;
	poi.facts = poiWithDetail.facts;
	poi.description = poiWithDetail.description;
	poi.link = "http://api.kit.edu/pois/" + poi.id + "/";
	pois.push(poi);
}

var searchPOI = function(poiID) {
	var result = null;

	for (key in poisWithDetails) {
		var tempPOI = poisWithDetails[key];
		if (parseInt(poiID) === tempPOI.id) {
			result = tempPOI;
			break;

		}
	}

	return result;
};

exports.deletePOI = function(poiID) {
	var success = false;

	for (key in poisWithDetails) {
		var tempPOI = poisWithDetails[key];
		if (parseInt(poiID) === tempPOI.id) {
			poisWithDetails.splice(key, 1);
			success = true;
			break;

		}
	}

	for (key in pois) {
		var tempPOI = pois[key];
		if (parseInt(poiID) === tempPOI.id) {
			pois.splice(key, 1);
			break;

		}
	}

	return success;
};

exports.addPOI = function(newPOI) {
	var poiId = poisWithDetails[poisWithDetails.length - 1].id + 1;
	newPOI.id = poiId;
	poisWithDetails.push(newPOI);
	var poi = {};
	poi.id = newPOI.id;
	poi.name = newPOI.name;
	poi.link = "http://api.kit.edu/pois/" + poi.id + "/";
	poi.tags = newPOI.tags;
	poi.facts = newPOI.facts;
	poi.description = newPOI.description;
	pois.push(poi);
};

exports.getAllPOIs = function() {
	return pois;
};

exports.getPOI = function(poiID) {
	return searchPOI(poiID);
};

exports.searchPOIsWithParameters = function(parameters) {
	if (parameters["search"]) {
		var searchValue = parameters["search"].toLowerCase();
		var filteredPois = [];
		for (key in pois) {
			var tempPOI = pois[key];
			var name = tempPOI.name.toLowerCase();
			if (name.search(searchValue) > -1) {
				filteredPois.push(tempPOI);
			}

		}
		return filteredPois;
	} else {
		return pois;
	}
};