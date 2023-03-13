const express = require("express")
const dotenv = require("dotenv").config()

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({}))

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to support desk API" })
})

// Routes
app.use("/api/users", require("./routes/userRoutes"))
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
