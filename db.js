const mongoose= require('mongoose');

const dbConnect=()=>{
    mongoose.connect('mongodb://localhost:27017/AdminPage');
    console.log("connected top db");
}
module.exports=dbConnect;