import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartauthService implements CanActivate{

  constructor(private router:Router) { }

  canActivate(){
    let result = localStorage.getItem("role");
    if(result=="client")
    return true;
    else{
      this.router.navigate(['/access-denied']);
      return false;
    }

  }
}
