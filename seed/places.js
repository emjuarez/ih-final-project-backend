const mongoose = require("mongoose")
const Place = require("../models/Place")

const connectDB = require("../config/db")
require("dotenv").config()
connectDB()

const placesArray= [

    {
        "name":"Place",
        "description":"Test seeds",
        "photos":"=1920",
        "cathegory": "other",
        "location": "0726!5m2!1ses!2smx",
    },
    {
        "name":"Lugar",
        "description":"cvbcvb",
        "photos":"edia.timeout.com/images/105610227/image.jpg",
        "cathegory": "other",
        "location": "1d20684.962835811555!2d-99.14185582389277!3d19.379261810347188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fe65e0cbe7fb%3A0x8447dcef20c7c442!2zMTnCsDIyJzM1LjkiTiA5OcKwMDcnMDMuNCJX!5e0!3m2!1ses!2smx!4v1646935958881!5m2!1ses!2smx" ,
    }
   
   
]

const createPlaces = async(data) => {

    try{

        const createdPlaces = await Place.create(data)
        return mongoose.connection.close()
       
    } catch (error) {

        console.log(error)
        process.exit(1)
    }
}

createPlaces(placesArray)