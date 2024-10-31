import Button from "./Button"
import { features } from "../constants/webtext"

const FeatureCard = (feature)=>{
  return(
    <div className='flex justify-center  flex-row p-6 rounded-[20px] mb-1 feature-card '>
     <div className="">
     <div className='mr-2 w-[54px] h-[54px] rounded-full flex justify-center items-center bg-dimBlue'>
        <img src={feature.icon} alt="icon" className='w-[50%] h-[50%] object-contain'  />
      </div>
     </div>
      <div className="">
        <h4 className='text-[15px] font-semibold font-poppins  text-white'>{feature.title}</h4>
        <p className='text-dimWhite font-normal  text-[16px]'>{feature.content}</p>
      </div>
    </div>
  )
}
const Business = () => {
  return (
    <section id='features' className='mt-20 flex flex-col md:flex-row'>
      <div className=" flex-1 flex  flex-col  items-start">
        <h3 className=' py-3 text-white font-poppins font-semibold text-[35px]'>You do the business, we&apos;ll <br /> handle the money.</h3>
        <p className="text-[18px] text-dimWhite font-normal ">With the right credit card, you can improve your financial 
          life by building credit, earning rewards and saving money.
           But with hundreds of credit cards on the market.</p>
          
           <Button/>
      </div>
      <div className="flex flex-col ">
       {
        features.map((feature , index)=>(
          <FeatureCard  key={feature.id} {...feature} index={index} />
          
        ))
       }
      </div>
    </section>
  )
}

export default Business