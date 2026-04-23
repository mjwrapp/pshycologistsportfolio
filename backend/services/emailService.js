const nodemailer = require('nodemailer');

const sendEmailNotification = async (bookingDetails) => {
    try {
        console.log("🔍 Checking ENV...");
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌");

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // ✅ Verify connection FIRST
        await transporter.verify();
        console.log("✅ Gmail server is ready to send emails");

        const { name, date, time, message, amount } = bookingDetails;

        const mailOptions = {
            from: `"Booking System" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // you can change this later
            subject: 'New Appointment Booking Confirmation',
            html: `
                <h3>New Appointment Booked</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Amount Paid:</strong> ₹${amount}</p>
                <p><strong>Message:</strong> ${message || 'No message provided'}</p>
            `,
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("📨 Email SENT SUCCESSFULLY!");
        console.log(info);

        return true;

    } catch (error) {
        console.error("❌ EMAIL ERROR FULL DETAILS:");
        console.error(error);

        if (error.code === 'EAUTH') {
            console.log("👉 Problem: Gmail authentication failed");
            console.log("👉 Fix: Use APP PASSWORD, not your normal password");
        }

        if (error.code === 'ECONNECTION') {
            console.log("👉 Problem: Network or Gmail blocked connection");
        }

        return false;
    }
};

module.exports = { sendEmailNotification };