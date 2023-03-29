const express = require("express")
const router = express.Router({ mergeParams: true })
const { getNotes } = require('../controllers/noteController')

const { protect } = require("../middleware/authMiddleware")

const noteRouter = require("./noteRoutes")
router.use()
router.route("/")
    .get(protect, getNotes)

module.exports = router