import { Injectable } from '@angular/core';
import { Hotel } from './hotel';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  
/*These methods are convertingfront end to backend  by base url using crossorin it goes to backend there is respective mapping */ 
  
  private baseURL = "http://localhost:8080/Swiggy/HotelDetails";

  constructor(private httpClient: HttpClient) { }
  
  getHotelList(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}`);
  }
  deleteAll(): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);
  }

  createHotelDetails(hotel: Hotel): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, hotel);
  }

  getHotelById(hotelId: number): Observable<Hotel>{
    return this.httpClient.get<Hotel>(`${this.baseURL}/${hotelId}`);
  }

  updateHotel(hotelId: number, hotel: Hotel): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${hotelId}`, hotel);
  }

  //localhost:4200/delete/5
  deleteHotel(hotelId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${hotelId}`);
  }

  findByHotelName(restaurantName:any): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}?restaurantName=${restaurantName}`);
  }
  findByVegRestaurant(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/veg`);
  }
  findByNonVegRestaurant(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/nonveg`);
  }
}
