import { Component, OnInit } from '@angular/core';
import {EServiceService} from '../../e-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminuser ='admin@e-electro.com';
  adminpass = 'admin';
  fakeadmin ={
    name:"tushardada",
    position:"tushardada",
    office:"california",
    salary:23456
 };


  constructor(private service:EServiceService, private router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar(message: string, action?:"close") {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


  adminlog(adminlogdata: NgForm){
    // console.log(adminlogdata.value);
   this.service.checkadmin(adminlogdata.value).subscribe((result: any)=>{
     console.log(result);
     if(result){
      localStorage.setItem("token",result);
      localStorage.setItem("role","admin");
      this.openSnackBar("admin login successfully")
      this.router.navigate(['/adminpage']);

     }
     else{
       this.openSnackBar("You Entered invallid Creditial")
       this.router.navigate(['/adminlogin']);


     }

   })

    // .subscribe((result:{})=>{
    //   console.log(result);
    // })

  }


}
