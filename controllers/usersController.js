const bcryptjs = require("bcryptjs")
const jwt	= require("jsonwebtoken")

const User = require("./../models/User")



exports.create = async (req, res) => {


	const { 
		name, 
		lastname, 
		email, 
		password } = req.body


		try {
			
			const salt = await bcryptjs.genSalt(10)
			const hashedPassword = await bcryptjs.hash(password, salt)

			console.log(hashedPassword)

			
			const newUser = await User.create({
				name,
				lastname,
				email,
				password: hashedPassword
			})

			const payload = {
				user: {
					id: newUser._id
				}
			}

			
			jwt.sign(
				payload, 
				process.env.SECRET,
				{
					expiresIn: 3600000
				},
				(error, token) => {
					if (error) throw error

					res.json({
						msg: "Usuario creado con éxito",
						data: token
					})

				}
			)

		} catch (error) {
			console.log(error)

			res.json({
				msg: "Hubo un error en el proceso de creación del usuario."
			})

		}


}


exports.login = async (req, res) => {

	const { email, password } = req.body

	try {
		
		const foundUser = await User.findOne({ email })

		if(!foundUser) {
			return res.json({
				msg: "El usuario no fue encontrado."
			})
		}

		const verifiedPass = await bcryptjs.compare(password, foundUser.password)


		if(!verifiedPass){
			return await res.json({
				msg: "El usuario o la contraseña no coinciden"
			})
		}

		const payload = {
			user: {
				id: foundUser._id
			}
		}

		jwt.sign(
			payload,
			process.env.SECRET,
			{
				expiresIn: 3600000
			},
			(error, token) => {
				if(error) throw error


				res.json({
					msg: "Inicio de sesión exitoso.",
					data: token
				})

			}
		)

		return

	} catch (error) {

		console.log(error)

		res.json({
			msg: "Hubo un problema con la autenticación."
		})
		
	}


}


exports.verifyToken = async (req, res) => {

	console.log(req.user)

	try {
		
		const foundUser = await User.findById(req.user.id).select("-password")


		return res.json({
			msg: "Datos de usuario encontrados.",
			data: foundUser
		})

	} catch (error) {
		console.log(error)

		res.json({
			msg: "Hubo un error actualizando el usuario."
		})

	}

 
}