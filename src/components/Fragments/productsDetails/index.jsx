import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productDetailApi } from "../../../features/productDetailSlice";
import Toast from "../toast";

export default function ProductDetailMain() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const favorites = JSON.parse(localStorage.getItem("@favorites"));
  const carts = JSON.parse(localStorage.getItem("@cart"));
  const [showToastCart, setShowToastCart] = useState(false);
  const [showToastFavorite, setShowToastFavorite] = useState(false);
  const data = useSelector((state) => state.getById.data);

  useEffect(() => {
    const test = async () => {
      try {
        await new Promise((resolve) => {
          setTimeout(() => {
            dispatch(productDetailApi(id));
            resolve;
          });
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };
    test();
  }, [dispatch, id]);

  const cart = {
    id: data.id,
    title: data.title,
    price: data.price,
    description: data.description,
    category: data.category,
    thumbnail: data.thumbnail,
  };
  const favorite = {
    id: data.id,
    title: data.title,
    price: data.price,
    description: data.description,
    category: data.category,
    thumbnail: data.thumbnail,
  };

  const handleInputCart = () => {
    if (user) {
      setShowToastCart(true);
      if (carts === null) {
        localStorage.setItem("@cart", JSON.stringify([cart]));
        setTimeout(() => {
          setShowToastCart(false);
        }, 3000);
      } else {
        localStorage.setItem("@cart", JSON.stringify([...carts, cart]));
        setTimeout(() => {
          setShowToastCart(false);
        }, 3000);
      }
    } else {
      alert("Sebelum memesan, masukkan akun anda terlebih dahulu.");
      navigate("/login");
    }
  };

  const handleInputPayment = () => {
    if (user) {
      setShowToastCart(true);
      navigate("/cart");
      if (carts === null) {
        localStorage.setItem("@cart", JSON.stringify([cart]));
        setTimeout(() => {
          setShowToastCart(false);
        }, 3000);
      } else {
        localStorage.setItem("@cart", JSON.stringify([...carts, cart]));
        setTimeout(() => {
          setShowToastCart(false);
        }, 3000);
      }
    } else {
      alert("Sebelum memesan, masukkan akun anda terlebih dahulu.");
      navigate("/login");
    }
  };

  const handleFavoriteInput = () => {
    if (user) {
      setShowToastFavorite(true);
      if (favorites === null) {
        localStorage.setItem("@favorites", JSON.stringify([favorite]));
        setTimeout(() => {
          setShowToastFavorite(false);
        }, 3000);
      } else {
        localStorage.setItem("@favorites", JSON.stringify([...favorites, favorite]));
        setTimeout(() => {
          setShowToastFavorite(false);
        }, 3000);
      }
    } else {
      alert("Sebelum memesan, masukkan akun anda terlebih dahulu.");
      navigate("/login");
    }
  };

  return (
    <div className="mt-28">
      <div className="ml-10">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/products/${data.category}`}>{data.category}</Link>
            </li>
            <li>{data.title}</li>
          </ul>
        </div>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          <div className=" carousel rounded-box w-96">
            <div className="carousel-item w-1/1 ">
              {data?.images?.map((image, i) => {
                return <img src={image} className="w-full object-cover object-center" key={i} />;
              })}
            </div>
          </div>

          <div className=" bg-base-100 border border-solid border-base-300 shadow-lg w-full max-w-2xl p-5 rounded-md">
            <div className="flex justify-between items-start">
              <div className="w-full">
                <h3 className="text-3xl font-semibold">{data.title} </h3>
                <p>Category: {data.category} </p>
                <p>Rating: {data.rating}</p>
              </div>
              <div>
                <div className="tooltip tooltip-bottom" data-tip="Favorite">
                  <button className="btn btn-ghost btn-circle rounded-full" onClick={() => handleFavoriteInput()}>
                    <div className="indicator">
                      <img src="/images/png/heart.png" className="h-10 w-10" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-primary my-5">
              <p className="text-5xl">${data.price}</p>
            </div>
            <div className="my-5 w-full">
              <h5 className="border-b-2 border-solid border-primary">Description</h5>
              <p>Description: {data.description}</p>
            </div>
            <div className="space-y-2">
              <button className="btn btn-primary w-full" onClick={handleInputCart}>
                Tambahkan ke keranjang
              </button>
              <button className="btn btn-secondary w-full" onClick={handleInputPayment}>
                Langsung Bayar
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-3xl font-semibold border-b-2 border-solid border-primary p-2 mx-16">Gallery</h3>
        </div>

        <div className="flex flex-wrap justify-center">
          {data?.images?.map((image, i) => {
            return (
              <figure key={i}>
                <img src={image} alt="i" className="mt-4 lg:m-5 rounded-2xl w-96 h-64 object-cover object-top" />
              </figure>
            );
          })}
        </div>
      </div>
      {showToastCart && <Toast onClick={() => setShowToastCart(false)} desc={"Barang telah dimasukkan ke keranjang."} />}
      {showToastFavorite && <Toast onClick={() => setShowToastFavorite(false)} desc={"Barang telah difavoritkan."} />}
    </div>
  );
}
