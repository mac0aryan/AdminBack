const express = require('express');
const router = express.Router();
const Inventory = require('../schemas/inventorySchema');
router.post('/', async (req, res) => {
    const { locationName, selectedCountry, address, appartment, city, state, pinCode, selectedCode, phone, fulfillmentDetails } = req.body;
    console.log(req.body)
    try {
        const newLocation = new Inventory({
            locationName,
            address: {
                selectedCountry,
                address,
                appartment,
                city,
                state,
                pinCode,
                phone: `${selectedCode} ${phone}`
            },
            fulfillmentDetails

        });
        await newLocation.save();
        res.status(200).json({ "message": "Saved Successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ "message": "Internal Server Error" })
    }
});
module.exports = router;
