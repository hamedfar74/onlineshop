import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/data/dataAction";
import Card from "./Card";
import styles from "../styles/Shop.module.css"



const Shop = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  

  useEffect(() => {
    dispatch(getData());
  }, []);
  // backgroundColor:`${loading && "#00E7FF" }`,height:`${loading && "100vh" }`

  return (
    <div className={styles.container} >
      {loading ? (
        <h2>LOADING ...</h2>
      ) : (
        data.map((item) => <Card data={item} key={item.id} />)
      )}
      {error ? <h2>Somthing Went Wrong!! try again</h2> : ""}
    </div>
  );
};

export default Shop;
