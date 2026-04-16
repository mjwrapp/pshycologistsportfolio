import SectionWrapper from './SectionWrapper';
import { useState } from 'react';
import { Calendar, Clock, CreditCard, ChevronRight } from 'lucide-react';

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  const timeSlots = ["09:00 AM", "11:00 AM", "01:00 PM", "03:30 PM", "05:00 PM"];

  return (
    <SectionWrapper id="booking">
      <div className="max-w-5xl mx-auto glass p-8 md:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(154,130,185,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="text-center mb-10">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Take The First Step</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Book Your Session</h2>
          <p className="text-pastel-text/80 dark:text-dark-text/80">Select a date, time, and securely complete your booking.</p>
        </div>

        <form className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Details & Time */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 opacity-80">Full Name</label>
              <input type="text" className="w-full bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Jane Doe" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 opacity-80">Email</label>
                <input type="email" className="w-full bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="jane@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 opacity-80">Phone</label>
                <input type="tel" className="w-full bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="+1..." required />
              </div>
            </div>
            
            <div className="pt-4 border-t border-black/5 dark:border-white/5">
              <label className="flex items-center gap-2 text-sm font-medium mb-4 opacity-80">
                <Calendar size={18} /> Preferred Date
              </label>
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors cursor-pointer" 
                required 
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-4 opacity-80">
                <Clock size={18} /> Time Slot
              </label>
              <div className="flex flex-wrap gap-3">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedTime === time ? 'bg-primary text-white shadow-lg' : 'bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40 border border-black/5 dark:border-white/5'}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Payment & Confirmation */}
          <div className="bg-primary/5 dark:bg-black/20 rounded-3xl p-8 border border-primary/10 flex flex-col justify-between">
            <div>
              <h4 className="flex items-center gap-2 font-bold text-lg mb-6">
                <CreditCard size={20} className="text-primary" /> Secure Payment
              </h4>
              
              <div className="space-y-4 mb-8">
                <label className="flex items-center justify-between p-4 bg-white dark:bg-dark-card rounded-xl border border-primary cursor-pointer shadow-sm">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="accent-primary" defaultChecked />
                    <span className="font-medium">Credit / Debit Card</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-8 h-5 bg-blue-500 rounded flex items-center justify-center text-[8px] text-white font-bold">VISA</div>
                    <div className="w-8 h-5 bg-red-400 rounded flex items-center justify-center text-[8px] text-white font-bold">MC</div>
                  </div>
                </label>
                
                <label className="flex items-center justify-between p-4 bg-white/50 dark:bg-dark-card/50 rounded-xl border border-transparent hover:border-primary/30 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="accent-primary" />
                    <span className="font-medium">PayPal / UPI</span>
                  </div>
                </label>
              </div>

              <div className="bg-white/40 dark:bg-black/30 p-4 rounded-xl space-y-3 text-sm">
                <div className="flex justify-between opacity-80">
                  <span>Session Fee (50 mins)</span>
                  <span>$150.00</span>
                </div>
                <div className="flex justify-between opacity-80">
                  <span>Taxes</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t border-black/10 dark:border-white/10">
                  <span>Total</span>
                  <span>$155.00</span>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full mt-8 bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xl shadow-primary/20">
              Confirm & Pay <ChevronRight size={20} />
            </button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
}
