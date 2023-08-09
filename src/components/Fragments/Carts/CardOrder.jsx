import { useEffect, useState } from "react";
import Toast from "../toast";
import { Link, useNavigate } from "react-router-dom";

export default function CardOrder() {
  const cart = JSON.parse(localStorage.getItem("@cart"));
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("@cart"));
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (itemId) => {
    setShowToast(true);
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("@cart", JSON.stringify(updatedCart));

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleBuy = () => {
    const purchaseDetails = {
      id: Date.now(), // Gunakan timestamp atau ID unik lainnya
      items: cartItems,
      date: new Date().toISOString(),
      // Tambahkan properti lain sesuai kebutuhan
    };
    const purchaseHistory = JSON.parse(localStorage.getItem("@purchaseHistory")) || [];
    purchaseHistory.push(purchaseDetails);
    localStorage.setItem("@purchaseHistory", JSON.stringify(purchaseHistory));

    setCartItems([]); // Mengosongkan keranjang
    localStorage.removeItem("@cart");
    localStorage.setItem("@cart", JSON.stringify([]));

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    navigate("/history");
  };

  const Total = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price;
    }
    return totalPrice;
  };

  return (
    <div className="bg-base-100 border-2 w-screen max-w-6xl rounded-md border-solid border-base-300 shadow-sm">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="p-5 w-full">
          <div className="border-b border-solid border-black ">
            <h1 className="font-medium text-2xl">Cart</h1>
            {cart.length !== 0 ? (
              <>
                {cart.map((item) => {
                  return (
                    <div key={item.id} className="flex flex-col justify-between p-5 my-5 rounded-lg hover:bg-base-300">
                      <div className="flex justify-between items-center  ">
                        <Link to={`/product/${item.id}`}>
                          <div className="flex items-center">
                            <img src={item.thumbnail} className="w-24 h-24  rounded-md mr-3" />
                            <div className="">
                              <p className="font-medium">{item.title}</p>
                              <p>${item.price}</p>
                            </div>
                          </div>
                        </Link>
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
                <div className="flex justify-center items-center h-screen max-h-60 my-10">
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
        <div className={`p-5 w-full border-l-2 ${cart.length === 0 ? "hidden" : "flex flex-col"}`}>
          <h1 className="font-medium text-2xl">Payment</h1>
          <p>Pilih satu metode pembayaran yang anda inginkan</p>
          <div className="flex justify-between py-7">
            <div className="flex justify-center items-center">
              <input type="radio" name="radio-1" className="radio radio-primary" />
              <label htmlFor="radio-1" className="ml-3">
                BCA
              </label>
            </div>
            <div className="flex justify-center items-center">
              <input type="radio" name="radio-1" className="radio radio-primary" />
              <label htmlFor="radio-1" className="ml-3">
                Mandiri
              </label>
            </div>
            <div className="flex justify-center items-center">
              <input type="radio" name="radio-1" className="radio radio-primary" />
              <label htmlFor="radio-1" className="ml-3">
                BNI
              </label>
            </div>
          </div>
          <div className="border-b border-solid border-black"></div>
          <div className="py-5">
            <h1 className="font-medium text-2xl">Address</h1>
            <p>Pastikan alamat tujuan anda sudah benar.</p>
            <div className="flex my-5">
              <input type="radio" name="radio-2" className="radio radio-primary mr-3" />
              <label htmlFor="radio-2">Jl. Happy Calm VI No. 10</label>
            </div>
            <div className="border-b border-solid border-black"></div>
            <div className="my-5">
              <button className="btn btn-primary w-full" onClick={handleBuy}>
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      {showToast && <Toast onClick={() => setShowToast(false)} desc={"Selamat! Pesanan Anda berhasil."} />}
    </div>
  );
}
