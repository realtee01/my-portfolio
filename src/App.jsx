// src/App.jsx
import Navbar from './components/Navbar';
import Card from './components/Card';
import { projects } from './data';

// Asset Imports
import profileImg from './assets/profile.jpg';
import resumeFile from './assets/Resume.pdf';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero / Introduction Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-24">
          <img 
            src={profileImg} 
            alt="Tobiloba" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover border-2 border-white/10 shadow-2xl"
          />
          
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Tobiloba
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-500 font-medium mb-6">
              Frontend Developer
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I build clean, responsive web interfaces using React and Tailwind CSS. 
              I love turning designs into fast, accessible user experiences. 
              Currently a CS student at UNILAG focused on building high-end digital products.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href={resumeFile} 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
              >
                Download CV
              </a>
              <a 
                href="mailto:your-email@gmail.com" 
                className="border border-white/20 px-6 py-3 rounded-full font-bold hover:bg-white/5 transition"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </section>

        {/* Work Grid */}
        <h3 className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-8">Selected Projects</h3>
        <section id="work" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Tobiloba • Built on Mobile</p>
          <div className="flex gap-6">
            <a href="https://github.com/realtee01" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
