import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  message='';
  email='';
  Name='';
  ngOnInit(){}
  constructor(
    private router: Router) { }
  contact(){
    if(this.Name === '' || this.email === '' ||  this.message ===''){
      var status = confirm("It is mandatory to fill all the fields");
    }
    else{
  var status=confirm("Thanks for contact us we will reach soon..");
  if(status==true){
    this.router.navigate(['hotel'])
  }
  
}

}
}
