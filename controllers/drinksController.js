const Drink = 	require("./../models/Drink")

exports.createDrink = async (req, res) => {
	
	const { name, flavor, size } = req.body

	try {

		const newDrink = await Drink.create({
			name,
			flavor,
			size
		})
		
		res.json({
			msg: "Se ha creado una bebida correctamente."
		})

	} catch (error) {
		
		console.log(error)

		res.status(400).json({
			msg: "Se ha generado un error."
		})

	}

}


exports.getDrinks = async (req, res) => {

	const allDrinks = await Drink.find({})

	res.json({
		msg: "Se ha obtenido el listado de bebidas.",
		data: allDrinks
	})


}