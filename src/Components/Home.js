import React from 'react'
import styles from"../styles/Home.module.css"
import banner from '../images/banner.png'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import Container from '@mui/material/Container'


const Home = () => {
  // if (loading) return <Loader />;
  // const navigate = useNavigate();
  return (
    <div className={styles.plate}>
      <Container maxWidth="lg" sx={{padding:0}}>
        
      <div className={styles.banner}>
        <img src={banner} alt='banner' />
        <p>Let's Go To 	&#x279C;
          <Link to="/shop" >
          <span> Shop</span>
          </Link>
        </p>
      </div>
      
      </Container>
      {/* <Button variant='contained' onClick={() => {} } >Shop</Button> */}
    </div>
  )
}

export default Home