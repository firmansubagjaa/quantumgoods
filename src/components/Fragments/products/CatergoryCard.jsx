import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categoriesApi } from "../../../features/categoriesSlice";

export default function CatergoryCard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category.data);

  useEffect(() => {
    const test = async () => {
      try {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve;
          });
        }, 2000);
        dispatch(categoriesApi());
      } catch (error) {
        console.log(error);
      }
    };
    test();
  }, [dispatch]);

  return (
    <div className="px-3 mt-7">
      <ul className="menu bg-base-100 w-56 rounded-md shadow-md">
        <li className="p-5 font-bold  text-xl">Kategori</li>
        {data.map((item, i) => {
          return (
            <li key={i}>
              <Link to={`/products/${item}`} className="p-5 text-lg">
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
