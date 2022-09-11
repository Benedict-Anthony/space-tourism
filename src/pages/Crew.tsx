import React from 'react'
import {useEffect, useState} from "react"
import { Object } from '../types/Interface'
import {Swiper, SwiperSlide} from "swiper/react"
import SingleCrew from '../components/SingleCrew';
import "swiper/css/pagination"
import {Pagination} from "swiper"

import {motion} from "framer-motion"
import { pageVariant } from '../components/motioVarianst'

const Crew = () => {
  const [crewData, setCrewData] = useState<Object[]>([])
  const fetchData = async () => {
    const res = await fetch("data.json")
    const data = await res.json()
    setCrewData(data.crew)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <motion.main
      variants={pageVariant}
      initial="YOnLoad"
      animate="YLoaded"
      transition={{duration:.5}}
      className="w-screen md:h-screen h-auto flex flex-col items-center justify-end bg-lightBlue page pt-8 page-3">
          
        <h1 className='absolute left-9 md:top-1/4 pl-7  top-9 md:mt-6 hidden md:block text-white'>02 Meet your crew</h1>
          <section className="container mx-auto mt-8 pt-8 flex flex-col items-center justify-between text-white text-center md:flex-row md:items-end md:text-left md:mt-0 px-4">
        <Swiper className="mySwiper" pagination={{
            dynamicBullets:true
        }}
        modules={[Pagination]}>
            {crewData.map((item, index) => (
              <SwiperSlide key={index}>
                <SingleCrew item={item}/>
              </SwiperSlide>
            ))}
              </Swiper>

              
          </section> 
    </motion.main>
  )
}

export default Crew