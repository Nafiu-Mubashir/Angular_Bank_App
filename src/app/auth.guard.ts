import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserservicesService } from './userservices.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _userService: UserservicesService, private _router:Router){}
  canActivate():any{
    if (this._userService.isHome) {
      return true;
    }
    else{
      alert("Please Sign Up first");
      this._router.navigate(["/signup"]);
    }
  }
  
}
