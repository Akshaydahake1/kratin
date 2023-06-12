package com.assignment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.pojo.User;
import com.assignment.pojo.UserHealthData;
import com.assignment.services.UserService;
@CrossOrigin("*")
@RestController
@RequestMapping("/")
public class UserController {
	
	@Autowired
	UserService userservice;

	

	@GetMapping("/getallusers")
	public List<User>getAllUsers(){
		List<User>listOfusers= userservice.getAllUsers();
		return listOfusers;
	}

	@PostMapping("/adddetails/{id}")
	public String addHealthData(@RequestBody UserHealthData data,@PathVariable Long id) {
		return userservice.addData(data,id);
	}
	
	@GetMapping("/gethistory/{id}")
	public List<UserHealthData> getHistory(@PathVariable Long id){
		return userservice.myheathHistory(id);
	}
}


