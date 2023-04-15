import React from "react";
import { shorten } from "../helper/function";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../redux/basket/basketAction";
import trashIcon from "../icons/trash.svg";
import styles from "../styles/Basket.module.css";
// import Button from '@mui/material/Button';


const Basket = ({ data }) => {
  console.log(data);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img src={data.image} alt="product" />
      <p >{shorten(data.title)}</p>
      <p >{data.price} $ </p>

      {/* <div>
            <span>{data.quantity} </span>
        </div> */}

      <div className={styles.quantity}>
        {data.quantity > 1 ? (
          <button onClick={() => dispatch(decrease(data))}> - </button>
        ) : (
          <button onClick={() => dispatch(removeItem(data))}>
            <img src={trashIcon} alt="trashIcon" />{" "}
          </button>
        )}
        <span>{data.quantity} </span>
        <button onClick={() => dispatch(increase(data))}> + </button>
      </div>
      <p>{data.quantity * data.price} $</p>
       
      <ul className={styles.res600}>
          <li>name:</li>
          <li>price:</li>
          <li>quantity:</li>
          <li>total:</li>
        </ul>
      
    </div>
  );
};

export default Basket;
