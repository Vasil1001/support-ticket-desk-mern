const express = require("express")
const router = express.Router()

const { getTickets, createTicket } = require("../controllers/ticketController")
const { protect, admin } = require("../middleware/authMiddleware")

// Define routes for the Ticket API - GET and POST routes for '/'
// Both routes are protected by first calling the protect() middleware to ensure authentication
router.route("/").get(protect, getTickets).post(protect, createTicket) 

// Export the router object
module.exports = router