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
	}

};
var hertz = {
	id : 1535,
	name : "Hertz-Hörsaal",
	link : "http://api.kit.edu/pois/1535/"
};
var mensa = {
	id : 1536,
	name : "Mensa am Adenauerring",
	link : "http://api.kit.edu/pois/1536/"
};

var poisWithDetails = [ audimax, hertz, mensa ];
var pois = [];
for (key in poisWithDetails) {
	var poiWithDetail = poisWithDetails[key];
	var poi = {};
	poi.id = poiWithDetail.id;
	poi.name = poiWithDetail.name;
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
	poisWithDetails.push(newPOI);
	var poi = {};
	poi.id = newPOI.id;
	poi.name = newPOI.name;
	poi.link = "http://api.kit.edu/pois/" + poi.id + "/";
	pois.push(poi);
};

exports.getAllPOIs = function() {
	return pois;
};

exports.getPOI = function(poiID) {
	return searchPOI(poiID);
};