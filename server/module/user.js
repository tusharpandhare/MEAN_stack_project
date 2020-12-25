// const mongoose= require('mongoose');

// var  user= new mongoose.Schema({
//   firstname:{
//     type:String
//   },
//   lastname:{
//     type:String
//   }

// })


// module.exports = user= mongoose.model('user',user)

const mongoose = require("mongoose");

var user = new mongoose.Schema({
    text : {type: String},
    iscompleted: {type: Boolean},


})

module.exports =  user = mongoose.model('todos',user);
