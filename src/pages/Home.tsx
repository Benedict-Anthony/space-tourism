import React from 'react'
import {motion} from "framer-motion"
import { pageVariant } from '../components/motioVarianst'


function Home() {
  return (
    <motion.main
      variants={pageVariant}
      initial="YOnLoad"
      animate="YLoaded"
      transition={{
        duration: .5,
      }}
      className="w-screen md:h-screen h-auto  flex flex-col items-center justify-center bg-lightBlue page page-1 py-7">
          <section className="container mx-auto mt-9 pt-3 flex flex-col items-center justify-between text-white text-center md:flex-row md:items-end md:text-left md:mt-0 px-4 py-5">
              <div className=" w-full space-y-6 md:w-1/2 ">
                  <h3 className="text-3xl">So, you want to travel to</h3>
                  <div className="text-7xl">Space</div>
                  <p className='text-xl'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
              </div>

              <div className="w-48 h-48 mt-8 flex flex-col items-center justify-center p-4 bg-white text-gray-900 font-semibold text-2xl text-center rounded-full md:mt-0">
                  <p className="text-3xl">Explore</p>
              </div>
          </section> 
    </motion.main>
  )
}

export default Home