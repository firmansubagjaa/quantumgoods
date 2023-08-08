import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Smartphones() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/category/smartphones");
        setData(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="flex justify-between px-5 items-center mt-24">
        <h1 className="p-3 font-medium text-3xl">Smartphones </h1>
      </div>
      <div className="carousel rounded-box">
        {data.map((item) => {
          return (
            <div className="carousel-item" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <Cards title={item.title} desc={`$${item.price}`} image={item.thumbnail} className={"m-2"} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
