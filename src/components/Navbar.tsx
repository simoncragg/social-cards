import React from "react";
import { Link } from "react-router-dom";
import InteractiveLogo from "./InteractiveLogo";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between w-full bg-white/50 backdrop-blur-lg backdrop-brightness-150">
      <div className="flex flex-wrap items-center justify-center mx-auto px-4 py-0.5">
        <Link to="/echoes" className="flex items-center space-x-3">
            <InteractiveLogo />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;