import React from 'react'
import mernStackRes from '../image/mernStackRes.pdf'
import '../index.css'



const Cv = () => {
  return (


    <div className=''>

    <button className='hover:bg-[white] hover:text-black border border-white duration-700 h-[30px] md:h-[40px] w-[110px] md:w-[140px] m-1  bg-[black] text-white rounded shadow-lg'><a href='#contact' className=' '> Contact Me! </a></button>
    <button className='hover:bg-[white] hover:text-black border border-white duration-700 h-[30px] md:h-[40px] w-[110px] md:w-[140px] m-1  bg-[black] text-white rounded shadow-lg'><a href={mernStackRes} download alt='resume'  className=' '>6371290586</a></button>

    </div>


  )
}

export default Cv