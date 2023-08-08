export default function CardOrder() {
  return (
    <div className="bg-base-100 border-2 w-screen max-w-xl border-solid border-base-300 shadow-sm">
      <div className="p-5">
        <div className="border-b-2 border-solid border-black">
          <h1 className="font-medium text-2xl">Cart</h1>
          {[1, 2, 3].map((i) => {
            return (
              <div key={i} className="flex flex-col py-5">
                <div className="flex justify-start items-center  ">
                  <div>
                    <div className="w-10 h-10 border-2 border-solid border-black rounded-2xl mr-3"></div>
                  </div>
                  <div className="">
                    <p>Adidas Ultra</p>
                    <p>$450</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between pt-3">
          <p>Total</p>
          <p>$1050</p>
        </div>
      </div>
    </div>
  );
}
