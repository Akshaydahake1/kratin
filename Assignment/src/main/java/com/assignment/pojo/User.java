package com.assignment.pojo;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
//import javax.validation.constraints.NotBlank;
@Entity
@Table(name = "User")
public class User extends BaseEntity  {
	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_name")
	private String lastName;
	@Column(unique = true)
	private String email;
//	@NotBlank(message = "Password Required")
	private String password;
	@Column(name = "gender")
	private String gender;
	@Column(name="dob")
	private String dob;
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<UserHealthData> userData;
	
	public User() {
		
	}
	public User(String firstName, String lastName, String email, String password, String gender, String dob) {
		
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.dob = dob;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public List<UserHealthData> getUserData() {
		return userData;
	}
	public void setUserData(List<UserHealthData> userData) {
		this.userData = userData;
	}
	@Override
	public String toString() {
		return "User [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", password="
				+ password + ", gender=" + gender + ", dob=" + dob + "]";
	}
	
	
	
	
	
}
