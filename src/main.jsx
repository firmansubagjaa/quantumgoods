import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/products.jsx";
import Home from "./pages/home.jsx";
import ProductDetail from "./pages/productDetail";
import { Provider } from "react-redux";
import store from "./app/stores";
import Login from "./pages/login";
import CartPage from "./pages/cart";
import History from "./pages/History";
import Favorite from "./pages/Favorite";
import ProgressPaymentPage from "./pages/progressPayement";
import ErrorPage from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:categorys",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/progress-payment",
    element: <ProgressPaymentPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
