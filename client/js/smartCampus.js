var searchValueGlobal = "";
var positionGlobal = null;

function RoomProperty(name) {

	this.name = name;
}

function RoomSearchCriteria() {

	this.criterias = [];

	this.addCriteria = function(roomProperty) {
		this.criterias.push(roomProperty);
	};

	this.getCriteria = function() {

		var criteria = null;
		if (this.criterias.length > 0) {
			criteria = this.criterias[0];
		}
		return criteria;

	};

	this.getCriteriaName = function() {

		var criteriaName = "";
		var criteria = this.getCriteria();
		if (criteria) {
			criteriaName = criteria.name;
		}
		return criteriaName;
	};
}

function render(template, data) {
	var patt = /\{(([^}{]+)|([^}]+\{[^{}]+\}[^}]+)+)\}/g;
	return template.replace(patt, function(_, key) {

		var matching = data;
		var keys = key.split('/');
		var keysBeforeRepeat = 0;
		for (dataKey in keys) {
			var keyResult = keys[dataKey];
			if (keyResult === "#repeat") {
				var nestedMatching = matching[keys[keysBeforeRepeat + 2]];
				var templateToRepeat = $(template).find(keys[keysBeforeRepeat + 1]).html();
				var nestedTemplate = $(template).find(keys[keysBeforeRepeat + 1]);
				nestedTemplate.html("");

				for (nestedKey in nestedMatching) {
					nestedTemplate.append(render(templateToRepeat, nestedMatching[nestedKey]));
				}

				matching = nestedTemplate[0].outerHTML;
				break;
			} else if (keyResult !== " ") {
				matching = matching[keyResult];
				keysBeforeRepeat++;
			}

		}
		return matching;
	});
}

function addPOI() {

	var name = $('#create_name').val();
	var latitude = $('#create_latitude').val();
	var longitude = $('#create_longitude').val();
	var places = $('#create_places').val();
	var specials = $('#create_facts').val();

	if (name !== "" && latitude !== "" && longitude !== "" && places !== "" && specials !== "") {

		var createNumber = $('#create_number').val();
		var createDescription = $('#create_description').val();
		var createStreet = $('#create_street').val();
		var createZipCode = $('#create_zip_code').val();
		var createCity = $('#create_city').val();
		var createCountry = $('#create_country').val();
		var createWebsite = $('#create_website').val();
		var createTags = $('#create_tags').val();
		var createAudio = $('#create_audio').val();
		var createBuilddate = $('#create_builddate').val();

		var poi = {
			name : name,
			building : createNumber,
			address : {
				street : createStreet,
				zipCode : createZipCode,
				city : createCity,
				country : createCountry
			},
			geolocation : {
				latitude : latitude,
				longitude : longitude
			},
			tags : createTags.split(";"),
			description : createDescription,
			audio : createAudio,
			facts : {
				buildDate : createBuilddate,
				seats : places,
				special : specials.split(';')
			},
			website : createWebsite

		};

		$.ajax({
			url : "http://localhost:8888/pois",
			async : true,
			accepts : {
				text : "application/json",
			},
			type : "POST",
			data : JSON.stringify(poi),
			dataType : "json",
			contentType : "application/json;charset=utf-8",
		}).success(function(data, textStatus, jqXHR) {
			$("#keywords").keyup();
			closeOverlay();
		}).error(function(jqXHR, textStatus, errorThrown) {
			alert("Es ist ein Fehler aufgetreten.");
		});

	} else {
		alert("Bitte alle Felder ausfüllen");
	}
}

function getPOIDetails(poiID) {
	$.ajax({
		url : "http://localhost:8888/pois/" + poiID,
		async : true,
		accepts : {
			text : "application/json",
		},
		type : "GET",
	}).success(function(data, textStatus, jqXHR) {

		var template = $('#detailOverlayTemplate').html();
		var renderedTemplate = render(template, data);
		$('#detailOverlay').html(renderedTemplate);
		$('#detailOverlay').show();
		$('#overlay').show();
		console.log(data);
	}).error(function(jqXHR, textStatus, errorThrown) {
		alert("Es ist ein Fehler aufgetreten.");
	});
}

function searchPOIAjax(keywordValue, criterias, radius, position) {

	if (!position) {
		position = {};
		position.coords = {};
		position.coords.latitude = 0;
		position.coords.longitude = 0;
	}
	var data = {
		search : keywordValue,
		category : criterias.getCriteriaName(),
		radius : radius,
		nearby : position.coords.latitude + "_" + position.coords.longitude
	};
	$.ajax({
		url : "http://localhost:8888/pois",
		async : true,
		accepts : {
			text : "application/json",
		},
		type : "GET",
		data : data,
	}).success(function(data, textStatus, jqXHR) {
		$('#listing').html("");
		for (key in data) {
			var poi = data[key];
			var template = $('#listTemplate').html();
			var renderedTemplate = render(template, poi);

			$('#listing').append(renderedTemplate);
			$('#listing article').last().on("click", {
				poi : poi
			}, showDetails);

		}
		$('#loader').hide();

	}).error(function(jqXHR, textStatus, errorThrown) {

		alert("Es ist ein Fehler aufgetreten.");
	});

}

function showDetails(evt) {

	getPOIDetails(evt.data.poi.id);
}

function searchPOI() {

	$('#loader').show();
	var keywordValue = $('#keywords').val();
	searchValueGlobal = keywordValue;
	var radius = $('#radius_range').val();
	var criterias = new RoomSearchCriteria();
	$('.categories input[type=radio]').each(function() {
		if (this.checked) {
			var roomProperty = new RoomProperty(this.getAttribute('value'));
			criterias.addCriteria(roomProperty);
		}
		;
	});
	searchPOIAjax(keywordValue, criterias, radius, positionGlobal);

}

function showCreateOverlay() {

	$('#createOverlay').show();
	$('#overlay').show();
}

function closeOverlay() {

	$('#detailOverlay').hide();
	$('#createOverlay').hide();
	$('#overlay').hide();
}

$(document).ready(function() {

	navigator.geolocation.getCurrentPosition(function(position) {
		positionGlobal = position;
	});
	var criterias = new RoomSearchCriteria();
	searchPOI("", criterias, "");
	searchValueGlobal = $('#keywords').val();
	$('#detailOverlay').click(function(event) {
		event.stopPropagation();
	});
	$('#overlay').click(function(event) {
		closeOverlay();
	});
	$('#keywords').on('input', function(e) {
		searchPOI();
	});
	$('#radius_range').mouseup(function() {
		searchPOI();
	});
	$('.categories input[type=radio]').change(function() {
		searchPOI();
	});
});
