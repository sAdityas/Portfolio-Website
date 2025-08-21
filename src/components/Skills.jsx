import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks} from '@fortawesome/free-solid-svg-icons'
import { SiPython } from 'react-icons/si'
import { faFileExcel } from '@fortawesome/free-regular-svg-icons'
import {SiTailwindcss} from 'react-icons/si'
import { SiGit } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiApifox } from 'react-icons/si' 
import { SiSqlite } from 'react-icons/si'
import { SiFastapi, SiFlask, SiPandas,  } from 'react-icons/si'
import Powerbi from  '../resources/power-bi-icon.svg'

export default function Skills() {
    const skill = [
        {id: 1, name:"Python", icon:<SiPython className=' w-7 h-auto p-1 rounded-full text-sky-400'/>},
        {id: 2, name:"Pandas", icon:<SiPandas className=' w-7 h-auto p-1 rounded-full  text-white'/>},
        {id: 3, name:"Flask", icon:<SiFlask className=' w-7 h-auto p-1 rounded-full  text-white'/>},
        {id: 4, name:"FastAPI", icon:<SiFastapi className=' w-7 h-auto p-1 rounded-full  text-sky-400'/>},
        {id: 5, name:"Reactjs", icon:<SiReact className=' w-7 h-auto p-1 rounded-full  text-sky-400'/>},
        {id: 6, name:"Tailwind",icon:<SiTailwindcss className=' w-7 h-auto p-1 rounded-full  text-sky-400'/>},
        {id: 6, name:"RestFul APIs", icon:<SiApifox className=' w-7 h-auto p-1 rounded-full  text-sky-400'/>},
        {id: 6, name:"Git",icon:<SiGit className=' w-7 h-auto p-1 rounded-full  text-yellow-500'/>},
        {id: 6, name:"SQL",icon:<SiSqlite className=' w-7 h-auto p-1 rounded-full  text-sky-600'/>},
        {id: 6, name:"Excel", icon:<FontAwesomeIcon icon={faFileExcel} className=' w-5 h-5 p-1 rounded-full  text-green-500'/>},
        {id: 6, name:"PowerBI", icon:<img src={Powerbi} alt="PowerBI" className=' w-7 h-auto p-1 rounded-full text-sky-400'/>},
        {id: 6, name:"Data Analysis", icon:<FontAwesomeIcon icon={faTasks} className=' w-5 h-auto p-1 rounded-full text-white' />},
    ]
  return (
    <section id='skills' className='mt-20 py-40'>
        <div className='container mx-auto px-6'>
            <h2 className='text-2xl font-bold text-center m-4'>Skills <span><FontAwesomeIcon icon={faTasks} /></span></h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-20'>
                {skill.map((s,i) => (
                    <div key={i} className='d-flex flex-col justify-content-centerp-6 rounded-lg  hover:shadow-lg flex justify-center items-center'>
                    <h3 className='text-l font-semibold'>{s.name}</h3>
                    <div className='my-2 flex justify-center items-center'>{s.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
