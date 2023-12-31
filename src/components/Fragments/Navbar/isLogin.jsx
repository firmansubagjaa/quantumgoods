import { Link, useNavigate } from "react-router-dom";

export default function IsLogin() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const cart = JSON.parse(localStorage.getItem("@cart"));

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const Total = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price;
    }
    return totalPrice;
  };

  return (
    <div className="flex justify-evenly items-center w-full">
      <div className="tooltip tooltip-bottom" data-tip="Favorite">
        <Link to={"/favorite"} className="btn btn-ghost btn-circle rounded-full">
          <div className="indicator">
            <img src="/images/png/heart.png" className="h-5 w-5" />
          </div>
        </Link>
      </div>
      <div className="dropdown dropdown-end">
        <div className="tooltip tooltip-bottom" data-tip="keranjang">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-primary badge-sm indicator-item">{cart.length === 0 ? "0" : cart.length}</span>
            </div>
          </label>
        </div>
        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">{cart.length === 0 ? "0" : cart.length} Items</span>
            <span className="text-info  ">Subtotal: ${Total()}</span>
            <div className="card-actions">
              <Link to={"/cart"} className="btn btn-primary btn-block">
                Lihat keranjang
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex">
          <div className="w-10 rounded-full flex">
            <img src={user.image} />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <span className="p-3 text-xl font-semibold">Hello {user.firstName}!</span>
          <li>
            <button className="justify-between">Lihat Profil</button>
          </li>
          <li>
            <Link to={"/history"}>Riwayat Pembelian</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Keluar</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
