const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
    }
}) 