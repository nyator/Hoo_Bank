import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () =>  (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain ' />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id} className='flex flex-col ss:my-0 my-4 min-w-[100px]'>
              <h4 className='font-poppins font-medium leading-[27px] text-[18px] text-white '>{footerLink.title}</h4>
              <ul className='list-none mt-4 '>
                {footerLink.links.map((link, index) => (
                  <li key={index} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite
                   hover:text-secondary cursor-pointer ${index !== footerLink.links.length-1 ? 'mb:10' : 'mb-0' } }`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex md:flex-row flex-col pt-6  border-t-[1px] border-t-[#3f3e45] justify-between w-full items-center'>
        <p className='font-poppins font-normal leading-[27px] text-center text-[18px] text-white '>2021 HooBank. All Rights Reserved.</p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
              <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointe ${index !== socialMedia.length-1 ? 'mr-6' : 'mr-0' }`} />
          ))}
        </div>
      </div>
    </section>
  )

export default Footer