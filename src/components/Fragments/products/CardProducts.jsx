import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CatergoryCard from "./CatergoryCard";
import { useDispatch, useSelector } from "react-redux";
import { categoryApi } from "../../../features/categorySlice";

export default function CardProducts() {
  const { categorys } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.get.data);

  useEffect(() => {
    const storeDispatch = async () => {
      try {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve;
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    dispatch(categoryApi(categorys));
    storeDispatch();
  }, [dispatch, categorys]);
  console.log(data);

  return (
    <div className="flex mt-28">
      <CatergoryCard />
      <div>
        <div className="flex flex-wrap mt-16">
          {data?.products?.map((item) => {
            return (
              <div key={item.id} className="mt-5">
                <Link to={`/product/${item.id}`}>
                  <div className="card card-compact w-56 mx-3 bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-base-content">
                    <figure>
                      <img src={item.thumbnail} alt={item.title} className="w-full h-56 object-cover object-center rounded-b-2xl" />
                    </figure>
                    <div className="card-body">
                      <div className="h-20">
                        <h2 className="card-title">{item.title}</h2>
                        <p className="text-sm">${item.price}</p>
                      </div>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline w-28">{item.category}</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                      <div>
                        <button className="btn btn-primary w-full rounded-2xl">Detail</button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
