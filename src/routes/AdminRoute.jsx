import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminLayout from "../admin/component/ui/AdminLayout";
import AdminLogin from "../admin/pages/AdminLogin";
import Home from "../admin/pages/Home";
import Poopular from "../admin/pages/Poopular";
import AboutUs from "../admin/pages/AboutUs";
import ContactUs from "../admin/pages/ContactUs";


export default function AdminRoutes() {
  const { pathname } = useLocation();
  if (pathname === "/admin/login")
    return (
      <>
        <Routes>
            <Route path="login" element={<AdminLogin />}></Route>
        </Routes>
      </>
    );
  return (
    <>
      <AdminLayout>
        <Routes>
            <Route path="home" element={<Home />}></Route>
            <Route path="popular" element={<Poopular />}></Route>
            <Route path="aboutUs" element={< AboutUs/>}></Route>
            <Route path="contactUs" element={< ContactUs/>}></Route>
        </Routes>
      </AdminLayout>
    </>
  );
}
