import React from 'react'
import Toggle from '../Toggle/Toggle'

export default function Menu({ fixed }) {
  return (
    <>
      <header className=" body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center  text-orange-500 mb-4 md:mb-0">
            <span className="ml-3 text-2xl ">TRAVELING</span>
          </a>
          <nav className="md:ml-auto md:mr-auto text-2xl font-bold flex flex-wrap items-center justify-center">
            <a className="mr-5 hover:text-orange-500 hover:cursor-pointer">
              Home
            </a>
            <a className="mr-5 hover:text-orange-500 hover:cursor-pointer">
              Destination
            </a>
            <a className="mr-5 hover:text-orange-500 hover:cursor-pointer">
              Service
            </a>
            <a className="mr-5 hover:text-orange-500 hover:cursor-pointer">
              Client
            </a>
          </nav>
          <Toggle/>
          <button className="inline-flex items-center text-white text-2xl  bg-green-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0">
            Contact Us
          </button>
        </div>
      </header>
    </>
  )
}
