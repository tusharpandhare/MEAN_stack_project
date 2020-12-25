const mongoose = require("mongoose");

var cart = new mongoose.Schema({
  image: {type:String},
  name: {type:String},
  client: {type:String},
  price: {type:Number},
  itemno: {type:Number}
  // {image: "https://rukminim1.flixcart.com/image/352/352/k4ss2…or-9x-stk-l22-original-imafnmjdghen7aph.jpeg?q=70",
  //  name: "Honor 9X (Midnight Black, 128 GB)  (4 GB RAM)",
  //  price: 15199.05,
  //  itemno: 4,
  // client: "5fe1ce004b6102047017c84d"}
})

module.exports = item = mongoose.model('carts',cart);
