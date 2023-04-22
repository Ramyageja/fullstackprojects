import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  user='';
  email='';
  password='';

  constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit(): void {
    
  }

 
 
  requiredValue(){
    if(this.user === '' || this.email === '' ||  this.password === ''){
      var status = confirm("please fill mandatory fields");
  }
  else{
    var status=confirm("Registered success");
   if(status==true){
    this.router.navigate(['login']);
   }
    
  }
  }
}
