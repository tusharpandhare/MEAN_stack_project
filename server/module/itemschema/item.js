const mongoose = require("mongoose");

var item = new mongoose.Schema({
  general: {type:Object},
  heighlight: {type:Array},
  images: {type:Array},
  offers: {type:Array},
  p_cat: {type:String},
  product_disc: {type:Number},
  product_name: {type:String},
  product_price: {type:Number},
  product_rating: {type:Number},


})

module.exports = item = mongoose.model('items',item);
