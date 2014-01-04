function RoomProperty(name) {

	this.name = name;
}

function RoomSearchCriteria() {

	this.criterias = [];

	this.addCriteria = function(roomProperty) {
		this.criterias.push(roomProperty);
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

function renderTags(template, tags) {

}

function searchPOI(keywordValue, criterias, radius) {
	$.ajax({
		url : "http://localhost:8888/pois",
		async : true,
		accepts : "application/json",
		type : "GET",
	}).success(function(data, textStatus, jqXHR) {
		$('#listing').html("");
		for (key in data) {
			var poi = data[key];
			var template = $('#listTemplate').html();
			var renderedTemplate = render(template, poi);

			$('#listing').append(renderedTemplate);

		}
		console.log(data);

	}).error(function(jqXHR, textStatus, errorThrown) {
		alert("Es ist ein Fehler aufgetreten.");
	});

}

$(document).ready(function() {
	$("#keywords").keyup(function() {
		var keywordValue = $(this).val();
		var radius = $('#radius_range')[0].value;
		var criterias = new RoomSearchCriteria();
		$('.categories input[type=checkbox]').each(function() {
			if (this.checked) {
				var roomProperty = new RoomProperty(this.getAttribute('name'));
				criterias.addCriteria(roomProperty);
			}
			;
		});
		searchPOI(keywordValue, JSON.stringify(criterias), radius);

	});
});
