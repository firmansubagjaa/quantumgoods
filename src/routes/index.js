import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Products from "../pages/products";
import ProductDetail from "../pages/productDetail";
import Login from "../pages/login";

export const router = createBrowserRouter([
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
]);