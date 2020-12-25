var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var api = require('./server/routes/api');
var admin = require('./server/routes/adminroute');
var item = require('./server/routes/itemroute');
var guest = require('./server/routes/guestroute');
var cart = require('./server/routes/cartroute');
var connectdb = require('./server/module/db');
// var cors = require('cors');


connectdb();
var app= express();
app.use(express.json({extended:false}));
// app.use(cors({ allowedHeaders: 'http://localhost:4200/' }));
app.use(express.static(path.join(__dirname, 'dist/electro')));
// app.use(express.static('dist/todos'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/admin', admin);
app.use('/item', item);
app.use('/guest', guest);
app.use('/cart',cart)
app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'dist/electro/index.html'));
});
app.listen(3000, function(){
  console.log("listen to port 3000");
});
