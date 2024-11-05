import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='rounded-lg min-h-screen bg-no-repeat bg-[url(/profile-bg2.jpg)]  bg-cover'
    style={{backgroundSize:"25%",backgroundPosition :"left 60px top 80px"}}
    >
       <Navbar />
       <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[50px] sm:text-[80px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Huma</p>
            <p data-aos="zoom-in-up">Meraj</p>

          </div>
        </div>
        </div> 
    </div>
  )
}
 
export default Hero 