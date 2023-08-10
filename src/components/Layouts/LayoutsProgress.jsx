import Drawer from "../Fragments/Drawer";
import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";
import ProgressPayment from "../Fragments/ProgressPayment/ProgressPayment";

export default function LayoutsProgress() {
  return (
    <>
      <Drawer>
        <Navbar />
        <ProgressPayment />
        <Footer />
      </Drawer>
    </>
  );
}
