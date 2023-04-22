package com.example.fspSwiggy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.fspSwiggy.model.SwiggyDetails;

@Repository
public interface RestaurantRepository extends JpaRepository<SwiggyDetails,Integer> {

}
