// src/components/Navbar.jsx

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* my T/A Logo */}
        <a href="/" className="group flex items-center gap-2">
          <div className="flex items-center font-black text-2xl tracking-tighter">
            <span className="text-white">T</span>
            <span className="text-blue-500 mx-[1px]">/</span> 
            <span className="text-gray-500 group-hover:text-white transition-colors">A</span>
          </div>
          
          <div className="hidden md:flex flex-col border-l border-white/10 pl-3 ml-1">
            <span className="text-[10px] font-bold tracking-[0.2em] text-white leading-none">
              TOBILOBA
            </span>
            <span className="text-[7px] font-medium tracking-[0.3em] text-gray-500 uppercase mt-1">
              Frontend Developer
            </span>
          </div>
        </a>

        {/* my Navigation Links */}
        <div className="flex items-center gap-8">
          <a 
            href="#work" 
            className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-white transition uppercase"
          >
            Work
          </a>
          <a 
            href="mailto:tobilobaakala@gmail.com" 
            className="text-[10px] font-bold tracking-[0.2em] bg-white text-black px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition uppercase"
          >
            Hire Me
          </a>
        </div>
        
      </div>
    </nav>
  );
}
