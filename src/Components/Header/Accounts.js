import React, {useState} from "react";
import styles from "../../styles/header/Accounts.module.css";
import personIcon from "../../icons/person.svg";
import shoppingcartIcon from "../../icons/shoppingcart.svg"
import { Link } from "react-router-dom";

/////////
import styled from "styled-components";

const DropDown = styled.ul`
    display: ${(props) => props.open ? "" : "none" } ;
    z-index: 10;
    background-color: #b9b9b9;
    width: 100px;
    transition: all 0.4s linear;
    transform: ${(props) => props.open ? "translateY(0)" : "translateY(-200%)" } ;
    border-radius:10px;
    a {
        text-decoration: none;
        color: #511281;
        
    }
    li {
        list-style: none;
        width: auto;
        justify-content: center;
        align-items: center;
        height: 30px;
        flex-wrap: nowrap;
        margin: 5px 8px;
        border-bottom: 1px solid gray;
        
        
    }
    
    @media (min-width:450px ) {
        & a:nth-child(2) {
            display: none;
        }
    }
    
`

const Accounts = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.Accounts} onClick={() => setOpen(!open)} >
          <img src={personIcon} alt="account" />
        <DropDown open={open} >
            <Link to="/profile">
                <li>profile</li>
            </Link>
            <Link to="/basket" >
                <li>basket</li>
            </Link>
            <Link to="/profile/login" >
                <li style={{border:"none"}} >login</li>
            </Link>
            
        </DropDown>
      </div>
      <div className={styles.basket}>
        <Link to="/basket" >
            <img src={shoppingcartIcon} className={styles.green} alt="basket" />
        </Link>
      </div>
    </div>
  );
};

export default Accounts;
