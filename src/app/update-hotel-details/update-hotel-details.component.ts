import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-update-hotel-details',
  templateUrl: './update-hotel-details.component.html',
  styleUrls: ['./update-hotel-details.component.css']
})
export class UpdateHotelDetailsComponent  implements OnInit {

  hotelId: number = 0;
  hotel: Hotel = new Hotel();
  constructor(private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.hotelId = this.route.snapshot.params['hotelId'];

    this.hotelService.getHotelById(this.hotelId).subscribe(data => {
      this.hotel = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.hotelService.updateHotel(this.hotelId, this.hotel).subscribe( data =>{
      this.goToHotelList();
    }
    , error => console.log(error));
  }

  goToHotelList(){
    alert("updated Succesfully 😃");
    this.router.navigate(['/hotel']);
  }
}

