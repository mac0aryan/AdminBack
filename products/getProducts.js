const express= require('express');
const router= express.Router();
const Products= require('../schemas/productSchema');

router.get('/', async(req,res)=>{
    try {
        const products= await Products.find({});
        res.status(200).json({products});
    } catch (error) {
        res.send(500).json({"message":"Internal Server Error"})
    }
});
module.exports=router;