import React from 'react'
import {useState, useEffect} from "react";
import Destination from "../components/SingleDestination";
import { Object } from '../types/Interface';

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"

import "swiper/css/pagination"
import {Pagination} from "swiper"

import { motion } from "framer-motion";
import { pageVariant } from '../components/motioVarianst';


const Destinations = () => {

    const [destinationData, setDestinationData] = useState<Object[]>([])

    const fetchData = async () => {
        const res = await fetch("data.json")
        const data = await res.json()

        setDestinationData(data.destinations)
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <motion.main
      variants={pageVariant}
      initial="XOnLoad"
      animate="XLoaded"
      transition={{
        duration: .5,
      }}
      className="w-screen md:h-screen h-auto py-5 flex flex-col items-center justify-center bg-lightBlue page page-2">
        <h1 className='absolute left-5 top-3 pt-4 mt-9 pl-7 text-white text-sm md:text-md md:top-9 w-full'>01 PICK YOUR DESTINATION</h1>
          <section className="container mx-auto mt-9 flex flex-col items-center justify-between text-white text-center md:flex-row md:items-end md:text-left md:mt-0 px-4 pt-5">
            <Swiper className="mySwiper" modules={[Pagination]}>
                  {destinationData.map((item, index) => (
                      <SwiperSlide key={index}>
                          <Destination item={item} />
                      </SwiperSlide>
                  ))}
            </Swiper>
          </section> 
    </motion.main>
  )
}

// 
// container mx-auto mt-8 flex flex-col items-center justify-between text-white text-center md:flex-row md:items-end md:text-left md:mt-0 px-4
export default Destinations
