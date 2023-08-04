import React from 'react'
import classes from './HeaderHero.module.css'
const HeaderHero = () => {
  return (
    <div className={classes['headerHero']}>
        <div className={classes['headerHero__about']}>
            <h1 className={classes['headerHero__about__title']}>Great coffee made simple.</h1>
            <p className={classes['headerHero__about__text']}>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            <button className={classes['headerHero__about__btn']}>Create your plan</button>
        </div>
    </div>
  )
}

export default HeaderHero