import React from 'react'
import styles from "./Aboutus.module.css"
import htmlcss from "../images/javascript-39396.png"
import react from "../images/react.png"
import redux from "../images/redux.png"
import mui from "../images/MUI.png"

const Aboutus = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Hello Darling</h1>
        <p>
          I'm <span>Hamed Foroughi</span> and a Junior Front-End developer . 
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
    </div>
  )
}

export default Aboutus