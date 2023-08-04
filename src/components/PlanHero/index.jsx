import React from 'react'
import classes from './PlanHero.module.css'
import works from '../../Imgs/works.svg'

const PlanHero = () => {
  return (
    <>
    <div className={classes['plan']}>
      <h2>Create a plan</h2>
      <p>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
    </div>
    <div className={classes['workBack']}>
    <img src={works} alt="work" />
        <div className={classes['works__cards']}>
            <div className={classes['works__cards__card']}>
                <p className={classes['works__cards__card__num']}>01</p>
                <h3 className={classes['works__cards__card__title']}>Pick your coffee</h3>
                <p className={classes['works__cards__card__text']}>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
            </div>
            <div className={classes['works__cards__card']}>
                <p className={classes['works__cards__card__num']}>02</p>
                <h3 className={classes['works__cards__card__title']}>Pick your coffee</h3>
                <p className={classes['works__cards__card__text']}>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
            </div>
            <div className={classes['works__cards__card']}>
                <p className={classes['works__cards__card__num']}>03</p>
                <h3 className={classes['works__cards__card__title']}>Receive and enjoy!</h3>
                <p className={classes['works__cards__card__text']}>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default PlanHero