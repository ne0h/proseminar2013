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

/**
 * This class defines a resource, that can be accessed by users. JAX-RS
 * annotations are used to define on which path the resource is accessible,
 * which methods listen for which HTTP-method on which path and what kind of
 * data they are expecting respectively producing.
 * 
 * @author Simon Herter
 * 
 */
@Path("/pois")
public class PointOfInterestRessource {

	/**
	 * This map stores the point of interests, which can be accessed by their
	 * id.
	 */
	private static final Map<Integer, PointOfInterest> pois;

	/**
	 * This is an id-counter used for giving new POIs an id.
	 */
	private static final AtomicInteger id;

	/**
	 * The above defined variables are initialized here and some default POIs
	 * are added for demonstrating purpose.
	 */
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

	/**
	 * This method returns a list of POIs stored in this resource.
	 * 
	 * @param search
	 *            The POIs returned by this method can be filtered by name
	 *            through this query parameter.
	 * @return A filtered list of POIs are returned.
	 */
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

	/**
	 * This method is responsible for adding a new POI to the resource, that is
	 * send by the user in JSON format.
	 * 
	 * @param poi
	 *            The POI in JSON format that should be newly added to the
	 *            resource.
	 * @return If successful, status code 204 ("created") is returned containing
	 *         the added POI in JSON in response body.
	 */
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createPOI(PointOfInterest poi) {
		poi.setId(id.incrementAndGet());
		pois.put(poi.getId(), poi);
		return Response.created(URI.create("/pois/" + poi.getId())).entity(poi)
				.build();
	}

	/**
	 * The method returns the POI with the given id, if it exists. Otherwise
	 * status code 404 ("not found") is returned.
	 * 
	 * @param id
	 *            The id of the POI that should be returned.
	 * @return If available, the POI with the given id is returned.
	 */
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public PointOfInterest getPOI(@PathParam("id") int id) {
		if (!pois.containsKey(id)) {
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		}
		return pois.get(id);
	}

	/**
	 * This method is used to update an already existing POI using HTTP-PUT.
	 * 
	 * @param id
	 *            The id of the POI that should be updated.
	 * @param poi
	 *            The POI containing the updated information.
	 * @return The updated POI if successful, status code 40x otherwise.
	 */
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public PointOfInterest updatePOI(@PathParam("id") int id,
			PointOfInterest poi) {
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

	/**
	 * Deletes the POI with the given id from the list of POIs.
	 * 
	 * @param id
	 *            The id of the POI that should be deleted.
	 * @return Status code 204 ("no content" but successful) or status code 404
	 *         ("not found"), if no POI with this id exists.
	 */
	@DELETE
	@Path("{id}")
	public Response deletePOI(@PathParam("id") int id) {
		if (pois.remove(id) == null) {
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		}
		return Response.noContent().build();
	}

}
