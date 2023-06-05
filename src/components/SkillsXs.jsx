import React from 'react'
import {motion} from 'framer-motion'

const SkillsXs = () => {
  return (
    <motion.section className='md:hidden block text-center mt-5' id='skill'
        initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}
    >
        <h1 className='font-bold text-2xl'>Professional Skills</h1>
        <ul className='p-2 shadow-xl rounded-xl'>
            <li className='hover:bg-[white] hover:text-black border border-white duration-700  m-1 p-1  bg-black text-white rounded'>HTML</li>
            <li className='hover:bg-[white] hover:text-black border border-white duration-700  m-1 p-1  bg-black text-white rounded'>CSS</li>
            <li className='hover:bg-[white] hover:text-black border border-white duration-700  m-1 p-1  bg-black text-white rounded'>Javascript</li>
            <li className='hover:bg-[white] hover:text-black border border-white duration-700  m-1 p-1  bg-black text-white rounded'>React.js</li>
            <li className='hover:bg-[white] hover:text-black border border-white duration-700  m-1 p-1  bg-black text-white rounded'>Node.js</li>
            <li className='hover:bg-[white] hover:text-black border border-white duration-700  m-1 p-1  bg-black text-white rounded'>Express.js</li>
            <li className='hover:bg-[white] hover:text-black border border-white duration-700  m-1 p-1  bg-black text-white rounded'>MongoDB</li>
            <li className='hover:bg-[white] hover:text-black border border-white duration-700  m-1 p-1  bg-black text-white rounded'>Git</li>
            <li className='hover:bg-[white] hover:text-black border border-white duration-700  m-1 p-1  bg-black text-white rounded'>Tailwind CSS</li>
        </ul>
    
    </motion.section>
  )
}

export default SkillsXs