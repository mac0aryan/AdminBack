const express= require('express');
const router= express.Router();
const Products= require('../schemas/productSchema');

router.get('/:productName',async(req,res)=>{
    const productName=req.params.productName;
    console.log(productName)
    try {
        const product= await Products.findOne({
            title: productName
        });
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({"message":"Internal Server Error"})
    }
});
module.exports= router;