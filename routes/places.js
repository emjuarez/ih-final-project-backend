const express               = require("express")

const router                = express.Router()

const placesController      = require("./../controllers/placesController")


router.post("/create", placesController.createPlace)
router.get("/", placesController.getPlaces)
router.get("/culture", placesController.getCulture)
router.get("/food", placesController.getFood)
router.get("/nightlife", placesController.getNight)
router.get("/outdoors", placesController.getOut)
router.get("/other", placesController.getOther)

module.exports = router