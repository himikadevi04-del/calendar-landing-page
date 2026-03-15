"use client";
import React, { useState } from 'react';

export default function LandingPage() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FIXED: Added React.FormEvent here
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Captured Data:", contactForm);
    setIsSubmitted(true);
    setContactForm({ name: '', email: '', message: '' }); 
    setTimeout(() => setIsSubmitted(false), 4000); 
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
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

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Have questions? Contact Us.</h2>
        
        <form onSubmit={handleContactSubmit} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            required
            value={contactForm.name}
            // FIXED: Added React.ChangeEvent here
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContactForm({...contactForm, name: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500 text-white"
          />
          <input 
            type="email" 
            placeholder="Your Email Address" 
            required
            value={contactForm.email}
            // FIXED: Added React.ChangeEvent here
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContactForm({...contactForm, email: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500 text-white"
          />
          <textarea 
            placeholder="How can we help?" 
            rows={4} // FIXED: Using curly braces for numbers
            required
            value={contactForm.message}
            // FIXED: Added React.ChangeEvent for textarea here
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