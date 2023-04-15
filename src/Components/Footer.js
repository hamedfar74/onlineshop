import React from 'react'
import styles from "../styles/Footer.module.css"
import { Link } from 'react-router-dom';
import logo from "../icons/deathly-larg.png"

const Footer = () => {
  return (
    <div className={styles.container}>
        
        <div className={styles.top}>

            <div className={styles.links}>
                <ul>
                    <Link to="/shop">
                        <li>shop</li>
                    </Link>
                    <Link to="/profile">
                        <li>account</li>
                    </Link>
                    <Link to="/aboutus">
                        <li>about us</li>
                    </Link>
                    <Link to="/contactus">
                        <li>contact us</li>
                    </Link>
                </ul>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>report problem</li>
                    <li>
                        <a href="https://github.com/hamedfar74/onlineshop" >
                        github
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.search}>
                <img src={logo} alt="logo" /> 
                <input placeholder='Search ...' />

                {/* <input type={search} value={event} onChange={event.preventDefault} /> */}
            </div>
        </div>
        <div className={styles.bottem}>
            <div className={styles.coffee}>
                <p> &#x1F49B;  buy me a Coffee &#9749; </p>
            </div>
            <div className={styles.rights}>
            <p>©2023 DH-Shop.notify</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer;

