import Navbar from './components/Navbar';
import Card from './components/Card';
import { projects } from './data';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        {/* Hero Section */}
        <section className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Tobiloba
          </h1>
          <h2 className="text-2xl text-blue-500 font-medium mb-4">
            Frontend Developer
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I build clean, responsive web interfaces using React and Tailwind CSS. 
            I love turning designs into fast, accessible user experiences. 
            Currently a CS student at UNILAG focused on building high-end digital products.
          </p>
        </section>

        {/* Work Grid */}
        <section id="work" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </section>

        {/* Footer/Contact */}
        <footer className="mt-32 pt-12 border-t border-white/10 text-center">
          <p className="text-gray-500">© 2026 Tobiloba • Built with pride on Mobile</p>
        </footer>
      </main>
    </div>
  );
}
