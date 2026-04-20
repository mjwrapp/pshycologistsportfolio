import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CreditCard, ShieldCheck, CheckCircle2, Video, Phone as PhoneIcon, Lock, Landmark, Smartphone, Zap } from 'lucide-react';

export default function BookingPage() {
  const [selectedDuration, setSelectedDuration] = useState('60min');
  const [selectedMode, setSelectedMode] = useState('video');
  const [selectedPackage, setSelectedPackage] = useState('5-session');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('card');
  
  const timeSlots = ["09:00 AM", "11:00 AM", "01:00 PM", "03:30 PM", "05:00 PM"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="pb-24 pt-32 lg:pt-40 relative z-10"
    >
      {/* 1. Hero Section */}
      <section className="text-center px-6 max-w-4xl mx-auto mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-light/20 blur-[100px] rounded-full -z-10 animate-float" style={{ animationDuration: '8s' }}></div>
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Book Your Session
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-pastel-text/80 dark:text-dark-text/80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Take your time, choose what feels right for you, and step into a safe space designed entirely for your healing journey.
        </motion.p>
      </section>

      {/* 2. Session Details & 3. Packages */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">1. Select Preferences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Duration */}
            <div className="glass p-6 md:p-8 rounded-[2rem]">
              <label className="text-sm font-semibold uppercase tracking-wider opacity-70 mb-6 block">Session Duration</label>
              <div className="grid sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setSelectedDuration('30min')}
                  className={`relative p-5 rounded-2xl border-2 transition-all flex flex-col items-start ${selectedDuration === '30min' ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' : 'border-transparent bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40'}`}
                >
                  <span className="font-bold text-lg mb-1">30 Min Check-in</span>
                  <span className="text-left text-sm opacity-70">Focused issue discussion</span>
                </button>
                <button 
                  onClick={() => setSelectedDuration('60min')}
                  className={`relative p-5 rounded-2xl border-2 transition-all flex flex-col items-start ${selectedDuration === '60min' ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' : 'border-transparent bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40'}`}
                >
                  <span className="font-bold text-lg mb-1">60 Min Deep Dive</span>
                  <span className="text-left text-sm opacity-70">Standard therapeutic work</span>
                </button>
              </div>
            </div>

            {/* Mode */}
            <div className="glass p-6 md:p-8 rounded-[2rem]">
              <label className="text-sm font-semibold uppercase tracking-wider opacity-70 mb-6 block">Mode of Therapy</label>
              <div className="grid sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setSelectedMode('video')}
                  className={`relative p-5 rounded-2xl border-2 transition-all flex items-center gap-4 ${selectedMode === 'video' ? 'border-primary bg-primary/5 shadow-md shadow-primary/10 text-primary' : 'border-transparent bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40'}`}
                >
                  <div className={`p-3 rounded-xl ${selectedMode === 'video' ? 'bg-primary/20' : 'bg-black/5 dark:bg-white/5 text-pastel-text dark:text-dark-text'}`}>
                    <Video size={24} />
                  </div>
                  <span className="font-bold text-lg text-pastel-text dark:text-dark-text">Video Call</span>
                </button>
                <button 
                  onClick={() => setSelectedMode('audio')}
                  className={`relative p-5 rounded-2xl border-2 transition-all flex items-center gap-4 ${selectedMode === 'audio' ? 'border-primary bg-primary/5 shadow-md shadow-primary/10 text-primary' : 'border-transparent bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40'}`}
                >
                  <div className={`p-3 rounded-xl ${selectedMode === 'audio' ? 'bg-primary/20' : 'bg-black/5 dark:bg-white/5 text-pastel-text dark:text-dark-text'}`}>
                    <PhoneIcon size={24} />
                  </div>
                  <span className="font-bold text-lg text-pastel-text dark:text-dark-text">Audio Call</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">2. Choose a Package</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Single */}
            <motion.div 
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPackage('single')}
              className={`cursor-pointer glass p-8 rounded-[2.5rem] border-2 transition-all duration-300 relative flex flex-col ${selectedPackage === 'single' ? 'border-primary shadow-xl shadow-primary/20' : 'border-transparent hover:border-primary/30'}`}
            >
              <h4 className="text-2xl font-bold mb-2">Single Session</h4>
              <p className="text-pastel-text/70 dark:text-dark-text/70 text-sm mb-6 min-h-[40px]">Perfect for trying out therapy or addressing immediate concerns.</p>
              <div className="text-4xl font-bold mb-6 font-heading">$150</div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-sm opacity-90"><CheckCircle2 size={18} className="text-primary shrink-0" /> Full assessment</li>
                <li className="flex gap-3 text-sm opacity-90"><CheckCircle2 size={18} className="text-primary shrink-0" /> Actionable takeaways</li>
              </ul>
              <div className={`w-full py-3.5 rounded-full text-center font-bold text-sm transition-colors ${selectedPackage === 'single' ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                {selectedPackage === 'single' ? 'Selected' : 'Select'}
              </div>
            </motion.div>

            {/* 5 Sessions */}
            <motion.div 
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPackage('5-session')}
              className={`cursor-pointer glass p-8 rounded-[2.5rem] border-2 transition-all duration-300 relative flex flex-col transform md:-translate-y-4 ${selectedPackage === '5-session' ? 'border-primary shadow-2xl shadow-primary/30' : 'border-primary/20 bg-gradient-to-b from-primary/5 to-transparent'}`}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-light text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-1">
                <Zap size={12} fill="currentColor" /> Most Popular
              </div>
              <h4 className="text-2xl font-bold mb-2">5 Sessions</h4>
              <p className="text-pastel-text/70 dark:text-dark-text/70 text-sm mb-6 min-h-[40px]">Ideal for short-term structured therapy and quick wins.</p>
              <div className="flex items-end gap-3 mb-6">
                <div className="text-4xl font-bold font-heading">$675</div>
                <div className="text-sm font-semibold opacity-60 line-through mb-1">$750</div>
                <div className="text-xs font-bold text-green-600 dark:text-green-400 mb-1.5 ml-auto bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-lg">Save 10%</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-sm opacity-90"><CheckCircle2 size={18} className="text-primary shrink-0" /> Structured roadmap</li>
                <li className="flex gap-3 text-sm opacity-90"><CheckCircle2 size={18} className="text-primary shrink-0" /> WhatsApp support between sessions</li>
                <li className="flex gap-3 text-sm opacity-90"><CheckCircle2 size={18} className="text-primary shrink-0" /> Free resilience workbook</li>
              </ul>
              <div className={`w-full py-3.5 rounded-full text-center font-bold text-sm transition-colors ${selectedPackage === '5-session' ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-primary/20 text-primary-dark dark:text-primary-light'}`}>
                {selectedPackage === '5-session' ? 'Selected' : 'Select'}
              </div>
            </motion.div>

            {/* 10 Sessions */}
            <motion.div 
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPackage('10-session')}
              className={`cursor-pointer glass p-8 rounded-[2.5rem] border-2 transition-all duration-300 relative flex flex-col ${selectedPackage === '10-session' ? 'border-primary shadow-xl shadow-primary/20' : 'border-transparent hover:border-primary/30'}`}
            >
              <h4 className="text-2xl font-bold mb-2">10 Sessions</h4>
              <p className="text-pastel-text/70 dark:text-dark-text/70 text-sm mb-6 min-h-[40px]">Deep therapeutic healing and long-term behavioral change.</p>
              <div className="flex items-end gap-3 mb-6">
                <div className="text-4xl font-bold font-heading">$1200</div>
                <div className="text-sm font-semibold opacity-60 line-through mb-1">$1500</div>
                <div className="text-xs font-bold text-green-600 dark:text-green-400 mb-1.5 ml-auto bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-lg">Save 20%</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-sm opacity-90"><CheckCircle2 size={18} className="text-primary shrink-0" /> Comprehensive healing</li>
                <li className="flex gap-3 text-sm opacity-90"><CheckCircle2 size={18} className="text-primary shrink-0" /> Priority bookings</li>
                <li className="flex gap-3 text-sm opacity-90"><CheckCircle2 size={18} className="text-primary shrink-0" /> Two emergency 30m calls</li>
              </ul>
              <div className={`w-full py-3.5 rounded-full text-center font-bold text-sm transition-colors ${selectedPackage === '10-session' ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                {selectedPackage === '10-session' ? 'Selected' : 'Select'}
              </div>
            </motion.div>

          </div>
        </div>

        {/* 4. Booking Form & 5. Payment UI */}
        <div className="glass p-8 md:p-12 rounded-[3.5rem] shadow-[0_20px_50px_rgba(154,130,185,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <h2 className="text-3xl font-bold mb-10 text-center">3. Finalize Details</h2>
          
          <form className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Form Fields */}
            <div className="lg:col-span-3 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-80 pl-2">Full Name</label>
                  <input type="text" className="w-full bg-white/60 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-primary focus:ring-4 ring-primary/10 transition-all" placeholder="Jane Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-80 pl-2">Phone</label>
                  <input type="tel" className="w-full bg-white/60 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-primary focus:ring-4 ring-primary/10 transition-all" placeholder="+1..." required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 opacity-80 pl-2">Email Address</label>
                <input type="email" className="w-full bg-white/60 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-primary focus:ring-4 ring-primary/10 transition-all" placeholder="jane@example.com" required />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-3 opacity-80 pl-2">
                    <Calendar size={18} /> Preferred Date
                  </label>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-white/60 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-primary focus:ring-4 ring-primary/10 transition-all cursor-pointer" 
                    required 
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-3 opacity-80 pl-2">
                    <Clock size={18} /> Time Slot
                  </label>
                  <select 
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-white/60 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-primary focus:ring-4 ring-primary/10 transition-all cursor-pointer appearance-none" 
                    required
                  >
                    <option value="" disabled>Select a time...</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <label className="block text-sm font-medium mb-2 opacity-80 pl-2">Additional Message <span className="opacity-60 font-normal">(Optional)</span></label>
                <textarea rows={3} className="w-full bg-white/60 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-primary focus:ring-4 ring-primary/10 transition-all resize-none" placeholder="What's on your mind?"></textarea>
              </div>
            </div>

            {/* Payment Subform Setup */}
            <div className="lg:col-span-2">
              <div className="bg-white/50 dark:bg-black/20 rounded-[2.5rem] p-8 border border-black/5 dark:border-white/5 h-full flex flex-col justify-between shadow-inner relative overflow-hidden">
                <div className="absolute -top-10 -right-10 text-primary opacity-5"><ShieldCheck size={200} /></div>
                
                <div className="relative z-10">
                  <h4 className="font-bold text-xl mb-6">Payment Method</h4>
                  
                  <div className="space-y-4 mb-8">
                    <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-colors ${selectedPayment === 'card' ? 'border-primary bg-primary/5' : 'border-black/5 dark:border-white/10 hover:border-primary/30 bg-white dark:bg-dark-card'}`}>
                      <div className="flex items-center gap-4">
                        <input type="radio" checked={selectedPayment === 'card'} onChange={() => setSelectedPayment('card')} className="accent-primary w-4 h-4" />
                        <span className="font-semibold flex items-center gap-2"><CreditCard size={18} className="opacity-70" /> Credit / Debit Card</span>
                      </div>
                    </label>
                    
                    <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-colors ${selectedPayment === 'upi' ? 'border-primary bg-primary/5' : 'border-black/5 dark:border-white/10 hover:border-primary/30 bg-white dark:bg-dark-card'}`}>
                      <div className="flex items-center gap-4">
                        <input type="radio" checked={selectedPayment === 'upi'} onChange={() => setSelectedPayment('upi')} className="accent-primary w-4 h-4" />
                        <span className="font-semibold flex items-center gap-2"><Smartphone size={18} className="opacity-70" /> UPI / Wallet</span>
                      </div>
                    </label>

                    <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-colors ${selectedPayment === 'netbanking' ? 'border-primary bg-primary/5' : 'border-black/5 dark:border-white/10 hover:border-primary/30 bg-white dark:bg-dark-card'}`}>
                      <div className="flex items-center gap-4">
                        <input type="radio" checked={selectedPayment === 'netbanking'} onChange={() => setSelectedPayment('netbanking')} className="accent-primary w-4 h-4" />
                        <span className="font-semibold flex items-center gap-2"><Landmark size={18} className="opacity-70" /> Net Banking</span>
                      </div>
                    </label>
                  </div>

                  <div className="bg-primary/10 dark:bg-primary/20 p-5 rounded-2xl space-y-3 mb-6">
                    <div className="flex justify-between font-medium">
                      <span>{selectedPackage === 'single' ? 'Single Session' : selectedPackage === '5-session' ? '5 Session Package' : '10 Session Package'}</span>
                      <span>{selectedPackage === 'single' ? '$150' : selectedPackage === '5-session' ? '$675' : '$1200'}</span>
                    </div>
                    <div className="flex justify-between text-sm opacity-70">
                      <span>Taxes & Fees</span>
                      <span>Included</span>
                    </div>
                    <div className="pt-3 border-t border-primary/20 flex justify-between font-bold text-xl">
                      <span>Total</span>
                      <span>{selectedPackage === 'single' ? '$150' : selectedPackage === '5-session' ? '$675' : '$1200'}</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button" 
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/30 tracking-wide text-lg"
                  >
                    <Lock size={18} /> Proceed to Payment
                  </motion.button>
                  <p className="text-center text-xs font-medium opacity-60 mt-4 flex items-center justify-center gap-1">
                    <ShieldCheck size={14} /> 100% Secure & Confidential
                  </p>
                </div>

              </div>
            </div>
            
          </form>
        </div>

      </div>
    </motion.div>
  );
}
