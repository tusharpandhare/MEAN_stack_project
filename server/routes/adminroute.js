var express= require('express');
var router = express.Router();

var admin = require('../module/adminschema/admin');
var {generatetoken}= require('../module/auth');

router.post('/',async(req,res)=>{
  admin.find({username:req.body.adminusername, password: req.body.adminpassword},(err,doc)=>{
    if(err){
      console.log(err);
    }
    else{
      // console.log(doc);
      if(doc.length>0)
      {
        console.log(doc);
         generatetoken(req.body,(error,result)=>{
                if(error){
                  console.log(error);
                }
                else{
                  res.send(result);
                }
              })
      }
      else
      {
        console.log("getting empty");
        res.send("");
      }
      // console.log("user found");
      // generatetoken(req.body,(error,result)=>{
      //           if(error){
      //             console.log(error);
      //           }
      //           else{
      //             res.send(result);
      //           }
      //         })
    }
  })
  // var adminlog = new admin({
  //     username: req.body.adminusername,
  //     password: req.body.adminpassword
  // });
  // await adminlog.  save((err,doc)=>{

  //     if(!err){
  //       generatetoken(req.body,(error,result)=>{
  //         if(error){
  //           console.log(error);
  //         }
  //         else{
  //           res.send(result);
  //         }
  //       })
  //     }        // res.send(doc);}
  //     else{ console.log("error ocuured while saving employee :" +JSON.stringify(err,undefined,2)); }
  // });
});


module.exports = router;
