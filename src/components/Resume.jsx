import React from 'react'
import mernStackRes from '../image/mernStackRes.pdf'
import {AiOutlineInstagram,AiFillLinkedin,AiFillGithub,AiFillFacebook} from 'react-icons/ai'




const Resume = () => {
  return (
    <div className=' p-12 w-full  flex justify-center items-center  bg-black text-white' id='resume'>
    
        <div className='h-[200px] md:h-[150px] w-[80%]  md:grid grid-cols-3 '>
            <div className='col-span-1  text-center md:text-start md:grid place-items-center'>
                <div className='w-full'>Get in Touch</div>
                <div className='w-full '> @ devsanjay7676@gmail.com </div>
                <div className='w-full '> @ 7676997759 </div>
            </div>

            <div className='col-span-1  text-center flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center '>

                <a href='https://www.instagram.com/sanju_93__/' alt='instagram' >  <AiOutlineInstagram className='m-2 text-3xl'/> </a>
                <a href='https://www.linkedin.com/in/sanjayachari/' alt='LinkedIn'>  <AiFillLinkedin className='m-2 text-3xl'/></a>
                <a href='https://github.com/sanjayachari' alt='GitHub'>  <AiFillGithub className='m-2 text-3xl'/></a>
                <a href='https://www.facebook.com/sanjay.acharya.98229' alt='Facebook'>  <AiFillFacebook className='m-2 text-3xl'/></a>

            </div>
        
                <div>© 2023 Domain. All rights reserved.</div>
            </div>

            <div className='col-span-1  flex justify-center items-center'>
            <button className='h-[30px] md:h-[40px] w-[110px] md:w-[140px] m-1  bg-[white] text-black rounded hover:bg-[black] hover:text-white border border-white duration-700'><a href={mernStackRes} download alt='resume'  className=' '>Download CV</a></button>

            </div>

        </div>
    
    </div>
  )
}

export default Resume
