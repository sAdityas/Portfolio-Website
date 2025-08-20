import React from "react";
import { Github, Linkedin, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href={'/'} className="font-bold tracking-tight text-white">.dev<span className=" font-extralight"> manus</span></a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-yellow-300">Projects</a>
          <a href="#skills" className="hover:text-yellow-300">Skills</a>
          <a href="#experience" className="hover:text-yellow-300">Experience</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com/sAdityas" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl hover:bg-white/10"><Github className="w-5 h-5"/></a>
          <a aria-label="LinkedIn" href="https://in.linkedin.com/in/aditya-sarkale-33737a244" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl hover:bg-white/10"><Linkedin className="w-5 h-5"/></a>
          <a href="#contact" className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-xl bg-yellow-300 text-black font-medium hover:translate-y-0.5 transition">
            Hire me <ArrowRight className="w-4 h-4 mt-1"/>
          </a>
        </div>
      </nav>
    </header>
  );
}
