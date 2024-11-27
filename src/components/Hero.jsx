import React, { useState } from 'react'
import HeroImg from '../assets/image/png/hero-img.png'
 

const Hero = () => {

  return (
    <div className='bg-black  min-h-screen pt-5 items-center justify-center'>
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:mb-8 mb-6">
          <div className="lg:w-6/12 w-full px-3 flex justify-center flex-col">
            <h1
              className="2xl:text-customXl xl:text-9xl text-white lg:text-7xl text-5xl max-w-[400px] text-primary leading-[86%] lg:mb-[18px] font-godzilla mb-3">
              Kaijuu
              <span className="text-white font-godzilla">Crew</span>
            </h1>
            <p
              className="text-white lg:text-[22px] leading-normal text-base max-w-[320px] lg:mb-[18px] mb-3 text-left">
              The
              ocean surges with spray and foam,
              As Kaijuu rise from depth to roam.
              Thirty-three hundred, and thirty-three more,
              Decked in garbs from days of yore.
              We scour the earth and sea and air,
              Our mission so grave few would dare.
              In search of untold wealth to hoard?
              Nay, but 'cause your Apes are Bored.
            </p>
            <div id="timer" className="font-bold text-5xl text-white leading-primary">
              10:20:15:10
            </div>
            <p
              className="text-white opacity-[60%] lg:text-[18px] text-sm leading-primary lg:mb-[18px] mb-3">
              Days left</p>
             
          </div>
          <div className="lg:w-6/12 w-full px-3 flex justify-center flex-col">
            <img className="max-w-[707px]" src={HeroImg}  
              alt="character-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero