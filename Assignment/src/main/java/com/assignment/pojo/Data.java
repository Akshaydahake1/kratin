package com.assignment.pojo;

public class Data extends BaseEntity{
	
	private String name;
	private String address;
	
	
	public Data() {
		super();
	}


	public Data(String name, String address) {
		super();
		this.name = name;
		this.address = address;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	@Override
	public String toString() {
		return "Data [name=" + name + ", address=" + address + "]";
	}
	
	
	

}
