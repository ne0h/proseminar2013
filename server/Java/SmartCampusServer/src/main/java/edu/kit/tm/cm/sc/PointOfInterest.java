package edu.kit.tm.cm.sc;

import java.net.URL;
import java.util.List;

public class PointOfInterest {

	private int id;
	private String name;
	private String building;

	private Address address;

	private Geolocation geolocation;

	private List<String> tags;
	private String description;
	private URL audio;

	private Facts facts;

	private URL website;

	public PointOfInterest() {

	}

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

	public URL getWebsite() {
		return website;
	}

	public void setWebsite(URL website) {
		this.website = website;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Geolocation getGeolocation() {
		return geolocation;
	}

	public void setGeolocation(Geolocation geolocation) {
		this.geolocation = geolocation;
	}

	public Facts getFacts() {
		return facts;
	}

	public void setFacts(Facts facts) {
		this.facts = facts;
	}
}
