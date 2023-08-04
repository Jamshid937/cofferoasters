import React from 'react'
import classes from './AboutHero.module.css'
import Barmen from '../../Imgs/Barmen.png'
import coffe from '../../Imgs/coffe.png'
const AboutHero = () => {
  return (
    <>
    <div className={classes['aboutHero']}>
       <h2 className={classes['aboutHero__title']}>About Us</h2>
       <p className={classes['aboutHero__text']}>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
    </div>
    <div className={classes['About__main']}>
        <div className={classes['About__main__img']}>
           <img src={Barmen} alt="Barmen" />
        </div>
        <div className={classes['About__main__info']}>
            <h3>Our commitment</h3>
            <p>We're built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
        </div>
    </div>
<div className={classes['About__center']}>
   <div className={classes['about__center__info']}> 
     <h3>Uncompromising quality</h3>
     <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
   </div>
   <div className={classes['about__center__img']}> 
     <img src={coffe} alt="" />
   </div>
</div>
    </>
  )
}

export default AboutHero