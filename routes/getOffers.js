const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/getoffers",async (req,res)=>{
    try{
        const offerCollection = await mongoose.connection.db.collection("offers");
        const data = await offerCollection.find({}).toArray();


    res.send(data)
    }catch(err){
        console.log(err)
        res.send("Server Error Cant find offer")
    }
    })
    module.exports=router