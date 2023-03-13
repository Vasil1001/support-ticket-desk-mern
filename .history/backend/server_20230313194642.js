const express = require("express")
const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to support desk API" })
})

// Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
