import React from 'react'
import styles from "../styles/Aboutus.module.css"
import htmlcss from "../images/javascript-39396.png"
import react from "../images/react.png"
import redux from "../images/redux.png"
import mui from "../images/MUI.png"
import comp from "../images/styled-components.svg"
import Loader from './Loader'

const Aboutus = () => {
  // if (loading) return <Loader />;
  return (
    <div className={styles.container}>
      <div>
        <h1>Hello Dear Visitor</h1>
        <p>
          I'm <span>Hamed Foroughi</span> and a Junior Front-End developer . 
          this is an online-shop with login and signup form.
          I know thats not so great but let's see what technologies this project is build with
        </p> 
      </div>
      <div className={styles.html}>
        <img src={htmlcss} alt='html,css,js' />
        <p>I start with these three beauties </p>
      </div>
      <div className={styles.react} >
        <img src={react} alt="react" />
        <p>Then i met with React and my life changed  </p>
      </div>
      <div className={styles.redux} >
        <img src={redux} alt="redux" />
        <p>Redux has managed my states</p>
      </div>
      <div className={styles.mui} >
        <img src={mui} alt="materialUI" />
        <p>And finally i used Styled-Components and take a little help from MUI</p>
      </div>
      <div className={styles.comp}>
        <img src={comp} alt='styled-components' />
        <p>in the middle of way styled-components helped me to build hamburger menu</p>
      </div>
    </div>
  )
}

export default Aboutus