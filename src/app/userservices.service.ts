import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userInterface } from './type/userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  public isHome:boolean = false;
  public users = JSON.parse(localStorage.getItem("allUsers")!);
  public logUsers = JSON.parse(localStorage.getItem("currentUsers")!)
  public allUsers: userInterface[] = this.users ? this.users : [];
  public currentUser: userInterface = this.users ? this.logUsers : {};
  constructor(private _router: Router) { }
  getAllUsers() {
    return this.allUsers
  }
  getCurrentUser() {
    return this.currentUser
  }
  setAllUsers(users: userInterface[]) {
    this.allUsers = users;
    let user = this.allUsers.find(user => user.acctNum == this.currentUser.acctNum);
    this.currentUser = user ? user : {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      phoneNo: "",
      homeAddress: "",
      gender: "",
      password: "",
      acctNum: "",
      image: "",
      username: "",
      balance: 0,
      walletName: "",
      walletBalance: 0,
      walletId: ""
    };
    localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
    localStorage.setItem("currentUsers", JSON.stringify(this.currentUser));
    this._router.navigate(["/dashboard"]);
  }
  setCurrentUsers(currentUser: userInterface){
    this.currentUser = currentUser;
    localStorage.setItem("currentUsers", JSON.stringify(this.currentUser));
  }
  
}
