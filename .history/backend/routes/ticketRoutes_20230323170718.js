const express = require("express")
const router = express.Router()

const { getTickets, getTicket, createTicket } = require("../controllers/ticketController")
const { protect, admin } = require("../middleware/authMiddleware")

// Define protected routes to ensure authentication for the Ticket API - GET and POST routes for '/'
router.route("/").get(protect, getTickets).post(protect, createTicket) 

// Export the router object
module.exports = router