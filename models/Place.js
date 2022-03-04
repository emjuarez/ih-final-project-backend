const mongoose = require("mongoose")

const placesSchema = mongoose.Schema({
 name:{
    type: String,
    required: true,
    unique: true
 },
 description:{
    type: String,
    required: true,
 },
 photos:{
     type: String,
 },
 cathegory:{
    type: String,
    enum: ["culture", "food", "night life", "outdoors", "other"]

 },
 location:{
    type: String
 }
    
})

const Place = mongoose.model("Place", placesSchema)

module.exports = Place