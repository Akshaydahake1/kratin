package com.assignment.pojo;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name = "UserHealthData")
@JsonIgnoreProperties(("user"))
public class UserHealthData extends BaseEntity{
	
	private String age;
	private String weight;
	//private bo spects;
	private String spects;
	private String bloodgroup;
	private String bp;
	private String steps;
	
	@OneToOne
	@JoinColumn(name="user_id")
	private User user;

	public UserHealthData() {
		
	}

	public UserHealthData(String age, String weight, String spects, String bloodgroup, String bp, String steps
			) {
		
		this.age = age;
		this.weight = weight;
		this.spects = spects;
		this.bloodgroup = bloodgroup;
		this.bp = bp;
		this.steps = steps;
		
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getspects() {
		return spects;
	}

	public void setHeight(String spects) {
		this.spects = spects;
	}

	public String getBloodgroup() {
		return bloodgroup;
	}

	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}

	public String getBp() {
		return bp;
	}

	public void setBp(String bp) {
		this.bp = bp;
	}

	public String getSteps() {
		return steps;
	}

	public void setSteps(String steps) {
		this.steps = steps;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "UserHealthData [age=" + age + ", weight=" + weight + ", height=" + spects + ", bloodgroup=" + bloodgroup
				+ ", bp=" + bp + ", steps=" + steps + "]";
	}

	
	
	
	
	
	
	
}
