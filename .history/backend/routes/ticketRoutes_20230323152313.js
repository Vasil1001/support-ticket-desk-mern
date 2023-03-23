// Importing the express module and creating a Router instance.
const express = require("express")
const router = express.Router()

// Importing two functions getTickets and createTicket from ticketController.js file in controllers folder.
const { getTickets, createTicket } = require("../controllers/ticketController")

// Importing protect and admin middlewares to authenticate user in authMiddleware.js file in middleware folder.
const { protect, admin } = require("../middleware/authMiddleware")

// Defining the API routes with their respective HTTP methods and function calls to be executed.
router.route("/").get(protect, getTickets).post(protect, createTicket)

// Exporting the router object to make the routes available to other parts of the application.
module.exports = router
