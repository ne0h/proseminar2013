package edu.kit.tm.cm.sc;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

/**
 * This is a JSON Provider used to demonstrate, how own providers can be
 * defined. It must be registered in the application ({@link SmartCampusServer}
 * ). The only difference to the default Jackson Json Provider is, that the JSON
 * output is indented for better reading. For better performance this should be
 * turned off.
 * 
 * @author Simon Herter
 * 
 */
@Provider
@Produces(MediaType.APPLICATION_JSON)
public class JsonProvider implements ContextResolver<ObjectMapper> {

	private ObjectMapper om;

	public JsonProvider() {
		om = new ObjectMapper();
		om.enable(SerializationFeature.INDENT_OUTPUT);
	}

	@Override
	public ObjectMapper getContext(Class<?> type) {
		return om;
	}
}
