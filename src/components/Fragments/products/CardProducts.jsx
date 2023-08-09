import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CatergoryCard from "./CatergoryCard";
import { useDispatch, useSelector } from "react-redux";
import { categoryApi } from "../../../features/categorySlice";
import LayoutsLoading from "../../Layouts/LayoutsLoading";

export default function CardProducts() {
  const { categorys } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.get.data);
  const status = useSelector((state) => state.get.data);

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

  if (status === "loading") {
    return <LayoutsLoading />;
  }

  if (status === "failed") {
    return <div>Error: {Error}</div>;
  }

  return (
    <div className="flex flex-col mt-28">
      <div className="mx-10">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>products</li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <CatergoryCard />
        <div>
          <div className="flex flex-wrap mt-5">
            {data?.products?.map((item) => {
              return (
                <div key={item.id} className="mt-5">
                  <Link to={`/product/${item.id}`}>
                    <div className="card rounded-md card-compact w-56 mx-3 bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-base-content">
                      <figure>
                        <img src={item.thumbnail} alt={item.title} className="w-full h-56 object-cover object-center" />
                      </figure>
                      <div className="card-body">
                        <div className="flex justify-between items-start">
                          <div className="h-20">
                            <h2 className="card-title">{item.title}</h2>
                            <p className="text-sm">${item.price}</p>
                          </div>

                          <div>
                            <div className="tooltip tooltip-bottom" data-tip="Favorite">
                              <button className="btn btn-ghost btn-circle rounded-full">
                                <div className="indicator">
                                  <img src="/images/png/heart.png" className="h-5 w-5" />
                                </div>
                              </button>
                            </div>
                          </div>
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
    </div>
  );
}
