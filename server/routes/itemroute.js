var express= require('express');
var router = express.Router();

var Item = require('../module/itemschema/item');

// get all items
router.get('/',(req,res)=>{
  Item.find((err,doc)=>{
      if(!err) {res.send(doc);}
      else { console.log("error in retriving emplyee :" +JSON.stringify(err,undefined,2));}
  });
});

// getting element by id
router.get('/:id',(req,res)=>{
  Item.findOne({_id:req.params.id},(err,doc)=>{
      if(!err) {res.send(doc);}
      else { console.log("error in retriving product :" +JSON.stringify(err,undefined,2));}
  });
});

// get elements by category
router.get('/cat',(req,res)=>{
  Item.find({p_cat:req.params.cat},(err,doc)=>{
      if(!err) {res.send(doc);}
      else { console.log("error in retriving product :" +JSON.stringify(err,undefined,2));}
  });
});


// post item
router.post('/',async(req,res)=>{
  var item = new Item({
    general: req.body.general,
    heighlight: req.body.heighlight,
    images: req.body.images,
    offers: req.body.offers,
    p_cat: req.body.p_cat,
    product_disc: req.body.product_disc,
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    product_rating: req.body.product_rating
  });
  await item.save((err,doc)=>{
      if(!err){res.send("saved successfully!");}
      else{ console.log("error ocuured while saving product"); }
  });
});




module.exports = router;
