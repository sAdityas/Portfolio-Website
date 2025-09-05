import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section
      id="about"
      className="mt-30 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          About Me{" "}
          <FontAwesomeIcon icon={faUser} className="text-yellow-400 text-2xl" />
        </h2>

        <p className="text-center max-w-2xl mx-auto text-gray-300 leading-relaxed">
        I am a full-stack developer with specialized expertise in {" "} 
          <span className="text-blue-400 font-semibold">React</span>,{" "}
          <span className="text-green-400 font-semibold">FastAPI</span>,{" "}
          <span className="text-indigo-400 font-semibold">Python,{" "}</span>along with a strong background in {" "}
          <span className="text-pink-400 font-semibold">SAP automation</span>.{" "}
          I am passionate about building scalable, user-centric web applications and backend systems that are both efficient and maintainable.{" "}
          My experience includes designing and implementing end-to-end solutions, integrating enterprise tools like SAP, and automating complex workflows to improve operational productivity.{" "}
          I also have a keen interest in {" "}
          <span className="text-yellow-400 font-semibold">data analysis</span>{" "}
          which I leverage to drive smarter decision-making and solve real-world business problems through technology.{" "}
        </p>
      </div>
    </section>
  );
}

export default About;
