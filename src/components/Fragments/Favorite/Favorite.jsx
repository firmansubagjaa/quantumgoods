import { useEffect, useState } from "react";
import Toast from "../toast";

export default function Favorite() {
  const favorites = JSON.parse(localStorage.getItem("@favorites"));
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("@favorites"));
    setFavoriteItems(storedCart);
  }, []);

  const handleRemoveFavorite = (itemId) => {
    setShowToast(true);
    const updatedFavorite = favoriteItems.filter((item) => item.id !== itemId);
    setFavoriteItems(updatedFavorite);
    localStorage.setItem("@favorites", JSON.stringify(updatedFavorite));

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center mt-36">
      <div className="bg-base-100 border-2 w-screen max-w-6xl h-screen rounded-md border-solid border-base-300 shadow-sm">
        <div className="p-5">
          <h1 className="font-medium text-2xl">Barang Yang Di Favorit</h1>
          {favorites.map((item) => {
            return (
              <div key={item.id} className="flex flex-col justify-between py-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img src="" alt="" />
                    <img src={item.thumbnail} className="w-24 h-24 border-2 rounded-md mr-3" />
                    <div className="">
                      <p className="font-medium">{item.title}</p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-primary rounded-md" onClick={() => handleRemoveFavorite(item.id)}>
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showToast && <Toast onClick={() => setShowToast(false)} desc={"Menghapus barang di favorite."} />}
    </div>
  );
}
