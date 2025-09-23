import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoute";
import UserSite from "./routes/UserSite";

function App() {
  return (
    <Routes>
      <Route path="admin/*" element={<AdminRoutes />} />
      <Route path="/*" element={<UserSite />} />
    </Routes>
  );
}

export default App;
