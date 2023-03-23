const asyncHandler = require('express-async-handler');
const User = require('..models/userModel')
const Ticket = require('..models/ticketModel')

// @desc Get current User
// @route /api/users/me
// @access Private