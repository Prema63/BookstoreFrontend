import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Chatbot from "../components/Home/Chatbot";
import Navbar from "../pages/Home/Navbar";
import Footer from "../pages/Home/Footer";

const MainRoute = () => {
  const location = useLocation();

  const hideLayout = ["/login", "/signup"].includes(location.pathname);

  return (
    <div>
      {!hideLayout && <Navbar />}
      <Chatbot/>
      <main className="min-h-screen">
        <Outlet />
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
};

export default MainRoute;
