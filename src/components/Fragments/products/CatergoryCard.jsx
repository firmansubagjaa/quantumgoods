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
    <div className="px-3">
      <h4 className="py-5 font-semibold text-xl">Kategori</h4>
      <ul className="menu bg-base-200 w-56 rounded-box shadow-xl">
        {data.map((item, i) => {
          return (
            <Link key={i} to={`/products/${item}`}>
              <li>
                <a className="p-5">{item}</a>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
