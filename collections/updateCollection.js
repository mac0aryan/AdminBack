const express= require('express');
const router= express.Router();
const Collections= require('../schemas/collectionSchema');
const {upload}=require('../mediaHandler/upload');
router.post('/', upload, async(req,res)=>{
    const {title,description,collectionID}= req.body;
    const categories=JSON.parse(req.body.categories);
    const collection= await Collections.findOne({
        _id: collectionID
    });
    if(req.file){
        const imagePath = `/assets/uploads/collections/${req.file.originalname}`;
        try {  
            collection.title=title;
            collection.description=description;
            collection.categories=categories;
            collection.imagePath=imagePath
            await collection.save();
            res.status(200).json({"Message":"Updated Successfully"});
        } catch (error) {
            console.log(error);
            res.status(500).json({"Message":"Internal Server Error Occured"});
        }
    }
    else{
        try {  
            collection.title=title;
            collection.description=description;
            collection.categories=categories;
            await collection.save();
            res.status(200).json({"Message":"Updated Successfully"});
        } catch (error) {
            console.log(error);
            res.status(500).json({"Message":"Internal Server Error Occured"});
        }
    }

});
module.exports=router;