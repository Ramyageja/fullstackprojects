package com.example.fspSwiggy.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.fspSwiggy.exception.ResourceNotFoundException;
import com.example.fspSwiggy.model.SwiggyDetails;
import com.example.fspSwiggy.repository.RestaurantRepository;

/* @RestController-->combines @Controller and @ResponseBody
 * This annotation is used to mark a class as request handler for RESTful web services.
 * @RequestMapping annotation for request handling methods.*/

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/Swiggy")
public class RestaurantController {
	
	@Autowired
	private RestaurantRepository restaurantRepo;
	
	/*To create Hotel details we use @postMapping and save() methods
	 *  HttpRequest body to a transfer or domain object, 
	 *  enabling automatic deserialization of the inbound HttpRequest body onto a Java object. */
	
	@PostMapping("/HotelDetails")
	public SwiggyDetails createHotelDetails(@RequestBody SwiggyDetails hotel) {
		return restaurantRepo.save(hotel);
	}
	
	/*To get all Hotel details we use @getMapping and findAll() methods*/
	
/*	@GetMapping("/HotelDetails")
	public List<SwiggyDetails> getAllHotels(){
		return restaurantRepo.findAll();
	}*/
	
	/*To search the Hotel details by using Hotel id if the id is present it give details otherwise 
	 * it will throws exception
	 * @ResponseEntity represents the whole HTTP response: status code, headers, and body. */
	
	@GetMapping("/HotelDetails/{hotelId}")
	public ResponseEntity<SwiggyDetails> getHotelById(@PathVariable("hotelId") int id) {
		SwiggyDetails hotel= restaurantRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));
		return ResponseEntity.ok(hotel);
	}
	
	/*@putMapping->To update the Hotel details by using Hotel id if the id is present we will update particular details otherwise 
	 * it will throws exception
	 * @DynamicUpdate check only update attributes
	 * @ResponseEntity represents the whole HTTP response: status code, headers, and body. */
	
	@PutMapping("/HotelDetails/{hotelId}")
	public ResponseEntity<SwiggyDetails> updateHotel(@PathVariable("hotelId") int id, @RequestBody SwiggyDetails hotel){
		SwiggyDetails hotelUpd = restaurantRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));
		
		hotelUpd.setFoodType(hotel.getFoodType());
		hotelUpd.setLocation(hotel.getLocation());
		hotelUpd.setRating(hotel.getRating());
		hotelUpd.setRestaurantName(hotel.getRestaurantName());
		
		SwiggyDetails updatedHotels = restaurantRepo.save(hotelUpd);
		return ResponseEntity.ok(updatedHotels);
	}
	
	/*@DeleteMapping-->to delete particular hotel details using id if deleted it give ("Deleted",true)
	 * otherwise it throws exception*/
	
	@DeleteMapping("/HotelDetails/{hotelId}")
	public ResponseEntity<Map<String, Boolean>> deleteHotel(@PathVariable("hotelId") int id){
		SwiggyDetails delHotel=restaurantRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));
		
		restaurantRepo.delete(delHotel);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping("/HotelDetails")
	public ResponseEntity<HttpStatus> deleteAllHotel(){
		try {
			restaurantRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			
			
		}
		catch(Exception exp){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/HotelDetails")
	public ResponseEntity<List<SwiggyDetails>> getAllHotel(@RequestParam (required = false) String restaurantName){
		try {
			List<SwiggyDetails> hotelList=new ArrayList<SwiggyDetails>();
			if(restaurantName!=null) {
				restaurantRepo.findByRestaurantNameContaining(restaurantName).forEach(hotelList::add);
				return new ResponseEntity<>(hotelList,HttpStatus.OK);
			}
			else {
				hotelList = restaurantRepo.findAll();
				return new ResponseEntity<>(hotelList, HttpStatus.OK);
			}
		}
			catch(Exception exp) {
				return new ResponseEntity(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
	
		
	}
	@GetMapping("/HotelDetails/veg")
	public ResponseEntity<List<SwiggyDetails>> findByVegHotel(){
		try {
			List<SwiggyDetails> vegHotelList=restaurantRepo.findByfoodType("veg");
			if(vegHotelList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);

			}
			return new ResponseEntity<>(vegHotelList,HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}
@GetMapping("/HotelDetails/nonveg")
public ResponseEntity<List<SwiggyDetails>> findByNonVegHotel(){
	try {
		List<SwiggyDetails> nonVegHotelList=restaurantRepo.findByfoodType("nonveg");
		if(nonVegHotelList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);

		}
		return new ResponseEntity<>(nonVegHotelList,HttpStatus.OK);
	}
	catch(Exception e) {
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

	}
}


}
