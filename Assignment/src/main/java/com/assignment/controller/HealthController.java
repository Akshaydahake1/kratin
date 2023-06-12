package com.assignment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.pojo.User;
import com.assignment.services.UserService;
@CrossOrigin("*")
@RestController()
@RequestMapping("/")
public class HealthController {
	
	@Autowired
	UserService userservice;

	@PostMapping("/register")
	public String createUser(@RequestBody User user) {
		return userservice.registerUser(user);
	}
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) {
		User givenUser= userservice.login(user.getEmail());
		if(givenUser!=null && user.getPassword().equals(givenUser.getPassword()))
			return givenUser;
		else return null;
	}
}


