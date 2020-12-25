import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { FormArray } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
// import {Component} from '@angular/core';
import {MatChipInputEvent, MatChipInput} from '@angular/material/chips';
import {EServiceService} from '../../e-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
// import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery'

export interface Fruit {
  name: string;
}
export interface Fruit1 {
  heighlight: string;
}

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  public searchText : string;
  public customerData : any;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  visible1 = true;
  selectable1 = true;
  removable1 = true;
  addOnBlur1 = true;
// copyPerson = Object.assign({}, MatChipInputEvent);
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Ex 1'},

  ];

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }






  arr=[];
formdiv="none";
category;
highlights=[];
images=[];
items:any;
rows = [
  {nom: "nom1", composants: ["composant11", "composant12"]},
  {nom: "nom2", composants: ["composant21", "composant22"]}
];
products:any;
product:any=[
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
  constructor(private service:EServiceService, private _snackBar: MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
      // for table
  $(document).ready( function () {
    $('#myTable').DataTable();
} );

    this.service.getitem().subscribe(result=>{
      console.log(result);
      console.log(typeof(result));
      this.items =<any>result;
      this.products=<any>result;
  });

  }




  selectchangehandler(event: any)
  {
    let value = event.target.value;
    console.log("its event "+event.target.value);
    this.formdiv= "block";
    this.category=event.target.value;
  }

//  add highlight
addhighlight(highlight){
this.clearme="";
console.log(highlight);
this.highlights.push(highlight);
}

// add image
addimage(image){

  console.log(image);
  this.images.push(image.value);
  }


// remove highlights array item
clearme="";
removehighlight(highlightsitem)
{

  var index = this.highlights.indexOf(highlightsitem);
  if (index > -1) {
   this.highlights.splice(index, 1);

}

}

// remove images array item
removeimage(image)
{

  var index = this.images.indexOf(image);
  if (index > -1) {
   this.images.splice(index, 1);

}

}
openSnackBar(message: string, action?:"close") {
  this._snackBar.open(message, action, {
    duration: 2000,
  });
}


  // adding new item
  off=[];
  allitems;
  additem(items: NgForm){

    for(let i of this.fruits){
      this.off.push(i.name);
      console.log(i.name);
    }
    console.log(this.off);
    items.value.offers=this.off;
    items.value.heighlight= this.highlights;
    items.value.images = this.images;
    // console.log(this.fruits);
    console.log(items.value);
    this.service.additem(items)
    .subscribe(result=>{
      console.log(result);
      this.openSnackBar(result);
      this.router.navigate(['/adminpage']);

      items.reset();
    })
  }

  // view item
  viewitem(event,id)
  {
    console.log(event);
    console.log("id"+id);
    this.router.navigate(['/viewproduct'],  { queryParams: {id: id, isadmin:"admin" }, queryParamsHandling: 'merge'});
  }







}
