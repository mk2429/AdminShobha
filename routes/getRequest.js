const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/getrequest",async (req,res)=>{
    try{
        const requestCollection = await mongoose.connection.db.collection("services");
        const data = await requestCollection.find({}).toArray();


    res.send(data)
    }catch(err){
        console.log(err)
        res.send("Server Error Cant find requests services")
    }
    })
    module.exports=router