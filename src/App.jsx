import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Card from './components/Card';
import LoadingScreen from './components/LoadingScreen';
import NewHero from './components/NewHero';
import { projects, socials } from './data';
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
        style={{ 
          opacity: isLoading ? 0 : 1, 
          transition: "opacity 0.6s ease-out" 
        }}
      >
        {/* NEW HIGH-FIDELITY HERO */}
        <NewHero />

        <div className="max-w-6xl mx-auto px-6 pb-20">
          {/* PROJECTS SECTION */}
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

          {/* ABOUT SECTION */}
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
                <p>
                  I am a Frontend Engineer and Computer Science student at the <span className="text-white font-bold">University of Lagos</span>, dedicated to bridging the gap between complex technical logic and high-end visual aesthetics.
                </p>
                <p>
                  My approach to development is rooted in <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-4 font-bold">Performance-First Engineering</span>.
                </p>
                <p>
                  I’m not the developer who jumped straight into frameworks. I took the long road — <span className="text-white font-bold">a year of vanilla JavaScript</span>, learning how things actually work under the hood. Now I build with <span className="text-white">React and Tailwind</span>, and I understand why things break when they do.
                </p>
                <p>
                  I’m currently a frontend developer and <span className="text-blue-500">open to freelance work</span>. If you have a project that needs clean, responsive, and well-thought-out frontend work — <span className="text-white">I’m your guy.</span>
                </p>
              </div>

              {/* EDUCATION & CERTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                <div className="p-6 bg-[#121212] border border-white/5 rounded-2xl">
                  <span className="text-blue-500 text-[10px] font-bold tracking-widest uppercase block mb-2">Certification</span>
                  <h4 className="text-white font-bold text-lg">Frontend Engineering</h4>
                  <p className="text-gray-500 text-sm">Axia Africa • 6 Months Intensive</p>
                </div>
                <div className="p-6 bg-[#121212] border border-white/5 rounded-2xl">
                  <span className="text-blue-500 text-[10px] font-bold tracking-widest uppercase block mb-2">Degree</span>
                  <h4 className="text-white font-bold text-lg">B.Sc. Computer Science</h4>
                  <p className="text-gray-500 text-sm">University of Lagos • In View</p>
                </div>
              </div>

              {/* TOOLS SECTION */}
              <div className="mb-20">
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  Tools I Use. <br/>
                  <span className="text-gray-700">Problems I Solve.</span>
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "HTML5", desc: "Semantic & Accessible", color: "border-orange-500/20" },
                    { name: "CSS3", desc: "Grid, Flex, Custom Props", color: "border-blue-500/20" },
                    { name: "JavaScript", desc: "Vanilla & ES6+", color: "border-yellow-500/20" },
                    { name: "React", desc: "Component Architecture", color: "border-cyan-500/20" },
                    { name: "Tailwind CSS", desc: "Utility-First Styling", color: "border-teal-500/20" },
                    { name: "GitHub", desc: "Version Control & CI/CD", color: "border-white/20" }
                  ].map((tool) => (
                    <div key={tool.name} className={`flex items-center justify-between p-5 bg-[#121212] border-l-4 ${tool.color} rounded-r-xl hover:bg-[#1a1a1a] transition-all group`}>
                      <div>
                        <h4 className="text-white font-bold text-lg">{tool.name}</h4>
                        <p className="text-gray-500 text-xs tracking-wide">{tool.desc}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 text-[10px] font-bold tracking-widest uppercase">
                        Mastered
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTACT SECTION */}
              <div className="mt-20 pt-10 border-t border-white/5">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-blue-500 uppercase">003 — Contact</span>
                  <div className="h-[1px] w-12 bg-blue-500/30"></div>
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 leading-none">
                  Let's build <br/> something <span className="text-blue-500">real.</span>
                </h2>
                <form action="https://formspree.io/f/xaqlbalq" method="POST" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" type="text" placeholder="Name" required className="w-full bg-[#121212] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                    <input name="email" type="email" placeholder="Email" required className="w-full bg-[#121212] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                  </div>
                  <textarea name="message" placeholder="Message" rows="4" required className="w-full bg-[#121212] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none"></textarea>
                  <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-blue-500 hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
                    Send It <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      {!isLoading && (
        <footer className="border-t border-white/5 py-10 text-center">
          <p className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase">
            © 2026 Tobiloba Akala — Build. Ship. Repeat.
          </p>
        </footer>
      )}
      
      <Navbar />
    </div>
  );
}

export default App;
