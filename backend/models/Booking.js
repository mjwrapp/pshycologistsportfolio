const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: String, // e.g., 'YYYY-MM-DD'
        required: true,
    },
    time: {
        type: String, // e.g., '14:00'
        required: true,
    },
    message: {
        type: String,
        default: '',
    },
    amount: {
        type: Number,
        required: true,
    },
    duration: {
        type: String,
        required: true,
        enum: ['30min', '60min']
    },
    mode: {
        type: String,
        required: true,
        enum: ['video', 'audio', 'chat']
    },
   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
   
    paymentStatus: {
        type: String,
        enum: ['pending', 'success'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Booking', bookingSchema);
