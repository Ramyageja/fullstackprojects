import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit{
  hotelId: number = 0;
  hotel: any = [];
  constructor(private route: ActivatedRoute, private hotelService: HotelService, private router:Router) { }
/*it get particular id and view the hotel details using getHotelBuId(id) in hotel service page */
  ngOnInit(): void {
    this.hotelId = this.route.snapshot.params['hotelId'];

    this.hotel = new Hotel();
    this.hotelService.getHotelById(this.hotelId).subscribe( data => {
      this.hotel = data;
    });
  }
  back(){
    this.router.navigate(['hotel']);
  }

}
