const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.post("/setrates", async (req, res) => {
    try {
        const ratesCollection = await mongoose.connection.db.collection("rates");
        const id = req.body.id; 
        console.log(id);
        const data = await ratesCollection.updateOne({ id:id },{ $set: { rate :req.body.rate} });
       

        res.json({success:true})
    } catch (err) {
        console.log(err)
        res.send("Server Error Cant update rate")
    }
})
module.exports = router