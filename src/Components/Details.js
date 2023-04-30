import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/Product/productAction";
import {
  addItem,
  increase,
  decrease,
  removeItem,
} from "../redux/basket/basketAction";
import { quantityCount, isInCart } from "../helper/function";
import trashIcon from "../icons/trash.svg";

import styles from "../styles/Details.module.css";


////////MUI
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Button , Container , Grid, CardMedia, Typography} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Loader from "./Loader";



const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading, error } = useSelector((state) => state.product);

  const state = useSelector((state) => state.basket);
  console.log(data)

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  // const classes = useStyles();
  if (loading) return <Loader />;
  return (
    
    <div className={styles.container}>
      { data ? (
        <div className={styles.second}>
          <img src={data.image} alt="product" />
          <div className={styles.info}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>Category : {data.category}</p>
            <p>Price : {data.price}$</p>
            <p>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  value={data.rating.rate}
                  precision={0.5}
                  readOnly
                />
                (by {data.rating.count} people)
              </Stack>
            </p>

            <div className={styles.button}>
              {quantityCount(state, data.id) === 1 && (
                <Button variant="contained" onClick={() => dispatch(removeItem(data))}>
                  <img src={trashIcon} alt="deleteButton" />{" "}
                </Button>
              )}
              {quantityCount(state, data.id) > 1 && (
                <Button variant="contained" startIcon={<HorizontalRuleIcon />} className={styles.center} onClick={() => dispatch(decrease(data))}></Button>
              )}
              {quantityCount(state, data.id) > 0 && (
              <div className={styles.span} >  
                <span> {quantityCount(state, data.id)} </span>
              </div>
              )}
              
              {isInCart(state, data.id) ? (
                <Button variant="contained" sx={{width:30,height:64,margin:0}}  className={styles.center} startIcon={<AddIcon/>}  onClick={() => dispatch(increase(data))}></Button>
                
              ) : (
                <Button variant="contained" endIcon={<AddShoppingCartIcon />}  onClick={() => dispatch(addItem(data))}>
                  Add to Basket
                </Button>
              )}
              
            </div>
          </div>
        </div>
      ) : error ? (
        { error }
      ) : (
        ""
      )}
    </div>
  );
};

export default Details;


