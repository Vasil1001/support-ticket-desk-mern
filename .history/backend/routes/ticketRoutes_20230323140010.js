const express = require("express")
const router = express.Router()
const 
const { protect, admin } = require("../middleware/authMiddleware")

router.route("/").get(protect, getTickets).post(protect, createTicket)
module.exports = router
