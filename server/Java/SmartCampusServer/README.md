# SmartCampusServer

A prototype demonstrating the use of [Jersey] (https://jersey.java.net/) and Jackson (https://github.com/FasterXML/jackson) for building a RESTful web service.

## Usage

This project uses [Maven] (http://maven.apache.org/) for dependency management. You can either [download] (http://maven.apache.org/download.cgi) a stand-alone version or use Eclipse with integrated Maven support.

Use
	mvn tomcat7:run
to start the server. It will listen on http://localhost:port/path where port is defined via "maven.tomcat.port" and path via maven.tomcat.path (both in pom.xml).  