const express = require('express');
const { upload } = require('../mediaHandler/upload');
const router = express.Router();
const Collections = require('../schemas/collectionSchema');

router.post('/',upload,  async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const categories= JSON.parse(req.body.categories);
    if (req.file) {
        const imagePath = `/assets/uploads/collections/${req.file.originalname}`;
        try {
            const newCollection = new Collections({ title, description, imagePath, categories, products: [], productConditions:"None" });
            await newCollection.save();
            console.log("200 status")
            res.status(200).json({data:"Message for all clear"});
        } catch (error) {
            console.log(error);
            res.status(500);   
        }
    }
    else {
        try {
            const newCollection = new Collections({ title, description, imagePath: "", categories, products: [], productConditions:"None" });
            await newCollection.save();
            res.status(200).json({data:"Message for all clear"});
        } catch (error) {
            console.log(error);
            res.status(500);
           
        }
        
    }



});
module.exports = router;

