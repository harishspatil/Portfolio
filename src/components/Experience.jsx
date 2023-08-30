import React from 'react'
import html5 from '../assests/html5.png'
import css from '../assests/css.png'
import bootstrap from '../assests/bootstrap.png'
import javascriptimg from '../assests/javascript.png'
import reactimg from '../assests/react.png'
import tailwind from '../assests/tailwind.png'
import github from '../assests/github.png'


const Experience = () => {

const tech = [
    {
        id:1,
        src: html5,
        title: 'HTML',
        style:'shadow-orange-500'    
    },
    {
        id:2,
        src: css,
        title: 'CSS',
        style:'shadow-blue-500'    
    },
    {
        id:3,
        src: javascriptimg,
        title: 'Javascript',
        style:'shadow-yellow-500'    
    },
    {
        id:4,
        src: bootstrap,
        title: 'Bootstrap',
        style:'shadow-purple-500'    
    },
    {
        id:5,
        src: reactimg,
        title: 'React JS',
        style:'shadow-blue-600'    
    },
    {
        id:6,
        src: tailwind,
        title: 'Tailwind CSS',
        style:'shadow-sky-400'    
    },
    {
        id:7,
        src: github,
        title: 'Github',
        style:'shadow-gray-500'    
    },

]

  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
      <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Tech Stack</p>
      <p className='py-6'>These are the technologies I've worked with</p>
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

{
    tech.map(({id,src,title,style})=>(
        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}> 
            <img src={src} alt='' className='w-20 mx-auto'></img>
            <p className='mt-4'>{title}</p>
        </div>
    ))
}

        
      </div>
    </div>
    </div>
  )
}

export default Experience
