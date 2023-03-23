// this code is used to create a user in the database
// the user is created using the registerUser function
// the user can also login using the loginUser function
// the user can access their account information using the getMe function
// the user must be logged in to access their account information

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
