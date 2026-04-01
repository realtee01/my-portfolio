{/* THE BUILDER / ABOUT SECTION */}
<section id="about" className="py-24 border-t border-white/5">
  <div className="max-w-3xl">
    {/* Section Header */}
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[10px] font-bold tracking-[0.4em] text-blue-500 uppercase">002 — The Builder</span>
      <div className="h-[1px] w-12 bg-blue-500/30"></div>
    </div>

    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10 leading-none">
      The <span className="text-blue-500">Builder.</span>
    </h2>

    {/* Bio Text */}
    <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed font-medium mb-20">
      <p>
        I am a Frontend Engineer and Computer Science student at the <span className="text-white font-bold">University of Lagos</span>, dedicated to bridging the gap between complex technical logic and high-end visual aesthetics.
      </p>
      <p>
        My approach to development is rooted in <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-4 font-bold">Performance-First Engineering</span>. I specialize in architecting scalable React applications that don't just function—they provide seamless, frictionless experiences for the end-user.
      </p>
      <p>
        Beyond writing code, I am obsessed with the "Why." I believe that every pixel should serve a purpose and every interaction should drive value.
      </p>
    </div>

    {/* TOOLS SECTION (The one from your screenshots) */}
    <div className="mb-20">
      <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
        Tools I Use. <br/>
        <span className="text-gray-700">Problems I Solve.</span>
      </h3>

      <div className="space-y-3">
        {[
          { name: "HTML5", desc: "Semantic & Accessible", color: "border-orange-500/20" },
          { name: "CSS3", desc: "Grid, Flex, Custom Props", color: "border-blue-500/20" },
          { name: "JavaScript", desc: "Vanilla & ES6+", color: "border-yellow-500/20" },
          { name: "React", desc: "Component Architecture", color: "border-cyan-500/20" },
          { name: "Tailwind CSS", desc: "Utility-First Styling", color: "border-teal-500/20" },
          { name: "GitHub", desc: "Version Control & CI/CD", color: "border-white/20" }
        ].map((tool) => (
          <div key={tool.name} className={`flex items-center justify-between p-5 bg-[#121212] border-l-4 ${tool.color} rounded-r-xl hover:bg-[#1a1a1a] transition-all group`}>
            <div>
              <h4 className="text-white font-bold text-lg">{tool.name}</h4>
              <p className="text-gray-500 text-xs tracking-wide">{tool.desc}</p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 text-xs font-bold tracking-widest">
              MASTERED
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Quick Stats Row */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-white/5">
      <div>
        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2">Location</p>
        <p className="text-sm text-white font-bold">Lagos, NG</p>
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2">University</p>
        <p className="text-sm text-white font-bold">UNILAG (CS)</p>
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2">Focus</p>
        <p className="text-sm text-white font-bold">UI Engineering</p>
      </div>
    </div>
  </div>
</section>
