import { Link } from "react-router-dom";

export default function IsLoginDrawer() {
  const user = JSON.parse(localStorage.getItem("user"));
  // const cart = JSON.parse(localStorage.getItem("@cart"));

  const handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <>
      <div>
        <div className="bg-base-100 mb-3 py-5 rounded-md">
          <div className="flex justify-start items-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={user.image} alt="" />
              </div>
            </div>
            <div>
              <p className="font-bold">Hello {user.firstName}! </p>
              <p>Selamat Datang</p>
            </div>
          </div>
        </div>

        <li className="flex">
          <Link>
            <img src="/images/png/profile.png" className="w-5  " />
            Lihat Profil
          </Link>
        </li>
        <li className="flex">
          <Link to={"/products/smartphones"}>
            <img src="/images/png/category.png" className="w-5  " />
            Kategori
          </Link>
        </li>
        <li className="flex">
          <Link to={"/cart"}>
            <img src="/images/png/shopping-cart.png" className="w-5  " />
            Keranjang
          </Link>
        </li>
        <li className="flex">
          <Link to={"/history"}>
            <img src="/images/png/history.png" className="w-5  " />
            Riwayat Pembelian
          </Link>
        </li>
        <li className="flex">
          <Link>
            <img src="/images/png/setting.png" className="w-5" />
            Pengaturan
          </Link>
        </li>
      </div>
      <div>
        <li className="flex">
          <Link>
            <img src="/images/png/setting.png" className="w-5" />
            Pengaturan
          </Link>
        </li>
        <div>
          <li className="flex">
            <Link>
              <img src="/images/png/info.png" className="w-5" />
              Tentang Kami
            </Link>
          </li>
        </div>
        <li className="flex">
          <button onClick={() => handleLogOut()}>
            <img src="/images/png/logout.png" className="w-5" />
            Keluar
          </button>
        </li>
      </div>
    </>
  );
}
