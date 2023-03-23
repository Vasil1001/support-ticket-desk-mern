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

// @desc Get a single user ticket
// @route GET /api/tickets/:id
// @access Private
const getTicket = asyncHandler(async (req, res) => {
  // * Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error("User not found")
  }

  // * Get tickets for the user
  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(404)
    throw new Error("Ticket not found")
  }

  // Check if user is authorized to access this ticket
  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("Not authorized")
  }
  res.status(200).json(ticket) // ? JSON response send ticket
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

// @desc Delete ticket
// @route DELETE /api/tickets/:id
// @access Private
const deleteTicket = asyncHandler(async (req, res) => {
  // * Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error("User not found")
  }

  // * Get tickets for the user
  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(404)
    throw new Error("Ticket not found")
  }

  // Check if user is authorized to access this ticket
  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("Not authorized")
  }

  await ticket.remove()

  res.status(200).json({success: true}) // ? JSON response send ticket
})


module.exports = {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
}
