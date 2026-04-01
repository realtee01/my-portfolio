export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 px-6 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold tracking-tighter">TOBILOBA</h2>
      <div className="space-x-6 text-sm text-gray-400">
        <a href="#work" className="hover:text-white">Work</a>
        <a href="mailto:your-email@gmail.com" className="hover:text-white border border-gray-700 px-4 py-2 rounded-full">
          Contact
        </a>
      </div>
    </nav>
  );
}
