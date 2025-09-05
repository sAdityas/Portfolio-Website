import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase'
import Track from '../resources/Track logo-1.png'
import CODIT from '../resources/CODTECHIT.png'
import Sharchandra from '../resources/Shrchandra.png'

function Experience() {
    const exp = [
        {
          id:1, 
          title: 'Sharchandra Tech. Ventures', 
          role:"Python Intern", 
          year: 'Jul 2024 - Aug 2024', 
          desc:`Developed Python scripts to automate data tasks, increasing efficiency by 20%. Built a Flask-based web tool to improve internal workflows. Participated in code reviews and optimized backend logic`,
          logo:  <img src={Sharchandra} className='h-10 w-10 ml-6 bg-white' alt='logo' />
        },
        {
          id:2,
          title: 'COD Tech IT Solutions', 
          role:"Reactjs Intern", 
          year: 'Jan 2025 - Mar 2025',
          desc:"Collaborated with professionals to understand industry best practices. Identified and resolved performance bottlenecks in web apps. Completed all assigned tasks within deadlines and worked closely with team members",
          logo:  <img src={CODIT} className='h-10 w-10 bg-white' alt='logo' />
        },
        {
          id:3,
          title: 'Track Components Ltd.', 
          role:"GET II - Data Analyst", 
          year: 'Feb 2025 - Till date', 
          desc:"Analyzed production and quality data to enhance efficiency and minimize defects. Developed dashboards for predictive maintenance and supply chain optimization. Focused on automation, cost reduction, and data-driven decision-making. Automated SAP processes to simplify workflows and improve the end-user experience using Python Flask and ReactJs.",
          logo:  <img src={Track} className='h-10 w-10 bg-white' alt='logo' />
        },
    ]
    return (
        <section id="experience" className="mt-20 py-40">
      <div className="container mx-auto px-6 flex flex-col justify-center items-center">
      <div className=' max-w-fit my-2'>
<h2 className="text-2xl font-bold text-center text-gray-500 transition-all duration-300 group cursor-default">
<span className="bg-gradient-to-br from-gray-400 to-gray-500 bg-clip-text text-transparent 
  group-hover:from-yellow-400 group-hover:to-pink-500 transition-all duration-1500">
  Experience
</span>
<span>
  <FontAwesomeIcon icon={faBriefcase} className="text-yellow-400 ml-2" />
</span>
</h2>
</div>

<div className="grid md:grid-cols-3 gap-3 mt-2 ">
          {exp.map((e, i) => (
            <><div key={i} className="p-4 rounded-lg shadow hover:shadow-xl border border-solid border-white/10">
              <div className='flex flex-row justify-center'>
                <h3 className="text-l font-semibold text-stone-200 whitespace-nowrap mt-2">{e.title}</h3><span className='mx-2'>{e.logo}</span></div>
              <div className='flex flex-row justify-evenly'><p className="text-gray-200 mt-2 text-xs">{e.role}</p><p className="ml-1 text-gray-300 mt-2 text-xs">{e.year}</p></div>
              <p className=' mt-2 whitespace-normal font-semibold font-sans text-slate-200 text-sm'>{e.desc}</p>
            </div></>
          ))}
        </div>
      </div>
    </section>

    )
}

export default Experience