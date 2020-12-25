import { Component, OnInit } from '@angular/core';
import {EServiceService} from '../../e-service.service'
// import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Route, Router} from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-guestregister',
  templateUrl: './guestregister.component.html',
  styleUrls: ['./guestregister.component.css']
})
export class GuestregisterComponent implements OnInit {
 wronguser = false;
 hidesingwithgoogle = true;
 name='';
 email = '';
  constructor(private service:EServiceService, private route:Router, private googleauth:AngularFireAuth,
    private _snackBar:MatSnackBar) {
    this.googleauth.authState.subscribe(user=>{
      if(user){
        this.name = user.displayName;
        this.email = user.email;
        console.log(user.displayName);
        console.log(user.email);
        this.hidesingwithgoogle = false;
      }
      else{
        console.log("invallid errors");
        this.wronguser = true;

      }

    })
    // if(this.route.routerState.snapshot.root.paramMap.get('data')){
    //   console.log();
    // }
  }

  ngOnInit(): void {


  }
  googleLogin(){
    this.googleauth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())
    // this.service.googleLogin();
    // console.log(this.route.routerState.snapshot.root.paramMap.get('data'));
  }
  openSnackBar(message: string, action?:"close") {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  registerme(formdata){
    this.service.addguest(formdata).subscribe(result=> {
      if(result)
      {
        this.openSnackBar("saved successfully!");
        formdata.reset();
        this.route.navigate(["/guestlogin"]);
      }
      else
      {
        this.openSnackBar("Error while Submit, Please try Again!!");
        formdata.reset();
      }
    })

  }


}


