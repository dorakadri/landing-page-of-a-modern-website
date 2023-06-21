import React from 'react'
import styles from '../style'
import Feedback from './Feedback'
import { feedback } from '../constants'
const Testimonials = () => (
  
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
   <div className='absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient '  />

   <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-1 ' >
    <h1 className={styles.heading2} > what people are <br className='sm:block hidden' />  saying about us </h1>
     <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam, distinctio temporibus officia, quod culpa neque quam illum impedit voluptatum quas! Eligendi qui quis aspernatur deleniti fugiat ad omnis sunt?</p>
     </div>
   </div>
  <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-countainer relative z-[1]'>
    {feedback.map((card)=>(
        <Feedback key={card.id} {...card}/>
    ))}
  </div>
    </section>
  )


export default Testimonials