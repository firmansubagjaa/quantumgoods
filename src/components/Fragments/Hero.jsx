export default function Hero() {
  return (
    <div className="hero min-h-screen w-full flex-col-reverse bg-base-200 ">
      <div className="hero-content flex-col-reverse p-10 text-center mt-24 lg:text-justify lg:flex-col">
        <div className="flex space-x-5 ">
          <img src="/images/webp/hero1.webp " className="max-w-sm rounded-lg lg:flex shadow-2xl w-20 lg:w-32 h-36 lg:h-60 object-none object-top  " />
          <img src="/images/webp/hero2.webp " className="max-w-sm rounded-lg lg:flex shadow-2xl w-20 lg:w-32 h-36 lg:h-60 object-none object-top  " />
          <img src="/images/webp/hero3.webp " className="max-w-sm rounded-lg lg:flex shadow-2xl w-20 lg:w-32 h-36 lg:h-60 object-none object-top" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl  font-bold">
            Peluang Belanja Tanpa Batas, Hanya di <span className="text-primary">Quantum</span>Goods!
          </h1>
          <p className="py-6 font-medium">Penjelajahan Tanpa Akhir Menuju Dunia Belanja Online Terbaik.</p>
        </div>
      </div>
    </div>
  );
}
