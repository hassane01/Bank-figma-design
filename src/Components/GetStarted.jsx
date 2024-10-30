import React from 'react'
import { arrowUp } from '../assets/exportsfile'

const GetStarted = () => {
  return (
    <div className="w-[140px] h-[140px] bg-blue-gradient rounded-full p-[6px] ">
      <div className="w-[100%] h-[100%] bg-primary rounded-full flex justify-center items-center   ">
        <div className="flex flex-col justify-center  items-center">
          <div className='flex flex-row'>
            <p className=" text-[20px] text-gradient font-medium ">GET</p>
            <img src={arrowUp} alt="arrow up" className='w-[23px] h-[23px] object-contain' />
            </div>
            <p className=" text-[20px] text-gradient font-medium ">Started</p>
        </div>

      </div>
    </div>
  )
}

export default GetStarted