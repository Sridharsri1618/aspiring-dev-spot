import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 md:ml-56 pt-16 md:pt-0">
        <Outlet />
      </main>
      <div className="md:ml-56">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
