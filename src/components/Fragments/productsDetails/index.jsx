import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { productDetailApi } from "../../../features/productDetailSlice";

export default function ProductDetailMain() {
  const { id } = useParams();
  const dispatch = useDispatch();
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
  console.log(data);

  return (
    <div className="my-16">
      <div className="m-16">
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
      <div className="flex justify-center items-start">
        <figure className="stack">
          {data?.images?.map((image, i) => {
            return (
              <figure key={i}>
                <img src={image} alt="i" className="m-5 rounded-2xl shadow-md w-96 h-64 object-cover object-top" />
              </figure>
            );
          })}
          {/* <img src={data.thumbnail} alt={data.title} className="rounded-2xl w-80 h-80 object-cover object-center" /> */}
        </figure>
        <div className="mx-28 bg-base-100 border border-solid border-base-300 shadow-2xl p-5 rounded-2xl">
          <h3 className="text-3xl font-semibold">{data.title} </h3>
          <p>Category: {data.category} </p>
          <p>Rating: {data.rating}</p>
          <div className="text-primary my-5">
            <p className="text-5xl">${data.price}</p>
          </div>
          <div className="my-5 w-96">
            <h5 className="border-b-2 border-solid border-primary">Description</h5>
            <p>Description: {data.description}</p>
          </div>
          <div>
            <button className="btn btn-primary btn-wide">Add to cart</button>
          </div>
        </div>
      </div>
      <div className=" ">
        <h3 className="text-3xl font-semibold border-b-2 border-solid border-primary p-2 mx-16">Gallery</h3>

        <div className="flex flex-wrap justify-center m-10">
          {data?.images?.map((image, i) => {
            return (
              <figure key={i}>
                <img src={image} alt="i" className="m-5 rounded-2xl w-96 h-64 object-cover object-top" />
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
