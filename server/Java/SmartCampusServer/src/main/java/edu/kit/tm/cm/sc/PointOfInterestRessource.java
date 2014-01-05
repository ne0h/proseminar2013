package edu.kit.tm.cm.sc;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintStream;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.util.Arrays;
import java.util.Date;
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
import javax.ws.rs.core.Response;
import javax.ws.rs.core.StreamingOutput;

@Path("/pois")
public class PointOfInterestRessource {
	
	private Map<Integer, PointOfInterest> pois = new ConcurrentHashMap<Integer, PointOfInterest>();
	private AtomicInteger id = new AtomicInteger();
	
	public PointOfInterestRessource() throws MalformedURLException {
		PointOfInterest poi = new PointOfInterest();
		poi.setId(1534);
		poi.setName("Audimax");
		poi.setBuilding("30.95");
		poi.setStreet("Straße am Forum 1");
		poi.setZipCode(76131);
		poi.setCity("Karlsruhe");
		poi.setCountry("Deutschland");
		poi.setLatitude(49.0134868);
		poi.setLongitude(8.4162783);
		poi.setTags(new LinkedList<String>(Arrays.asList("Hörsaal", "Veranstaltungen")));
		poi.setDescription("Der größte Hörsaal des KIT […]");
		poi.setAudio(new URL("http://www.prototyp.kit.edu/audio/1534.wav"));
		poi.setBuildDate(new Date(2002, 2, 17));
		poi.setSeats(734);
		poi.setSpecial(new LinkedList<String>(Arrays.asList("Getränke- und Snackautomat")));
		poi.setWebsite(new URL("http://www.google.com"));
		pois.put(poi.getId(), poi);
	}
	
	@POST
	@Consumes("application/json")
	public Response createPOI(InputStream is) {
		PointOfInterest poi = readPOI(is);
		poi.setId(id.incrementAndGet());
		pois.put(poi.getId(), poi);
		return Response.created(URI.create("/pois/" + poi.getId())).build();
	}
	

	@GET
	@Path("{id}")
	@Produces("application/json")
	public StreamingOutput getPOI(@PathParam("id") int id) {
		final PointOfInterest poi = pois.get(id);
		if (poi == null) {
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		}
		return new StreamingOutput() {
			
			@Override
			public void write(OutputStream outputstream) throws IOException,
					WebApplicationException {
				outputPOI(outputstream, poi);
			}
		};
	}
	

	@PUT
	@Path("{id}")
	@Consumes("application/json")
	public void updatePOI(@PathParam("id") int id, InputStream is) {
		PointOfInterest update = readPOI(is);
		PointOfInterest current = pois.get(id);
		if (current == null) {
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		}
		update.setId(id);
		pois.put(id, update);
	}
	
	
	private PointOfInterest readPOI(InputStream is) {
		// TODO Parse InputStream
		return null;
	}

	protected void outputPOI(OutputStream outputstream, PointOfInterest poi) {
		PrintStream writer = new PrintStream(outputstream);
		writer.println("{");
		writer.println("\"id\": " + poi.getId() + ",");
		writer.println("\"name\": " + "\"" + poi.getName() + "\"" + ",");
		writer.println("\"building\": " + "\"" + poi.getBuilding() + "\"" + ",");
		writer.println("\"address\": {");
			writer.println("\"street\": " + "\"" + poi.getStreet() + "\"" + ",");
			writer.println("\"zipCode\": " + "\"" + poi.getZipCode() + "\"" + ",");
			writer.println("\"city\": " + "\""+ poi.getCity() + "\"" + ",");
			writer.println("\"country\": " + "\"" + poi.getCountry() + "\"");
		writer.println("},");
		writer.println("\"geolocation\": {");
			writer.println("\"latitude\": " + poi.getLatitude() + ",");
			writer.println("\"longitude\": " + poi.getLongitude() + ",");
		writer.println("},");
		writer.print("\"tags\": [");
		int size = poi.getTags().size();
			for (int i = 0; i < size; i++) {
				writer.print("\"" + poi.getTags().get(i) + "\"");
				if (i < size - 1) {
					writer.print(", ");
				}
			}
		writer.println("],");
		writer.println("\"description\": " + "\"" + poi.getDescription() + "\"" + ",");
		writer.println("\"audio\": " + "\"" + poi.getAudio().toString() + "\"" + ",");
		writer.println("\"facts\": {");
			writer.println("\"buildDate\": " + "\"" + poi.getBuildDate().toString() + "\"" + ",");
			writer.println("\"seats\": " + poi.getSeats() + ",");
			writer.print("\"tags\": [");
			size = poi.getSpecial().size();
				for (int i = 0; i < size; i++) {
					writer.print("\"" + poi.getSpecial().get(i) + "\"");
					if (i < size - 1) {
						writer.print(", ");
					}
				}
			writer.println("]");
		writer.println("},");
		writer.println("\"website\": " + "\"" + poi.getWebsite().toString() + "\"");
		writer.println("}");
		
	}
}
