import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../data/userDetail';

@Component({
  selector: 'app-userdetails-form',
  templateUrl: './userdetails-form.component.html',
  styleUrls: ['./userdetails-form.component.css']
})
export class UserdetailsFormComponent implements OnInit {

  originalUserSetting:UserDetails={
    name:'Aadil',
    gender:'Male',
    phoneno:'98765432',
    email:'myname@test.com',
    addrss:'abc def ghi',
    zipcode:'123456'
  }
  userDetails:UserDetails={...this.originalUserSetting};
  constructor() { }

  ngOnInit() {
  }

}
