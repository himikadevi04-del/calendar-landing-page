import React from 'react';

export default function LandingPage() {
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
        <p className="text-sm text-slate-500 mt-4">Early access is strictly limited. Lock in the $12/month founder rate.</p>
      </header>

      {/* Features Section */}
      <section className="bg-slate-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">The Executive Assistant You Can Actually Afford</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="text-blue-500 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3">The "Panic Button" Widget</h3>
              <p className="text-slate-400">
                Stuck in traffic? Hit the lockscreen widget. The AI instantly emails your client, apologizes, and offers 3 new times based on your live availability.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="text-blue-500 text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-bold mb-3">The 4-Step Nag Protocol</h3>
              <p className="text-slate-400">
                A standard calendar isn't enough. We proactively ping you via WhatsApp 1 week, 1 day, 1 hour, and 10 minutes before your meetings.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="text-blue-500 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">Autonomous Negotiation</h3>
              <p className="text-slate-400">
                Powered by OpenClaw. The AI handles the entire back-and-forth email negotiation and silently updates your Google Calendar when a new time is picked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer className="max-w-4xl mx-auto px-6 py-20 text-center border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-6">Stop managing your schedule. Let AI do it.</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500 text-white"
          />
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition duration-300">
            Get Notified
          </button>
        </div>
      </footer>
    </div>
  );
}
