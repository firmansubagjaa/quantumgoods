import { Link } from "react-router-dom";

export default function IsNotLoginDrawer() {
  return (
    <>
      <div>
        <div className="bg-base-100 mb-3 py-5 rounded-md">
          <div className="flex justify-start items-center">
            <div className="">
              <img src="/images/png/user.png" className="w-24 p-3" />
            </div>
            <div>
              <p className="font-bold">Hello Anon!</p>
              <p>Selamat Datang.</p>
            </div>
          </div>
        </div>

        <li className="flex">
          <Link to={"/login"}>
            <img src="/images/png/login.png" className="w-5  " />
            Masuk Akun
          </Link>
        </li>
      </div>
      <div>
        <li className="flex">
          <Link>
            <img src="/images/png/info.png" className="w-5" />
            Tentang Kami
          </Link>
        </li>
      </div>
    </>
  );
}
