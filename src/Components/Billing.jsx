import { bill , apple , google } from "../assets/exportsfile"

const Billing = () => {
  return (
    <section className='flex flex-col md:flex-row-reverse'>
      <div className="my-10 flex  flex-col justify-center items-start ">
        <h1 className='text-white font-bold text-[40px] pb-4 '>Easily control your <br className="hidden sm:block"/> 
        billing & invoicing.</h1>
        <p className=' text-dimWhite max-w-[430px] text-[18px] font-semibold'>We consider the payment methods you&apos;ll offer your customers when you start your 
          business. This is an important part of managing your business cash flow and 
          meeting your customer&apos;s needs.</p>
        <div className="flex  mt-5">
           
              <img src={apple} alt="apple store"  className='w-[128px] h-[42px]  cursor-pointer mr-5 rounded-[20px]'/>
              <img src={google} alt="google play"  className='w-[128px] h-[42px] cursor-pointer rounded-[20px]'/>
              
            
        </div>
      </div>
      <div className="flex flex-1 ">
        <img src={bill} alt="icon bill"className='w-[100%] h-[100%] object-contain flex-grow-0  '  />
      </div>
    </section>
  )
}

export default Billing
