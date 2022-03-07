const express               = require("express")

const router                = express.Router()

const placesController      = require("./../controllers/placesController")


router.post("/create", placesController.createPlace)
router.get("/", placesController.getPlaces)
router.get("/place/:id", placesController.getPlace)
router.get("/culture", placesController.getCulture)
router.get("/food", placesController.getFood)
router.get("/night_life", placesController.getNight)
router.get("/outdoors", placesController.getOut)
router.get("/other", placesController.getOther)
router.post("/delete/:id", placesController.deletePlace)

module.exports = router