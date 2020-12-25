import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {EServiceService} from '../../e-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private service:EServiceService, private router:ActivatedRoute, private route:Router,
    private _snackBar:MatSnackBar ) { }
id;
isadmin='';
isclient='';
product;
discount;
imgid;
products:any=
  {
  _id:"5fde286b460a511ab896893d",
  heighlight:["2 GB RAM | 32 GB ROM | Expandable Upto 512 GB","15.8 cm (6.22 inch) HD+ Display","13MP + 2MP | 8MP Front Camera","5000 mAh Lithium Polymer Battery","Qualcomm Snapdragon 439 Processor"],
  images:["https://rukminim1.flixcart.com/image/352/352/k6tniq80/mobile/u/d/h/mi-redmi-8a-dual-b07x1kta-original-imafp73grqyzv9t3.jpeg?q=70","https://rukminim1.flixcart.com/image/352/352/kevpwnk0/mobile/z/k/d/mi-redmi-8a-dual-mzb9027in-mzb07rfin-original-imafvgwybppxkcq9.jpeg?q=70",
  "https://rukminim1.flixcart.com/image/352/352/k6v2ykw0/mobile/u/d/h/mi-redmi-8a-dual-b07x1kta-original-imafp822yhdybxzh.jpeg?q=70","https://rukminim1.flixcart.com/image/352/352/k6v2ykw0/mobile/u/d/h/mi-redmi-8a-dual-b07x1kta-original-imafp822rjnvuxdt.jpeg?q=70"],
  offers:["Bank Offer10% off on SBI Credit Cards, up to ₹1250. On orders of ₹5000 and aboveT&C","Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C","Bank Offer₹100 Off on BOB Mastercard debit card first time transaction, Terms an"],
  general:{inbox:" Handset, Power Adapter (5V/2A), Micro USB Cable, SIM Eject Tool, Warranty Card, User Guide",
          modelnum:" MZB9027IN / MZB07RFIN",
          modelname:"Redmi 8A Dual",
          color:"Midnight Grey"},
  p_cat:"mobile",
  product_disc:17,
  product_name:"Redmi 8A Dual (Midnight Grey, 32 GB)  (2 GB RAM)",
  product_price:8499,
  product_rating:4,
  __v:0
  }



 async ngOnInit() {
    this.router.queryParams.subscribe(
      params => {
        this.id =  params['id'];
        this.isadmin = params['isadmin'];
        console.log("id:"+this.id+" isadmin: "+this.isadmin);
        // this.language=params['language'];
      }
    )
   await this.service.getproduct(this.id).subscribe(result=>{
      console.log(result);
      this.product=<any>result;
      this.discount =Number(this.product.product_price - (this.product.product_price*(this.product.product_disc/100)));
    this.imgid= this.product.images[0];
    })

  }

  openSnackBar(message: string, action?:"close") {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }




  //calculate discount price



  adminpage()
  {
    this.route.navigate(['/adminpage']);
  }
  setimage(i){
    console.log("setting image");
    this.imgid= this.product.images[i];
  }
  disc(){


}
isid;
addtocart(id){
  this.isid= id;
  console.log("inside");
  let chkstorage=localStorage.getItem('id');
  if(chkstorage)
  {
   this.route.navigate(['/viewcart'],{ queryParams: {id: id, isnewtocart:"newcart" }, queryParamsHandling: 'merge'});
  }
  else{
    this.route.navigate(['/guestlogin'])
  }


}

buyproduct()
{
  let client=localStorage.getItem("role");
  if(client=="client")
  {
    this.route.navigate(['/home']);
  this.openSnackBar("Your Order Placed successfully!");
  }
  else
  {
    this.openSnackBar("Facing Issues While taking Order please login");
    this.route.navigate(['/guestlogin']);
  }

}

}
