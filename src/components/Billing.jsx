import React from 'react'
import { apple, google, bill } from '../assets'
import styles, {layout} from '../style'

const  Billing = () => (
    <section id='product' className={`${layout.sectionReverse} `}>
      <div className={`${layout.sectionImgReverse} `}>
        <img src={bill} alt="billing" className='w-[100%} h-[100%] relative z-[5] object-contain' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>

      <div className={`${layout.sectionInfo}  `}>
      {/* md:ml-[100px] ml-0 */}
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/>
           billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. 
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

       <div className='flex flex-row flex-wrap mt-6 sm:mt-10 '>
        <img src={apple} alt="apple store" className='w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer' />
        <img src={google} alt="google app store" className='w-[128.86px] h-[42.05px] object-contain cursor-pointer' />
      </div>
      </div>
    </section>
  )


export default Billing