import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EServiceService} from '../../e-service.service';
import {Router} from '@angular/router';
import { async } from '@angular/core/testing';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  id;
  newcart;
  showcart;
  product:any;
  products:any;
  discount;
  isnewtocart;
  count=1;
  constructor(private route:ActivatedRoute, private service:EServiceService, private router:Router,
    private _snackBar:MatSnackBar) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.id =  params['id'];
         this.isnewtocart = params['isnewtocart'];
        console.log("id:"+this.id+" isnewtocart: "+this.isnewtocart);
        // this.language=params['language'];
        if(this.isnewtocart=="newcart")
        {
          console.log("new to cart is true");
          this.newcart=true;
          this.showcart=false;
          this.service.getproduct(this.id).subscribe(result=>{
            console.log(result);
            this.product=<any>result;
            this.discount =Number(this.product.product_price - (this.product.product_price*(this.product.product_disc/100)));
          // this.imgid= this.product.images[0];
          console.log(this.product);
          })
        }
        if(this.isnewtocart=="showcart")
        {
          this.showcart=true;
          this.newcart=false;
          let id= localStorage.getItem("id");
           this.service.getcart(id).subscribe(result=>{
            console.log(result);
            this.products=<any>result;
          })
        }

        // getting product details



      }
    )
  }

  openSnackBar(message: string, action?:"close") {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  minuscount()
  {
    this.count--;
  }
  pluscount()
  {
    this.count++;
  }
  savecart(img,name,discount)
  {
    let client= localStorage.getItem('id');
    let cartitem={
      image:img,
      name:name,
      price:discount,
      itemno:this.count,
      client: client
    }
    console.log(cartitem);
    this.service.addcart(cartitem).subscribe(result=>{
      console.log(result);
      if(result)
      {
        this.openSnackBar("successfully added to cart");
        this.router.navigate(['/home']);
      }
      else{
        this.openSnackBar("getting error while adding to cart");
      }
    })

  }
  // return back to home
  cancel()
  {
    this.router.navigate(['/home']);
  }

   deletecartitem(id)
  {
    this.service.deletecartitem(id).subscribe(result=>{
      this.openSnackBar("cart item removed successfully");
      this.router.navigate(['/home']);
    })
  }
  async ordercart()
  {
     for(let item of this.products)
    {
      let id=item._id;
     await this.service.deletecartitem(id).subscribe(result=>{
        this.openSnackBar("your order taken successfully!");
      })
    }
    this.router.navigate(['/home']);
  }
}
