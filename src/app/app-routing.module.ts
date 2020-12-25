import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent  } from './component/home/home.component';
import {GetcategoryComponent  } from './component/getcategory/getcategory.component';
import {AdminloginComponent  } from './component/adminlogin/adminlogin.component';
import {GuestloginComponent  } from './component/guestlogin/guestlogin.component';
import {GuestregisterComponent  } from './component/guestregister/guestregister.component';
import {AdminpageComponent} from './component/adminpage/adminpage.component';
import {PagenotfoundComponent} from './component/pagenotfound/pagenotfound.component';
import {ViewproductComponent} from './component/viewproduct/viewproduct.component';
import {AuthserviceService} from './authservice.service';
import {CartauthService} from './cartauth.service';
import {AcessDeniedComponent} from './component/acess-denied/acess-denied.component';
import {ViewcartComponent} from './component/viewcart/viewcart.component';




const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'access-denied',
    component:AcessDeniedComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'viewcart',
    component:ViewcartComponent,
    canActivate:[CartauthService]
  },
  {
    path:'getcategory',
    component:GetcategoryComponent
  },
  {
    path:'adminlogin',
    component:AdminloginComponent
  },
  {
    path:'guestlogin',
    component:GuestloginComponent
  },
  {
    path:'guestregister',
    component:GuestregisterComponent
  },
  {
    path:'adminpage',
    component:AdminpageComponent,
    canActivate:[AuthserviceService]
  },
  {
    path:'viewproduct',
    component:ViewproductComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
