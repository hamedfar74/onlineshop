import React, { useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import styles from "./hamburger.module.css"

const Div = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 40px;
  left: 30px;
  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.open? "#fff" : "#0014ff"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.4s linear;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg) " : " rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(150%)" : " translateX(0)"};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg) " : " rotate(0)")};
    }
  }
`;

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  //   console.log(open);

  return (
    <div className={styles.container} >
      <Div open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </Div>
      <Header open={open} />
      
    </div>
  );
};

export default Hamburger;
