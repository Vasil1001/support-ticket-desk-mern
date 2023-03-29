const mongoose = require("mongoose")
// * Each note will be connected to a user's ticket
const noteSchema = mongoose.Schema(
  {
    user: {
      // ? This is related to the user that created the ticket
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    ticket: {
      // ? This is related to the selected ticket
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Ticket",
    },
    text: {
      type: String,
      required: [true, "Please add some text"],
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    staffId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Note", noteSchema)
