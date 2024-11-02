import React from 'react'
import { clients } from '../constants/webtext'

const Clients = () => {
  return (
    <section className='flex flex-row flex-wrap justify-center items-center  my-20 '>
        {
          clients.map((client , index)=>(
           <div  key={index} className={`w-[100px] sm:w-[180px] sm:mr-20 ${index === 3 && index === 4 ? 'mr-0' : 'mr-7'  }   flex items-center`}>
             <img className='object-contain sm:w-full '  src={client.logo} alt="client logo " />
           </div>
          ))
        }
    </section>
  )
}

export default Clients