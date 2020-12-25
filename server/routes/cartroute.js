var express= require('express');
var router = express.Router();

var Cart = require('../module/cartschema/cart');


router.post('/',async(req,res)=>{
  var cart = new Cart({
    image: req.body.image,
    name: req.body.name,
    client: req.body.client,
    price: req.body.price,
    itemno: req.body.itemno
  });
  await cart.save((err,doc)=>{
      if(!err){res.send("saved successfully!");}
      else{ res.send("");
       console.log("error ocuured while saving cart"); }
  });
});

// getting cart for login user
router.get('/:id',(req,res)=>{
  Cart.find({client:req.params.id},(err,doc)=>{
      if(!err) {res.send(doc);}
      else { console.log("error in retriving cart :" +JSON.stringify(err,undefined,2));}
  });
});

// deleting item from cart
router.delete('/:id',(req,res)=> {
  Cart.deleteOne({_id:req.params.id},(err,doc)=>{
    if(err){
      res.send('getting error while deleting element');
    }
    else{
      res.send("deleted successfully");
    }
  })
})







module.exports = router;
