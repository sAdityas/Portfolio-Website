import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">About Me <span><FontAwesomeIcon icon={faUser} /></span></h2>
        <p className="text-center max-w-2xl mx-auto text-gray-700">
            Full-stack developer with expertise in React, FastAPI, Python, and SAP automation. 
            Dedicated to building efficient, user-driven solutions and leveraging data analysis to solve real-world challenges.
        </p>
      </div>
    </section>
  );
}

export default About;
