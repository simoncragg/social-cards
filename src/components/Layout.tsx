import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-tropical-ocean text-white">

      <header>
        < Navbar />
      </header>

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;