import CardOrder from "./CardOrder";

export default function CartSection() {
  return (
    <div>
      <div className="mt-36 flex justify-center">
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li data-content="●" className="step step-primary">
            Pilih Barang
          </li>
          <li data-content="●" className="step step-primary">
            Masukkan Ke Keranjang
          </li>
          <li data-content="●" className="step step-primary">
            Pilih Pembayaran
          </li>
          <li data-content="●" className="step">
            Menunggu Barang
          </li>
        </ul>
      </div>
      <div className="flex justify-center mt-10">
        <CardOrder />
      </div>
    </div>
  );
}
