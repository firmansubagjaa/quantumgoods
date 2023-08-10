import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

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
        <h1 className="p-3 font-medium text-3xl">Brand Andalan`s </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {data.map((item) => {
          return (
            <div key={item.id} className="m-8">
              <Cards title={item.title} desc={`$${item.price}`} image={item.thumbnail} className={"relative"} category={item.category} linkTo={`/product/${item.id}`} />
            </div>
          );
        })}
      </div>
    </>
  );
}
