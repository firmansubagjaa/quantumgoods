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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
