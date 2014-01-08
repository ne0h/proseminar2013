package edu.kit.tm.cm.sc;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("/")
public class SmartCampusServer extends ResourceConfig {

	public SmartCampusServer() {
		packages("edu.kit.tm.cm.sc");
		register(CrossOriginResourceSharingFilter.class);
	}

}
