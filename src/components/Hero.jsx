import React from "react";
import Avatar from "./Avatar";
import './styles/Hero.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-800 to-indigo-900 text-white text-center">
      
      <Avatar />
      <h1 className="text-5xl font-extrabold mb-4 mt-3">Hi, I'm Aditya <span className="hand-wave text-4xl mt-2"><FontAwesomeIcon className=''icon={faHand} /></span></h1>
      <p className="text-lg max-w-xl">
      Developer specializing in React, FastAPI/Flask, and SAP automation, with a keen passion for creating impactful projects and exploring data analysis to drive insights.
      </p>
      <a href='#projects'>
      <button className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500">
        View My Work
      </button></a>
    </section>
  );
}

export default Hero;
