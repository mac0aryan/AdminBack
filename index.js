
const express= require('express');
const cors= require('cors');
const dbConnect = require('./db');
const app= express();
app.use(express.json());
app.use(cors());
dbConnect();

//Api's

// Product Api's
app.use('/saveProduct',require('./products/addproduct'));
app.use('/getProducts', require('./products/getProducts'));
app.use('/getSingleProduct', require('./products/getsingleProducts'));
app.use('/deleteProducts', require('./products/deleteProduct'));
app.use('/editProduct',require('./products/editProduct'));

// Collections Api's
app.use('/createCollection',require('./collections/createCollection'));
app.use('/getCollections', require('./collections/getCollections'));
app.use('/getSingleCollection', require('./collections/getSingleCollection'));
app.use('/updateCollection',require('./collections/updateCollection'));
app.use('/getCategories', require('./collections/getCategories'));

// Inventory Api's
app.use('/addLocation',require('./location/addLocation'));
app.use('/getInventoryLocations', require('./location/getLocations'));

// Site Api's
app.use('/addImageToSiteLocation',require('./collections/uploadSiteMedia'));

app.listen(8001,()=>{
    console.log("Listining to port 8001")
})
