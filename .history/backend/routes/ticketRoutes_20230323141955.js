const express = require("express")
const router = express.Router()
const { getTickets, createTicket } = require("../controllers/ticketController")
const { protect, admin } = require("../middleware/authMiddleware")

f
router.route("/").get(protect, getTickets).post(protect, createTicket)
module.exports = router