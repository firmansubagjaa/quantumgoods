export default function LayoutsLoading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="font-semibold mx-3">
        <span className="text-primary">Quantum</span>Goods
      </span>
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
}
