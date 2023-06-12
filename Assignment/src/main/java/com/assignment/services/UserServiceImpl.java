package com.assignment.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.pojo.User;
import com.assignment.pojo.UserHealthData;
import com.assignment.repository.UserHealthRepository;
import com.assignment.repository.UserRepository;
@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	UserHealthRepository userHealthRepository;

	@Override
	public String registerUser(User user) {
		// TODO Auto-generated method stub
		userRepository.save(user);

		return "User saved";
	}

	@Override
	public List<User> getAllUsers() {
		List<User> ulist=userRepository.findAll();
		return ulist;
	}

	@Override
	public String addData(UserHealthData data, Long id) {
		// TODO Auto-generated method stub
		User user=userRepository.findById(id).orElseThrow(()->new RuntimeException("user not found"));
		data.setUser(user);
		userHealthRepository.save(data);
		return "Health details added successfully";
		
	}

	@Override
	public List<UserHealthData> myheathHistory(Long id) {
		// TODO Auto-generated method stub
		User user =userRepository.findById(id).orElseThrow(()->new RuntimeException("user not found"));
		List<UserHealthData>heathHistory=userHealthRepository.findByUser(user);
		return heathHistory;
	}

	@Override
	public User login(String email) {
		// TODO Auto-generated method stub
		return userRepository.findByEmail(email);
	}
	

}
