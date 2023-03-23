const express = require("express")
const router = express.Router()
const { getTickets, createTicket } = require("../controllers/ticketController")
const { protect, admin } = require("../middleware/authMiddleware")

// Express server on port 3000
router.route("/").get(protect, getTickets).post(protect, createTicket)
module.exports = router
