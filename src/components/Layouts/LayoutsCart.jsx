import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";
import CartSection from "../Fragments/Carts";
import Drawer from "../Fragments/Drawer";

export default function LayoutsCart() {
  return (
    <Drawer>
      <Navbar />
      <CartSection />
      <Footer />
    </Drawer>
  );
}
