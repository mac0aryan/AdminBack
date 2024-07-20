const express= require('express');
const router= express.Router();
const Collections= require('../schemas/collectionSchema');

router.post('/', async(req,res)=>{
    const {selectedcollections}= req.body;
    var categoriesList=[]
    try {
        const collectionList= await Collections.find({
            _id: {$in :selectedcollections}
        });
        // console.log(collectionList)
        collectionList.forEach(collection => {
            const categories= collection.categories;
            console.log(categories);
            categoriesList=[...categoriesList, ...categories]
        });
        console.log(collectionList)
        res.status(200).json({categoriesList});
    } catch (error) {
        res.status(500).json({"Message":"Internal Server Error"})
    }
  
})
module.exports=router;