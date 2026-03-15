"use client";
import React, { useState } from 'react';

export default function LandingPage() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Captured Data:", contactForm);
    setIsSubmitted(true);
    setContactForm({ name: '', email: '', message: '' }); 
    setTimeout(() => setIsSubmitted(false), 4000); 
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Never Miss a Meeting. <br/>
          <span className="text-blue-500">Never Reschedule Manually.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto">
          Replace your 40,000 Tk/month human assistant. Our autonomous AI agent nags you so you're never late, and auto-reschedules with one tap when you are.
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-lg shadow-blue-500/30">
          Join the Exclusive Beta
        </button>
      </header>

      {/* The "Show and Tell" Section */}
      <section className="bg-slate-950 py-24 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-extrabold mb-6">How It Works in 3 Seconds</h2>
            
            <div className="space-y-8 mt-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold">You're stuck in traffic.</h3>
                  <p className="text-slate-400 mt-2">You realize you won't make your 2:00 PM client meeting. Instead of typing out a frantic apology while driving, you pull out your phone.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold">Hit the Panic Button.</h3>
                  <p className="text-slate-400 mt-2">Tap the widget on your lockscreen. That's it. You don't even have to unlock your phone or open your calendar.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold">OpenClaw takes over.</h3>
                  <p className="text-slate-400 mt-2">Our AI instantly reads your schedule, finds 3 open slots later this week, and emails a professional apology and reschedule request to your client.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[350px]">
            <div className="bg-slate-800 border-[8px] border-slate-700 rounded-[3rem] p-6 shadow-2xl relative overflow-hidden h-[600px] flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-3xl"></div>
              
              <h4 className="text-center font-bold text-lg mt-4 mb-6">Upcoming Meetings</h4>
              
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-600 mb-6">
                <h5 className="font-bold text-blue-400">Q3 Strategy Sync</h5>
                <p className="text-xs text-slate-400 mb-4">Today • 2:00 PM</p>
                <button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-lg text-sm shadow-lg shadow-red-500/20 transition">
                  🚨 Running Late?
                </button>
              </div>

              <div className="mt-auto bg-slate-100 text-slate-900 p-4 rounded-xl relative">
                <div className="absolute -top-3 left-4 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow">
                  AI Email Sent
                </div>
                <p className="text-xs font-bold border-b border-slate-300 pb-2 mb-2">To: client@company.com</p>
                <p className="text-[11px] leading-relaxed">
                  Hi there,<br/><br/>
                  I am so sorry, but I am running a bit behind schedule today and won't be able to make our 2:00 PM sync. <br/><br/>
                  Would any of these times work to reschedule?<br/>
                  • Tomorrow at 10:00 AM<br/>
                  • Thursday at 3:30 PM<br/><br/>
                  Best,<br/>Sameer's AI Assistant
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">The Executive Assistant You Can Actually Afford</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="text-blue-500 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3">The "Panic Button" Widget</h3>
              <p className="text-slate-400">Stuck in traffic? Hit the lockscreen widget. The AI instantly emails your client, apologizes, and offers 3 new times.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="text-blue-500 text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-bold mb-3">The 4-Step Nag Protocol</h3>
              <p className="text-slate-400">We proactively ping you via WhatsApp 1 week, 1 day, 1 hour, and 10 minutes before your meetings.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="text-blue-500 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">Autonomous Negotiation</h3>
              <p className="text-slate-400">Powered by OpenClaw. The AI handles the entire back-and-forth email negotiation and updates your Calendar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Have questions? Contact Us.</h2>
        
        <form onSubmit={handleContactSubmit} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            required
            value={contactForm.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContactForm({...contactForm, name: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500 text-white"
          />
          <input 
            type="email" 
            placeholder="Your Email Address" 
            required
            value={contactForm.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContactForm({...contactForm, email: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500 text-white"
          />
          <textarea 
            placeholder="How can we help?" 
            rows={4} 
            required
            value={contactForm.message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContactForm({...contactForm, message: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500 text-white"
          ></textarea>
          
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition duration-300">
            Send Message
          </button>

          {isSubmitted && (
            <div className="text-green-400 text-center font-bold mt-2">
              Message sent successfully! We will be in touch soon.
            </div>
          )}
        </form>
      </section>
    </div>
  );
}