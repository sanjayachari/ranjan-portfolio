import React from 'react'
import eLearn from '../image/eLearn.jpg'
import weather from '../image/weather.png'
import resturant from '../image/resturant.jpg'
import { motion } from "framer-motion";
import crud from '../image/crud.png'
import ecom from '../image/ecom.jpeg'
import auth from '../image/auth.png'
import blog from '../image/blog.jpeg'
import redux from '../image/redux.png'


const Project = () => {
  return (
    <div className='p-2 md:p-[30px]  w-full  '
    
    >
        <h1 className='m-5 md:m-20 font-bold text-2xl md:text-3xl'>My Projects</h1>
    <div className='flex flex-col justify-center items-center md:grid grid-cols-3 place-items-center ' id='project'>
    
   

    <motion.div className='mt-5 h-[400px] m-2 w-[300px] col-span-1 shadow-2xl  hover:bg-[black] hover:text-white hover:border-white duration-700 rounded-2xl gap-3' 
    
    initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}
    
    >

        <img src={blog} alt='' className='h-[140px] w-[300px]'>

        </img>
        <div className='p-5'>
            <p className='font-bold text-2xl'> MERN Blog App</p>
            <p>React</p>
            <p>Context Api</p>
            <p>Nodejs</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>Tailwind CSS</p>
            <div className='mt-2'>
            <a className='bg-gray-300 text-black border border-black p-1' href='https://github.com/Sanjay-acharya-au50/CRUD_BACKEND'>Code</a>

            </div>


        </div>

    </motion.div>
    <motion.div className='mt-5 h-[400px] m-2 w-[300px] col-span-1 shadow-2xl  hover:bg-[black] hover:text-white hover:border-white duration-700 rounded-2xl gap-3' 
    
    initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}
    
    >

        <img src={crud} alt='' className='h-[140px] w-[300px]'>

        </img>
        <div className='p-5'>
            <p className='font-bold text-2xl'> MERN CRUD Operation</p>
            <p>React</p>
            <p>Nodejs</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>Tailwind CSS</p>
            <p>MUi</p>
            <div className='mt-2'>
            <a className='bg-gray-300 text-black border border-black p-1' href='https://github.com/Sanjay-acharya-au50/CRUD_BACKEND'>Code</a>
            <a className='bg-gray-300 text-black border border-black p-1 m-1' href='https://sanjay-mern-crud-project.vercel.app/'> Website Link </a>
            </div>


        </div>

    </motion.div>
  
    <motion.div className='mt-5 h-[400px] m-2 w-[300px] col-span-1 shadow-2xl  hover:bg-[black] hover:text-white hover:border-white duration-700 rounded-2xl gap-3' 
    
    initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}
    
    >

        <img src={auth} alt='' className='h-[140px] w-[300px]'>

        </img>
        <div className='p-5'>
            <p className='font-bold text-2xl'> MERN Authentication</p>
            <p>React</p>
            <p>Nodejs</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>Tailwind CSS</p>
            <p>Json Web Token</p>
            <div className='mt-2'>
            <a className='bg-gray-300 text-black border border-black p-1' href='https://github.com/Sanjay-acharya-au50/mernAuthh'>Code</a>

            </div>


        </div>

    </motion.div>
    <motion.div className='mt-5 h-[400px] m-2 w-[300px] col-span-1 shadow-2xl  hover:bg-[black] hover:text-white hover:border-white duration-700 rounded-2xl gap-3' 
    
    initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}
    
    >

        <img src={redux} alt='' className='h-[140px] w-[300px]'>

        </img>
        <div className='p-5'>
            <p className='font-bold text-2xl'> Redux pizzaCart</p>
            <p>React</p>
            <p>Vites.js</p>
            <p>Tailwind CSS</p>
            <p>Redux Toolkit</p>
            <p>React-Router-Dom</p>
            <p>Framer Motion</p>
            <div className='mt-2'>
            <a className='bg-gray-300 text-black border border-black p-1' href='https://github.com/Sanjay-acharya-au50/react-portFolio'>Code</a>
            <a className='bg-gray-300 text-black border border-black p-1 m-1' href='https://sanjay-pizza-cart.vercel.app/'> Website Link </a>
            </div>


        </div>

    </motion.div>
    <motion.div className='mt-5 h-[400px] m-2 w-[300px] col-span-1 shadow-2xl  hover:bg-[black] hover:text-white hover:border-white duration-700 rounded-2xl gap-3' 
    
    initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}
    
    >

        <img src={ecom} alt='' className='h-[140px] w-[300px]'>

        </img>
        <div className='p-5'>
            <p className='font-bold text-2xl'> E-Commerce App</p>
            <p>React</p>
            <p>Vites.js</p>
            <p>Tailwind CSS</p>
            <p>Context Api</p>
            <p>React-Router-Dom</p>
            <p>Framer Motion</p>
            <div className='mt-2'>
            <a className='bg-gray-300 text-black border border-black p-1' href='https://github.com/Sanjay-acharya-au50/ecom'>Code</a>
            <a className='bg-gray-300 text-black border border-black p-1 m-1' href='https://sanjay-ecommerce-project-git-main-sanjay-acharya-au50.vercel.app/'> Website Link </a>
            </div>


        </div>

    </motion.div>
    
    
    <motion.div className='h-[400px] w-[300px] m-4 col-span-1 shadow-2xl hover:bg-[black] hover:text-white hover:border-white duration-700 rounded-2xl gap-3'
     initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}
    >

        <img src={eLearn} alt='E-learning'  className='h-[140px] w-[300px]'>

        </img>

        <div className='p-5 '>
            <p className='font-bold text-2xl '>E-Learning website</p>
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
    <motion.div className='mt-5 h-[400px] m-2 w-[300px] col-span-1 shadow-2xl   hover:bg-[black] hover:text-white hover:border-white duration-700 rounded-2xl gap-3'
    
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
    <motion.div className='mt-5 h-[400px] m-2 w-[300px] col-span-1 shadow-2xl  hover:bg-[black] hover:text-white hover:border-white duration-700 rounded-2xl gap-3' 
    
    initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}
    
    >

        <img src={resturant} alt='' className='h-[140px] w-[300px]'>

        </img>
        <div className='p-5'>
            <p className='font-bold text-2xl'> Resturant App UI</p>
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