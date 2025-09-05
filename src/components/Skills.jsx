import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { 
  SiPython, SiTailwindcss, SiGit, SiReact, SiApifox, 
  SiSqlite, SiFastapi, SiFlask, SiPandas 
} from "react-icons/si";
import Powerbi from "../resources/power-bi-icon.svg";

export default function Skills() {
  const skills = [
    { id: 1, name: "Python", icon: <SiPython className="w-7 h-auto p-1 rounded-full text-sky-400" /> },
    { id: 2, name: "Pandas", icon: <SiPandas className="w-7 h-auto p-1 rounded-full text-white" /> },
    { id: 3, name: "Flask", icon: <SiFlask className="w-7 h-auto p-1 rounded-full text-white" /> },
    { id: 4, name: "FastAPI", icon: <SiFastapi className="w-7 h-auto p-1 rounded-full text-sky-400" /> },
    { id: 5, name: "Reactjs", icon: <SiReact className="w-7 h-auto p-1 rounded-full text-sky-400" /> },
    { id: 6, name: "Tailwind", icon: <SiTailwindcss className="w-7 h-auto p-1 rounded-full text-sky-400" /> },
    { id: 7, name: "RestFul APIs", icon: <SiApifox className="w-7 h-auto p-1 rounded-full text-sky-400" /> },
    { id: 8, name: "Git", icon: <SiGit className="w-7 h-auto p-1 rounded-full text-yellow-500" /> },
    { id: 9, name: "SQL", icon: <SiSqlite className="w-7 h-auto p-1 rounded-full text-sky-600" /> },
    { id: 10, name: "Excel", icon: <FontAwesomeIcon icon={faFileExcel} className="w-5 h-5 p-1 rounded-full text-green-500" /> },
    { id: 11, name: "PowerBI", icon: <img src={Powerbi} alt="PowerBI" className="w-7 h-auto p-1 rounded-full" /> },
    { id: 12, name: "Data Analysis", icon: <FontAwesomeIcon icon={faTasks} className="w-5 h-auto p-1 rounded-full text-white" /> },
  ];

  return (
    <section id='skills' className='mt-20 py-40'>
  <div className='container mx-auto px-6'>
    <h2 className='text-2xl font-bold text-center m-4'>
      Skills <span><FontAwesomeIcon icon={faTasks} /></span>
    </h2>
    {/* Responsive grid */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
      {skills.map((s, i) => (
        <div 
          key={i} 
          className='flex flex-col items-center justify-center p-4 rounded-lg hover:shadow-lg transition'
        >
          <div className='my-2 flex justify-center items-center'>{s.icon}</div>
          <h3 className='text-sm font-medium text-center'>{s.name}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
