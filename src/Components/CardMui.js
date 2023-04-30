import React from "react";
import styles from "../styles/Card.module.css";
import { useNavigate } from "react-router-dom";
import { shorten } from "../helper/function";

////////MUI
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";



const CardMui = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 , borderRadius: 4 , boxShadow: "rgba(0,0,0,0.1) 0px 8px 12px "}} >
      <CardActionArea onClick={() => navigate(data.id.toString())}>
        <CardMedia
          component="img"
          height="280"
          image={data.image}
          alt={data.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {shorten(data.title)}
          </Typography>
          <Typography variant="p" component="h2" color="text.secondary">
          {data.price} $
          </Typography>
          <div><Stack spacing={1}>
          <Rating
            name="half-rating-read"
            value={data.rating.rate}
            precision={0.5}
            readOnly
          />
          (by {data.rating.count} people)
        </Stack>
      </div>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
};

export default CardMui;
