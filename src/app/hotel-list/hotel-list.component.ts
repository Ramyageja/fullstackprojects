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

  hotelDetails(hotelId: number){
    this.router.navigate(['hotel-details', hotelId]);
  }

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
  
  deleteHotel(hotelId: number){
    this.hotelService.deleteHotel(hotelId).subscribe (data => {
      console.log(data);
      this.getHotels();
    })

}
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
confirmRemoveAll(){
  var status=confirm("If you  want to delete all records?");
  if(status==true){
    this.removeAllHotel();
  }
  else{
    this.getHotels();
  }
}
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
  searchByName(){
    this.hotelService.findByHotelName(this.restaurantName).subscribe(data=>
      {this.hotel=data;
      console.log(data);
    },error=>{
      console.log(error);
    });
  } 

}
