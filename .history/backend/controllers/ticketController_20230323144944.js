const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const Ticket = require("../models/ticketModel")

// @desc Get user tickets
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user._id)
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error("User not found")
  } 

  const tickets = await Ticket.find({user:})
  res.status(200).json({ message: "getTickets" })
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