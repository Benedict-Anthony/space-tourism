import React from 'react'
import { Object } from '../types/Interface'


interface ItemInterface {
  item:Object
}
const SingleCrew = ({item}:ItemInterface) => {
  return (
        <article className='w-full h-full flex flex-col jusify-between items-center md:flex-row md:space-x-9 space-y-7'>
          <div className="flex flex-col items-center justify-between md:items-start w-full space-y-5">
             <p className='text-4xl'>{item.role}</p>
              <h1 className="text-3xl">{item.name}</h1>
              <p className="md:text-xl">{ item.bio}</p>
          </div>
          <div className="w-full  md:w-3/4 self-end mt-8">
              <img src={item.images.png} alt="" className="w-full" />
          </div>

    </article>
  
  )
}

export default SingleCrew