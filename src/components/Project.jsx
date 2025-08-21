import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons/faProjectDiagram";
import './styles/Project.css'

function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "A personal portfolio website built with React and styled using Tailwind CSS, showcasing projects, skills, and professional experience with a clean, modern design.", link:'/' },
    { title: "SAP Automation", desc: "Automated SAP GUI processes to streamline workflows and enhance the end-user experience, utilizing Python Flask for backend services and ReactJS for an interactive frontend interface.", link: 'https://github.com/sAdityas/SAP-Automation-Projects' },
    { title: "Quiz Application", desc: "A quiz website built with React for the frontend, Flask as the backend API, and SQLite3 as the database. It allows users to browse quizzes, answer questions, and receive scores. The system stores quiz data and user responses, enabling smooth and interactive quiz-taking experiences.", link:'https://github.com/sAdityas/Quiz-Application.git' },
    { title: "AMB" , desc: "A movie booking and recommendation website built using Python Flask for the backend, React for the frontend, and leveraging NLP and Pandas for personalized movie recommendations. The platform allows users to book tickets seamlessly while receiving data-driven suggestions based on their preferences.", link:"https://github.com/sAdityas/Movie-Recommendation.git"}
  ];

  return (
    <section id="projects" className="py-20 mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Projects <span><FontAwesomeIcon icon={faProjectDiagram} /></span></h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <> <a href={p.link} target="_blank" rel="noopener noreferrer"><div key={i} className=" p-6 rounded-lg shadow shadow-slate-50 hover:translate-x-0.5 hover:-translate-y-0.5 transition-all ">
              <h3 className="text-l font-semibold">{p.title}</h3>
              <p className="text-gray-400 mt-2 text-xs">{p.desc}</p>
            </div></a></>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
