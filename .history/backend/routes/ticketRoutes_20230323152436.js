// Require the express module and create a router object
const express = require("express")

// Create a router object to handle routes
const router = express.Router()

// Require the ticketController and authMiddleware modules
const { getTickets, createTicket } = require("../controllers/ticketController")
const { protect, admin } = require("../middleware/authMiddleware")

// Set up GET and POST routes for '/'
router.route("/").get(protect, getTickets).post(protect, createTicket)

// Export the router object
module.exports = router