const express = require("express")
const router = express.Router({ mergeParams: true })
const { getNotes } = require('../controllers/noteController')

const { protect } = require("../middleware/authMiddleware")



router.route("/")
    .get(protect, getNotes)
    .addNote(protect, addNote)
module.exports = router
