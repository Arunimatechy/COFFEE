// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar.jsx";
// import Login from "./Pages/Login.jsx";
// import Register from "./Pages/Register.jsx";
// import ListPage from "./Pages/ListPage.jsx";
// import AddProduct from "./Pages/AddProduct.jsx";
// import AdminDashboard from "./Pages/AdminDashboard.jsx";
// import ProtectedRoute from "./Components/ProtectedRoute.jsx";
// import AdminPath from "./Components/AdminPath.jsx";
// import { Toaster } from "react-hot-toast";
// import CartPage from "./Pages/CartPage.jsx";
// import Checkout from "./Pages/Checkout";
// import OrderSuccess from "./Pages/OrderSuccess";
// import Orders from "./Pages/Orders.jsx";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Toaster />
//       <Routes>
//         <Route
//           path="/"
//           element={
//               <ListPage />
//           }
//         />
//         <Route
//           path="/add"
//           element={
//             <ProtectedRoute>
//               <AddProduct />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/admin"
//           element={
//             <AdminPath>
//               <AdminDashboard />
//             </AdminPath>
//           }
//         />

       

//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/cart" element={<CartPage/>}/>
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/success" element={<OrderSuccess />} />
// <Route path="/orders" element={<Orders />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import ListPage from "./Pages/ListPage.jsx";
import AddProduct from "./Pages/AddProduct.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import AdminPath from "./Components/AdminPath.jsx";
import { Toaster } from "react-hot-toast";
import CartPage from "./Pages/CartPage.jsx";
import Checkout from "./Pages/Checkout.jsx";
import OrderSuccess from "./Pages/OrderSuccess.jsx";
import Orders from "./Pages/Orders.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<ListPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />

        {/* ORDERS */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <AdminPath>
              <AdminDashboard />
            </AdminPath>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <AdminPath>
              <Orders />
            </AdminPath>
          }
        />
      </Routes>
    </>
  );
};

export default App;
