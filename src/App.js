import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Reveal from "./components/styles/Reveal.tsx";


function App() {
  return (
    <div className="App font-sans bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100">
      <Navbar />
      <Reveal>
      <Hero/>
      </Reveal>
      <Reveal>
      <About />
      </Reveal>
      <Reveal>
      <Skills />
      </Reveal>
      <Projects /> 
      <Reveal>
      <Experience />
      </Reveal>
      <Reveal>
      <Contact />
      </Reveal>
      <Footer />

    </div>
  );
}

export default App;
