const mongoose= require('mongoose');

const inventorySchema= new mongoose.Schema({
    locationName: String,
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
            safetyStock:{
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
const imageSchema= new mongoose.Schema({
    preview: String
});
const reviewSchema= new mongoose.Schema({
    name:String,
    email:String,
    review:String
});
const productSchema= new mongoose.Schema({
    title:String,
    images:[imageSchema],
    description:{
        specialities:{
            type: Array,
            default:[]
        },
        generalInfo:String
    },
    pricing:{
        offerPrice:Number,
        MRP:Number
    },
    SKU:String,
    trackQuantity: Boolean,
    continueSellingStockWhenOutOfStock: Boolean,
    inventory:[inventorySchema],
    status:{
        type:String,
        default: "Active"
    },
    variants:Object,
    additionalInfo:{
        brandName:String,
        material:String,
        finishType:String,
        color:String,
        style:String,
        weight:String,
        dimension:String
    },
    productOrganization:{
        productType:String,
        vendor:String,
        collections:{
            type:Array,
            default:[]
        }
    },
    reviews:[reviewSchema],
    productRatings:{
        noPeopleRated:{
            type:Number,
            default:0
        },
        ratings:{
            type:Number,
            default:0
        }
    },
    arrivalMonth:{
        type:Date,
        default: Date.now
    }  
});
module.exports= mongoose.model('Products',productSchema);
