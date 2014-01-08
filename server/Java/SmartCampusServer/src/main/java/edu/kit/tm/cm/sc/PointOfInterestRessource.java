package edu.kit.tm.cm.sc;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.util.Collection;
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

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Path("/pois")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PointOfInterestRessource {

	private static Map<Integer, PointOfInterest> pois = new ConcurrentHashMap<Integer, PointOfInterest>();
	private static AtomicInteger id = new AtomicInteger();

	public PointOfInterestRessource() throws JsonParseException,
			JsonMappingException, IOException {
		ObjectMapper m = new ObjectMapper();
		PointOfInterest[] defaultPois = m.readValue(new File(
				"src/main/resources/pois.json"), PointOfInterest[].class);
		for (PointOfInterest poi : defaultPois) {
			pois.put(poi.getId(), poi);
		}

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
