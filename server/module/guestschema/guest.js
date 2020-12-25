const mongoose = require("mongoose");

var guest = new mongoose.Schema({
  name: {type:String},
  email: {type:String},
  number: {type:String},
  city: {type:String},
  password: {type:String}
})

module.exports = item = mongoose.model('guests',guest);
