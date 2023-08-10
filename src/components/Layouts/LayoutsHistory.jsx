import Drawer from "../Fragments/Drawer";
import Footer from "../Fragments/Footer";
import History from "../Fragments/History/History";
import Navbar from "../Fragments/Navbar";

export default function LayoutsHistory() {
  return (
    <Drawer>
      <Navbar />
      <History />
      <Footer />
    </Drawer>
  );
}
