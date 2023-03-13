const express = require("express")
const router = express.Router()
const {registerUser, loginUser} = require("../controllers/userController")

router.post("/", registerUser )

router.post("/login", (req, res) => {
    res.send("Login")
  })

module.exports = router
