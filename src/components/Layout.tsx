import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar collapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} />
      <main className={`flex-1 pt-16 md:pt-0 transition-all duration-300 ${collapsed ? "md:ml-16" : "md:ml-56"}`}>
        <Outlet />
      </main>
      <div className={`transition-all duration-300 ${collapsed ? "md:ml-16" : "md:ml-56"}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
