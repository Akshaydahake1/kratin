package com.assignment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assignment.pojo.User;
import com.assignment.pojo.UserHealthData;

public interface UserHealthRepository extends JpaRepository<UserHealthData, Long> {
	List<UserHealthData> findByUser(User user);

}
