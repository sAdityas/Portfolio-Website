import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase'

function Experience() {
    const exp = [
        {id:1, title: 'Sharchandra Tech. Ventures', role:"Python Intern", year: 'Jul 2024 - Aug 2024', desc:'Developed Python scripts to automate data tasks, increasing efficiency by 20%. Built a Flask-based web tool to improve internal workflows. Participated in code reviews and optimized backend logic'},
        {id:2,title: 'COD Tech IT Solutions', role:"Reactjs Intern", year: 'Jan 2025 - Mar 2025',desc:"Collaborated with professionals to understand industry best practices. - Identified and resolved performance bottlenecks in web apps. - Completed all assigned tasks within deadlines and worked closely with team members"},
        {id:3,title: 'Track Components Ltd.', role:"GET II - Data Analyst", year: 'Feb 2025 - currently working', desc:"Analyzed production and quality data to enhance efficiency and minimize defects. Developed dashboards for predictive maintenance and supply chain optimization. Focused on automation, cost reduction, and data-driven decision-making. Automated SAP processes to simplify workflows and improve the end-user experience using Python Flask and ReactJs."},
    ]
    return (
        <section id="experience" className="mt-20 py-20">
      <div className="container mx-auto px-6 flex flex-col justify-center items-center">
      <div className='max-w-fit my-2'>
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

<div className="grid md:grid-cols-3 gap-6">
          {exp.map((e, i) => (
            <><div key={i} className="p-6 rounded-lg shadow hover:shadow-xl">
              <h3 className="text-l font-semibold text-stone-200">{e.title}</h3>
              <p className="text-gray-300 mt-2 text-xs">{e.role}</p>
              <p className="text-gray-300 mt-2 text-xs">{e.year}</p>
              <p className=' mt-2 whitespace-normal font-semibold font-sans text-slate-300/75 text-sm'>{e.desc}</p>
            </div></>
          ))}
        </div>
      </div>
    </section>

    )
}

export default Experience