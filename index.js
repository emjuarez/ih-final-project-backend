
const express		= require("express")
const app			= express()
const connectDB		= require("./config/db")
const cors			= require("cors")


require("dotenv").config()
connectDB()

app.use(cors())

app.use(express.json({extended: true}))

app.use("/api/users", require("./routes/users"))
app.use("/api/places", require("./routes/places"))
app.use("/", require("./routes/index"))


app.listen(process.env.PORT, () => console.log(`Servidor activo en puerto ${process.env.PORT}`))