// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import AdminRoutes from "./routes/AdminRoute";
// import UserSite from "./routes/UserSite";

// function App() {
//   return (
//     <Routes>
//       <Route path="admin/*" element={<AdminRoutes />} />
//       <Route path="/*" element={<UserSite />} />
//     </Routes>
//   );
// }

// export default App;









import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoute";
import UserSite from "./routes/UserSite";
import { CartProvider } from "./components/popular/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<UserSite />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
