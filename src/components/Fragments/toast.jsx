export default function Toast({ onClick, desc }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-normal px-4 py-6 pointer-events-none sm:p-6 sm:items-end sm:justify-start ">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
        <div className="rounded-lg shadow-xs overflow-hidden">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm leading-5 font-medium text-gray-900">{desc}</p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button onClick={onClick} className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M14.348 5.652a1 1 0 011.414 0l3.536 3.536a1 1 0 010 1.414L16.81 12l3.536 3.536a1 1 0 01-1.414 1.414L15.396 13.41l-3.536 3.536a1 1 0 01-1.414-1.414L13.288 12l-3.536-3.536a1 1 0 010-1.414l3.536-3.536a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
