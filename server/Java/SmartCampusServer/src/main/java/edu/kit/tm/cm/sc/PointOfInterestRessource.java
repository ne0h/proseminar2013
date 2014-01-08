package edu.kit.tm.cm.sc;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.util.Arrays;
import java.util.Collection;
import java.util.LinkedList;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/pois")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PointOfInterestRessource {

	private static Map<Integer, PointOfInterest> pois = new ConcurrentHashMap<Integer, PointOfInterest>();
	private static AtomicInteger id = new AtomicInteger();

	public PointOfInterestRessource() throws MalformedURLException {
		PointOfInterest poi = new PointOfInterest();
		poi.setId(1534);
		poi.setName("Audimax");
		poi.setBuilding("30.95");
		poi.setAddress(new Address("Straße am Forum 1", "76131", "Karlsruhe",
				"Deutschland"));
		poi.setGeolocation(new Geolocation(49.0134868, 8.4162783));
		poi.setTags(new LinkedList<String>(Arrays.asList("Hörsaal",
				"Veranstaltungen")));
		poi.setDescription("Der größte Hörsaal des KIT […]");
		poi.setAudio(new URL("http://www.prototyp.kit.edu/audio/1534.wav"));
		poi.setFacts(new Facts("2002-02-17", 734,
				new LinkedList<String>(Arrays
						.asList("Getränke- und Snackautomat"))));
		pois.put(poi.getId(), poi);
		
	}

	@GET
	public Collection<PointOfInterest> getAllPOIs() {
		return pois.values();
	}
	
	@POST
	public Response createPOI(PointOfInterest poi) {
		poi.setId(id.incrementAndGet());
		pois.put(poi.getId(), poi);
		return Response.created(URI.create("/pois/" + poi.getId())).build();
	}

	@GET
	@Path("{id}")
	public PointOfInterest getPOI(@PathParam("id") int id) {
		final PointOfInterest poi = pois.get(id);
		if (poi == null) {
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		}
		return poi;
	}

	@PUT
	@Path("{id}")
	public void updatePOI(PointOfInterest update) {
		if (!pois.containsKey(update.getId())) {
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		}
		pois.put(update.getId(), update);
	}

}
