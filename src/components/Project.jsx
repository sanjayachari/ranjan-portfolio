import React from 'react'
import eLearn from '../image/eLearn.jpg'
import weather from '../image/weather.png'
import resturant from '../image/resturant.jpg'
import { motion } from "framer-motion";




const Project = () => {
  return (
    <div className='p-2 md:p-[30px] md:h-[700px] w-full  '
    
    >
        <h1 className='m-10 font-bold md:text-3xl'>My Projects</h1>
    <div className='flex flex-col justify-center items-center md:grid grid-cols-3 place-items-center' id='project'>
    
    
    
    <motion.div className='h-[400px] w-[300px] m-2 col-span-1 shadow-2xl hover:bg-[black] hover:text-white hover:border-white duration-700 rounded-2xl'
     initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}
    >

        <img src={eLearn} alt='E-learning'  className='h-[140px] w-[300px]'>

        </img>

        <div className='p-5 '>
            <p className='font-bold text-2xl '>E-learning website</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MongoDB</p>
            <div className='mt-2'>
            <a className='bg-gray-300 text-black border border-black p-1' href='https://github.com/Sanjay-acharya-au50/my_first_website'>Code</a>
            <a className='bg-gray-300 text-black  border border-black p-1 m-1' href='https://sanjay-portfolio-website.onrender.com/login'>Website Link </a>
            </div>


        </div>

    </motion.div>
    <motion.div className='h-[400px] m-2 w-[300px] col-span-1 shadow-2xl   hover:bg-[black] hover:text-white hover:border-white duration-700 rounded-2xl'
    
    initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}
    >

        <img src={weather} alt=''  className='h-[140px] w-[300px]'>

        </img>
        <div className='p-5'>
            <p className='font-bold text-2xl'> Weather App</p>
            <p>React</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Weather Api</p>
            <p>Tailwind CSS</p>
            <p>MUi</p>
            <div className='mt-2'>
            <a className='bg-gray-300 text-black border border-black p-1' href='https://github.com/Sanjay-acharya-au50/react-weather-app'>Code</a>
            <a className='bg-gray-300 text-black border border-black p-1 m-1' href='https://sanjay-react-weather-app.onrender.com/'> Website Link </a>
            </div>


        </div>


    </motion.div>
    <motion.div className='h-[400px] m-2 w-[300px] col-span-1 shadow-2xl  hover:bg-[black] hover:text-white hover:border-white duration-700 rounded-2xl' 
    
    initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}
    
    >

        <img src={resturant} alt='' className='h-[140px] w-[300px]'>

        </img>
        <div className='p-5'>
            <p className='font-bold text-2xl'> Resturant App</p>
            <p>React</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Api</p>
            <p>Tailwind CSS</p>
            <p>MUi</p>
            <div className='mt-2'>
            <a className='bg-gray-300 text-black border border-black p-1' href='https://github.com/Sanjay-acharya-au50/resturant-frontend-project'>Code</a>
            <a className='bg-gray-300 text-black border border-black p-1 m-1' href='https://sanjay-resturant-frontend-project.onrender.com/'> Website Link </a>
            </div>


        </div>

    </motion.div>


    </div>
    </div>

  )
}

export default Project