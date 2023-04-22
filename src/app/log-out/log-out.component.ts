import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this.authentocationService.logout();
    this.router.navigate(['logout']);
}
successMessage(){
  alert("Logout successfully");
  this.router.navigate(['/login']);
}
rateUs(){
  this.router.navigate(['feedback']);
}
}
