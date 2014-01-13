package edu.kit.tm.cm.sc;


import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

@Provider
@Produces(MediaType.APPLICATION_JSON)
public class JsonProvider implements ContextResolver<ObjectMapper>{

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
