import { Component, OnInit, Inject } from '@angular/core';
import {EServiceService} from '../../e-service.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';


// interface for dialog
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchText : string;
  public customerData : any;
  cartitem=0;


  constructor(private service:EServiceService, private route:ActivatedRoute, private router:Router,
    public dialog:MatDialog, private _snackBar:MatSnackBar){ }
  category;

  // dialog
  animal: string;
  name: string;
     openDialog(): void {
       const dialogRef = this.dialog.open(cartdialog, {
         width: '250px',
         data: {name: this.name, animal: this.animal}
       });

       dialogRef.afterClosed().subscribe(result => {
         console.log('The dialog was closed');
         this.animal = result;
       });
     }



  async ngOnInit()  {
    // display by category
    this.route.queryParams.subscribe(
      params => {
        this.category =  params['category'];
        // this.language=params['language'];
      }
    )


    await this.service.getitem().subscribe(result=>{
      this.product=<any>result;
    })
  }
  cartcount=1;
  hideminus=false;
  clickcart=true;
  cartbutton=false;
  isid;

  pluscart(){
    this.cartcount++;
  };
  minuscart(){
    if(this.cartcount<1)
    {
      this.hideminus=true;
    }
    else
    {
      this.cartcount--;
    }
  };

  // addtocart(){
  //   console.log("click to add");
  // }

  addtocart(id){
    this.isid= id;
    console.log("inside");
    let chkstorage=localStorage.getItem('id');
    if(chkstorage)
    {
      console.log(id);
     this.router.navigate(['/viewcart'],{ queryParams: {id: id, isnewtocart:"newcart" }, queryParamsHandling: 'merge'});
    }
    else{
      this.router.navigate(['/guestlogin'])
    }


  }

  product:any;
  products:any=[
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
  ];

  openSnackBar(message: string, action?:"close") {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  buyproduct()
{
  let client=localStorage.getItem("role");
  if(client=="client")
  {
    this.router.navigate(['/home']);
  this.openSnackBar("Your Order Placed successfully!");
  }
  else
  {
    this.openSnackBar("Facing Issues While taking Order please login");
    this.router.navigate(['/guestlogin']);
  }

}




}

// component for dialog box
@Component({
  selector: 'cartdialog',
  templateUrl: './cartdialog.component.html',
})
export class cartdialog {

  constructor(
    public dialogRef: MatDialogRef<cartdialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }



}
