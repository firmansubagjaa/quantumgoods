import CardOrder from "./CardOrder";
import CardPayment from "./CardPayment";
// export default { CardOrder, CardPayment };

export default function CartSection() {
  return (
    <div className="flex justify-around mt-36">
      <CardOrder />

      <CardPayment />
    </div>
  );
}
