// Require the express module and create a router object
const express = require("express")
const router = express.Router()

// Require the ticketController and authMiddleware modules
const { getTickets, createTicket } = require("../controllers/ticketController")
const { protect, admin } = require("../middleware/authMiddleware")

// Define routes for the Ticket API - GET and POST routes for '/'
router.route("/").get(protect, getTickets).post(protect, createTicket) // Both routes are protected by first calling the protect() middleware to ensure authentication

// Export the router object
module.exports = router