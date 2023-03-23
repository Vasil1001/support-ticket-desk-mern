const express = require("express")
const router = express.Router()

const {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController")
const { protect, admin } = require("../middleware/authMiddleware")

// Define protected routes to ensure authentication for the Ticket API
// GET and POST routes for '/'
router.route("/")
.get(protect, getTickets)
.post(protect, createTicket)

router.route("/:id")
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket)

module.exports = router // * Export the router object
