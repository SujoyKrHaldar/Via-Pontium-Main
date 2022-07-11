import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 border-[1rem] border-white w-screen h-screen z-50 pointer-events-none"></div>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
