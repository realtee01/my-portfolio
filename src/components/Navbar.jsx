export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-dark-bg/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <span className="font-bold tracking-widest text-lg">T.</span>
        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <a href="#work" className="hover:text-white transition">WORK</a>
          <a href="mailto:your-email@gmail.com" className="hover:text-white transition underline">CONTACT</a>
        </div>
      </div>
    </nav>
  );
}
