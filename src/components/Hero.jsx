import React from "react";
import Avatar from "./Avatar";
import "./styles/Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center mb-20 pt-20 mx-3 h-screen">
      
      <Avatar />
      <div className="flex justify-center items-center flex-col group w-full">
      <h1 className="text-5xl font-extrabold mb-4 mt-3">
        Hi, I'm <span className="text-yellow-400">Aditya</span>{" "}
        <span className="hand-wave text-4xl ml-2 inline-block">
          <FontAwesomeIcon icon={faHand} className="text-yellow-400" />
        </span>
      </h1>

      <p className="text-lg max-w-4xl text-gray-300 leading-relaxed">I am a developer specializing in {" "}
        <span className="text-blue-400 font-semibold">React</span>{" "}for front-end development ,{" "}
        and {" "}<span className="text-green-400 font-semibold">FastAPI/Flask</span>{" "}for building high-performance backend systems. {" "}
        With hands-on experience in <span className="text-indigo-400 font-semibold">SAP automation</span>,{" "}I focus on streamlining enterprise workflows and integrating robust software solutions.
        I am passionate about creating impactful projects that not only solve real-world problems but also enhance user experience. My interest in
        <span className="text-red-400 font-semibold"> Data Analysis</span>{" "}using <span className="font-semibold text-amber-400">Pandas{" "}</span> helps me uncover actionable insights, enabling smarter, data-driven decisions across projects.{" "}
      </p>

      <a href="#projects">
        <button className="mt-6 px-8 py-3 bg-yellow-400 text-black rounded-xl font-semibold shadow-md hover:bg-yellow-500 hover:shadow-lg transition">
          View My Work
        </button>
      </a>
      </div>
    </section>
  );
}

export default Hero;
