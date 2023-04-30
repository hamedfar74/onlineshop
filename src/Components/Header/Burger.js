import React,{useState} from 'react'
import List from './List'

import styles from "../../styles/header/Burger.module.css"
// import styled from 'styled-components'

/////////
// const BurgerDiv = styled.div`

// `

const Burger = () => {
    const [open, setOpen] = useState(false)
  return (
    <div >
        <div className={styles.burger} onClick={()=> setOpen(!open)} >
            <div style={{background: open? "#fff":"#FF94CC",transform : open?"rotate(45deg)":"rotate(0)"}} ></div>
            <div style={{background: open? "#fff":"#FF94CC",transform : open ? "translateX(150%)" : " translateX(0)",opacity: open ? 0 : 1}} ></div>
            <div style={{background: open? "#fff":"#FF94CC",transform : open ? "rotate(-45deg) " : " rotate(0)"}} ></div>
        </div>
        {/* <BurgerDiv>
          <div></div>
          <div></div>
          <div></div>
        </BurgerDiv> */}
        <div>
          <List open={open}/>
        </div>
    </div>
  )
}

export default Burger