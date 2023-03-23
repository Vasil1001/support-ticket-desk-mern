const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const Ticket = require("../models/ticketModel")

// @desc Get user tickets
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
  const user = await getUser(req.user._id)
  const tickets = await getTicketsForUser(user)
  res.status(200).json(tickets)
})

getUser = asyncHandler(async (userId) => {
  const user = await User.findById

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