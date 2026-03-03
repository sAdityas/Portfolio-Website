import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons/faProjectDiagram";
import "./styles/Project.css";

import Portfolio from "../resources/portfolio.mp4";
import AMB from "../resources/AMB.mp4";
import Quiz from "../resources/Quizapp.mp4";
import Agreement from "../resources/Agreement.mp4";
import Gym from "../resources/GYMTRACKER.png";
import Ticket from "../resources/TicketTracker.png";

import Reveal from "../components/styles/Reveal.tsx";

function Projects() {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch(() => {});
      }
    });
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio website built with React and styled using Tailwind CSS, showcasing projects, skills, and professional experience with a clean, modern design.",
      link:'/',
      type: 'video',
      media: Portfolio,
     },
     {
      title: "SAP Automation",
      desc: "Automated SAP GUI processes to streamline workflows and enhance the end-user experience, utilizing Python Flask for backend services and ReactJS for an interactive frontend interface.",
      link: 'https://github.com/sAdityas/SAP-Automation-Projects',
      type: 'video',
      media: Agreement,
    },
    {
      title: "Quiz Application",
      desc: "A quiz website built with React for the frontend, Flask as the backend API, and SQLite3 as the database. It allows users to browse quizzes, answer questions, and receive scores. The system stores quiz data and user responses, enabling smooth and interactive quiz-taking experiences.",
      link:'https://github.com/sAdityas/Quiz-Application.git',
      type: 'video',
      media: Quiz
     },
     {
      title: "AMB" ,
      desc: "A movie booking and recommendation website built using Python Flask for the backend, React for the frontend, and leveraging NLP and Pandas for personalized movie recommendations. The platform allows users to book tickets seamlessly while receiving data-driven suggestions based on their preferences.",
      link:"https://github.com/sAdityas/Movie-Recommendation.git",
      type: 'video',
      media: AMB,
     },
     {
      title: 'Brazil E-Commerce Olist Data analysis',
      desc: 'Analyzed 100k+ multi-table transactional dataset using Python, Pandas Seaborn, and Folium Identified trends in monthly sales, revenue patterns, top categories, seller performance, and payment behavior. Built geolocation maps for customer & seller distribution; performed sentiment analysis on translated customer reviews using NLP (VADER). Delivered business insights improving understanding of customer behavior delivery performance, and product demand cycle',
      link: 'https://github.com/sAdityas/Brazilian-E-Commerce-Dataset-Analysis.git',
      type: 'icon',
      media: faProjectDiagram,
    },
    {
      title: 'GYM and Diet Progress Tracking Backend Application',
      desc: 'Gym-Tracker is a full-stack web application that helps users log and track their workouts, monitor progress over time, and stay motivated on their fitness journey. It features a clean, intuitive interface where users can record exercises, sets, reps, and weights, view workout history, and analyze performance trends. Built using modern web technologies, this project showcases practical skills in frontend and backend development, state management, and user-centric design',
      link: 'https://github.com/sAdityas/Gym-Tracker.git',
      type: 'image',
      media: Gym
    },
     {
      title: 'Ticket Raising Application',
      desc: 'Ticket Raising Application is a private company level solo-project.This system is a centralized platform designed to manage, track and resolve internal service requests across multiple departments within Track Components Limited. This system will: Enable employees to raise service requests, Router tickets to appropriate departments, Track ticket lifecycle and SLA Compliance, Provide transparency and accountability,Offers analytics for performance optimization',
      link: '',
      type: 'image',
      media: Ticket
    }
  ];

  return (
    <section id="projects" className="py-20 mt-20">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-2xl font-bold text-center mb-6">
            Projects{" "}
            <span>
              <FontAwesomeIcon icon={faProjectDiagram} />
            </span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-1 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-5 rounded-lg"
            >
              <Reveal>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col max-w-[100vh] shadow shadow-purple-600 hover:translate-x-0.5 hover:-translate-y-0.5 transition-all px-5 py-5 rounded-lg cursor-pointer">

                    {/* MEDIA SECTION */}
                    <div className="overflow-hidden">
                      {p.type === "video" && (
                        <video
                          ref={(el) => (videoRefs.current[i] = el)}
                          src={p.media}
                          className="webpic min-w-12 max-w-50 mx-auto hover:scale-110 transition-all duration-300"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      )}

                      {p.type === "image" && (
                        <img
                          src={p.media}
                          alt={p.title}
                          className="webpic min-w-12 max-w-50 mx-auto hover:scale-110 transition-all duration-300"
                        />
                      )}

                      {p.type === "icon" && (
                        <FontAwesomeIcon
                          icon={p.media}
                          className="text-6xl mx-auto text-purple-500"
                        />
                      )}
                    </div>

                    {/* TEXT SECTION */}
                    <div className="flex flex-col justify-around items-center mt-4">
                      <h3 className="text-lg font-semibold px-10 text-center">
                        {p.title}
                      </h3>
                      <p className="text-gray-400 mt-2 text-sm px-5 text-center">
                        {p.desc}
                      </p>
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
