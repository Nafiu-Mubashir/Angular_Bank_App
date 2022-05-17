import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeavePageGuard implements CanDeactivate<unknown> {
  canDeactivate():any{
    let accept = confirm("Are you sure you want to leave this page?");
    if (accept) {
      return true;
    }
    else{
      return false;
    }
  }
  
}
