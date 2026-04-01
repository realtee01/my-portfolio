import Navbar from './components/Navbar';
import Card from './components/Card';
import { projects } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        {/* Simple Header */}
        <header className="max-w-2xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frontend Developer based in Lagos.
          </h1>
          <p className="text-gray-400 text-lg">
            Computer Science student at UNILAG. I focus on building clean, 
            responsive interfaces with React and Tailwind CSS.
          </p>
        </header>

        {/* Human-Coded Grid */}
        <section id="work" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((item) => (
            <Card 
              key={item.id}
              title={item.title}
              description={item.description}
              tech={item.tech}
              link={item.link}
            />
          ))}
        </section>

        {/* Simple About Section */}
        <section className="mt-32 pt-16 border-t border-[#262626]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-400">
                Fluent in English and Yoruba. Currently undergoing my SIWES 
                internship and perfecting my React skills.
              </p>
            </div>
            <div className="bg-[#121212] p-8 rounded-2xl">
              <h3 className="font-bold mb-2">Tobiloba's Academy</h3>
              <p className="text-sm text-gray-500">
                Interested in AI automation and modern web standards.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-gray-600 text-xs uppercase tracking-widest">
        Designed & Built by Tobiloba • 2026
      </footer>
    </div>
  );
}
