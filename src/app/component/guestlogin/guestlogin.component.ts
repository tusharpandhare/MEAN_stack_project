import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EServiceService} from '../../e-service.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-guestlogin',
  templateUrl: './guestlogin.component.html',
  styleUrls: ['./guestlogin.component.css']
})
export class GuestloginComponent implements OnInit {

  constructor(private service:EServiceService, private router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar(message: string, action?:"close") {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  // guestlog(data){
  //   console.log(data.value);
  // }

  guestlog(data: NgForm){
    console.log(data);
   this.service.checkguest(data).subscribe((result: any)=>{
     console.log(result);

     if(result){
      let newresult= JSON.parse(result);
      localStorage.setItem("token",newresult.token);
      localStorage.setItem("id",newresult.id)
      localStorage.setItem("role","client");
      this.openSnackBar("login successfull")
      this.router.navigate(['/']);

     }
     else{
       this.openSnackBar("You Entered invallid Creditial")
       this.router.navigate(['/guestlogin']);


     }

   })

    // .subscribe((result:{})=>{
    //   console.log(result);
    // })

  }


}
