import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";


const Skills = () => {


const data = [
    {

      language: 'HTML',
      score: 93,

    },
    {

      language: 'CSS',
      score: 93,

    },
    {

      language: 'JS',
      score: 94,

    },
    {

      language: 'React',
      score: 90,

    },
    {

      language: 'Node',
      score: 88,

    },
    {

        language: 'Git',
        score: 95,
  
      },
   
    {

      language: 'M-DB',
      score: 90,

    },
    {

        language: 'Express',
        score: 88,
  
      },
   
  ];
  
    
  return (

    // <div className='flex justify-center items-center'>

    <motion.section id='skill' className='  md:m-[25px]  h-[200px] md:h-[350px] md:block hidden text-[10px] md:text-[20px] '
     initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}
    >
        <h1 className='m-10 font-bold  md:text-3xl'>Professional Skills</h1>


    
    <ResponsiveContainer className='w-[300px]'>


        <BarChart data= {data} >

        <XAxis dataKey='language'  />


        <YAxis/>
        <Tooltip/>
        <Bar dataKey="score" barSize={15} />


        </BarChart>


    </ResponsiveContainer>

    
    </motion.section>
    // </div>

  )
}

export default Skills



// import React from 'react'

// const Contact = () => {
//   return (

      
//       </div>

//   )
// }

// export default Contact