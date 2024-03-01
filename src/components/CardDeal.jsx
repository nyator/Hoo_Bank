import React from 'react'
import styles,{layout} from '../style'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () =>  (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>
       in few easy steps.</h2>
    <p className={`${styles.paragraph} w-[470px] mt-7`}>Arcu tortor, purus in mattis at sed integer faucibus.
     Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>  

    <Button style='mt-10' text='Get  Started' />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="Card" className='w-[100%] h-[100%]'/>
    </div>

  </section>
  )

export default CardDeal