import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-create-hotel-details',
  templateUrl: './create-hotel-details.component.html',
  styleUrls: ['./create-hotel-details.component.css']
})
export class CreateHotelDetailsComponent implements OnInit {
 

  hotel: Hotel = new Hotel();
  constructor(private hotelService: HotelService,
    private router: Router) { }

  ngOnInit(): void {
  }
/*to create hotel I used createHotelDetails() from hotel service and the data given to list page*/
  saveHotel(){
    this.hotelService.createHotelDetails(this.hotel).subscribe( data =>{
      console.log(data);
      if(data!=null){
        alert("Hotel details are inserted successfully 😃")
        this.goToHotelList();
      }
    },
    error => console.log(error));
  }

  goToHotelList(){
    this.router.navigate(['/hotel']);
  }
  /*After submitting it goes to saveHotel()*/ 
  onSubmit(){
    
    console.log(this.hotel);
    this.saveHotel();
  }

}
