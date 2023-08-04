import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Imgs/logo.svg'
import classes from './Header.module.css'
const Header = () => {
  return (
    <div className={classes['header']}>
      <div className={classes['header__img']}>
        <img src={logo} alt="coffe"/>
      </div>
      <div className={classes['header__list']}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/plan">Create your plan</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header