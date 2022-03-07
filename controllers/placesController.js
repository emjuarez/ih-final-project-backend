const async = require("hbs/lib/async")
const Place = require("./../models/Place")

exports.createPlace   = async (req, res) => {

    const { name, description, photos, cathegory, location } = req.body

    try{

        const newPlace = await Place.create({
            name,
            description,
            photos,
            cathegory,
            location
        })

        res.json({
            msg: "Se ha crado un lugar"
        })

    } catch (error){

        console.log(error)

        res.status(400).json({
            msg: "Se ha generado un error"
        })
    }
}

exports.getPlaces     = async (req, res) => {

    const allPlaces = await Place.find({})

    res.json({
        msg: "Se han obtenido los lugares",
        data: allPlaces
    })

}

exports.getPlace      = async (req,res) =>{

    const { id } = req.params

    

    const place = await Place.findById(id)

    res.json({
        msg:"Se ha obtenido el lugar",
        data: place
    })
}

exports.getCulture    = async (req, res) =>{

    
    const culturePlaces =  await Place.find({cathegory:"culture"})

    res.json({
        msg:"Se han obtenido los lugares de cultura",
        data: culturePlaces
    })
}

exports.getFood       = async (req, res) => {

    const culturePlaces =  await Place.find({cathegory:"food"})

    res.json({
        msg:"Se han obtenido los lugares de comida",
        data: culturePlaces
    })
}

exports.getNight      = async (req, res) => {

    const culturePlaces =  await Place.find({cathegory:"night life"})

    res.json({
        msg:"Se han obtenido los lugares de vida nocturna",
        data: culturePlaces
    })
}

exports.getOut        = async (req, res) => {

    const culturePlaces =  await Place.find({cathegory:"outdoors"})

    res.json({
        msg:"Se han obtenido los lugares de outdoors",
        data: culturePlaces
    })
}

exports.getOther      = async (req, res) => {

    const culturePlaces =  await Place.find({cathegory:"other"})

    res.json({
        msg:"Se han obtenido los lugares de other",
        data: culturePlaces
    })
}