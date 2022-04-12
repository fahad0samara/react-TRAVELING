import React from 'react'

export default function Menu({ fixed }) {
  return (
    <>
      <header className=" body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center  text-orange-500 mb-4 md:mb-0">
            <span class="ml-3 text-xl ">TRAVELING</span>
          </a>
          <nav className="md:ml-auto md:mr-auto text-2xl flex flex-wrap items-center text-base justify-center">
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
          <button className="inline-flex items-center text-white text-2xl  bg-green-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Contact Us
          </button>
        </div>
      </header>
    </>
  )
}
