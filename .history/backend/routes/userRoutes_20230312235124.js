const express = require("express")
const router = express.Router()

router.post("/", (req, res) => {
  res.send("Register Route")
})

router.post("/", (req, res) => {
    res.send("Login")
  })

module.exports = router
