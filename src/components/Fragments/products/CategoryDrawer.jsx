import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categoriesApi } from "../../../features/categoriesSlice";

export default function CategoryDrawer({ children }) {
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
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-[10]">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu  p-4 w-80 h-full bg-base-200 text-base-content">
          <div className="bg-base-100 py-5 rounded-md">
            <div className="flex justify-center items-center">
              <p className="font-bold"> Kategori </p>
            </div>
          </div>
          {data.map((item, i) => {
            return (
              <li key={i}>
                <Link to={`/products/${item}`}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
