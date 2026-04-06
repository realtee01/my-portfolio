import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import NewHero from './components/NewHero.jsx';
import { projects, socials } from './data.js';
import resumeFile from './assets/Resume.pdf';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <main 
        className="relative"
        style={{ 
          opacity: isLoading ? 0 : 1, 
          transition: "opacity 0.8s ease-in-out" 
        }}
      >
        <NewHero />

        <div className="max-w-6xl mx-auto px-6 pb-20">
          <section id="projects" className="mb-40 pt-20">
            <div className="flex flex-col mb-16">
              <span className="text-[10px] font-bold tracking-[0.4em] text-blue-500 uppercase mb-4">001 — Selected Projects</span>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                Real Projects. <br/><span className="text-gray-800">Real Code.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} {...project} />
              ))}
            </div>
          </section>

          <section id="about" className="py-24 border-t border-white/5">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold tracking-[0.4em] text-blue-500 uppercase">002 — The Builder</span>
                <div className="h-[1px] w-12 bg-blue-500/30"></div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10 leading-none">
                The <span className="text-blue-500">Builder.</span>
              </h2>
              <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed font-medium mb-20">
                <p>I am a Computer Science student at the University of Lagos, dedicated to bridging technical logic and high-end visual aesthetics.</p>
                <p>I build with React and Tailwind, focusing on performance-first engineering.</p>
              </div>
              <div className="mt-20 pt-10 border-t border-white/5">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 leading-none">Let's build something <span className="text-blue-500">real.</span></h2>
                <form action="https://formspree.io/f/xaqlbalq" method="POST" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" type="text" placeholder="Name" required className="w-full bg-[#121212] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                    <input name="email" type="email" placeholder="Email" required className="w-full bg-[#121212] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                  </div>
                  <textarea name="message" placeholder="Message" rows="4" required className="w-full bg-[#121212] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none"></textarea>
                  <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2 group">
                    Send It <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        {!isLoading && (
          <footer className="border-t border-white/5 py-10 text-center">
            <p className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase">© 2026 Tobiloba Akala — Build. Ship. Repeat.</p>
          </footer>
        )}
      </main>
      <Navbar />
    </div>
  );
}

export default App;
