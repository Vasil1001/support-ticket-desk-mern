import mongoose from "mongoose";


// * Each note will be connected to a user's ticket,
// * has a title, description, priority, status, and a date
const noteSchema = mongoose.Schema(
    {
      user: {
        // ? This is related to the user that created the ticket
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      product: {
        type: String,
        required: [true, "Please select a product"],
        enum: [
          "iPhone",
          "iPad",
          "MacBook",
          "iMac",
          "Apple Watch",
          "Apple TV",
          "AirPods",
          "HomePod",
          "Accessories",
        ],
      },
      description: {
        type: String,
        required: [true, "Please enter a description of the bug or issue"],
      },
      status: {
        type: String,
        required: true,
        enum: ["open", "closed", "new", "in progress", "on hold", "resolved"],
        default: "new",
      },
    },
    {
      timestamps: true,
    }
  )
  
  module.exports = mongoose.model("Ticket", ticketSchema)
