import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userInterface } from '../type/userinterface';
import { UserservicesService } from '../userservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public status:boolean = false;
  constructor(private _userService:UserservicesService, private _router:Router) { }
  public currentUser:userInterface = {
    firstName:"",
    lastName:"",
    email:"",
    dateOfBirth:"",
    phoneNo:"",
    homeAddress:"",
    gender:"",
    password:"",
    acctNum:"",
    image:"",
    username:"",
    balance:0,
    walletName: "",
    walletBalance: 0,
    walletId: ""
  };
  public bussName: string = "Wiliam Smith"
  ngOnInit(): void {
    this.currentUser = this._userService.getCurrentUser()
  }
  clickEvent(){
    this.status = !this.status;       
}
transfer(){
  this._router.navigate(["/transfer"]);
}
logOut(){
  this._router.navigate(["/signin"]);
  localStorage.removeItem('currentUsers');
}
}
