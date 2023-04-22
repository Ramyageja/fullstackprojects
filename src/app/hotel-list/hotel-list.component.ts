import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotel: Hotel[] = [];
  restaurantName: any;
  

  constructor(private hotelService: HotelService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHotels();
  }

  private getHotels(){
    this.hotelService.getHotelList().subscribe(data => {
      this.hotel = data;

    });
  }
/*view the particular hotel details using hotelId */
  hotelDetails(hotelId: number){
    this.router.navigate(['hotel-details', hotelId]);
  }
/*update the particular hotel details using hotelId */
  updateHotel(hotelId: number){
    this.router.navigate(['update-hotel-details', hotelId]);
  }
  removeAllHotel(): void{
     this.hotelService.deleteAll().subscribe(data=>{
      console.log(data);
      this.getHotels();
     },
      error=>{
      console.log(error);
     });
  }
  /*delete the particular hotel details using hotelId */
  deleteHotel(hotelId: number){
    this.hotelService.deleteHotel(hotelId).subscribe (data => {
      console.log(data);
      this.getHotels();
    })

}
/*filter veg hotel list using findByVegRestaurant() in hotelService */
fetchVegHotel(){
  this.hotelService.findByVegRestaurant().subscribe(
    data => {
      this.hotel = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}
/*filter nonveg hotel list using findByNonVegRestaurant() in hotelService */
fetchNonVegHotel(){
  this.hotelService.findByNonVegRestaurant().subscribe(
    data => {
      this.hotel = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}
/*confirmation status to remove all the records */
confirmRemoveAll(){
  var status=confirm("If you  want to delete all records?");
  if(status==true){
    this.removeAllHotel();
  }
  else{
    this.getHotels();
  }
}
/*confirmation status for delete the hotel details */
confirmDelete(hotel: Hotel){
  var status= confirm("Are you sure did you want to delete this record?");
   if (status==true) {
     this.deleteHotel(hotel.hotelId);
        }
   else{
    this.getHotels();
   }
  }
  confirmUpdate(hotel: Hotel){
    var status=confirm("Are you want to update the details?");
    if(status==true){
      this.updateHotel(hotel.hotelId);
    }
  } 
  /*search by using restaurant name using findByHotelName() in hotelService */
  searchByName(){
    this.hotelService.findByHotelName(this.restaurantName).subscribe(data=>
      {this.hotel=data;
      console.log(data);
    },error=>{
      console.log(error);
    });
  } 

}
