const express = require("express")
const router = express.Router()
const { getTickets, createTicket } = require("../controllers/ticketController")
const { protect, admin } = require("../middleware/authMiddleware")

// Compare this snippet from backend\routes\ticketRoutes.js:
router.route("/").get(protect, getTickets).post(protect, createTicket)
module.exports = router

// function to add two numbers in js
function add(a, b) {
  return a + b
}