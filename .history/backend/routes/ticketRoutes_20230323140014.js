const express = require("express")
const router = express.Router()
const {} = require
const { protect, admin } = require("../middleware/authMiddleware")

router.route("/").get(protect, getTickets).post(protect, createTicket)
module.exports = router
