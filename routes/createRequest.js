const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  cname: String,
  cnumber: Number,
  address: String,
  appliance: String,
  description: String,
  requestDate: { type: Date, default: Date.now }  // New field to store the request date
});
const serviceModel = mongoose.model("service", serviceSchema);

router.post("/createrequest",async (req, res) => {
  try {
    const { cname, cnumber,address,appliance,description } = req.body;
    await serviceModel.create({
        cname,
        cnumber,
        address,
        appliance,
        description
    });
    res.json({ success: true });
  } catch (err) {
    console.log("Error from CreateService", err);
    res.json({ success: false });
  }
});

module.exports = router;
