package com.example.fspSwiggy.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.fspSwiggy.model.SwiggyDetails;

/*@Repository-->used to indicate that the class provides the mechanism for storage, retrieval, search, 
 *update and delete operation on objects
 *JpaRepository is particularly a JPA specific extension for Repository
 *Jpa Repository contains the APIs for basic CRUD operations*/

@Repository
public interface RestaurantRepository extends JpaRepository<SwiggyDetails,Integer> {
	List<SwiggyDetails> findByRestaurantName(String restaurantName);
	List<SwiggyDetails> findByfoodType(String foodType);

}
