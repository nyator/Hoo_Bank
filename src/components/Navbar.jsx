import React from 'react'
import {logo, close, menu} from '../assets'
import {navLinks} from '../constants'

import { useState } from 'react' 

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
   
  return (
    <nav className='w- full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="HooBank" className='w-[124px] h-[32px]'/>
      <ul className='hidden list-none sm:flex justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id } className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' }`}> <a href=""> {nav.title} </a></li>
        ))}
      </ul>

// Mobile Nav

      <div className="sm:hidden flex justify-end items-center">
        <img src={toggle ? close : menu } alt="Menu" className='w-[22px] h-[22px] object-contain' onClick={()=>setToggle((prev) => !prev)}/>
        <div className={`${toggle ? 'flex' :'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1 '>
          {navLinks.map((nav, index) => (
            <li key={nav.id } className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4' }`}> <a href={`${nav.id}`}> {nav.title} </a></li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar