import React from 'react'
import SingleTechnology from '../components/SingleTechnology'
import {useEffect, useState} from "react"
import { Object } from '../types/Interface'

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination} from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import {motion} from "framer-motion"
import { pageVariant } from '../components/motioVarianst'


const Technology = () => {
    const [techData, setTechData] = useState<Object[]>([])
    const fetchData =async () => {
        const res = await fetch("data.json")
        const data = await res.json()
        setTechData(data.technology)
    }
    useEffect(() => {
        fetchData()
    }, [])
    
  return (
      <motion.main
        variants={pageVariant}
        initial="XOnLoad"
        animate="XLoaded"
          transition={{ duration: .5 }}
          className="w-screen md:h-screen pt-8 h-auto flex flex-col items-center justify-end bg-lightBlue page page-4">
          <section className="container mx-auto mt-8 flex flex-col items-center justify-between text-white text-center md:flex-row md:items-end md:text-left md:mt-0 px-4">
              <Swiper  pagination={{
                  clickable: true,
                  type:"bullets"
                  
              }} modules={[Pagination]}>
                  {techData.map((item, index) => (
                      <SwiperSlide key={index}>
                          <SingleTechnology item={item}/>
                      </SwiperSlide>
                  ))}
              </Swiper>
              
          </section> 
    </motion.main>
  )
}

export default Technology
