import CardInvite from "../Fragments/CardInvite";
import Footer from "../Fragments/Footer";
import Hero from "../Fragments/Hero";
import Laptops from "../Fragments/Laptops";
import Navbar from "../Fragments/Navbar";
import Smartphones from "../Fragments/Smartphones";

export default function LayoutsHome() {
  return (
    <>
      <Navbar>
        <Hero />
        <Smartphones />
        <Laptops />
        <CardInvite />
        <Footer />
      </Navbar>
    </>
  );
}
