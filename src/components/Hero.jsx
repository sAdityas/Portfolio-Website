import React from "react";
import Avatar from "./Avatar";
import "./styles/Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center mb-20 pt-20">
      
      <Avatar />
      <div className="flex justify-center items-center flex-col group">
      <h1 className="text-5xl font-extrabold mb-4 mt-3">
        Hi, I'm <span className="text-yellow-400">Aditya</span>{" "}
        <span className="hand-wave text-4xl ml-2 inline-block">
          <FontAwesomeIcon icon={faHand} className="text-yellow-400" />
        </span>
      </h1>

      <p className="text-lg max-w-xl text-gray-300 leading-relaxed">
        Developer specializing in{" "}
        <span className="text-blue-400 font-semibold">React</span>,{" "}
        <span className="text-green-400 font-semibold">FastAPI/Flask</span>, and{" "}
        <span className="text-indigo-400 font-semibold">SAP automation</span>, 
        with a passion for creating impactful projects and exploring data 
        analysis to drive insights.
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
