const mongoose = require("mongoose")

const drinksSchema = mongoose.Schema({
		name: {
			type: String,
			required: true,
			unique: true
		},
		flavor: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			required: true,
		}
	}, {
		timestamps: true
	}
)

const Drink = mongoose.model("Drink", drinksSchema)

module.exports = Drink