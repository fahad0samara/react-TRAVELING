import React from 'react'
import img from '../image/11.png'
import { UilStar } from '@iconscout/react-unicons'
import { UilArrowCircleRight } from '@iconscout/react-unicons'
import { UilArrowCircleLeft } from '@iconscout/react-unicons'
const Hero4 = () => {
  return (
    <div>
      <h1 className=" text-3xl text-center font-bold sm:mt-11  mt-20">
        Testimonial
      </h1>
      <h2 className=" text-5xl text-center font-extrabold text-green-500 sm:mt-2 mt-10">
        What Our Customer Say About us
      </h2>
      <div className="grid  grid-cols-1 md:grid md:grid-cols-2 md:m-32 text-center">
        <div className="   m-5">
          <h1 className="  text-4xl">Donovan Joel</h1>
          <h2 className="  text-2xl">Donovan Joel </h2>
          <div className=" flex text-amber-300 text-2xl text-center items-center   ml-32 ">
            <UilStar /> <UilStar /> <UilStar /> <UilStar />
          </div>
          <h1 className=" font-extrabold sm:text-xl md:text-2xl">
            "The bad was extremely comfortable. Everything was great at this
            appartement, amazing staff that is friendly and makes customers feel
            welcome. I'll be back in a month! will definitely stay there when I
            come back"
          </h1>
          <div className={' hidden md:flex space-x-9 mt-12 sm:ml-0  ml-32'}>
            <UilArrowCircleLeft
              className=" bg-green-600 rounded-full"
              size="50"
              color=" white"
            />
            <UilArrowCircleRight size="50" />
          </div>
        </div>
        <div>
          <img
                      className={
                          
              ' md:w-96 -skew-x-12 xl:w-1/2 rounded-bl-3xl shadow-green-500 shadow-md ml-20'
            }
            src={img}
            alt=""
                  />
               <div className={'md:hidden flex space-x-9 mt-12   ml-32'}>
            <UilArrowCircleLeft
              className=" bg-green-600 rounded-full"
              size="50"
              color=" white"
            />
            <UilArrowCircleRight size="50" />
          </div>   
        </div>
      </div>
    </div>
  )
}

export default Hero4
