const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/getrates",async (req,res)=>{
    try{
        const ratesCollection = await mongoose.connection.db.collection("rates");
        const data = await ratesCollection.find({}).toArray();


    res.send(data)
    }catch(err){
        console.log(err)
        res.send("Server Error Cant find Rates")
    }
    })
    module.exports=router