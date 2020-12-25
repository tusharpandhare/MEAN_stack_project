import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Route, Router} from '@angular/router';
import {HttpClient, HttpClientModule, HttpHeaders, HttpRequest } from '@angular/common/http';
import {AdminLogin, employee} from './shared/data-module';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Content } from '@angular/compiler/src/render3/r3_ast';
// import { catchError } from 'rxjs/operators';
import { stringify } from 'querystring';
// import {} from '@angular/http'



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class EServiceService {
  selectedEmployee :employee;
  adminlogin :AdminLogin[];
  employee : employee[];


  auth;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  // header = new HttpHeaders();
  // header('Content-type', 'application/json' );
  // readonly adminurl = 'http://localhost:3000/admin'
    admin = '/admin';
    items = '/item';
    guest='/guest';
    cart='/cart'
    handleerror;


  constructor(private googleauth:AngularFireAuth,
    private http:HttpClient) {
    this.auth = googleauth;
   }
// for show and hide login and logout as autherization part
   checkislogin(){
     let result= localStorage.getItem('token');
     if(result)
     return true;
     else
     return false;
   }

  googleLogin(){
    this.googleauth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
  }


  // checkadminlogin(admindata: AdminLogin):Observable<any> {
    // let newdata = JSON.stringify(admindata);
  //   console.log(typeof(admindata));
  //   return this.http.post(this.adminurl, admindata);
  // }
checkadmin(logdata){
  console.log(logdata);

  return this.http.post(this.admin, logdata,{ headers: this.headers, responseType: 'text' })
  // .pipe(
  //   catchError(this.handleError('postPurchaseOrderCustom', 'I am an error')
    // ));


}

// get items
getitem(){
  return this.http.get(this.items);
}

// adding item to database
additem(item)
{
  return this.http.post(this.items, item.value,{ headers: this.headers, responseType: 'text' })
}

// get product
getproduct(id)
{
  return this.http.get(this.items+"/"+id);
}

// add guest
addguest(guest)
{
  return this.http.post(this.guest ,guest.value,{ headers: this.headers, responseType: 'text' })
}

// login checking for guest
checkguest(logdata){
  console.log(logdata);

  return this.http.post(this.guest+"/checkguest", logdata.value,{ headers: this.headers, responseType: 'text' });

}

// add cart item
addcart(item)
{
  return this.http.post(this.cart, item,{ headers: this.headers, responseType: 'text' })
}

// getting cart
getcart(id)
{
  return this.http.get(this.cart+"/"+id);
}
// delete cart item
deletecartitem(id){
  console.log(id);
 return this.http.delete(this.cart+"/"+id,{ headers: this.headers, responseType: 'text' });
}
}
