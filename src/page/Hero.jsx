import React from "react";
import img from "../image/00.svg";
import {UilPlay} from "@iconscout/react-unicons";



const Hero = () => {
  return (
      <div className={' md:grid md:grid-cols-2 '}>
        <div className="  space-y-5 mt-11 m ">
          <h1 className={'text-center sm:text-6xl ml-6 font-bold sm:mt-8 text-2xl'}>
            Life is short <br /> and the world <br /> is wide!
          </h1>
          <h2 className={' font-extrabold sm:text-3xl text-xl ml-2'}>
            Traveling is one about leadership, and chartering your own when
            everybody else is doing the same thing
          </h2>
          <div className=" ml-8  flex  text-center items-center space-x-10">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:bg-gradient-to-br   font-medium rounded-lg  sm:text-2xl sm:px-7 py-3 text-center mr-2 mb-2"
            >
              Explore
            </button>
            <button className="text-2xl font-bold "></button>
            <button
              type="button"
              class={'text-green-500  font-black  sm:text-3xl rounded-lg   text-center inline-flex items-center hover:cursor-pointer  '}
            >
              <UilPlay
                color="green"
                size="50"
                className=" bg-orange-500 rounded-full"
              />
              Play Demo
            </button>
          </div>
        </div>
        
        <div className="right">
        
          <img className="img0  " src={img} alt="" />

          <div className={' top-[600px] left-[-80px]   bg-amber-400  '}></div>
        </div>
      
      </div>
  );
};

export default Hero;
