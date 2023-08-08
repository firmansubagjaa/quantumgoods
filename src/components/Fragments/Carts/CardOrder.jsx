import { useEffect, useState } from "react";

export default function CardOrder() {
  const cart = JSON.parse(localStorage.getItem("@cart"));
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("@cart"));
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (itemId) => {
    alert("berhasil");
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("@cart", JSON.stringify(updatedCart));
  };

  const Total = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price;
    }
    return totalPrice;
  };

  return (
    <div className="bg-base-100 border-2 w-screen max-w-xl rounded-md border-solid border-base-300 shadow-sm">
      <div className="p-5">
        <div className="border-b border-solid border-black">
          <h1 className="font-medium text-2xl">Cart</h1>
          {cart.length !== 0 ? (
            <>
              {cart.map((item) => {
                return (
                  <div key={item.id} className="flex flex-col justify-between py-5">
                    <div className="flex justify-between items-center  ">
                      <div className="flex items-center">
                        <img src={item.thumbnail} className="w-24 h-24  rounded-md mr-3" />
                        <div className="">
                          <p className="font-medium">{item.title}</p>
                          <p>${item.price}</p>
                        </div>
                      </div>
                      <div>
                        <button className="btn btn-primary rounded-md" onClick={() => handleRemoveItem(item.id)}>
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div className="flex justify-center items-center my-10">
                <span>Silahkan order terlebih dahulu</span>
              </div>
            </>
          )}
        </div>
        {Total() !== 0 ? (
          <div className="flex justify-between pt-3 font-bold">
            <p>Total</p>
            <p>${Total()}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
