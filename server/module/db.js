const mongoose = require('mongoose');
const URI = 'mongodb+srv://dbuser:dbuser@cluster0.vsd4n.mongodb.net/electro?retryWrites=true&w=majority'

const connectdb = async()=>{
  await mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("db connected");
}

module.exports= connectdb;
