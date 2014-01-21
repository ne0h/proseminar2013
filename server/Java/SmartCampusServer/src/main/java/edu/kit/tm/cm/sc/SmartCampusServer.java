package edu.kit.tm.cm.sc;

import java.io.IOException;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.Provider;

import org.glassfish.jersey.server.ResourceConfig;

import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider;

/**
 * This class represents the web application itself. Things you want to add to
 * your web service must be registered in this class.
 * 
 * An annotation is used to define on which path the application is accessible.
 * Path annotations in other classes (such as resources) define sub-paths of
 * this base path.
 * 
 * @author Simon Herter
 */
@ApplicationPath("/")
public class SmartCampusServer extends ResourceConfig {

	/**
	 * The constructor of this class constructs the application (since it
	 * inherits "javax.ws.rs.core.Application" indirectly through
	 * "org.glassfish.jersey.server.ResourceConfig").
	 * 
	 * Packages that should be scanned for components are added,
	 * {@link Provider}s, that are responsible for (un)marshalling Java beans
	 * and some filters are registered.
	 */
	public SmartCampusServer() {
		packages("edu.kit.tm.cm.sc");

		/*
		 * This is a self defined provider for (un)marshalling Java beans. You
		 * can leave this out to use the default Jackson JSON Provider.
		 */
		register(JsonProvider.class);

		/*
		 * This is the default Jackson JSON Provider. It shouldn't be necessary
		 * to add this. After having problems with adding a self-defined
		 * provider, I had a conversation with a Jersey developer and it turned
		 * out to be a bug in Jersey. So this is just registered as workaround
		 * to get my own provider work. Bug report can be found here:
		 * https://java.net/jira/browse/JERSEY-2335
		 */
		register(JacksonJsonProvider.class);

		/* enable Cross-Origin Resource Sharing */
		register(new ContainerResponseFilter() {

			@Override
			public void filter(ContainerRequestContext requestContext,
					ContainerResponseContext responseContext)
					throws IOException {
				responseContext.getHeaders().putSingle(
						"Access-Control-Allow-Origin", "*");
				responseContext.getHeaders().putSingle(
						"Access-Control-Allow-Credentials", "true");
				responseContext.getHeaders().putSingle(
						"Access-Control-Allow-Methods",
						"GET, POST, DELETE, PUT");
				responseContext.getHeaders().putSingle(
						"Access-Control-Allow-Headers", "Content-Type, Accept");
			}
		});

		register(new ContainerResponseFilter() {

			@Override
			public void filter(ContainerRequestContext requestContext,
					ContainerResponseContext responseContext)
					throws IOException {
				MediaType current = responseContext.getMediaType();
				if (current != null) {
					responseContext.getHeaders().putSingle("Content-Type",
							current.toString() + ";charset=UTF-8");
				}

			}
		});
	}
}
