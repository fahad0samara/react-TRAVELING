import React from 'react'
import img from '../image/10.avif'
const Hero2 = () => {
  return (
      <div className={' md:grid md:grid-cols-2  grid grid-cols-1  lg:m-32 '}>
        <div>
          <img className={'rounded-full shadow-white shadow-2xl '} src={img} alt="" />
        </div>
        <div className=' space-y-4  mt-28'>
          <h1 className={'m-5 md:m-5  text-3xl font-semibold'}>Top Selling </h1>
          <h2 className="m-4 text-6xl font-semibold text-green-500">
            With Our Experience We Will Serve You
          </h2>
          <h2 className={'m-4 md:m-0 text-2xl font-semibold'}>
            Since we first opened we have always prioritized the convenience of
            our users by providing low prices and with a easy process
          </h2>
          <div className="ml-9  grid grid-cols-3">
            <div>
              <h1 className={'xl:text-4xl lg:text-2xl text-green-500 md:text-lg font-bold'}>48k+</h1>
              <span className={'xl:text-2xl lg:text-xl md:text-lg  font-bold'}>
                Happy <br /> Customer
              </span>
            </div>

            <div>
              <h1 className={' xl:text-4xl lg:text-2xl text-green-500 md:text-lg font-bold'}>560+</h1>
              <span className={' xl:text-2xl lg:text-xl md:text-lg  font-bold'}>
             
                Destination<br /> Collaboration
              </span>
            </div>

            <div>
              <h1 className={' xl:text-4xl lg:text-2xl text-green-500 md:text-lg font-bold'}>18</h1>
              <span className={'ml-4  xl:text-2xl lg:text-xl md:text-lg  font-bold'}> Yours<br /> Experience</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Hero2
