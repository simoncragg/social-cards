import React, { useState } from "react";
import InteractiveLogo from "./InteractiveLogo";
import WaveEffect from "./WaveEffect";

const Navbar: React.FC = () => {
  const [showWaves, setShowWaves] = useState(false);

  const handleLogoDragStatusChange = () => {
    setShowWaves(true);
    const fn = setShowWaves;
    setTimeout(() => fn(false), 800);
  }

  return (
    <div className="relative">

      <nav className="flex flex-col items-center justify-between w-full bg-white/50 backdrop-brightness-150">
        <div className="flex flex-wrap items-center justify-center mx-auto px-4 py-0.5">
          <InteractiveLogo onDragStatusChange={(handleLogoDragStatusChange)} />
        </div>
        <div className="flex text-center leading-none pb-2">
          <h1 className="font-cherry text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-600">ECHO CHAMBER</h1>
        </div>
      </nav>

      {showWaves && (
        <WaveEffect />
      )}

    </div>
  );
};

export default Navbar;
