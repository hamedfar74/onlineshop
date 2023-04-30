import React from 'react'
import styles from"../styles/Home.module.css"
import banner from '../images/banner.png'
import { Link } from 'react-router-dom'
import Loader from './Loader'


const Home = () => {
  // if (loading) return <Loader />;
  // const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={banner} alt='banner' />
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