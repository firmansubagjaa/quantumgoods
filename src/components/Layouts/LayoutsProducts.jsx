import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";

import CardProducts from "../Fragments/products/CardProducts";
import Drawer from "../Fragments/Drawer";

export default function LayoutsProducts() {
  return (
    <Drawer>
      <Navbar />
      <CardProducts />
      <Footer />
    </Drawer>
  );
}
