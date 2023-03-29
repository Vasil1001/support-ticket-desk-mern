const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")

var cors = require('cors')

// * Initialize port and express
const port = process.env.PORT || 8080 
const app = express()

connectDB() // * Connect to database

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// * Welcome route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to support desk API" })
})

// * Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/tickets", require("./routes/ticketRoutes"))

// Serve Frontend
if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join"frontend/build"))
}

// * Error handling middleware
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
