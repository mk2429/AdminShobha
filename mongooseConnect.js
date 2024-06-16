const mongoose = require("mongoose");
const mongodb=async ()=>{
    await mongoose.connect("mongodb+srv://mk:Mayank%4024@cluster0.sa98hyh.mongodb.net/Shobha")
    console.log("db Connected")
}
module.exports = mongodb;
