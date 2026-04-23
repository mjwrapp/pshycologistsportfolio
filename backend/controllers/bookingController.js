const Booking = require('../models/Booking');

// @route   POST /api/book
// @desc    Accept booking details, check slot availability, and create pending booking
const bookAppointment = async (req, res) => {
    try {
        const { name, email, date, time, message, duration, mode } = req.body;

        // Validation
        if (!name || !email || !date || !time || !duration || !mode) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
        }

        if (!['30min', '60min'].includes(duration)) {
            return res.status(400).json({ success: false, message: 'Invalid duration.' });
        }

        if (!['video', 'audio', 'chat'].includes(mode)) {
            return res.status(400).json({ success: false, message: 'Invalid mode.' });
        }

        // Recalculate amount in backend
        let basePrice = mode === 'video' ? 500 : 300;
        let finalAmount = duration === '60min' ? basePrice * 2 : basePrice;

        // Check if slot is already booked (same date + time with paymentStatus = 'success')
        const existingBooking = await Booking.findOne({ date, time, paymentStatus: 'success' });
        
        if (existingBooking) {
            return res.status(400).json({ success: false, message: 'This slot is already booked. Please choose a different time.' });
        }

        // Create booking with paymentStatus 'pending'
        const booking = new Booking({
            name,
            email,
            date,
            time,
            message,
            amount: finalAmount,
            duration,
            mode,
     paymentStatus: 'pending',
        });

        await booking.save();

        res.status(201).json({
            success: true,
            message: 'Booking initiated. Please proceed to payment.',
            booking
        });

    } catch (error) {
        console.error('Error in bookAppointment:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// @route   GET /api/appointments
// @desc    Return all bookings sorted by date and time
const getAppointments = async (req, res) => {
    try {
        const appointments = await Booking.find()
            .sort({ date: 1, time: 1 }) // sort by date ascending, then time ascending
            .exec();
            
        res.status(200).json({ success: true, count: appointments.length, data: appointments });
    } catch (error) {
        console.error('Error in getAppointments:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = {
    bookAppointment,
    getAppointments,
};
