export default function Card({ title, description, tech, link }) {
  return (
    <div className="bg-card-bg border border-white/5 p-8 rounded-3xl hover:border-blue-500/50 transition-all group">
      <span className="text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase">
        {tech}
      </span>
      <h3 className="text-2xl font-bold mt-3 mb-3 text-white group-hover:text-blue-400">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8">
        {description}
      </p>
      <a 
        href={link} 
        target="_blank" 
        rel="noreferrer"
        className="inline-flex items-center text-sm font-semibold text-white hover:gap-2 transition-all"
      >
        View Live Project <span className="ml-1">→</span>
      </a>
    </div>
  );
}
