import React from "react";
import Login from "./Components/Login";
import Shop from "./Components/Shop";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Details from "./Components/Details"
import ShopBasket from "./Components/ShopBasket";
import Footer from "./Components/Footer";
import Navbar from "./Components/Header/Navbar";
import Profile from "./Components/Profile";

function App() {
  return (
    <div  style={{}}>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Details />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/login" element={<Login />} />
        <Route path="/profile/signup" element={<Signup />} />
        <Route path="/basket" element={<ShopBasket />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
