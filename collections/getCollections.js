const express= require('express');
const router= express.Router();
const Collections =require('../schemas/collectionSchema');
router.get('/', async(req,res)=>{
        try {
            const collections= await Collections.find({});
            res.status(200).json(collections);
        } catch (error) {
            console.log(error)
            res.status(500).json("Internal Server error")
        }
});
module.exports=router;