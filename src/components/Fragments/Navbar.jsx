import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categoriesApi } from "../../features/categoriesSlice";
import axios from "axios";
import LayoutsLoading from "../Layouts/LayoutsLoading";
import IsLogin from "./Navbar/isLogin";
import IsNotLogin from "./Navbar/isNotLogin";

export default function Navbar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category.data);
  const status = useSelector((state) => state.category.status);
  const error = useSelector((state) => state.category.error);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    dispatch(categoriesApi());
  }, [dispatch]);

  useEffect(() => {
    const performSearch = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
        setSearchResult(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    if (query) {
      performSearch();
    } else {
      setSearchResult([]);
    }
  }, [query]);

  const handleInputData = (e) => {
    setQuery(e.target.value);
  };

  if (status === "loading") {
    return <LayoutsLoading />;
  }

  if (status === "failed") {
    return <div>error: {error}</div>;
  }

  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="">
      <div className="navbar z-[2] bg-base-100 p-5 fixed shadow-md">
        <div className="navbar-start">
          <Link to={"/"} className="btn btn-ghost normal-case text-3xl">
            <span>
              <span className="text-primary font-bold">Quantum</span>Goods
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="dropdown dropdown-hover px-1">
            <label tabIndex={0} className="btn btn-ghost m-1">
              Kategori
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              {data.map((item, i) => {
                return (
                  <li key={i}>
                    <Link to={`/products/${item}`}>{item}</Link>
                  </li>
                );
              })}
            </ul>
          </ul>
          <div className="">
            <input value={query} onChange={handleInputData} type="text" placeholder="Cari di QuantumGoods" className="input input-bordered input-primary w-screen max-w-2xl" />
            <ul className="menu menu-horizontal overflow-auto bg-base-100 shadow-2xl fixed w-screen max-w-2xl rounded-b-2xl flex flex-col justify-center">
              {searchResult.map((result) => {
                return (
                  <Link key={result.id} to={`/product/${result.id}`}>
                    <li className="p-3">
                      <figure className="flex items-center">
                        <img src={result.thumbnail} alt={result.title} className="w-10 h-10 object-cover object-top rounded-xl" />
                        <figcaption className="m-3">
                          <span className="font-medium">{result.title}</span>
                          <br />
                          <span>{result.category}</span>
                        </figcaption>
                      </figure>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex w-full">{user ? <IsLogin /> : <IsNotLogin />}</div>
          <div className="flex lg:hidden">
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-circle btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
