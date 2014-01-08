package edu.kit.tm.cm.sc;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;

import org.glassfish.jersey.server.ContainerRequest;
import org.glassfish.jersey.server.ContainerResponse;

public class CrossOriginResourceSharingFilter implements
		ContainerResponseFilter {

	public ContainerResponse filter(ContainerRequest creq,
			ContainerResponse cresp) {
		cresp.getHeaders().putSingle("Access-Control-Allow-Origin", "*");
		cresp.getHeaders()
				.putSingle("Access-Control-Allow-Credentials", "true");
		cresp.getHeaders().putSingle("Access-Control-Allow-Methods",
				"GET, POST, DELETE, PUT");
		cresp.getHeaders().putSingle("Access-Control-Allow-Headers",
				"Content-Type, Accept");

		return cresp;
	}

	@Override
	public void filter(ContainerRequestContext arg0,
			ContainerResponseContext cresp) throws IOException {
		cresp.getHeaders().putSingle("Access-Control-Allow-Origin", "*");
		cresp.getHeaders()
				.putSingle("Access-Control-Allow-Credentials", "true");
		cresp.getHeaders().putSingle("Access-Control-Allow-Methods",
				"GET, POST, DELETE, PUT");
		cresp.getHeaders().putSingle("Access-Control-Allow-Headers",
				"Content-Type, Accept");

	}
}