import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";

import CardProducts from "../Fragments/products/CardProducts";

export default function LayoutsProducts() {
  return (
    <Navbar>
      <CardProducts />
      <Footer />
    </Navbar>
  );
}
