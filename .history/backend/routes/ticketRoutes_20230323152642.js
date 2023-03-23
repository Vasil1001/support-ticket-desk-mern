const express = require("express")
const router = express.Router()
const { getTickets, createTicket } = require("../controllers/ticketController")
const { protect, admin } = require("../middleware/authMiddleware")

// @desc    Fetch all tickets
// @route   GET /api/tickets
// @access  Private/Admin
router.route("/").get(protect, admin, getTickets)

// @desc    Create a ticket
// @route   POST /api/tickets
// @access  Private/Admin
router.route("/").post(protect, admin, createTicket)

module.exports = router
