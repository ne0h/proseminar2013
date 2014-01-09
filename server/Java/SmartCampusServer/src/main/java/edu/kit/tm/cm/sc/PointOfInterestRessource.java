package edu.kit.tm.cm.sc;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.fasterxml.jackson.databind.ObjectMapper;

@Path("/pois")
public class PointOfInterestRessource {

	private static final Map<Integer, PointOfInterest> pois;
	private static final AtomicInteger id;

	static {
		pois = new ConcurrentHashMap<Integer, PointOfInterest>();
		id = new AtomicInteger();
		ObjectMapper m = new ObjectMapper();
		PointOfInterest[] defaultPois;
		try {
			defaultPois = m.readValue(new File("src/main/resources/pois.json"),
					PointOfInterest[].class);
		} catch (IOException e) {
			throw new ExceptionInInitializerError(e);
		}
		for (PointOfInterest poi : defaultPois) {
			pois.put(poi.getId(), poi);
		}
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<PointOfInterest> getPOIs(
			@QueryParam("search") String search) {
		if (search == null || search.equals("")) {
			return pois.values();
		}
		List<PointOfInterest> filterdPOIs = new LinkedList<PointOfInterest>();
		for (PointOfInterest poi : pois.values()) {
			if (poi.getName().toLowerCase().contains(search.toLowerCase())) {
				filterdPOIs.add(poi);
			}
		}
		return filterdPOIs;
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createPOI(PointOfInterest poi) {
		poi.setId(id.incrementAndGet());
		pois.put(poi.getId(), poi);
		return Response.created(URI.create("/pois/" + poi.getId())).entity(poi)
				.build();
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public PointOfInterest getPOI(@PathParam("id") int id) {
		if (!pois.containsKey(id)) {
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		}
		return pois.get(id);
	}

	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public PointOfInterest updatePOI(@PathParam("id") int id, PointOfInterest poi) {
		if (!pois.containsKey(id)) {
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		}
		if (poi == null || (poi.getId() != 0 && id != poi.getId())) {
			throw new WebApplicationException(Response.Status.BAD_REQUEST);
		}
		poi.setId(id);
		pois.put(id, poi);
		return poi;
	}

	@DELETE
	@Path("{id}")
	public Response deletePOI(@PathParam("id") int id) {
		if (pois.remove(id) == null) {
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		}
		return Response.noContent().build();
	}

}
