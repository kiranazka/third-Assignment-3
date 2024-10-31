import React from 'react'
import Navbar from './Navbar';

const Hero = () => {
  return (
  <div
    id="hero"
    className="min-h-screen bg-no-repeat bg-left lg:bg-[15%] bg-cover"
    style={{
      backgroundImage: "url(/image/bg.jpg)",
      backgroundSize: "35%",
      backgroundPosition: "left 100px top 100px"
    }}
  >
        <Navbar/>
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-[70px] sm:text-[100] font-bold leading-tight flex justify-center items-center'>
            <div>
              <div>I'M</div>
              <div>Azka</div>
              <div>Kiran</div>
            </div>
          </div>
        </div>

     </div>
  
  )
}

export default Hero;
