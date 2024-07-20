const mongoose= require('mongoose');

const addressSchema= new mongoose.Schema({
    country: String,
    address:String,
    appartment:String,
    city:String,
    state:String,
    pinCode:String,
    phone:String
})
const productSchema= new mongoose.Schema({
    title:String,
    SKU:String,
    imagePath:String,
    quantity:{
        unavailable:{
            damaged:{
                type:Number,
                default:0
            },
            qualityControl:{
                type:Number,
                default:0
            },
            safety:{
                type:Number,
                default:0
            },
            other:{
                type:Number,
                default:0
            }
        },
        committed:{
            type:Number,
            default:0
        },
        available:{
            type:Number,
            default:0
        }
    }
})
const inventorySchema= new mongoose.Schema({
    locationName: String,
    address: addressSchema,
    fulfillmentDetails:Boolean,
    products: [productSchema],
    defaultLocation:{
        type: Boolean,
        default: 0
    }
    
});

module.exports= mongoose.model('Inventories',inventorySchema)