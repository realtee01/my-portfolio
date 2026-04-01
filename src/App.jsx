import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { projects, socials } from './data';
import profileImg from './assets/profile.jpg'; 
import resumeFile from './assets/Resume.pdf';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* the HERO SECTION */}
        <section className="mb-32 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-8 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Available for Freelancing
            </span>
          </div>

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
            Frontend Developer
          </h2>

          <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
            Building high-performance, accessible, and visually stunning web interfaces using React and modern architecture.
          </p>

          <p className="flex flex-wrap justify-center gap-6 text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase"> find me on </p>
          
          <p>
          

          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">
            <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition">Github</a>
            <a href={socials.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition">Twitter</a>
            <a href={socials.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white transition">Whatsapp</a>
            <a href={socials.email} className="hover:text-white transition">Email</a>
          </div>
        </section> 
      
        
{/* CV View Button */}
<div className="mt-12">
  <a 
    href={resumeFile} // Using the imported variable here
    target="_blank" 
    rel="noreferrer"
    className="inline-flex items-center gap-3 bg-[#121212] border border-white/10 px-8 py-4 rounded-2xl text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all active:scale-95 group"
  >
    View Resume
    <span className="text-blue-500 group-hover:text-black transition-colors">↗</span>
  </a>
</div>


        {/* End Hero */}
        
        
        

        {/* PROJECTS SECTION */}
        <section id="project" className="mb-40">
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
        </section> {/* End Projects */}

       {/* THE BUILDER / ABOUT SECTION */}
<section id="about" className="py-24 border-t border-white/5">
  <div className="max-w-3xl">
    {/* Section Header */}
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[10px] font-bold tracking-[0.4em] text-blue-500 uppercase">002 — The Builder</span>
      <div className="h-[1px] w-12 bg-blue-500/30"></div>
    </div>

    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10 leading-none">
      The <span className="text-blue-500">Builder.</span>
    </h2>

    {/* Bio Text */}
    <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed font-medium mb-20">
      <p>
        I am a Frontend Engineer and Computer Science student at the <span className="text-white font-bold">University of Lagos</span>, dedicated to bridging the gap between complex technical logic and high-end visual aesthetics.
      </p>
      <p>
        My approach to development is rooted in <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-4 font-bold">Performance-First Engineering</span>. I specialize in architecting scalable React applications that don't just function—they provide seamless, frictionless experiences for the end-user.
      </p>
      <p>
        Beyond writing code, I am obsessed with the "Why." I believe that every pixel should serve a purpose and every interaction should drive value.
      </p>
    </div>

    {/* TOOLS SECTION (The one from screenshots) */}
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
            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 text-xs font-bold tracking-widest">
              MASTERED
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
  
  <p className="text-gray-500 mb-10 text-lg">
    Got a project? A brief? Just want to talk code or internships? I'm here.
  </p>

  {/*  Formspree Integration */}
  <form 
    action="https://formspree.io/f/xaqlbalq" 
    method="POST" 
    className="space-y-4"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input 
        type="text" 
        name="name" 
        placeholder="Your name or company" 
        required
        className="w-full bg-[#121212] border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-all"
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Your email" 
        required
        className="w-full bg-[#121212] border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-all"
      />
    </div>
    
    <textarea 
      name="message" 
      placeholder="What are we building?" 
      rows="4" 
      required
      className="w-full bg-[#121212] border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
    ></textarea>
    
    <button 
      type="submit"
      className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-blue-500 hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
    >
      Send It 
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </button>
  </form>
</div>

     </div>
        </section>
    
</main>
<footer className="border-t
border-white/5 py-10 text-center">
<p className="text-[10px]
font-bold tracking-[0.3em] text-gray-600 uppercase">
© 2026 Tobiloba Akala -
Build. Ship. Repeat.
</p>
</ footer>
</div>
);
}

export default App;
