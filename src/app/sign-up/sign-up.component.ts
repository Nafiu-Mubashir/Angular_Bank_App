import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userInterface } from '../type/userinterface';
import { UserservicesService } from '../userservices.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public acctNo: number = Math.floor(Math.random() * 100000000)
  public walletIdNum: number = Math.floor(Math.random() * 100000000)
  public user: userInterface = {
    firstName: "",
    lastName: "",
    email: "",
    homeAddress: "",
    phoneNo: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    acctNum: "026" + this.acctNo,
    image: "",
    username: "",
    balance: 50000,
    walletName: "",
    walletBalance: 0,
    walletId: this.walletIdNum
  }
  public users: userInterface[] = [];
  public confirmPass: string = "";
  public errorMessage: string = "";
  // public errorMessage1: string = "";
  constructor(private _userServices: UserservicesService, private _router: Router) { }

  ngOnInit(): void {
    // if(localStorage['allUsers']){
    //   this.users = JSON.parse(localStorage['allUsers'])
    // }
    // else{
    //   this.users = []
    // }
    this.users = localStorage['allUsers'] ? JSON.parse(localStorage['allUsers']) : []
  }

  addUsers() {
    let { firstName, lastName, email, homeAddress, phoneNo, dateOfBirth, gender, password, acctNum, image, username } = this.user
    if (firstName == "" || lastName == "" || email == "" || homeAddress == "" || phoneNo == "" || dateOfBirth == "" || gender == "" || password == "" || acctNum == "" || image == "" || username == "") {
      this.errorMessage = "Please fill up the neccessary fields";
      return;
    }
    else {
      this.errorMessage = "";
    }
    if (password != this.confirmPass) {
      this.errorMessage = "Password doesn't match";
      return;
    }
    else {
      this.errorMessage = "";
    }
    // this.users.push(this.user);
    // let allCustomers = JSON.parse(localStorage.getItem("allUsers")!);
    if (this.users) {
      let findEmail = this.users.find((user: userInterface) => user.email == email);
      let finduserName = this.users.find((user: userInterface) => user.username == username);
      if (findEmail) {
        this.errorMessage = "This email already exist"
        return;
      }
      else {
        this.errorMessage = "";
      }
      if (finduserName) {
        this.errorMessage = "This username already exist";
        return;
      }
      else {
        this.errorMessage = "";
      }
      this.users = [...this.users, this.user];
      this._userServices.setAllUsers(this.users);
      // localStorage.setItem("allUsers", JSON.stringify(this.users));
    }
    else {
      this._userServices.setAllUsers([this.user]);

      // localStorage.setItem("allUsers", JSON.stringify(this.users));
    }

    // localStorage['allUsers'] = JSON.stringify(this.users)
    this.user = {
      walletName: "",
      walletBalance: 0,
      walletId: "",
      balance: 50000,
      firstName: "",
      lastName: "",
      email: "",
      homeAddress: "",
      phoneNo: "",
      dateOfBirth: "",
      gender: "",
      password: "",
      acctNum: "",
      image: "",
      username: ""
    }
    this.confirmPass = "";
    alert("Registration successfull welcome to Easy Bank " + firstName + " " + lastName);
    this._router.navigate(["/signin"]);
  }
}
