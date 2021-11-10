import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

export default function MainPageLayout({ children, isHome }) {
  return (
    <>
      <Navbar isHome={isHome} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
