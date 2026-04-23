const { google } = require('googleapis');

const appendToSheet = async (bookingDetails) => {
    try {
        // Initialize Google Auth client
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                // Ensure proper formatting of private key by replacing literal "\n" strings with actual newlines
                private_key: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') : '',
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const { name, email, date, time, message, amount, paymentStatus, createdAt } = bookingDetails;
        
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:H', // Adjust range if sheet name or structure differs
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        name,
                        email,
                        date,
                        time,
                        message,
                        amount,
                        paymentStatus,
                        new Date(createdAt).toISOString()
                    ]
                ],
            },
        });

        console.log('Appointment data successfully added to Google Sheets');
        return response;
    } catch (error) {
        console.error('Error appending to Google Sheets:', error);
        // We log the error but don't strictly throw it out so main request doesn't fail 
        // if only Google Sheets fails.
    }
};

module.exports = {
    appendToSheet,
};
