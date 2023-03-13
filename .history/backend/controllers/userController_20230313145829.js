// @desc Register a new user
// @route POST /api/v1/auth/register
const registerUser = (req, res) => {
  res.send("Register Route")
}

const loginUser = (req, res) => {
  res.send("Login Route")
}

module.exports = { registerUser, loginUser }
