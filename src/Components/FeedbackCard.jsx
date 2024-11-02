/* eslint-disable react/prop-types */
import { quotes } from "../assets/exportsfile"


const FeedbackCard = ({content ,name, title , img} ) => {
  return (
    <div className='flex flex-col p-10 '>
      <div className="flex flex-col   ">
        <img src={quotes} alt="quotes icon " className='w-[42px] h-[27px] object-contain' />
      </div>
      <div className=" flex justify-center my-9">
        <p className='text-white text-[18px] font-poppins font-normal  '>{content}</p>
      </div>
      <div className="flex flex-row">
        <img src={img} alt="icon" className='w-[48px] h-[48px] ' />
        <div className=" ml-4">
          
          <h4 className='text-white font-poppins font-semibold  text-[20px]'>{name}</h4>
          <p className='text-dimWhite font-poppins  '>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard