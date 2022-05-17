import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userInterface } from '../type/userinterface';
import { UserservicesService } from '../userservices.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public userName:string = "";
  public password:string = "";
  public all: userInterface[] = [];
  public errorMessage:string = ""
  constructor(private _userService:UserservicesService, private _router:Router) { }

  ngOnInit(): void {
    this.all = this._userService.getAllUsers();
  }
  logIn(){
    let {userName, password, all, errorMessage} = this;
    let logUserName = all.find((user: userInterface) => user.username == userName);
    let logPassword = all.find((user: userInterface) => user.password == password);
    if (userName == "" || password == "") {
      this.errorMessage = "Please enter email and password";
      return;
    }
    if (logUserName) {
      if (logUserName.password !== password) {
        this.errorMessage = "Incorrect password";
        return;
      }
      this._userService.setCurrentUsers(logUserName);
      alert("Login successfull, " + userName + " is now a Easy Bank user");
      this._router.navigate(["/dashboard"]);
    }
    else{
      this.errorMessage = "Incorrect username or password";
    }
  }
}
