package edu.kit.tm.cm.sc;

import java.util.List;

/**
 * A Java bean containing additional information for {@link PointOfInterest}.
 * 
 * @author Simon Herter
 *
 */
public class Facts {

	private String buildDate;
	private int seats;
	private List<String> special;

	public Facts() {

	}

	public Facts(String buildDate, int seats, List<String> special) {
		super();
		this.buildDate = buildDate;
		this.seats = seats;
		this.special = special;
	}

	public String getBuildDate() {
		return buildDate;
	}

	public void setBuildDate(String buildDate) {
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
}
