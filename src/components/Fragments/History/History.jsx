import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toast from "../toast";

export default function History() {
  const navigate = useNavigate();
  const array = [];
  const [showToast, setShowToast] = useState(false);
  const purchaseHistory = JSON.parse(localStorage.getItem("@purchaseHistory")) || [];
  const handleRemoveItemFromHistory = (purchaseId, itemId) => {
    const updatedHistory = purchaseHistory.map((purchase) => {
      if (purchase.id === purchaseId) {
        const updatedItems = purchase.items.filter((item) => item.id !== itemId);
        return { ...purchase, items: updatedItems };
      }
      return purchase;
    });

    localStorage.setItem("@purchaseHistory", JSON.stringify(updatedHistory));
    navigate("/history");
  };

  return (
    <div>
      <div className="mt-36 flex justify-center">
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li data-content="●" className="step step-primary">
            Pilih Barang
          </li>
          <li data-content="●" className="step step-primary">
            Masukkan Ke Keranjang
          </li>
          <li data-content="●" className="step step-primary">
            Pilih Pembayaran
          </li>
          <li data-content="●" className="step step-primary">
            Menunggu Barang
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="bg-base-100 border-2 w-screen max-w-6xl h-full rounded-md border-solid border-base-300 shadow-sm">
          <div className="p-5">
            <h1 className="font-medium text-2xl p-5">Riwayat Pembelian</h1>
            {purchaseHistory !== array ? (
              <ul>
                {purchaseHistory &&
                  purchaseHistory.map((purchase, i) => {
                    return (
                      <li key={i}>
                        <ul>
                          {purchase.items.map((item) => {
                            return (
                              <li key={item.id}>
                                <div className="flex flex-col hover:bg-base-300 justify-between p-5 rounded-md">
                                  <li className="flex justify-between items-center">
                                    <Link to={`/product/${item.id}`}>
                                      <div className="flex items-center">
                                        <img src={item.thumbnail} className="w-24 h-24 object-cover object-center  rounded-md mr-3" />
                                        <div className="">
                                          <p className="font-medium">{item.title}</p>
                                          <p>${item.price}</p>
                                        </div>
                                      </div>
                                    </Link>
                                    <div className="">
                                      <button onClick={() => handleRemoveItemFromHistory(purchase.id, item.id)} className="btn btn-error w-full max-w-xs  ">
                                        Buang
                                      </button>
                                    </div>
                                  </li>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
              </ul>
            ) : (
              <>
                <div className="flex flex-col justify-center space-y-5 items-center h-screen max-h-60 my-10">
                  <img src="/images/png/history.png" className="w-52  max-w-xs" />
                  <span className="font-semibold">Riwayat Pembelian Belum Ada</span>
                </div>
              </>
            )}
          </div>
        </div>
        {showToast && <Toast onClick={() => setShowToast(false)} desc={"Selamat! Pesanan Anda berhasil."} />}
      </div>
    </div>
  );
}
