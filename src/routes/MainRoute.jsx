// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../pages/Home/Navbar";
// import Footer from "../pages/Home/Footer";

// const MainRoute = () => {
//   return (
//     <div>
//       <Navbar />
//       <main className="min-h-screen">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default MainRoute;




import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";
import Footer from "../pages/Home/Footer";

const MainRoute = () => {
  const location = useLocation();

  const hideLayout = ["/login", "/signup"].includes(location.pathname);

  return (
    <div>
      {!hideLayout && <Navbar />}
      <main className="min-h-screen">
        <Outlet />
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
};

export default MainRoute;
