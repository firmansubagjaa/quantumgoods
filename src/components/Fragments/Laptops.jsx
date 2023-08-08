import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Laptops() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/category/laptops");
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
        <h1 className="p-3 font-medium text-3xl">Laptops </h1>
      </div>
      <div className="carousel rounded-box">
        {data.map((item) => {
          return (
            <Link to={`/product/${item.id}`} key={item.id}>
              <div className="carousel-item">
                <Cards title={item.title} desc={`$${item.price}`} image={item.thumbnail} className={"m-2"} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
