import React from 'react'
import anim from "../assests/anim.jpg"
import countDown from "../assests/countDown.jpg"
import HeroImage from "../assests/countDown.jpg"
import infiScroll from "../assests/infiScroll.jpg"
import MusicPlayer from "../assests/MusicPlayer.jpg"
import QuoteGen from "../assests/QuoteGen.jpg"


const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: anim
        },
        {
            id:2,
            src: countDown
        },
        {
            id:3,
            src: HeroImage
        },
        {
            id:4,
            src: infiScroll
        },
        {
            id:5,
            src: MusicPlayer
        },
        {
            id:6,
            src: QuoteGen
        }

    ]


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full>
           <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
           </div>

          


           <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
           {
                portfolios.map(({id, src})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'></img>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
                ))
            }
            

           </div>
        </div>
    </div>
  )
}

export default Portfolio
