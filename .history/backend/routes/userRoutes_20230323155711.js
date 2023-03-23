// Require the express module
const express = require("express")

// Create a router object to handle routes
const router = express.Router()

// Require userController and authMiddleware modules
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController")
const { protect } = require("../middleware/authMiddleware")

// Define routes for registering, logging in, and getting user information
router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/me", protect, getMe)

// Export the router object
module.exports = router