const express = require("express")
const router = express.Router()

const { protect, admin } = require("../middleware/authMiddleware")

router.route("/").get(protect, getTickets).post(protect,)
module.exports = router
