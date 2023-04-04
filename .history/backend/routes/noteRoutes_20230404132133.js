const express = require("express")
const router = express.Router({ mergeParams: true })
const { getNotes, addNote } = require('../controllers/noteController')

const path = require('path')
const express = require('express')
require('colors')
require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000
const { protect } = require("../middleware/authMiddleware")

router.route("/")
    .get(protect, getNotes)
    .post(protect, addNote)

module.exports = router
