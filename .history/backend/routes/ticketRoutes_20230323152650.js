const express = require("express")
const router = express.Router()
const { getTickets, createTicket } = require("../controllers/ticketController")
const { protect, admin } = require("../middleware/authMiddleware")

// Define the routes for the ticket endpoint
router.route("/").get(protect, getTickets).post(protect, createTicket)

module.exports = router
