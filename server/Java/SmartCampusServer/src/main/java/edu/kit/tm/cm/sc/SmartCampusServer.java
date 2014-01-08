package edu.kit.tm.cm.sc;

import java.io.IOException;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;

import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("/")
public class SmartCampusServer extends ResourceConfig {

	public SmartCampusServer() {
		packages("edu.kit.tm.cm.sc");
		
		/* enable Cross-Origin Resource Sharing */
		register(new ContainerResponseFilter() {

			@Override
			public void filter(ContainerRequestContext requestContext,
					ContainerResponseContext responseContext)
					throws IOException {
				responseContext.getHeaders().putSingle(
						"Access-Control-Allow-Origin", "*");
				responseContext.getHeaders()
						.putSingle("Access-Control-Allow-Credentials", "true");
				responseContext.getHeaders().putSingle("Access-Control-Allow-Methods",
						"GET, POST, DELETE, PUT");
				responseContext.getHeaders().putSingle("Access-Control-Allow-Headers",
						"Content-Type, Accept");
			}
		});
	}

}
