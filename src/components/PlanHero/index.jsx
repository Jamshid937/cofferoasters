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
    <div className={classes['category']}>
        <h3>How do you drink your coffee?</h3>
        <div className={classes['category__cards']}>
            <div className={classes['category__cards__card']}>
                <h4>Capsule</h4>
                <p>Compatible with Nespresso systems and similar brewers</p>
            </div>
            <div className={classes['category__cards__card']}>
                <h4>Filter</h4>
                <p>For pour over or drip methods like Aeropress, Chemex, and V60</p>
            </div>
            <div className={classes['category__cards__card']}>
                <h4>Espresso</h4>
                <p>Dense and finely ground beans for an intense, flavorful experience</p>
            </div>
        </div>
        <h3>What type of coffee?</h3>
        <div className={classes['category__cards']}>
            <div className={classes['category__cards__card']}>
                <h4>Single Origin</h4>
                <p>Distinct, high quality coffee from a specific family-owned farm</p>
            </div>
            <div className={classes['category__cards__card']}>
                <h4>Decaf</h4>
                <p>Just like regular coffee, except the caffeine has been removed</p>
            </div>
            <div className={classes['category__cards__card']}>
                <h4>Blended</h4>
                <p>Combination of two or three dark roasted beans of organic coffees</p>
            </div>
        </div>
        <h3>How much would you like?</h3>
        <div className={classes['category__cards']}>
            <div className={classes['category__cards__card']}>
                <h4>250g</h4>
                <p>Perfect for the solo drinker. Yields about 12 delicious cups.</p>
            </div>
            <div className={classes['category__cards__card']}>
                <h4>500g</h4>
                <p>Perfect option for a couple. Yields about 40 delectable cups.</p>
            </div>
            <div className={classes['category__cards__card']}>
                <h4>1000g</h4>
                <p>Perfect for offices and events. Yields about 90 delightful cups.</p>
            </div>
        </div>
        <button className={classes['works__btn']}>Create your plan</button>
    </div>
    </>
  )
}

export default PlanHero