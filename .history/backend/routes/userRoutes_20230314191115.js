const express = require("express")
const router = express.Router()
const { registerUser, loginUser } = require("../controllers/userController")

router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/me", loginUser)

module.exports = router
