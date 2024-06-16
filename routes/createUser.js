const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uname: String,
  unumber:Number,
  uaddress: String,
  role:String
});
const userModel = mongoose.model("user", userSchema);

router.post("/createuser",async (req, res) => {
  try {
    const { uname, unumber,uaddress,role} = req.body;
    await userModel.create({
        uname,
        unumber,
        uaddress,
        role
    });
    res.json({ success: true });
  } catch (err) {
    console.log("Error from Createuser", err);
    res.json({ success: false });
  }
});

module.exports = router;
