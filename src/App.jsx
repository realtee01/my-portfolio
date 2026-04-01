// src/App.jsx
import Navbar from './components/Navbar';
import Card from './components/Card';
import { projects, socials } from './data';

import profileImg from './assets/profile.jpg';
import resumeFile from './assets/Resume.pdf';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        
        <div className="flex items-center gap-2 mb-6">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
  </span>
  <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
    ● AVAILABLE FOR FREELANCE WORK.

  </span>
</div>

        
        
        <section className="flex flex-col md:flex-row items-center gap-10 mb-24">
          <img 
            src={profileImg} 
            alt="Tobiloba" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover border-2 border-white/10"
          />
          
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Tobiloba Akala</h1>
           <h2 className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 via-blue-300 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer inline-block">
  Frontend Developer
</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I build clean, responsive web interfaces using React and Tailwind CSS. 
              I love turning designs into fast, accessible user experiences. 
              Currently a computer science student at UNILAG focused on building high-end digital products.
            </p>
            
            {/* Hero Socials */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              <a href={socials.github} target="_blank" className="hover:text-white transition">Github</a>
              <a href={socials.twitter} target="_blank" className="hover:text-blue-400 transition">Twitter</a>
              <a href={socials.whatsapp} target="_blank" className="hover:text-green-500 transition">WhatsApp</a>
              <a href={socials.email} className="hover:text-red-400 transition">Email</a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <a href={resumeFile} target="_blank" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* Work Grid */}
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12">
  Real Projects. <br/><span className="text-gray-800">Real Code.</span>
</h2>

        <section id="work" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </section>
        
        <section id="about" className="mb-32 max-w-3xl">
  <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">
    The <span className="text-blue-500">Builder.</span>
  </h2>
  <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
    <p>
      I’m a Computer scienve student at axia <span className="text-white">UNILAG</span> with a focus on high-end Frontend Engineering. 
      I don't just write code; I architect interfaces that turn users into fans.
    </p>
    <p>
      Every project in this portfolio was <span className="text-white">built and deployed from a mobile device</span>. 
      This constraint taught me that engineering isn't about the hardware you have—it's about the resourcefulness you bring to the problem.
    </p>
    <p>
      I’m currently documenting my wins, my bugs, and my "why isn't this working at 2am" moments as I prepare for the next stage of my career.
    </p>
  </div>
</section>


        {/* Footer with Socials */}
        <footer className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-white font-bold tracking-tighter">TOBILOBA.</p>
            <p className="text-gray-600 text-xs mt-1">© 2026 Tobiloba </p>
          </div>

          <div className="flex gap-8 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
             <a href={socials.github} target="_blank" className="hover:text-white transition">Github</a>
             <a href={socials.twitter} target="_blank" className="hover:text-blue-400 transition">Twitter</a>
             <a href={socials.whatsapp} target="_blank" className="hover:text-green-500 transition">WhatsApp</a>
             <a href={socials.linkedin} target="_blank" className="hover:text-blue-700 transition">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
