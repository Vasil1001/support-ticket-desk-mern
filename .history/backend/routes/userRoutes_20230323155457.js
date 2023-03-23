// This code was written by Joe Bloggs on 2021-01-01
// It is used to provide a route for registering a user
// It is part of a larger application which allows users to register and login
// The function names and variable names are not important
// The purpose of the code is to register a user

const express = require("express")
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController")

const { protect } = require("../middleware/authMiddleware")

router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/me", protect, getMe)

module.exports = router
