import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'><p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p></div>
        <p className='text-xl mt-20'>Motivated Front End Engineer with a solid foundation in web technologies, including HTML, CSS, and JavaScript. Proficient in modern front-end frameworks like React, adept at transforming design mockups into pixel-perfect implementations. Passionate about staying updated with the latest trends and best practices in web development to deliver cutting-edge solutions. A collaborative team player, committed to delivering high-quality code and continuously improving user experiences. Seeking new opportunities to contribute my expertise and drive digital innovation.</p>
        <br />
        <p className='text-xl'>My educational background has equipped me with a solid foundation in computer science principles and programming concepts. I have honed my skills in HTML, CSS, and JavaScript, which I consider to be the core building blocks of the web. I also have experience working with modern front-end libraries like React, where I've been able to create dynamic and responsive user interfaces.</p>
     </div>
    </div>
  )
}

export default About
