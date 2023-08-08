export default function Login() {
  return (
    <div className="flex justify-center p-36 items-center min-h-screen bg-base-200">
      <div className="flex justify-center items-center flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Masuk ke Akun Anda</h1>
          {/* <h1 className="text-base py-6 font-medium">Akses Mudah ke Dunia Belanja Online Anda</h1> */}
          <p className="py-6">
            Selamat datang kembali di <span className="text-primary">Quantum</span>Goods! Silakan masuk ke akun Anda untuk melanjutkan perjalanan belanja Anda dengan kami. Kami sangat senang bisa melayani Anda lagi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
