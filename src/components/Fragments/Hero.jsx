export default function Hero() {
  return (
    <div className="hero min-h-screen w-full flex-col bg-base-200 mt-14">
      <div className="hero-content flex-col p-10 text-center lg:text-justify lg:flex-col">
        <div className="md:flex space-x-5 hidden ">
          <img src="/images/webp/hero1.webp " className="max-w-sm rounded-lg lg:flex shadow-2xl w-32 h-60 object-none object-top  " />
          <img src="/images/webp/hero2.webp " className="max-w-sm rounded-lg lg:flex shadow-2xl w-32 h-60 object-none object-top  " />
          <img src="/images/webp/hero3.webp " className="max-w-sm rounded-lg lg:flex shadow-2xl w-32 h-60 object-none object-top" />
        </div>
        <div className=" w-20"></div>
        <h1 className="text-3xl lg:text-5xl md:text-center font-bold">
          Peluang Belanja Tanpa Batas, Hanya di <span className="text-primary">Quantum</span>Goods!
        </h1>
        <p className="py-6 font-medium">Penjelajahan Tanpa Akhir Menuju Dunia Belanja Online Terbaik.</p>
      </div>
    </div>
  );
}
