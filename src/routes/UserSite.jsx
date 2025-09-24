import React from "react";
import { Routes, Route } from "react-router-dom";
import MainRoute from "./MainRoute";
import Homepage from "../pages/Home/Homepage";
import Popular from "../pages/popular/Popular";
import Contact from "../pages/contactUS/Contact";
import Signup from "../components/Home/Signup";
import Login from "../components/Home/Login";


function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainRoute />}>
        <Route index element={<Homepage />} />
        <Route path="popular" element={<Popular />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<Abou />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default UserRoute;
