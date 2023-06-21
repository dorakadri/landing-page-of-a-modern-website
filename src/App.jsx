import React from 'react'
import styles from './style'
import { Billing, Busniiss, CTA, CardDeal, Clients, Feedback, Footer, Hero, Navbar, Stats } from './components'
import Testimonials from './components/Testimonials'
const App=() => (
    <div className='bg-primary w-full overflow-hidden'>
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
       <div className={`${styles.boxWidth}`}>
       <Navbar/> 
       </div>
      </div>


     <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Busniiss/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/> 
        <Footer/>
      </div>
     </div>
    </div>
  )

export default App