import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import img from '../image/3.png'
import img0 from '../image/4.avif'
import img1 from '../image/5.avif'
import img2 from '../image/6.avif'
import img3 from '../image/7.avif'
import img4 from '../image/8.avif'
import img5 from '../image/9.avif'

import '../App.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper'

export default function App() {
  return (
    <div
      className={
        '   sm:mt-[600px] md:mt-[400px] mt-[800px] xl:mt-[300px]'
      }
    >
      <div>
        <h1 className=" text-center text-3xl">Top selling</h1>
        <h1 className=" text-center text-6xl">Explore Top destination</h1>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src={img}
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font text-lg font-medium ">London</h1>

              <div class="flex items-center flex-wrap ">
                <a class=" text-yellow-400 text-2xl inline-flex items-center md:mb-2 lg:mb-0">
                  230$
                </a>
                <span
                  className={
                    'mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-green-200'
                  }
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src={img0}
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font text-lg font-medium ">Auburn</h1>

              <div class="flex items-center flex-wrap ">
                <a class=" text-yellow-400 text-2xl inline-flex items-center md:mb-2 lg:mb-0">
                  190$
                </a>
                <span
                  className={
                    'mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-green-200'
                  }
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src={img1}
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font text-lg font-medium ">Anniston</h1>

              <div class="flex items-center flex-wrap ">
                <a class=" text-yellow-400 text-2xl inline-flex items-center md:mb-2 lg:mb-0">
                  200$
                </a>
                <span
                  className={
                    'mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-green-200'
                  }
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  3.2
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src={img2}
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font text-lg font-medium ">Enterprise</h1>

              <div class="flex items-center flex-wrap ">
                <a class=" text-yellow-400 text-2xl inline-flex items-center md:mb-2 lg:mb-0">
                  400$
                </a>
                <span
                  className={
                    'mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-green-200'
                  }
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  7.5
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src={img3}
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font text-lg font-medium ">Demopolis</h1>

              <div class="flex items-center flex-wrap ">
                <a class=" text-yellow-400 text-2xl inline-flex items-center md:mb-2 lg:mb-0">
                  80$
                </a>
                <span
                  className={
                    'mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-green-200'
                  }
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  5.00
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src={img4}
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font text-lg font-medium ">Decatur</h1>

              <div class="flex items-center flex-wrap ">
                <a class=" text-yellow-400 text-2xl inline-flex items-center md:mb-2 lg:mb-0">
                  200$
                </a>
                <span
                  className={
                    'mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-green-200'
                  }
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.9
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src={img5}
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font text-lg font-medium ">Decatur</h1>

              <div class="flex items-center flex-wrap ">
                <a class=" text-yellow-400 text-2xl inline-flex items-center md:mb-2 lg:mb-0">
                  140$
                </a>
                <span
                  className={
                    'mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-green-200'
                  }
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  4.2
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
