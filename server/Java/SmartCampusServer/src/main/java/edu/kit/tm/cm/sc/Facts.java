package edu.kit.tm.cm.sc;

import java.util.Date;
import java.util.List;

public class Facts {

	private Date buildDate;
	private int seats;
	private List<String> special;

	public Facts(Date buildDate, int seats, List<String> special) {
		super();
		this.buildDate = buildDate;
		this.seats = seats;
		this.special = special;
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
}
