package com.assignment.services;

import java.util.List;

import com.assignment.pojo.User;
import com.assignment.pojo.UserHealthData;

public interface UserService {
	
	public String registerUser(User user);

	//public User authenticateUser(String email, String password);
	public List<User> getAllUsers();
	public String addData(UserHealthData data,Long id);
	public List<UserHealthData> myheathHistory(Long id);
	public User login(String email);

}
