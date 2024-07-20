const express= require('express');
const router= express.Router();
const {upload}= require('../mediaHandler/uploadToSite');

router.post('/',upload, async(req,res)=>{
    // console.log(req.file)
    if(req.file){
        res.status(200).json({"Message":"File Uploaded Successfully"});
    }

    else{
        res.status(500).json({"Message":"Internal Server Error Occured"});
    }
});
module.exports= router