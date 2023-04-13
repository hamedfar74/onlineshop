import React from 'react'
import styles from"./home.module.css"
import banner from '../images/banner.png'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
  // const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={banner} />
        <p>Let's Go To 	&#x279C;
          <Link to="/shop" >
          <span> Shop</span>
          </Link>
        </p>
      </div>
      {/* <Button variant='contained' onClick={() => {} } >Shop</Button> */}
    </div>
  )
}

export default Home