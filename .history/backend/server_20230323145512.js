const express = require("express") // Import express
const colors = require("colors") // Import colors
const dotenv = require("dotenv").config() // Import dotenv
const { errorHandler } = require("./middleware/errorMiddleware") // Import custom error handler
const connectDB = require("./config/db") // Import database connection

var cors = require('cors') // Import cors

const port = process.env.PORT || 8080 // Set port
const app = express() // Initialize express

// * Connect to database
connectDB() // Connect to database

app.use(express.json()) // Use json parser
app.use(express.urlencoded({ extended: false })) // Use urlencoded parser
app.use(cors()) // Use cors

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to support desk API" })
}) // Set root route

// * Routes
app.use("/api/users", require("./routes/userRoutes")) // Use user routes
app.use("/api/tickets", require("./routes/ticketRoutes")) // Use ticket routes

app.use(errorHandler) // Use custom error handler

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
}) // Listen to port