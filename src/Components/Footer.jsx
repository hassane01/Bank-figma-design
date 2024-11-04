import { logo } from "../assets/exportsfile"
import { footerLinks, socialMedia } from "../constants/webtext"

const Footer = () => {
  return (
    <section className='flex flex-col  my-20' >
      <div className="flex flex-1 flex-col flex-wrap justify-start pr-5">
        <img src={logo} alt="logo" className='w-[200px] h-[72px] object-contain mb-7 '/>
        <p className='max-w-[370px] mb-10 text-dimWhite font-poppins font-normal text-[18px] '>A new way to make payments easy, reliable and secure.</p>
      </div>
      <div className=" flex-1 flex-row flex flex-wrap justify-between">
        {
          footerLinks.map((link , index)=>(
            <div key={index} className="">
              <h4 className='pb-4  text-white font-poppins font-semibold text-[18px]'>{link.title}</h4>
                {link.links.map((data , idx)=>(
              <ul  key={idx}>
                  <li className='py-1 text-dimWhite text-[16px] font-poppins ' ><a href={data.link}>{data.name}</a></li>
              </ul>
                ))}
            </div>
          ))
        }
      </div>
         <div className=" border-t-[#3f3e45] border-t-[1px] md:flex-row  justify-between flex flex-col   mt-10">
          <div className="mt-6 flex justify-center ">
            <h4 className='text-center text-white text-[18px]  font-poppins font-normal '>2022 HooBank. All Rights Reserved.</h4>
          </div>
          <div className=" flex  mt-7 justify-center">
            {
              socialMedia.map((media , index)=> (
                <div key={index} className="">
                  <a href={media.link}><img src={media.icon} className={index === socialMedia.length - 1 ? 'mr-0' : 'mr-6'} alt=" social media icon" /></a>
                </div>
              ))
            }
          </div>
         </div>
    </section>
  )
}

export default Footer