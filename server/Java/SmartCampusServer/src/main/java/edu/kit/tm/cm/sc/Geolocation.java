package edu.kit.tm.cm.sc;

/**
 * A Java bean that represents a location with geo-coordinates.
 * 
 * @author Simon Herter
 *
 */
public class Geolocation {

	private double latitude;
	private double longitude;

	public Geolocation() {

	}

	public Geolocation(double latitude, double longitude) {
		super();
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
}
