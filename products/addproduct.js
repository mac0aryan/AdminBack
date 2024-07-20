const express = require('express');
const router = express.Router();
const Products = require('../schemas/productSchema');
const { uploadMultiple } = require('../mediaHandler/uploadMultiple');

router.post('/', uploadMultiple, async (req, res) => {
    const { title, generalInfo, offerPrice, MRP, SKU, trackQuantity, continueselling,committed, status, brandName, material, finishType, color, style, weight, dimension, productType, vendor } = req.body;
    const inventories= JSON.parse(req.body.inventories);
    const  specialities= JSON.parse(req.body.specialities);
    const damaged= JSON.parse(req.body.damaged);
    const qualityControl= JSON.parse(req.body.qualityControl);
    const saftey= JSON.parse(req.body.saftey);
    const other= JSON.parse(req.body.other);
    const available= JSON.parse(req.body.available);
    const collections= JSON.parse(req.body.collections);
    if (req.files) {
        const imagesPath = req.files.map((image, index) => ({preview:`/assets/uploads/products/${image.originalname}`}));
        try {

            const inventory = inventories.map((inventory, index) => ({
                locationName: inventory.locationName,
                quantity: {
                    unavailable: {
                        damages: Number(damaged[index]),
                        qualityControl: Number(qualityControl[index]),
                        safetyStock: Number(saftey[index]),
                        other: Number(other[index])
                    },
                    committed: Number(committed),
                    available: Number(available[index])
                }
            }));
            const newProduct = new Products({
                title,
                images:imagesPath,
                description: {
                    specialities, generalInfo
                },
                pricing: {
                    offerPrice,
                    MRP
                },
                SKU,
                trackQuantity,
                continueSellingStockWhenOutOfStock:continueselling,
                inventory,
                status,
                additionalInfo: {
                    brandName,
                    material,
                    finishType,
                    color,
                    style,
                    weight,
                    dimension
                },
                productOrganization: {
                    productType,
                    vendor,
                    collections
                }
            })
            await newProduct.save();
            res.status(200).json({ "message": "Set Successsfully" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ "message": "database Error" })
        }
    }
    else {
        res.status(500).json({ "message": "internal server error" });
    }
});
module.exports = router;