import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

/////////////
const UlList = styled.ul`
    list-style: none;
    display: flex;
    flex-shrink: 1;
    z-index: 15;
    a {
        text-decoration: none;
        &:hover {
            /* background-color: lightgreen; */
        }
    }
    li {
        width: auto;
        /* justify-items:left; */
        /* padding: 5px 25px; */
        font-size: 18px;
        font-weight: 300;
        flex-wrap:nowrap;
        flex-shrink: 1;
        /* left:25px; */
        margin: 10px 22px;
        color: ${(props) => props.open ? "white" : "green"};
        &:hover {
            font-size: 19px;
            font-weight: 400;
            color: orangered; 
        }
    }
    @media (min-width:769px ) {
    
        .current {
                font-size: bold;
                border-bottom: 2px solid orangered;
                /* background: linear-gradient(0deg, rgba(22,199,35,0.29872447200141217) 2%, rgba(255,255,255,0) 100%); */
                li {
                    font-size: 19px;
                    color: tomato;
                }
            
        }
    }
    @media (max-width: 768px) {
        margin: 0;
        flex-direction: column;
        background-color: #0014FF;
        color: white;
        position: fixed;
        height: 100vh;
        width: 300px;
        transition: all 0.4s linear;    
        transform: ${(props) => props.open ? "translateX(0)" : "translateX(-100%)" } ;
        top: 0;
        left: 0;
        padding-top: 6rem;
        li {
            padding: 10px 25px;
        }
    }
    
`

const List = ({open }) => {
   const location = useLocation();
   
   const { pathname } = location;
   const splitLocation = pathname.split("/");
  return (
    <div>
        <UlList open={open}>
            <NavLink to="/" className={splitLocation[1] === "" ? "current" : ""} >
                <li>Home</li>   
            </NavLink>
            <NavLink to="/shop" className={splitLocation[1] === "shop" ? "current" : ""}>
                <li>Shop</li>   
            </NavLink>
            <NavLink to="/aboutus" className={splitLocation[1] === "aboutus" ? "current" : ""} >
                <li>About Us</li>   
            </NavLink>
            <NavLink to="/contactus" className={splitLocation[1] === "contactus" ? "current" : ""}>
                <li>Contact Us</li>   
            </NavLink>
            {/* <NavLink to="/basket" className={splitLocation[1] === "basket" ? "current" : ""} >
                <li>Basket</li>   
            </NavLink> */}
            
        </UlList>
        
    </div>
  )
}

export default List;