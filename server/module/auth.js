var jwt = require('jsonwebtoken');
const password = "electro";

//generate token
function generatetoken(payload, callback){
  jwt.sign(payload, password, callback);
}

//verify jwt token
function verifytoken(token, callback){
  jwt.verify(token, password,callback);
}

module.exports.generatetoken= generatetoken;
