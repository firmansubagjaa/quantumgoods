export default function CardInvite() {
  return (
    <div className="border-2 m-10 bg-base-200 flex flex-col lg:flex-row shadow-md justify-between items-center rounded-2xl ">
      <div className="p-5 space-y-3">
        <h2 className="font-bold text-2xl lg:text-5xl">Jelajah!</h2>
        <p className="font-medium w-full max-w-lg">Jelajahi koleksi produk unggulan kami dan temukan barang-barang yang sesuai dengan gaya dan kebutuhan Anda!</p>
      </div>
      <div className="btn btn-primary m-5 ">
        <button>Lihat Semua</button>
      </div>
    </div>
  );
}
