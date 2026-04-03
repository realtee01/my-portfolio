import cinescopeImg from './assets/cinescope-thumb.jpg';
import jobBoardImg from './assets/job-board-thumb.jpg';
import calcImg from './assets/calc.jpg';
import forzchainImg from './assets/forzchain.jpg'; // Ensure this import is here
import nextcleanImg from './assets/Nextclean.jpg'; 

export const projects = [
  {
    id: 0,
    title: "Forzchain",
    description: "A decentralized supply chain management system leveraging blockchain for transparency.",
    tech: "React • Tailwind • Solidity",
    link: "https://forzchain.vercel.app/",
    image: forzchainImg
  },
  

  {
    id: 1,
    title: "Cinescope",
    description: "A premium movie discovery platform showing real-time data and polished UI.",
    tech: "js• React • Tailwind • vite",
    link: "https://cinescope-tobiloba-niad.vercel.app",
    image: cinescopeImg
  },
  {
    id: 2,
    title: "Job Listing Board",
    description: "A functional board for finding tech roles with dynamic filtering and clean layout.",
    tech: "React • Tailwind • JS",
    link: "https://job-listings-board-7i6s.vercel.app",
    image: jobBoardImg
  },
  {
    id: 3,
    title: "CGPA Calculator",
    description: "A practical tool for University of Lagos students to track and calculate grades.",
    tech: "JavaScript • CSS • HTML",
    link:"https://cgpa-calculator-tobiloba.vercel.app",
    image: calcImg
  },
  {
    id: 5, 
    title: "Next clean",
    description: "A professional cleaning service platform featuring dynamic service filtering, smooth Framer Motion animations, and a seamless booking flow.",
    tech: "React • Tailwind • Framer Motion",
    link: "https://nextclean-tau.vercel.app/", 
    image: nextcleanImg 
  }
];

export const socials = {
  x: "https://x.com/realtee1111101",
  GitHub: "https://github.com/realtee01",
  linkedin: "#",
  whatsapp: "https://wa.me/2347032533869",
  email: "mailto:tobilobaakala@gmail.com"
};
