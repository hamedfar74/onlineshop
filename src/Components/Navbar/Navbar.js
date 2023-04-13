import React from 'react'
import Hamburger from './Hamburger'
import styles from "./Navbar.module.css"


const Navbar = () => {
  return (
    <div className={styles.container} >
        <Hamburger />
    </div>
  )
}

export default Navbar;