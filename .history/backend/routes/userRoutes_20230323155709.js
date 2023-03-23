// registerUser and loginUser are imported from the userController.js file
// getMe is imported from the same userController.js file
// protect is imported from the authMiddleware.js file
// router.post("/login", loginUser) is a post request that takes in the username and password and logs the user in
// router.get("/me", protect, getMe) is a get request that gets the user that is currently logged in
// router.post("/", registerUser) is a post request that takes in the username, email, password, and password confirmation and registers the user

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
