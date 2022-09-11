import React from 'react'
import { Object } from '../types/Interface'

interface itemInterface {
    item?:Object
}

interface idInterface {
    id?:number
}
const Destination = ({item}:itemInterface, {id}:idInterface) => {
    return (<>
        <section className='mt-7'> 
          <article className="flex flex-col justify-between items-center md:flex-row md:space-x-7">
            <div className='w-1/2 md:w-96'>
              <img src={item?.images.png} alt="" className="w-full" />
            </div>
              
              <div className=" w-full md:w-1/2 relative">
                  <div className='flex space-x-7 text-center mt-4 justify-center md:justify-start'>
                      <span className="text-sm md:text-2xl">Moon</span>
                      <span className="text-sm md:text-2xl">Mars</span>
                      <span className="text-sm md:text-2xl">Europa</span>
                      <span className="text-sm md:text-2xl">Titan</span>
                  </div>

                  <h1 className="text-6xl py-4 capitalize">{ item?.name}</h1>
                  <p className="py-6"> {item?.description} </p>
                <div className="w-full h-1 bg-white absolute"></div>
                  <div className="flex justify-center items-start space-x-5 mt-5 md:justify-start">
                      <div>
                          <h2 className='text-sm md:text-xl'>Avg distance</h2>
                          <p className="text-sm md:text-2xl"> {item?.distance}</p>
                      </div>
                      <div>
                           <h2 className='text-sm md:text-xl'>travel</h2>
                          <p  className="text-sm md:text-2xl">{item?.travel}</p>
                      </div>
                  </div>
              </div>
    
        </article>
    </section>
    </>
  )
}

export default Destination
