// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
router.post("/", registerUser)

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
router.post("/login", loginUser)

// @desc      Get current logged in user
// @route     GET /api/v1/auth/me
// @access    Private
router.get("/me", protect, getMe)


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
