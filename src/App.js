import React from "react";
import Login from "./Components/Login";
import Shop from "./Components/Shop";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import ShopBasket from "./Components/ShopBasket";
import Footer from "./Components/Footer";
import Navbar from "./Components/Header/Navbar";
import Profile from "./Components/Profile";
import ScrollToTop from "./Components/ScrollToTop";
import Info from "./Components/Info";
import BackgroundTest from "./Components/BackgroundTest";


function App() {
  return (
    <div  style={{}}>
      
      {/* <Navbar /> */}
      <Navbar />
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Info />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/login" element={
          <BackgroundTest>
            <Login />
          </BackgroundTest>
        } />
        <Route path="/profile/signup" element={
        <BackgroundTest>
          <Signup />
        </BackgroundTest>
        } />
        <Route path="/basket" element={<ShopBasket />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
