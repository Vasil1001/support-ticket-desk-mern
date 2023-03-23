const asyncHandler = require("express-async-handler")
const User = require("..models/userModel")
const Ticket = require("..models/ticketModel")

// @desc Get user tickets
// @route /api/tickets/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
  }
  res.status(200).json(user)
})
