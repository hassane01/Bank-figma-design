import Button from "./Button"


const CTA = () => {
  return (
    <section className='flex flex-col bg-black-gradient-2 p-6 sm:p-20 rounded-[20px] justify-center'>
      <div className="flex  flex-col justify-center items-center sm:flex-row">
        <div className="flex flex-col flex-1 sm:mr-10">
        <h4 className='font-poppins font-semibold text-white text-[40px]'>Come try our service now!</h4>
        <p className='text-dimWhite max-w-[430px] font-poppins font-normal text-[18px] mb-10'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>

        <Button className='' />
      </div>

    </section>
  )
}

export default CTA