import React from "react";
import logo from "../../icons/deathly-larg.png";

import { AppBar, Container, Grid } from "@mui/material";
import Burger from "./Burger";
import Accounts from "./Accounts";

const NavbarTest = () => {
  return (
    <div>
      <AppBar >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={4}>
              <Burger />
            </Grid>
            <Grid item xs={4}>
              <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <img src={logo} alt="logo" style={{ width: "40px" }} />
                <span>DH SHOP</span>
              </div>
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

export default NavbarTest;
