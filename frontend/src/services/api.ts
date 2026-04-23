const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const bookAppointment = async (bookingData: any) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/api/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify(bookingData),
    });
    
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong with the booking');
    }
    return data;
};

export const createOrder = async (bookingId: string) => {
    const response = await fetch(`${API_URL}/api/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingId })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error creating order');
    return data;
};

export const verifyPayment = async (paymentData: any) => {
    const response = await fetch(`${API_URL}/api/payment-success`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Payment verification failed');
    return data;
};
