import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-tropical-ocean text-white">

      <header>
        <Navbar />
      </header>

      <div className="flex flex-col p-4 w-full justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

