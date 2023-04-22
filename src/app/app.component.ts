import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Swiggy';

   constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit() {
    
  }
  confirmLogout(){
    var status=confirm("Are you sure want to log out?");
    if(status==true){
      this.router.navigate(['logout']);
    }
  }
}