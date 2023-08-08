export default function CardPayment() {
  return (
    <div className="bg-base-100 border-2 w-screen max-w-sm rounded-md border-solid border-base-300 shadow-sm">
      <div className="p-5">
        <h1 className="font-medium text-2xl">Payment</h1>
        <p>Pilih satu metode pembayaran yang anda inginkan</p>
        <div className="flex justify-between py-7">
          <div className="flex justify-center items-center">
            <input type="radio" name="radio-1" className="radio radio-primary" />
            <label htmlFor="radio-1" className="ml-3">
              BCA
            </label>
          </div>
          <div className="flex justify-center items-center">
            <input type="radio" name="radio-1" className="radio radio-primary" />
            <label htmlFor="radio-1" className="ml-3">
              Mandiri
            </label>
          </div>
          <div className="flex justify-center items-center">
            <input type="radio" name="radio-1" className="radio radio-primary" />
            <label htmlFor="radio-1" className="ml-3">
              BNI
            </label>
          </div>
        </div>
        <div className="border-b-2 border-solid border-black"></div>
        <div className="py-5">
          <h1 className="font-medium text-2xl">Address</h1>
          <p>Pastikan alamat tujuan anda sudah benar.</p>
          <div className="flex my-5">
            <input type="radio" name="radio-2" className="radio radio-primary mr-3" />
            <label htmlFor="radio-2">Jl. Happy Calm VI No. 10</label>
          </div>
          <div className="border-b-2 border-solid border-black"></div>
          <div className="my-5">
            <button className="btn btn-primary w-full">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
