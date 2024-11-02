import { feedback } from "../constants/webtext"
import FeedbackCard from "./FeedbackCard"

const Testominals = () => {
return (
  <section className='flex flex-col   '> 
  <div className="flex w-full flex-col mb-20 md:flex-row  justify-between items-center ">
    <h4 className='w-full text-white text-[40px] font-poppins  font-semibold  ' >What people are <br className='md:block hidden'/>saying about us</h4>
    <div className="w-full " >
    <p className='text-dimWhite font-normal text-left  max-w-[450px]   text-[18px] leading-[30px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>

    </div>
  </div>
   {/* THE GARADIENT DIV (tO dO )*/}
  <div className="flex flex-col justify-center md:flex-row ">
    {
      feedback.map((feedback , index)=>(
        <FeedbackCard key={index}   {...feedback} />
      ))
    }
  </div>
  </section>
  )
  
}

export default Testominals