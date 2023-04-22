import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username = '';
  password = '';
  invalidLogin = false
  message: string | undefined;

  constructor(private router: Router,
    private loginService: AuthenticationService){}
 
  ngOnInit() {
    
  }

  checkLogin(){
    if(this.loginService.authenticate(this.username,this.password)){
      alert("Login success👍")
      this.router.navigate(['about']);
      console.log("navigate..");
      this.invalidLogin = false;

    }
    else
    alert("Invalid username or passwords");
    this.message='Enter correct username and password';
    this.invalidLogin = true;
  }
 

}
