import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";
import Favorite from "../Fragments/Favorite/Favorite";

export default function LayoutsFavorite() {
  return (
    <Navbar>
      <Favorite />
      <Footer />
    </Navbar>
  );
}
