import React from 'react'
import { discount, robot } from '../assets/exportsfile'
import styles from '../style'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`hero flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={` flex flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className={`flex flex-row items-center bg-discount-gradient  rounded-[10px]`}>
          <img src={discount} alt="discount " className='w-[32px] h-[32px]'/>
          
          <p className={`text-dimWhite ${styles.paragraph}`}> <span className={`text-white ${styles.paragraph}`}>20% {" "} </span>  DISCOUNT FOR <span className='text-white'>1 month </span> ACCOUNT </p>
        </div>
        <div className={`flex  justify-between  my-[30px] `}>
          <p className={`text-[52px] text-white font-bold font-poppins leading-[75px]`}>THE NEXT <br />
            <span  className="text-gradient">Generation</span></p>
        <div className={`ss:flex hidden`}>
          <GetStarted/>
         
        </div>
        
        </div>
        <p  className={`text-[52px] text-white font-bold font-poppins  `}>Payment Method</p>
        <p className={   `font-poppins font-normal text-dimWhite  max-w-[420px] mt-6  text-[18px]`} >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.</p>
      </div>
      <div className=" flex justify-center items-center md:my-0 my-10 relative">
        <img src={robot} alt="robot"   className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className="ss:hidden flex justify-center items-center ">
        <GetStarted/>
      </div>
      
    </section>
  )
}

export default Hero