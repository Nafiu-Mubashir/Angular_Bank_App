import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userInterface } from '../type/userinterface';
import { UserservicesService } from '../userservices.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private _userService: UserservicesService, private _router: Router) { }
  public status: boolean = false;
  public all: userInterface[] = [];
  public currentUser: userInterface = {
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
  public acctNumber:string = "";
  public amount:string = "";
  public bankName:string = "Easy Banking"
  // let {userName, password, all, errorMessage} = this;
  // let logUserName = all.find((user: userInterface) => user.username == userName);

  ngOnInit(): void {
    this.all = this._userService.getAllUsers();
    this.currentUser = this._userService.getCurrentUser()
  }
  clickEvent() {
    this.status = !this.status;
  }
  withdraw() {
    let allCustomers = JSON.parse(localStorage.getItem("allUsers")!);
    // console.log(this.currentUser)
    for (let i = 0; i < allCustomers.length; i++) {
      if (allCustomers[i].acctNum == this.currentUser.acctNum) {
        allCustomers[i].balance = +allCustomers[i].balance - +this.amount;
        console.log(allCustomers[i])
      }
    }
    this._userService.setAllUsers(allCustomers);
    alert("Withdraw successful");
  }
}
