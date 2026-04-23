import { useState } from 'react';
import type { FormEvent } from 'react';

interface BookingFormProps {
  selectedPackage: string;
  setSelectedPackage: (value: string) => void;
  selectedSession: string;
  setSelectedSession: (value: string) => void;
  selectedMode: string;
  setSelectedMode: (value: string) => void;
}

export default function BookingForm({
  selectedPackage,
  setSelectedPackage,
  selectedSession,
  setSelectedSession,
  selectedMode,
  setSelectedMode,
}: BookingFormProps) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    datetime: '',
    message: '',
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const validate = () => {
    const validationErrors: string[] = [];
    if (!formValues.name.trim()) validationErrors.push('Name is required.');
    if (!formValues.email.trim()) validationErrors.push('Email is required.');
    if (!formValues.phone.trim()) validationErrors.push('Phone is required.');
    if (!formValues.datetime.trim()) validationErrors.push('Preferred date and time are required.');
    return validationErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors([]);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-[2rem] border border-white/60 p-8 shadow-xl shadow-primary/10">
      <div className="mb-8">
        <span className="text-primary uppercase tracking-[0.35em] text-xs font-semibold">Your details</span>
        <h2 className="text-3xl font-bold mt-4">Complete your booking</h2>
        <p className="mt-3 text-pastel-text/80 dark:text-dark-text/80">Fill in the essentials and select the session type that fits your needs.</p>
      </div>

      <div className="grid gap-5">
        <label className="space-y-2 text-sm font-medium text-slate-800 dark:text-white">
          Full Name
          <input
            value={formValues.name}
            onChange={handleChange('name')}
            className="w-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            placeholder="Jane Doe"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800 dark:text-white">
          Email
          <input
            type="email"
            value={formValues.email}
            onChange={handleChange('email')}
            className="w-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            placeholder="jane@example.com"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800 dark:text-white">
          Phone
          <input
            type="tel"
            value={formValues.phone}
            onChange={handleChange('phone')}
            className="w-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            placeholder="+1 555 123 4567"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800 dark:text-white">
          Session Type
          <select
            value={selectedSession}
            onChange={(event) => setSelectedSession(event.target.value)}
            className="w-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
          >
            <option>30 min session</option>
            <option>60 min session</option>
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800 dark:text-white">
          Package
          <select
            value={selectedPackage}
            onChange={(event) => setSelectedPackage(event.target.value)}
            className="w-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
          >
            <option>Single Session</option>
            <option>5 Session Package</option>
            <option>10 Session Package</option>
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800 dark:text-white">
          Mode
          <select
            value={selectedMode}
            onChange={(event) => setSelectedMode(event.target.value)}
            className="w-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
          >
            <option>Video Call</option>
            <option>Audio Call</option>
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800 dark:text-white">
          Preferred Date & Time
          <input
            type="datetime-local"
            value={formValues.datetime}
            onChange={handleChange('datetime')}
            className="w-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800 dark:text-white">
          Message (optional)
          <textarea
            value={formValues.message}
            onChange={handleChange('message')}
            rows={4}
            className="w-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/20 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition resize-none"
            placeholder="Share anything you'd like your therapist to know before the session."
          />
        </label>
      </div>

      {errors.length > 0 && (
        <div className="mt-6 rounded-3xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 p-4 text-sm text-red-700 dark:text-red-200">
          <p className="font-semibold mb-2">Please correct the following:</p>
          <ul className="list-disc list-inside space-y-1">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {submitted && (
        <div className="mt-6 rounded-3xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 p-4 text-sm text-emerald-800 dark:text-emerald-200">
          Thank you! Your booking request is ready. A member of the team will follow up soon.
        </div>
      )}

      <button
        type="submit"
        className="mt-8 w-full rounded-3xl bg-primary text-white py-4 font-semibold shadow-xl shadow-primary/20 hover:bg-primary-dark transition"
      >
        Submit Booking Request
      </button>
    </form>
  );
}
