export default function Card({ title, description, tech, link }) {
  return (
    <div className="bg-[#121212] border border-[#262626] p-6 rounded-2xl hover:border-blue-500 transition-colors">
      <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-2">
        {tech}
      </p>
      <h3 className="text-xl font-bold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        {description}
      </p>
      <a 
        href={link} 
        className="text-white text-sm font-medium border-b border-white/20 pb-1 hover:border-white transition-all"
      >
        View Project
      </a>
    </div>
  );
}
