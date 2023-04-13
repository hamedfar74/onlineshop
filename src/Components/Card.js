import React from "react";
import styles from "./card.module.css";
import { Link, useNavigate } from "react-router-dom";
import { shorten } from "../helper/function";

////////MUI
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


const Card = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img src={data.image} alt="product" />
      <h3> {shorten(data.title)} </h3>
      <p>{data.price} $</p>
      <p><Stack spacing={1}>
          <Rating
            name="half-rating-read"
            value={data.rating.rate}
            precision={0.5}
            readOnly
          />
          (by {data.rating.count} people)
        </Stack>
      </p>
      <button onClick={() => navigate(data.id.toString())}>DETAILS</button>
    </div>
  );
};

export default Card;
