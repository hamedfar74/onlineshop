import React from 'react'
import Accounts from './Accounts'
import Burger from './Burger'
import styles from "../../styles/header/Navbar.module.css"
import logo from "../../icons/deathly-larg.png"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className={styles.container}>
      
        <Burger />
        <div className={styles.logocontainer}>
          <Link to="/">
          <img className={styles.logo} src={logo} alt='logo' />
          <span>DH SHOP</span>
          </Link>
        </div>
        <Accounts />
    </div>
  )
}

export default Navbar