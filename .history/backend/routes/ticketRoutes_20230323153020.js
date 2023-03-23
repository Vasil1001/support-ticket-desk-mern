const express = require("express")
const router = express.Router()
const {
  getTicketById,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticketController")
const { protect, admin } = require("../middleware/authMiddleware")

router.route("/:id").get(protect, getTicketById).put(protect, updateTicket).delete(protect, admin, deleteTicket)

module.exports = router
