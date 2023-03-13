// @desc Register a new user
// @route /api/users/register
// @access Public
const registerUser = (req, res) => {
  const {}(req.body)
  res.send("Register Route")
}

// @desc Login a new user
// @route /api/users/login
// @access Public
const loginUser = (req, res) => {
  res.send("Login Route")
}

module.exports = { registerUser, loginUser }
