import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Footer.module.css'

import footerLogo from '../../Imgs/footerLogo.svg'
import fesbook from '../../Imgs/fesbook.png'
import tvitter from '../../Imgs/tvitter.svg'
import insta from '../../Imgs/insta.svg'


const Footer = () => {
  return (
    <div className={classes['footer']}>
        <img src={footerLogo} alt="logo" />
        <div className={classes['footer__link']}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/plan">Create your plan</Link></li>
        </ul> 
      </div>
      <div className={classes['footer__media']}>
         <ul>
            <li>
                <img src={fesbook} alt="" />
            </li>
            <li><img src={tvitter} alt="" /></li>
            <li><img src={insta} alt="" /></li>
         </ul>
      </div>
    </div>
  )
}

export default Footer