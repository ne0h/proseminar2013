var http = require("http");
http
		.createServer(
				function(request, response) {
					var paths = request.url.split("/");
					var urlSplit = paths[1].split("?");
					paths[1] = urlSplit[0];
					console.log(urlSplit);
					switch (paths[1]) {
						case 'pois':

							switch (request.method) {
								case 'POST':
									var poiController = require("./poiController");
									var poi = {};
									request.on('data', function(data) {
										poi = JSON.parse(data.toString());
										poiController.addPOI(poi);
									});

									request.on('end', function() {
										response.writeHead(200, "OK", {
											'Access-Control-Allow-Origin' : '*',
											'Content-Type' : 'application/json'
										});
										response.end(JSON.stringify(poi));
									});
									break;
								case 'GET':
									var poiController = require("./poiController");
									if (paths[2]) {

										var poiFound = poiController.getPOI(paths[2]);
										if (poiFound) {
											switch (request.headers.accept) {
												case 'text/html':
													var poiHTML = "<div class='poi' id='poi-"
															+ poiFound.id + "' data-lat='"
															+ poiFound.geolocation.longitude
															+ "' data-lng='"
															+ poiFound.geolocation.latitude + "'>"
															+ "<h3>" + poiFound.name + "</h3>"
															+ "<p>Gebäude " + poiFound.building
															+ "</p>" + "<address>"
															+ poiFound.address.street + "<br>"
															+ poiFound.address.zipCode
															+ poiFound.address.city + "<br>"
															+ poiFound.address.country
															+ "</address>" + "</div>";
													response.writeHead(200, {
														"Content-Type" : "text/html"
													});
													response.end(poiHTML);
													break;
												default:
													response.writeHead(200, {
														'Access-Control-Allow-Origin' : '*',
														"Content-Type" : "application/json"
													});
													response.end(JSON.stringify(poiFound));
											}
											;
										} else {
											response.writeHead(404, "Not found", {
												'Access-Control-Allow-Origin' : '*',
												'Content-Type' : 'text/html'
											});
											response
													.end('<html><head><title>404 - Not found</title></head>'
															+ '<body><h1>Not found.'
															+ '</h1></body></html>');
										}
										;
									} else {
										response.writeHead(200, {
											'Access-Control-Allow-Origin' : '*',
											"Content-Type" : "application/json"
										});
										response.end(JSON.stringify(poiController.getAllPOIs()));
									}

									break;
								case 'DELETE':
									var poiController = require("./poiController");
									if (paths[2]) {
										var success = poiController.deletePOI(paths[2]);
										if (success) {

											response.writeHead(204, {
												"Content-Type" : "application/json"
											});
											response.end();
										} else {
											response.writeHead(404, "Not found", {
												'Content-Type' : 'text/html'
											});
											response
													.end('<html><head><title>404 - Not found</title>'
															+ '</head><body><h1>Not found.'
															+ '</h1></body></html>');

										}
									} else {
										response.writeHead(405, "Method not supported", {
											'Access-Control-Allow-Origin' : '*',
											'Content-Type' : 'text/html'
										});
										response
												.end('<html><head><title>405 - Method not supported</title>'
														+ '</head><body><h1>'
														+ 'Method not supported.</h1></body></html>');

									}
									break;
								default:
									response.writeHead(405, "Method not supported", {
										'Access-Control-Allow-Origin' : '*',
										'Content-Type' : 'text/html'
									});
									response
											.end('<html><head><title>405 - Method not supported</title></head><body><h1>'
													+ 'Method not supported.</h1></body></html>');

							}
							break;
						default:
							response.writeHead(404, "Not found", {
								'Access-Control-Allow-Origin' : '*',
								'Content-Type' : 'text/html'
							});
							response
									.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.'
											+ '</h1></body></html>');
					}
					;

				}).listen(8888);