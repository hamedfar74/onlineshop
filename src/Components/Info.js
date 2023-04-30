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


////////MUI
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Button , Container , Grid, CardMedia, Typography, Box} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Loader from "./Loader";



const Info = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { data, loading, error } = useSelector((state) => state.product) ;
   
    const state = useSelector((state) => state.basket);
    useEffect(() => {
        dispatch(getProduct(id));
      }, []);
    // const {image, title, description, price, category, quantity } = data
      console.log(data)
      if (loading) return <Loader />;
      if (error) return <h3>Somthing went wrong</h3>;
  return (
    <div>
      {
        data ? (
          <Container maxWidth="lg" >
          <Grid container mt={6} mb={6} spacing={4} >
            <Grid item container justifyContent="center" xs={12} md={4}  >
                <CardMedia component="img" sx={{ width:200 }} title="product" src={data.image} />
               
            </Grid>
            <Grid item xs={12} md={7} m={3}>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <p>Category : {data.category}</p>
              <p>Price : {data.price}$</p>
            </Grid>
          </Grid>
        </Container>
         ) : error ? (
          {error}
         ) : ("")
      }
        
    </div>
  )
}

export default Info;