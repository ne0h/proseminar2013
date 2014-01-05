package edu.kit.tm.cm.sc;

import java.net.URL;
import java.util.Date;
import java.util.List;

public class PointOfInterest {

	private int id;
	private String name;
	private String building;

	private String street;
	private int zipCode;
	private String city;
	private String country;

	private double latitude;
	private double longitude;

	private List<String> tags;
	private String description;
	private URL audio;
	
	private Date buildDate;
	private int seats;
	
	private List<String> special;
	private URL website;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBuilding() {
		return building;
	}
	public void setBuilding(String building) {
		this.building = building;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public int getZipCode() {
		return zipCode;
	}
	public void setZipCode(int zipCode) {
		this.zipCode = zipCode;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
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
	public List<String> getTags() {
		return tags;
	}
	public void setTags(List<String> tags) {
		this.tags = tags;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public URL getAudio() {
		return audio;
	}
	public void setAudio(URL audio) {
		this.audio = audio;
	}
	public Date getBuildDate() {
		return buildDate;
	}
	public void setBuildDate(Date buildDate) {
		this.buildDate = buildDate;
	}
	public int getSeats() {
		return seats;
	}
	public void setSeats(int seats) {
		this.seats = seats;
	}
	public List<String> getSpecial() {
		return special;
	}
	public void setSpecial(List<String> special) {
		this.special = special;
	}
	public URL getWebsite() {
		return website;
	}
	public void setWebsite(URL website) {
		this.website = website;
	}
}
