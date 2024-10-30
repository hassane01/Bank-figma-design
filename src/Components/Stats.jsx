import React from 'react'
import { stats } from '../constants/webtext'

const Stats = () => {
  return (
    <div className='flex justify-center items-center my-5 mx-3 '>
      {
        stats.map((stat , index)=>(
          <div key={index} className=" flex-1 flex flex-wrap text-center  justify-center items-center">
            <h4 className='font-poppins font-semibold text-[25px] xs:text-[40px] text-white '>{stat.value}</h4>
            <p className="font-poppins text-[15px] font-normal xs:text-[20px] uppercase text-gradient ">{stat.title}</p>
          </div>
       ) )
      }
    </div>
  )
}

export default Stats