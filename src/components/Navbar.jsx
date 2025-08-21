import React from "react";
import { Github, Linkedin, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-500/60 border-b border-white/25">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
      <a 
        href="/" 
        className="font-bold h-9 mt-2"
      >
      <span 
        className="inline-block hover:first-letter:text-yellow-500 hover:animate-pulse"
      >
        .dev
      </span>
      <span 
        className="font-extralight bg-gradient-to-bl from-gray-200 to-gray-400 
                  bg-clip-text text-transparent font-sans 
                  hover:from-amber-500 hover:to-emerald-500 
                  transition-all duration-500 hover:animate-pulse"
      >
        {" "}manus
      </span>
      </a>

        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-yellow-300 transition-all duration-75">Projects</a>
          <a href="#skills" className="hover:text-yellow-300 transition-all duration-75">Skills</a>
          <a href="#experience" className="hover:text-yellow-300 transition-all duration-75">Experience</a>
          <a href="#contact" className="hover:text-yellow-300 transition-all duration-75">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com/sAdityas" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl hover:bg-white/10 transition-all duration-75"><Github className="w-5 h-5"/></a>
          <a aria-label="LinkedIn" href="https://in.linkedin.com/in/aditya-sarkale-33737a244" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl hover:bg-white/10 transition-all duration-75"><Linkedin className="w-5 h-5"/></a>
          <a href="#contact" className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-xl bg-yellow-300 text-black font-medium hover:translate-y-0.5 transition-all duration-75">
            Hire me <ArrowRight className="w-4 h-4 mt-1"/>
          </a>
        </div>
      </nav>
    </header>
  );
}
