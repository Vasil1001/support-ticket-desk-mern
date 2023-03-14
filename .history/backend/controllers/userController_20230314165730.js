const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")

const User = require('../models/userModel')
// @desc Register a new user
// @route /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  // Validation & Error Handling
  if (!name || !email || !password) {
    res.status(400)
    throw new Error("Please fill in all fields")
  }

  // Find if user already exists
  const userExists = await User.findOne({email})

  if(userExists) {
    res.status(400)
    throw new Error("User already exists")
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create User
  const user = 
  res.send("Register Route")
})

// @desc Login a new user
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route")
})

module.exports = { registerUser, loginUser }
