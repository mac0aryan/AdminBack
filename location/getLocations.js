const express= require('express');
const router= express.Router();
const Inventories = require('../schemas/inventorySchema');

router.get('/', async(req,res)=>{
    try {
        const data= await Inventories.find({});
        res.status(200).json({data});
    } catch (error) {
        res.status(500).json({"message":"Internal Server Error"});
    }
});
module.exports= router;
