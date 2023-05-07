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

////////MUI
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {
  Button,
  Container,
  Grid,
  CardMedia,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Loader from "./Loader";

const Info = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading, error } = useSelector((state) => state.product);

  const state = useSelector((state) => state.basket);
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  // const {image, title, description, price, category, quantity } = data
  console.log(data);
  if (loading) return <Loader />;
  if (error) return <h3>Somthing went wrong</h3>;
  return (
    <div>
      {data ? (
        <Container maxWidth="lg">
          <div style={{ minHeight: "73vh" }}>
            <Grid container mt={8} mb={10} spacing={3}>
              <Grid item container justifyContent="center"  xs={12} md={5}>
                <CardMedia
                  component="img"
                  sx={{ maxHeight:400, objectFit:"scale-down" }}
                  title="product"
                  src={data.image}
                />
              </Grid>
              <Grid item xs={12} md={7} >
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <p>Category : {data.category}</p>
                <p>Price : {data.price}$</p>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    value={data.rating.rate}
                    precision={0.5}
                    readOnly
                  />
                  (by {data.rating.count} people)
                </Stack>
                <div style={{ display: "flex" }}>
                  {quantityCount(state, data.id) === 1 && (
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      sx={{ borderRadius: 2, width: 50 }}
                      onClick={() => dispatch(removeItem(data))}
                    >
                      <DeleteIcon />
                    </IconButton>
                    // <Button variant="contained" onClick={() => dispatch(removeItem(data))}>
                    //   <img src={trashIcon} alt="deleteButton" />{" "}
                    // </Button>
                  )}
                  {quantityCount(state, data.id) > 1 && (
                    <IconButton
                      aria-label="decrease"
                      color="primary"
                      sx={{ borderRadius: 2, width: 50 }}
                      onClick={() => dispatch(decrease(data))}
                    >
                      <HorizontalRuleIcon />
                    </IconButton>
                    // <Button variant="contained" startIcon={<HorizontalRuleIcon />} onClick={() => dispatch(decrease(data))}></Button>
                  )}
                  {quantityCount(state, data.id) > 0 && (
                    <div
                      style={{
                        width: "74px",
                        justifyItems: "center",
                        alignSelf: "center",
                        fontSize: "larger",
                        backgroundColor: "#2baf46",
                        color: "white",
                        padding: "0 34px",
                      }}
                    >
                      <span> {quantityCount(state, data.id)} </span>
                    </div>
                  )}

                  {isInCart(state, data.id) ? (
                    <IconButton
                      aria-label="increase"
                      color="primary"
                      sx={{ borderRadius: 2, width: 50 }}
                      onClick={() => dispatch(increase(data))}
                    >
                      <AddIcon />
                    </IconButton>
                  ) : (
                    // <Button variant="contained"  startIcon={<AddIcon/>}  onClick={() => dispatch(increase(data))}></Button>

                    <Button
                      variant="contained"
                      endIcon={<AddShoppingCartIcon />}
                      onClick={() => dispatch(addItem(data))}
                    >
                      Add to Basket
                    </Button>
                  )}
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      ) : error ? (
        { error }
      ) : (
        ""
      )}
    </div>
  );
};

export default Info;
