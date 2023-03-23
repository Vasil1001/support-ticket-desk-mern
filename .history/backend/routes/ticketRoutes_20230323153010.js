// @desc Get all tickets
// @route GET /api/tickets
// @access Private/Admin
router.route("/").get(protect, getTickets).post(protect, createTicket)

// @desc Create a ticket
// @route POST /api/tickets
// @access Private/Admin
router.route("/").get(protect, getTickets).post(protect, createTicket)


const express = require("express")
const router = express.Router()
const { getTickets, createTicket } = require("../controllers/ticketController")
const { protect, admin } = require("../middleware/authMiddleware")

router.route("/").get(protect, getTickets).post(protect, createTicket)

module.exports = router
