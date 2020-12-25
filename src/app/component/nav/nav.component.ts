import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {EServiceService} from '../../e-service.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

// import { Script } from 'vm';


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  // script: './'
})
export class NavComponent implements OnInit {
  cartitem=0;
  isclient;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    // isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
    // .pipe(
    //   map(result => result.matches),
    //   shareReplay()
    // );
    // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
    // .pipe(
    //   map(result => result.matches),
    //   shareReplay()
    // );
  constructor(private breakpointObserver: BreakpointObserver, public service:EServiceService,
    private router:Router, private _snackBar:MatSnackBar) {}
      // dialog
      async ngOnInit(){

        // this.battleInit();
   setInterval(() => {
    let newclient=localStorage.getItem('role');
    let id= localStorage.getItem("id");
    this.service.getcart(id).subscribe(result=>{
      let newresults = <any>result;

      this.cartitem= newresults.length;
    })

  }, 10000);


      //  if(newclient=="client")
      //   {
      //     this.service.getcart(id).subscribe(result=>{
      //       console.log("in nav "+result);
      //       let newresult=<any>result;
      //       let count=0;
      //       for(let i of newresult)
      //       {
      //         count++;
      //       }
      //       this.cartitem=count;
      //     })
      //   }

      }




    openSnackBar(message: string, action?:"close") {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }
  logoutme()
  {
    localStorage.clear();
    this.openSnackBar("logout successfully");
    this.router.navigate(["/home"]);


  }
  showcart(){
    let client = localStorage.getItem("role");
    if(client=="client")
    {
      let id= localStorage.getItem("id");
      this.router.navigate(['/viewcart'], { queryParams: {id:id , isnewtocart:"showcart" }, queryParamsHandling: 'merge'});
    }
    else{
      this.openSnackBar("make Login to View Cart");
      this.router.navigate(['/guestlogin']);
    }
  }






}
