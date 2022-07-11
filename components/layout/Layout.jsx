import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="border-[1rem] border-white w-full h-full">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
