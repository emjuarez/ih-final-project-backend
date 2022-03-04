const express		= require("express")
const router		= express.Router()

const drinksController =	require("./../controllers/drinksController")


// http://localhost:3005/api/drinks/
router.post("/", drinksController.createDrink)
router.get("/", drinksController.getDrinks)


module.exports = router