import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userInterface } from '../type/userinterface';
import { UserservicesService } from '../userservices.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(private _userService:UserservicesService, private _router:Router) { }
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
  public walletIds: number = 0
  public walletNames: string = "";
  public walletBal: number = 0;
  ngOnInit(): void {
    this.all = this._userService.getAllUsers();
    this.currentUser = this._userService.getCurrentUser()
  }
  clickEvent() {
    this.status = !this.status;
  }
  createWallet(){
    let allCustomers = JSON.parse(localStorage.getItem("allUsers")!);
    if (+this.currentUser.balance < +this.walletBal) {
      alert("Insufficient Balance");
      return;
    }
    console.log(this.walletNames)
    for (let i = 0; i < allCustomers.length; i++) {
      if (allCustomers[i].walletId == this.currentUser.walletId) {
        
        allCustomers[i].walletBalance = +allCustomers[i].walletBalance + +this.walletBal;
        // console.log(allCustomers[i])
      }
      if (allCustomers[i].acctNum == this.currentUser.acctNum) {
        allCustomers[i].balance = +allCustomers[i].balance - +this.walletBal;
      }
      allCustomers[i].walletName = this.walletNames;
    }
    console.log(allCustomers)
    this._userService.setAllUsers(allCustomers);
    
    alert("Wallet Created");
  }
}
