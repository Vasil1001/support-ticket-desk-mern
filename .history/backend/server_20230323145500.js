const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")

var cors = require('cors')

const port = process.env.PORT || 8080
const app = express()

// Connect to database
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to support desk API" })
})

// * Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/tickets", require("./routes/ticketRoutes"))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
