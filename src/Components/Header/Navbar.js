import React from "react";
import logo from "../../icons/deathly-larg.png";

import { AppBar, Container, Grid } from "@mui/material";
import Burger from "./Burger";
import Accounts from "./Accounts";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={4}>
              <Burger />
            </Grid>
            <Grid item xs={4}>
              <Link to="/" style={{textDecoration:"none",color:"white"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <img src={logo} alt="logo" style={{ width: "40px" }} />
                  <span>DH SHOP</span>
                </div>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Accounts />
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
