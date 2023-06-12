package com.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assignment.pojo.User;

public interface UserRepository extends JpaRepository<User, Long> {
	

	public User findByEmail(String email);

}
