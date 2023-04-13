import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-shrink:1;
  // margin: 40px 50px;
  z-index: 15;
  li {
    text-decoration: none;
    padding: 10px;
    // color: ${(props) => (props.open ? "white" : "yellow")};
    font-size: 20px;
    font-weight: 500;
    margin: 20px 5px;
    flex-shrink: 1;
    justify-self: center;
    align-self: center;
    

    /* height: 15vh; */
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
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(-100%)"};
    top: 0;
    left: 0;
    padding-top: 5.5rem;
  }
`;

const Header = ({ open }) => {
  // console.log(open);
  return (
    <div >
      <Ul open={open}>
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              padding: "10px 25px",
              color: `${open ? "white" : "green"}`,
              fontSize: "20px",
              fontWeight: "500",
              // height: "10vh",
              // justifyContent:"center",
              // alignItems:"center",
              
              margin: "0 5px",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            style={{
              textDecoration: "none",
              padding: "10px 25px",
              color: `${open ? "white" : "green"}`,
              fontSize: "20px",
              fontWeight: "500",

              margin: "0 5px",
            }}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/aboutus"
            style={{
              textDecoration: "none",
              padding: "10px 25px",
              color: `${open ? "white" : "green"}`,
              fontSize: "20px",
              fontWeight: "500",
              flexWrap: "wrap",
              flexShrink: "1",
              margin: "0 -5px",
            }}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contactus"
            style={{
              textDecoration: "none",
              padding: "10px 25px",
              color: `${open ? "white" : "green"}`,
              fontSize: "20px",
              fontWeight: "500",

              margin: "0 -5px",
            }}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/basket"
            style={{
              textDecoration: "none",
              padding: "10px 25px",
              color: `${open ? "white" : "green"}`,
              fontSize: "20px",
              fontWeight: "500",

              margin: "0 -5px",
            }}
          >
            Shop Cart 
          </Link>
        </li>
      </Ul>
    </div>
  );
};

export default Header;
