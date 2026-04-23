const API_URL = "http://localhost:5000";

// 📌 BOOK APPOINTMENT
export const bookAppointment = async (data: any) => {
  const response = await fetch(`${API_URL}/api/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Booking failed");
  }

  return result;
};

// 📌 GET ALL APPOINTMENTS (optional)
export const getAppointments = async () => {
  const response = await fetch(`${API_URL}/api/appointments`);
  const result = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch appointments");
  }

  return result;
};