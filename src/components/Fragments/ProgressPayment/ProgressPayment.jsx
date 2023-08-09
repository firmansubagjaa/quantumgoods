import { Link } from "react-router-dom";

export default function ProgressPayment() {
  return (
    <div className="flex flex-col mt-20 justify-center items-center min-h-screen">
      <img src="/images/png/success.png" alt="" className="w-full max-w-xs" />
      <div className="text-center w-full space-y-5  max-w-sm">
        <h1 className="font-bold text-2xl">Selamat! Transaksi anda telah Berhasil</h1>
        <p className="font-medium">Silahkan untuk menunggu paket, rentang waktu untuk menunggu kurir sekitar 2-7 hari sesuai destinasi alamat rumah anda.</p>
        <div className="flex flex-col space-y-2">
          <Link to={"/history"} className="btn btn-primary font-bold">
            Lihat Riwayat Pembelian
          </Link>

          <Link to={"/"} className="btn btn-secondary font-bold">
            Halaman Utama
          </Link>
        </div>
      </div>
    </div>
  );
}
