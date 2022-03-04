const express               = require("express")

const router                = express.Router()

const placesController      = require("./../controllers/placesController")


router.post("/create", placesController.createPlace)
router.get("/", placesController.getPlaces)


module.exports = router