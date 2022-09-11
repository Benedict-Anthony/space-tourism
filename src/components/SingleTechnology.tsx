import React from 'react'
import { Object } from '../types/Interface';



interface ItemInterface{
    item:Object
}
const SingleTechnology = ({item}:ItemInterface) => {
  return (
      <article className='w-full h-full flex flex-col jusify-between items-center md:flex-row md:space-x-9 space-y-7'>
          <div className="flex flex-col items-center justify-between md:items-start w-full space-y-5 ">
              <h4 className="text-xl">The Terminology</h4>
              <h1 className="text-3xl">{item.name}</h1>
              <p className="md:text-xl pr-5">{ item.description}</p>
          </div>

          <div className="w-full h-full md:w-3/4 self-end">
              <img src={item.images.portrait} alt="" className="w-full h-full" />
          </div>

    </article>
  )
}

export default SingleTechnology