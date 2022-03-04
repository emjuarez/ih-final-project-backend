const async = require("hbs/lib/async")
const Place = require("./../models/Place")

exports.createPlace = async (req, res) => {

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

exports.getPlaces = async (req, res) => {

    const allPlaces = await Place.find({})

    res.json({
        msg: "Se han obtenido los lugares",
        data: allPlaces
    })

}