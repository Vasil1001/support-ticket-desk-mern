const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const Ticket = require("../models/ticketModel")

// @desc Get user tickets
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user._id)
  if (!user) {
    res.status(401)
    throw new Error("User not found")
  } 

  const tickets = await Ticket.find({user: req.user.id})
  if (!tickets) {
    res.status(404)
    throw new Error("Tickets not found")
  }
  res.status(200).json(tickets) // ? JSON response send tickets
})

// @desc Create user tickets
// @route POST /api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "createTickets" })
  })

  module.exports = {
    getTickets,
    createTicket,
  }