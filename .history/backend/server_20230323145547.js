const express = require("express")
const { protect, admin } = require("../middleware/authMiddleware")
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController")

const router = express.Router()

router.post("/login", loginUser)
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile)
router.route("/").post(registerUser).get(protect, admin, getAllUsers)
router
  .route("/:id")
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser)

module.exports = router
