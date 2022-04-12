import React from 'react'
import { UilFavorite } from '@iconscout/react-unicons'
import img from '../image/0.png'
import { useContext } from "react";
import { themeContext } from "../Context";
import img1 from '../image/1.png'
import img2 from '../image/2.png'
const Hero0 = () => {
     const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
        background: darkMode ? " black" : "",
      color: darkMode ? "white" : "",

      }}
      className={
        ' xl:grid md:grid md:grid-cols-2  xl:grid-cols-4 grid  grid-cols-1 gap-16   items-center  absolute   p-4      sm:gap-5 shadow-2xl   shadow-black text-center '
      }
    >
      <div style={{
        background: darkMode ? " black" : "",
        color: darkMode ? "white" : "",
      }}>
        {' '}
        <h1 className=" text-4xl font-extrabold text-sky-400">What Excites you Most?</h1>
        <h2 className=" text-2xl">
          Build your Brighter Future Courselog kindergarten
        </h2>
      </div>
      <div className=" text-center  ">
        <h1 className=" text-3xl  font-extrabold ms:ml-14">Tracking</h1>
        <div className=" grid grid-cols-2 items-center text-center   ">
          <img className=" w-20  sm:ml-16 " src={img1} alt="" />
          <h2
            className={
              'text-xl   -ml-20 sm:-ml-0 font-semibold  text-center '
            }
          >
            Build your Brighter Future Courselog kindergarten
          </h2>
        </div>
      </div>
      <div
      style={{
        background: darkMode ? "#67e8f9" : "",
        color: darkMode ? "black" : "",
      }}  className=" text-center  bg-amber-200  rounded-3xl ">
        <h1 className=" text-3xl  font-extrabold ml-14">Windsurting</h1>
        <div className=" grid grid-cols-2 items-center text-center   ">
          <img className=" w-20  sm:ml-16 " src={img} alt="" />
          <h2
            className={
              'text-xl mt-1  -ml-20 sm:-ml-0 font-semibold  text-center '
            }
          >
            Windsurfing Donec vitea dolor it enim. Vestibul
          </h2>
        </div>
      </div>
      <div className=" text-center  ">
        <h1 className=" text-3xl  font-extrabold  ms:ml-14 mb-5">Rafting</h1>
        <div className=" grid grid-cols-2   ">
          <img className=" w-20  sm:ml-16 " src={img2} alt="" />
          <h2
            className={
              'text-xl mt-1  -ml-20 sm:-ml-0 font-semibold  text-center '
            }
          >
            Donec vitea dolor it enim. Vestibul
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Hero0
