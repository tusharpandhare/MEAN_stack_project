const mongoose = require("mongoose");

var user = new mongoose.Schema({
    username : {type: String},
    password : {type: String},


})

module.exports =  user = mongoose.model('admins',user);
