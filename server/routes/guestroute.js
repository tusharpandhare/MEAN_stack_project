var express= require('express');
var router = express.Router();

var guest = require('../module/guestschema/guest');
var {generatetoken}= require('../module/auth');

// add guest to db
router.post('/',async(req,res)=>{
  var user = new guest({
    name: req.body.pname,
    email: req.body.pusername,
    number: req.body.mobileno,
    city: req.body.city,
    password: req.body.password
    // guestregister.component.ts:49 {pname: "tushar pandhare", pusername: "tusharpandhare1995@gmail.com",
    //  mobileno: "8766465132", city: "pune", password: "tushar"}
  });
  await user.save((err,doc)=>{
      if(!err){res.send(doc);}
      else{ console.log("error ocuured while saving employee :" +JSON.stringify(err,undefined,2),

      );
      res.send("");
    }
  });
});

// check login guest data
router.post('/checkguest',async(req,res)=>{
  guest.find({email:req.body.email, password: req.body.pass},(err,doc)=>{
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
                  res.send({token:result,id:doc[0]._id});
                }
              })
      }
      else
      {
        console.log(doc);
        res.send(null);
      }
    }
  })
});


module.exports= router;



module.exports = router;
