const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const Ticket = require("../models/ticketModel")

// @desc Get user tickets
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
  // * Get user using the id in the JWT
  const user = await User.findById(req.user._id)
  if (!user) {
    res.status(401)
    throw new Error("User not found")
  }

  // * Get tickets for the user
  const tickets = await Ticket.find({ user: req.user.id })
  if (!tickets) {
    res.status(404)
    throw new Error("Tickets not found")
  }
  res.status(200).json(tickets) // ? JSON response send tickets
})

// ?@desc Get SIGNLE user tickets
// ?@route GET /api/tickets
// ?@access Private
const getTickets = asyncHandler(async (req, res) => {
  // * Get user using the id in the JWT
  const user = await User.findById(req.user._id)
  if (!user) {
    res.status(401)
    throw new Error("User not found")
  }

  // * Get tickets for the user
  const tickets = await Ticket.find({ user: req.user.id })
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
  const { product, description } = req.body

  // * Check if there is a product and description, if not - throw an error
  if (!product || !description) {
    res.status(400)
    throw new Error("Please add product and description")
  }

  // * Get user using the id in the JWT
  const user = await User.findById(req.user._id)
  if (!user) {
    res.status(401)
    throw new Error("User not found")
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: "new",
  })

  res.status(201).json(ticket)
})

module.exports = {
  getTickets,
  createTicket,
}
