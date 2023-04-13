import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clear, checkout } from "../redux/basket/basketAction";
import Basket from "./Basket";

import styles from "./shopBasket.module.css";

const ShopBasket = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.basket);
  console.log(state);
  return (
    <div className={styles.container}>
      <div className={styles.basket}>
        {state.selectedItems.length ? <ul className={styles.res1024} >
          <li>item</li>|<li>name</li> |<li>price</li> |<li>quantity</li>|
          <li>total</li>
        </ul> : ""}
        
       
        <div className={styles.items}>
          {state.selectedItems.map((item) => (
            <Basket key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className={styles.total}>
      
      {state.itemsCounter > 0 && (
        <div>
          <p>
            Total Items:
            <span>

            {state.itemsCounter}
            </span>
          </p>
          <p>
            Total Payments:
            <span>

            {state.total} $
            </span>
          </p>
          <div>
            <button onClick={() => dispatch(clear())}>Clear</button>
            <button onClick={() => dispatch(checkout())}>Checkout </button>
          </div>
        </div>
      )}
      {state.itemsCounter === 0 && !state.checkout && (
        <div>
          <h3>want to buy?</h3>
          <Link to="/shop">Go To Shop </Link>
        </div>
      )}
      {state.checkout && (
        <div>
          <h3>Checkout Successfully</h3>
          <Link to="/shop">Buy More</Link>
        </div>
      )}
      </div>
    </div>
  );
};

export default ShopBasket;
