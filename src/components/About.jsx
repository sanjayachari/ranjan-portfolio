import React from "react";
import { motion } from "framer-motion";
import profilePic from '../image/profilePic.jpg'
import './about.css'

const About = () => {
  return (
    <div className="md:h-[500px] w-full bg-[#e9e9e9]  flex items-center justify-center">
      <div
        initial={{opacity:0, scale:0.8}}
        whileInView={{ opacity:1, scale:1}}
        transition={{  duration: 0.5 }}
        viewport={{once:true}}

        className="w-full h-full md:grid grid-cols-3 gap-2 mt-5"
      >

      <div className="col-span-2  flex justify-center items-center flex-col"> 
      <motion.div className=" font-bold text-2xl md:text-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      
      >About Me</motion.div>
      <motion.div className="text-[9px] md:text-[15px] mb-2"
        initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      
      >I'm specialized in MERN stack and I'm passionate about building Scalable websites.</motion.div>

<div className="flex justify-center items-center">

<motion.div className="hover:bg-[white] hover:text-black hover:border-white duration-700 shadow-2xl h-[60px] md:h-[100px] w-[60px] md:w-[100px] text-[11px] md:text-[20px] bg-black text-white m-2 rounded-lg flex justify-center items-center"

  initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}

> <a href="#home">Home</a> </motion.div>
<motion.div className="hover:bg-[white] hover:text-black hover:border-white duration-700 shadow-2xl h-[60px] md:h-[100px] w-[60px] md:w-[100px] text-[11px] md:text-[20px] bg-black text-white m-2 rounded-lg flex justify-center items-center"

  initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}

> <a href="#project">Projects</a> </motion.div>
<motion.div className="hover:bg-[white] hover:text-black hover:border-white duration-700 shadow-2xl h-[60px] md:h-[100px] w-[60px] md:w-[100px] text-[11px] md:text-[20px] bg-black text-white m-2 rounded-lg flex justify-center items-center"

  initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}

> <a href="#contact">Contact</a> </motion.div>
<motion.div className="hover:bg-[white] hover:text-black hover:border-white duration-700 shadow-2xl h-[60px] md:h-[100px] w-[60px] md:w-[100px] text-[11px] md:text-[20px] bg-black text-white m-2 rounded-lg flex justify-center items-center"

  initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}

> <a href="#resume">Resume</a> </motion.div>
<motion.div className="hover:bg-[white] hover:text-black hover:border-white duration-700 shadow-2xl h-[60px] md:h-[100px] w-[60px] md:w-[100px] text-[11px] md:text-[20px] bg-black text-white m-2 rounded-lg flex justify-center items-center"

  initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}

> <a href="#project">Experience</a> </motion.div>
      
</div>

       </div>
      <motion.div className="col-span-1 flex justify-center items-center p-5" 
        initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      
      >  

      <motion.div className="h-[270px] md:h-[350px] w-[200px] md:w-[260px] bg-[black] rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      
      
      >

      <img src={profilePic} alt="" className="h-[270px] md:h-[350px] w-[200px] md:w-[260px] about rounded-lg border border-black" />
      </motion.div>
      </motion.div>
      </div>
    </div>
  );
};

export default About;
