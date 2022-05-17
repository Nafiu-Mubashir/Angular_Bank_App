import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userInterface } from '../type/userinterface';
import { UserservicesService } from '../userservices.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  public status: boolean = false;
  constructor(private _userService: UserservicesService, private _router: Router) { }
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
  public amount: string = "";
  public acctNumber: string = "";
  ngOnInit(): void {
    this.currentUser = this._userService.getCurrentUser()

  }

  clickEvent() {
    this.status = !this.status;
  }
  transfer() {
    let allCustomers = JSON.parse(localStorage.getItem("allUsers")!);
    if (+this.currentUser.balance < +this.amount) {
      alert("Insufficient Balance");
      return;
    }
    for (let i = 0; i < allCustomers.length; i++) {
      if (allCustomers[i].acctNum == this.acctNumber) {
        allCustomers[i].balance = +allCustomers[i].balance + +this.amount;
      }
      if (allCustomers[i].acctNum == this.currentUser.acctNum) {
        allCustomers[i].balance = +allCustomers[i].balance - +this.amount;
      }
      // else {
      //   alert("Account Number not exist");
      //   return;
      // }
    }
    this._userService.setAllUsers(allCustomers);
    // localStorage.setItem('allUsers', JSON.stringify(allCustomers));
    // console.log(allCustomers);

    alert("Transfer successful");
    // this._router.navigate(["/dashboard"]);
  }
}
