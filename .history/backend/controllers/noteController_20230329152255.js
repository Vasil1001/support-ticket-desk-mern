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

  if (ticket.user.toString() !== req.user.id) {
    res.status(401) // ? Unauthorized
    throw new Error("User not authorized")
  }

  const notes = await Note.find({ticket: req.params.ticketId})
  res.status(200).json(notes) // ? JSON response send tickets
})

// @desc Create ticket note
// @route POST /api/tickets:ticketId/notes
// @access Private
const addNotes = asyncHandler(async (req, res) => {
    // * Get user using the id in the JWT
    const user = await User.findById(req.user._id)
  
    if (!user) {
      res.status(401)
      throw new Error("User not found")
    }
  
    // * Get single selected ticket from user
    const ticket = await Ticket.findById(req.params.ticketId) //get from url
  
    if (ticket.user.toString() !== req.user.id) {
      res.status(401) // ? Unauthorized
      throw new Error("User not authorized")
    }
  
    const note = await Note.create({ 
        text: req.body.text,
        isStaff: false,
        user:
        ticket: req.params.ticketId,
    })
    res.status(200).json(notes) // ? JSON response send tickets
  })

  
modules.exports = {
    getNotes
}