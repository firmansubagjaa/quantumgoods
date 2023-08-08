import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";
import ProductDetailMain from "../Fragments/productsDetails";

export default function LayoutsDetails() {
  return (
    <Navbar>
      <ProductDetailMain />
      <Footer />
    </Navbar>
  );
}
