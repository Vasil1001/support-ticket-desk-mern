// @desc Register a new user
// @route /api/users
// @access Public
const registerUser = (req, res) => {
  res.send("Register Route")
}

const loginUser = (req, res) => {
  res.send("Login Route")
}

module.exports = { registerUser, loginUser }
