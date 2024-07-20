const express= require('express');
const router= express.Router();
const Products= require('../schemas/productSchema');

router.post('/', async(req,res)=>{
    const products=req.body.selectedProducts;
    // console.log(products)
    const productIDs = products.map(product => product._id);
    try {
        await Products.deleteOne({
            _id: { $in: productIDs }
        });
        res.status(200).json({"message":"Product Deleted Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Internal server error"})
    }
});
module.exports= router;