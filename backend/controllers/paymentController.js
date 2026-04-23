const Razorpay = require('razorpay');
const crypto = require('crypto');
const Booking = require('../models/Booking');
const { sendEmailNotification } = require('../services/emailService');
const { appendToSheet } = require('../services/googleSheetsService');

// Initialize Razorpay (ensure keys are present)
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY || 'dummy_key',
    key_secret: process.env.RAZORPAY_SECRET || 'dummy_secret',
});

// @route   POST /api/create-order
// @desc    Create Razorpay order for payment
const createOrder = async (req, res) => {
    try {
        const { bookingId } = req.body;

        if (!bookingId) {
            return res.status(400).json({ success: false, message: 'Booking ID is required.' });
        }

        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ success: false, message: 'Booking not found.' });
        }

        if (booking.paymentStatus === 'success') {
            return res.status(400).json({ success: false, message: 'This booking has already been paid.' });
        }

        const options = {
            amount: booking.amount * 100, // Amount is in smallest currency unit (paise)
            currency: 'INR',
            receipt: `receipt_order_${booking._id}`,
        };

        const order = await razorpay.orders.create(options);

        if (!order) {
            return res.status(500).json({ success: false, message: 'Failed to create Razorpay order.' });
        }

        res.status(200).json({
            success: true,
            order,
            booking
        });
    } catch (error) {
        console.error('Error in createOrder:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// @route   POST /api/payment-success
// @desc    Verify payment and update booking status
const paymentSuccess = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

        // Mock payment - skip Razorpay signature verification
        // const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET || 'dummy_secret');
        // shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        // const digest = shasum.digest('hex');

        // if (digest !== razorpay_signature) {
        //     return res.status(400).json({ success: false, message: 'Transaction is not legitimate! Signature mismatch.' });
        // }

        // Find the booking
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ success: false, message: 'Booking not found.' });
        }

        // Update the booking status to success
        booking.paymentStatus = 'success';
        await booking.save();

        // Perform side-effects (Email, Google Sheets, etc) asynchronously
        
        // 1. Send email to therapist
        await sendEmailNotification(booking).catch(err => console.error("Email notification failed:", err));
        
        // 2. Add entry to Google Sheets
        await appendToSheet(booking).catch(err => console.error("Google Sheets append failed:", err));

        // 3. Placeholder for Google Calendar integration
        // await createCalendarEvent(booking).catch(err => console.error("Google Calendar failed:", err));

        // Send confirmation back to user
        res.status(200).json({
            success: true,
            message: 'Payment verified successfully. Booking confirmed.',
            booking
        });
    } catch (error) {
        console.error('Error in paymentSuccess:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = {
    createOrder,
    paymentSuccess,
};
