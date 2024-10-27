import { useState } from "react"
import { close , menu , logo } from "../assets/exportsfile"
import { navLinks } from "../constants/webtext"
const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [toggle, setToggle] = useState(true)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar" >
      <img src={logo} alt="logo icon " className="w-[124px] h-[32px]" />
      <ul className={`text-white sm:flex  hidden list-none justify-end  items-center flex-1` }>
        {navLinks.map((link  , index)=> (
          <li  key={index}  className={` font-poppins font-normal cursor-pointer text-[16px] ${active === link.title ? 'text-white' : 'text-dimWhite'} ${index === navLinks.length - 1 ?" mr-0" : "mr-3"}` } onClick={()=>{setActive(link.title)}}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex justify-end items-center flex-1">
        <img src={toggle ? menu : close} alt="menu icon " onClick={()=>setToggle((prev)=> !prev)} className={`w-[28px] h-[28px] object-contain`}/>
        <div className={`${toggle ? 'hidden' : 'flex' } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-6 min-w-[140px] rounded-xl sidebar ` }>
          <ul className="flex list-none flex-col flex-1 justify-end items-start ">
            {
              navLinks.map((link , index)=>(
                <li onClick={()=>setActive(link.title)} key={index} className={`font-poppins font-medium cursor-pointer text-[16px] ${active === link.title ? 'text-white' : 'text-dimWhite'}`}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar