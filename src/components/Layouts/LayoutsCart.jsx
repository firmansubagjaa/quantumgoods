import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";
import CardOrder from "../Fragments/Carts/CardOrder";
import CartSection from "../Fragments/Carts";
// import CardOrder from "../Fragments/Carts/CardOrder";
// import { CardOrder } from "../Fragments/Carts";

export default function LayoutsCart() {
  return (
    <Navbar>
      <CartSection />
      <Footer />
    </Navbar>
  );
}
