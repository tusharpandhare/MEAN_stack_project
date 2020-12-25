import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService implements CanActivate{

  constructor(public router:Router) { }

  canActivate(){
    let result = localStorage.getItem("role");
    if(result=="admin")
    return true;
    else{
      this.router.navigate(['/access-denied']);
      return false;
    }

  }
}
