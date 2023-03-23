const mongoose = require('mongoose');

// * Each ticket will be connected to a user, 
// * has a title, description, priority, status, and a date
const ticketSchema = mongoose.Schema({
    user: { // ? This is the user that created the ticket
        type: mongoose.Schema.Types.ObjectId
    },
})