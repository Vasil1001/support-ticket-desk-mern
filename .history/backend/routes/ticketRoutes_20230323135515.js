const express = require("express")
const router = express.Router()

const { protect, admin } = require("../middleware/authMiddleware")

router.route("/").get(protect, getTickets).post()
module.exports = router
