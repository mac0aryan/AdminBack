const express= require("express");
const router= express.Router();
const Collections= require('../schemas/collectionSchema');
router.get('/:collectionName',async(req,res)=>{
    const collectionName= req.params.collectionName;
    try {
        const collection= await Collections.findOne({
            title:collectionName
        });
        res.status(200).json({collection});
    } catch (error) {
        res.status(500).json({"message":"Internal Server Error"})
    }
});
module.exports=router;