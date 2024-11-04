import { card } from "../assets/exportsfile"
import Button from "./Button"

const CardDeal = () => {
  return (
    <section id='product' className='flex flex-col sm:flex-row my-20 '>
        <div className="flex flex-col items-start flex-1 ">
          <h2 className="text-white text-[40px] font-bold my-10 leading-[66px] w-full">Find a better card deal <br className='hidden md:block'/> in few easy steps</h2>
          <p className='text-dimWhite  text-normal text-[18px] max-w-[470px]  '>We&apos;ve been researching and comparing credit cards for over 15 years.
             You can easily compare more than 270 Australian credit cards using our free tools.
              When you find one that suits, we&apos;ll take you securely to the bank&apos;
              s website.</p>
              <Button/>
        </div>
        <div className="flex flex-1  justify-center items-start relative ">
          <img src={card} alt='card icon ' className='w-[100%] h-[100%] object-contain' />
        </div>
    </section>
  )
}

export default CardDeal