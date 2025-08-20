import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks'

export default function Skills() {
    const skill = [
        {id: 1, name:"Python"},
        {id: 2, name:"Pandas"},
        {id: 3, name:"Flask"},
        {id: 4, name:"FastAPI"},
        {id: 5, name:"Reactjs"},
        {id: 6, name:"Tailwind"},
        {id: 6, name:"RestFul APIs"},
        {id: 6, name:"Git"},
        {id: 6, name:"SQL"},
        {id: 6, name:"Excel"},
        {id: 6, name:"PowerBI"},
        {id: 6, name:"Data Analysis"},
    ]
  return (
    <section id='skills' className='py-20 bg-white' >
        <div className='container mx-auto px-6'>
            <h2 className='text-2xl font-bold text-center mb-6'>Skills <span><FontAwesomeIcon icon={faTasks} /></span></h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {skill.map((s,i) => (
                    <div key={i} className='bg-gray-200 p-6 rounded-lg  hover:shadow-lg flex justify-center items-center'>
                    <h3 className='text-l font-semibold'>{s.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
