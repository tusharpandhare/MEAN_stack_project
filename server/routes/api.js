var express= require('express');
var router = express.Router();

var User = require('../module/user');

// router.post('/',async(req,res)=>{

//  const {firstname,lastname}= req.body;
//  let user={};
//  user.firstname= firstname;
//  user.lastname= lastname;
//  let usermodel= new User(user);
//  await usermodel.save();
//  res.json(usermodel);

// });

router.get('/',(req,res)=>{
  User.find((err,doc)=>{
      if(!err) {res.send(doc);}
      else { console.log("error in retriving emplyee :" +JSON.stringify(err,undefined,2));}
  });
});

router.get('/:id',(req,res)=>{
  User.findOne({_id:req.params.id},(err,doc)=>{
      if(!err) {res.send(doc);}
      else { console.log("error in retriving emplyee :" +JSON.stringify(err,undefined,2));}
  });
});

router.post('/',async(req,res)=>{
  var user = new User({
      text:req.body.text,
      iscompleted: req.body.iscompleted
  });
  await user.save((err,doc)=>{
      if(!err){res.send(doc);}
      else{ console.log("error ocuured while saving employee :" +JSON.stringify(err,undefined,2)); }
  });
});

// update data operation
router.put('/:id',(req,res)=>{
    // if(!objectId.isValid(req.params.id))
    // return res.status(400).send("no record with diven id : ${req.params.id}");

    var user = {
      text: req.body.text,
      iscompleted: req.body.iscompleted

    };

    User.findByIdAndUpdate(req.params.id, {$set:user}, {new: true}, (err,doc) =>{
        if(!err){res.send(doc);}
        else { console.log("error in employee update" +JSON.stringify(err,update,2)); }

    });

});

// deleting document
router.delete('/:id',(req,res)=> {
  User.deleteOne({_id:req.params.id},(err,doc)=>{
    if(err){
      res.send('getting error while deleting element');
    }
    else{
      res.send("deleted :"+doc);
    }
  })
})



// const url = `mongodb+srv://mytodo:mytodo@todo.9wx4l.mongodb.net/mytodo?retryWrites=true&w=majority`;

// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })



// var db = 'mongodb://mytodo:todo@todo.9wx4l.mongodb.net/mytodo?retryWrites=true&w=majority'
// var db= mongojs('mongodb://vijay:vijay@ds141474.mlab.com:41474/meatcsgeekstodo',['todos'])
//all todos

// router.get('/',(req,res)=>{
//   mongoose.model('todo').find((err, todos)=>{
//     if(err){
//       res.send(err);
//     }
//     else
//     res.json(todos);
//   })
// })

// router.get('/', function(req, res, next){
//   db.todos.find(function(err, todos){
//     if(err){
//       res.send(err);
//     }else{
//       res.json(todos);
//     }
//   });
// });
// //one todos
// router.get('/:id', function(req, res, next){
//   db.todos.findOne({
//     _id:mongojs.ObjectId(req.params.id)
//   },function(err, todo){
//     if(err){
//       res.send(err);
//     }else{
//       res.json(todo);
//     }
//   });
// });

//save todos
// router.post('/', function(req, res, next){
//   var todo = req.body;
//   if(!todo.text || !(todo.isCompleted + '')){
//     res.status(404);
//     res.json({
//       "error":"invalid Data"
//     });
//   }else{
//     db.todos.save(todo, function(err, result){
//       if(err){
//         res.send(err);

//       }else{
//         res.json(result);
//       }
//     });
//   }
// });

//update todo
// router.put('/:id', function(req, res, next){
//   var todo = req.body;
//   var updObj = {};
//   if(todo.isCompleted){
//     updObj.isCompleted = todo.isCompleted
//   }
//   if(todo.text){
//     updObj.text = todo.text;
//   }

//   if(!updObj){
//     res.status(404);
//     res.json({
//       "error":"invalid Data"
//     });
//   }else{
//     db.todos.update({
//     _id: mongojs.ObjectId(req.params.id)

//   }, updObj,{},function(err, result){
//     if(err){
//       res.send(err);
//     }else{
//       res.json(result);
//     }
//   });
//   }
// });

// Delete Todo
// router.delete('/:id', function(req, res, next){
//     db.todos.remove({
//         _id: mongojs.ObjectId(req.params.id)
//     }, '', function(err, result){
//         if(err){
//             res.send(err);
//         } else {
//             res.json(result);
//         }
//     });
// });

module.exports = router;
