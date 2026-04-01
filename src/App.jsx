import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { projects, socials } from './data';
import profileImg from './assets/profile.jpg'; // Ensure your photo is named profile.jpg in assets

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* HERO SECTION */}
        <section className="mb-32 flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-8 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Available for Internships
            </span>
          </div>

          {/* Profile Image */}
          <div className="mb-10 relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-2 border-white/10 p-1 bg-gradient-to-b from-white/10 to-transparent">
              <img 
                src={profileImg} 
                alt="Tobiloba Akala" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 uppercase">
            Tobiloba Akala
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-600 via-blue-300 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer inline-block">
            Frontend Engineer
          </h2>

          <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
            Building high-performance, accessible, and visually stunning web interfaces using React and modern architecture.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">
            <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition">Github</a>
            <a href={socials.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition">Twitter</a>
            <a href={socials.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white transition">Whatsapp</a>
            <a href={socials.email} className="hover:text-white transition">Email</a>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="work" className="mb-40">
          <div className="flex flex-col mb-16">
            <span className="text-[10px] font-bold tracking-[0.4em] text-blue-500 uppercase mb-4">001 — Selected Work</span>
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

        {/* THE BUILDER / ABOUT SECTION */}
        <section id="about" className="py-24 border-t border-white/5">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-bold tracking-[0.4em] text-blue-500 uppercase">002 — The Builder</span>
              <div className="h-[1px] w-12 bg-blue-500/30"></div>
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10 leading-none">
              The <span className="text-blue-500">Builder.</span>
            </h2>

            <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                I am a Frontend Engineer and Computer Science student at the <span className="text-white font-bold">University of Lagos</span>, dedicated to bridging the gap between complex technical logic and high-end visual aesthetics.
              </p>
              
              <p>
                My approach to development is rooted in <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-4 font-bold">Performance-First Engineering</span>. I specialize in architecting scalable React applications that don't just function—they provide seamless, frictionless experiences for the end-user.
              </p>

              <p>
                Beyond writing code, I am obsessed with the "Why." I believe that every pixel should serve a purpose and every interaction should drive value. Whether it’s optimizing a build pipeline with <span className="text-white">Vite</span> or crafting responsive layouts with <span className="text-white">Tailwind CSS</span>, my goal is always the same: to build digital products that feel premium, fast, and intuitive.
              </p>

              <p className="text-sm md:text-base text-gray-500 italic border-l-2 border-blue-500/20 pl-6">
                "Currently focused on mastering the nuances of modern web architecture and contributing to the next generation of digital tools."
              </p>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-10 border-t border-white/5">
              <div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2">Location</p>
                <p className="text-sm text-white font-bold">Lagos, NG</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2">University</p>
                <p className="text-sm text-white font-bold">UNILAG (CS)</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2">Focus</p>
                <p className="text-sm text-white font-bold">UI Engineering</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 text-center">
        <p className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase">
          © 2026 Tobiloba Akala — Build. Ship. Repeat.
        </p>
      </footer>
    </div>
  );
}

export default App;
