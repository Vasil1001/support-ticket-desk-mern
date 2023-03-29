const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const Note = require("../models/noteModel")
const Ticket = require("../models/ticketModel")

// @desc Get notes for a  ticket
// @route GET /api/tickets:ticketId/notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  // * Get user using the id in the JWT
  const user = await User.findById(req.user._id)

  if (!user) {
    res.status(401)
    throw new Error("User not found")
  }

  // * Get single selected ticket from user
  const ticket = await Ticket.findById(req.params.ticketId) //get from url

  if (!ticket) {
    res.status(404)
    throw new Error("Tickets not found")
  }
  res.status(200).json(tickets) // ? JSON response send tickets
})