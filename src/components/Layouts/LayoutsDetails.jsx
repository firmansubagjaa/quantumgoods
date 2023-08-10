import Drawer from "../Fragments/Drawer";
import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";
import ProductDetailMain from "../Fragments/productsDetails";

export default function LayoutsDetails() {
  return (
    <Drawer>
      <Navbar />
      <ProductDetailMain />
      <Footer />
    </Drawer>
  );
}
