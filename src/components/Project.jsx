import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons/faProjectDiagram";
import './styles/Project.css'
import Portfolio from '../resources/portfolio.mp4'
import AMB from '../resources/AMB.mp4'
import Reveal from "../components/styles/Reveal.tsx";
import Quzi from "../resources/Quizapp.mp4"
import Agreemnt from "../resources/Agreement.mp4"


function Projects() {

  const videoRef = useRef(null)

  useEffect (() => {
    if(videoRef.current){
      videoRef.current.play().catch(err => {
        console.log(err)
      })
    }
  })
  const projects = [
    { 
      title: "Portfolio Website", 
      desc: "A personal portfolio website built with React and styled using Tailwind CSS, showcasing projects, skills, and professional experience with a clean, modern design.", 
      link:'/',
      img: Portfolio,
    },
    { 
      title: "SAP Automation", 
      desc: "Automated SAP GUI processes to streamline workflows and enhance the end-user experience, utilizing Python Flask for backend services and ReactJS for an interactive frontend interface.", 
      link: 'https://github.com/sAdityas/SAP-Automation-Projects',
      img: Agreemnt,
    },
    { 
      title: "Quiz Application", 
      desc: "A quiz website built with React for the frontend, Flask as the backend API, and SQLite3 as the database. It allows users to browse quizzes, answer questions, and receive scores. The system stores quiz data and user responses, enabling smooth and interactive quiz-taking experiences.", 
      link:'https://github.com/sAdityas/Quiz-Application.git',
      img: Quzi,
    },
    { 
      title: "AMB" , 
      desc: "A movie booking and recommendation website built using Python Flask for the backend, React for the frontend, and leveraging NLP and Pandas for personalized movie recommendations. The platform allows users to book tickets seamlessly while receiving data-driven suggestions based on their preferences.",
      link:"https://github.com/sAdityas/Movie-Recommendation.git",
      img: AMB,
    }
  ];

  return (
    <section id="projects" className="py-20 mt-20">
      
      <div className="container mx-auto px-6">
      <Reveal>
        <h2 className="text-2xl font-bold text-center mb-6">Projects <span><FontAwesomeIcon icon={faProjectDiagram} /></span></h2>
      </Reveal>
        <div className="grid md:grid-cols-1 gap-3">
          
          {projects.map((p, i) => (
             
        <div key={i} className=" flex flex-col items-center justify-center p-5 rounded-lg cursor-default ">
          <Reveal>
          <a href={p.link} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col max-w-[100vh] shadow shadow-xs cursor-pointer shadow-purple-600  hover:translate-x-0.5 hover:-translate-y-0.5 transition-all px-5 py-5 rounded-lg">
                <video ref={videoRef} src={p.img} className="webpic min-w-12 max-w-50 mx-auto hover:scale-[2] transition-all duration-100" autoPlay muted loop playsInline >not supported</video>
                <div className="flex flex-col justify-around items-center">
                  <h3 className="text-l font-semibold px-10 whitespace-nowrap rounded-lg">{p.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm px-5">{p.desc}</p>
              </div>
            </div>
          </a>
          
          </Reveal>
        </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
