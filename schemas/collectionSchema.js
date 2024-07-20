const mongoose= require('mongoose');

const CollectionSchema= new mongoose.Schema({
    title: String,
    description:String,
    imagePath: String,
    categories:Array,
    products: Array,
    productConditions: {
        type:String,
        default: "None"
    }
    
});

module.exports= mongoose.model('Collections',CollectionSchema)