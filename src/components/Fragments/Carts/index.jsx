import CardOrder from "./CardOrder";

export default function CartSection() {
  return (
    <div>
      <div className="mt-36 flex justify-center">
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-primary">Pilih Barang</li>
          <li className="step step-primary">Masukkan Ke Keranjang</li>
          <li className="step step-primary">Pilih Pembayaran</li>
          <li className="step">Menunggu Barang</li>
        </ul>
      </div>
      <div className="flex justify-center mt-10">
        <CardOrder />
      </div>
    </div>
  );
}
