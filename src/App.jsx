// src/App.jsx
import Navbar from './components/Navbar';
import Card from './components/Card';
import { projects, socials } from './data'; // Import socials here

import profileImg from './assets/profile.jpg';
import resumeFile from './assets/Resume.pdf';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <section className="flex flex-col md:flex-row items-center gap-10 mb-24">
          <img 
            src={profileImg} 
            alt="Tobiloba" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover border-2 border-white/10"
          />
          
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Tobiloba</h1>
            <p className="text-gray-400 text-lg mb-8">
              I build clean, responsive web interfaces using React and Tailwind CSS. 
              I love turning designs into fast, accessible user experiences.
            </p>
            
            {/* Social Links Row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-bold tracking-widest text-gray-500 uppercase">
              <a href={socials.github} target="_blank" className="hover:text-blue-500 transition">Github</a>
              <a href={socials.twitter} target="_blank" className="hover:text-blue-400 transition">Twitter</a>
              <a href={socials.linkedin} target="_blank" className="hover:text-blue-700 transition">LinkedIn</a>
              <a href={socials.whatsapp} target="_blank" className="hover:text-green-500 transition">WhatsApp</a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <a href={resumeFile} target="_blank" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
                Download CV
              </a>
            </div>
          </div>
        </section>

        <h3 className="text-xs font-bold tracking-[0.3em] text-gray-600 uppercase mb-8">Selected Projects</h3>
        <section id="work" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </section>
      </main>
    </div>
  );
}
