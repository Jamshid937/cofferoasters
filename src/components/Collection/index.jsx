import React from 'react'
import classes from './Collection.module.css'

// imgs

import gran from '../../Imgs/gran.png'
import planalto from '../../Imgs/planalto.png'
import piccolo from '../../Imgs/piccolo.png'
import danche from '../../Imgs/danche.png'
import coffeBean from '../../Imgs/coffeeBean.svg'
import gifts from '../../Imgs/gift.svg'
import truck from '../../Imgs/truck.svg'
import works from '../../Imgs/works.svg'
const Collection = () => {
  return (
    <>
    <div className={classes['collection']}>
        <p className={classes['collection__title']}>our collection</p>
        <div className={classes['collection__cards']}>
            <div className={classes['collection__card']}>
                <img src={gran} alt="gran" />
                <h3>Gran Espresso</h3>
                <p>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
            </div>
            <div className={classes['collection__card']}>
                <img src={planalto} alt="gran" />
                <h3>Planalto</h3>
                <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</p>
            </div>
            <div className={classes['collection__card']}>
                <img src={piccolo} alt="gran" />
                <h3>Piccollo</h3>
                <p>Mild and smooth blend featuring notes of toasted almond and dried cherry.</p>
            </div>
            <div className={classes['collection__card']}>
                <img src={danche} alt="gran" />
                <h3>Danche</h3>
                <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
            </div>
        </div>
    </div>
    <div className={classes['question']}>
       <h2 className={classes['question__title']}>Why choose us?</h2>
       <p className={classes['question__text']}>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
       <div className={classes['question__cards']}>
        <div className={classes['question__card']}>
            <img src={coffeBean} alt="coffeBean"/>
            <div>
            <h3>Best quality</h3>
            <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
            </div>
        </div>
        <div className={classes['question__card']}>
            <img src={gifts} alt="gifts"/>
            <div>
            <h3>Exclusive benefits</h3>
            <p>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
            </div>
        </div>
        <div className={classes['question__card']}>
            <img src={truck} alt="truck"/>
            <div>
            <h3>Free shipping</h3>
            <p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
            </div>
        </div>
       </div>
    </div>
    <div className={classes['works']}>
       <h3 className={classes['works__title']}>How it works</h3>
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
        <button className={classes['works__btn']}>Create your plan</button>
    </div>
    </>
  )
}

export default Collection