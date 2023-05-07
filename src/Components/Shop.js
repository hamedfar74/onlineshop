import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/data/dataAction";
import CardMui from "./CardMui";
// import styles from "../styles/Shop.module.css"
import { Box, Container, Grid } from "@mui/material";
import Loader from "./Loader";




const Shop = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  

  useEffect(() => {
    dispatch(getData());
  }, []);
  // backgroundColor:`${loading && "#00E7FF" }`,height:`${loading && "100vh" }`
  if (loading) return <Loader />;
    
  
  return (
    <div  >
      
        <Container maxWidth="lg">
          <Grid container mt={10} mb={10} spacing={3}>
          {data.map((item) => 
          <Grid item xs={12} sm={6} md={4} lg={3} mt={3} key={item.id}>
            <CardMui data={item}  />
          </Grid>
          )}
          </Grid>
        </Container>
      
      {error ? <h2>Somthing Went Wrong!! try again</h2> : ""}
    </div>
  );
};

export default Shop;
