const express = require('express');
const router = express.Router();
const { bookAppointment, getAppointments } = require('../controllers/bookingController');
const { createOrder, paymentSuccess } = require('../controllers/paymentController');
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Booking Routes
router.post('/book', bookAppointment);
router.get('/appointments', getAppointments);

// Payment Routes
router.post('/create-order', createOrder);
router.post('/payment-success', paymentSuccess);

// Auth Routes
router.post('/auth/register', register);
router.post('/auth/login', login);

module.exports = router;
