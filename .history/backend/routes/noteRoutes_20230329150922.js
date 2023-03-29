const express = require("express")
const router = express.Router({ mergeParams: true })
const { getNotes } = require('../controllers/noteController')

const { protect } = require("../middleware/authMiddleware")

// * Re-route into note router
const noteRouter = require("./noteRoutes")
router.use('/:ticketId/notes', noteRouter)

router.route("/")
    .get(protect, getNotes)

module.exports = router
