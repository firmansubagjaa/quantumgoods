import { useEffect, useState } from "react";

export const HandleRemoveItem = (itemId) => {
  alert("berhasil");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("@cart"));
    setCartItems(storedCart);
  }, []);

  const updatedCart = cartItems.filter((item) => item.id !== itemId);
  setCartItems(updatedCart);
  const setCart = localStorage.setItem("@cart", JSON.stringify(updatedCart));

  return setCart
} 