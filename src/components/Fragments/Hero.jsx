export default function Hero() {
  return (
    <div className="hero min-h-screen flex-col bg-base-200 mt-14">
      <div className="hero-content flex-row p-10 lg:flex-row-reverse">
        <img src="/images/webp/hero1.webp " className="max-w-sm rounded-lg hidden lg:flex shadow-2xl w-32 h-60 object-none object-top  " />
        <img src="/images/webp/hero2.webp " className="max-w-sm rounded-lg hidden lg:flex shadow-2xl w-32 h-60 object-none object-top  " />
        <img src="/images/webp/hero3.webp " className="max-w-sm rounded-lg hidden lg:flex shadow-2xl w-32 h-60 object-none object-top" />
        <div className="  ">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Peluang Belanja Tanpa Batas, Hanya di <span className="text-primary">Quantum</span>Goods!
          </h1>
          <p className="py-6">Penjelajahan Tanpa Akhir Menuju Dunia Belanja Online Terbaik.</p>
        </div>
      </div>
    </div>
  );
}
