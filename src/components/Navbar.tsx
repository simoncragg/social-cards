import React, { useState } from "react";
import InteractiveLogo from "./InteractiveLogo";
import WaveEffect from "./WaveEffect";
import useAuth from "../hooks/useAuth";

const Navbar: React.FC = () => {
  const { userId } = useAuth();
  const [showWaves, setShowWaves] = useState(false);

  const handleLogoDragStatusChange = () => {
    setShowWaves(true);
    const fn = setShowWaves;
    setTimeout(() => fn(false), 800);
  }

  return (
    <div className="relative">
      <nav className="flex flex-col items-center justify-between w-full bg-white/50 backdrop-brightness-150">
        <div className="flex items-center justify-between w-full px-4 pt-1">
          <div className="flex items-center">
            <img
              className="w-10 h-10 border-double border-4 border-sky-500 rounded-full"
              data-testid={`profile-pic-${userId}`}
              src={`https://xsgames.co/randomusers/assets/avatars/pixel/${userId}.jpg`}
            />
          </div>
          <div className="flex justify-center mx-auto">
            <InteractiveLogo onDragStatusChange={handleLogoDragStatusChange} />
          </div>
          <div className="w-10 h-10">{/* Placeholder to balance the profile picture */}</div>
        </div>
        <div className="flex text-center leading-none pb-2">
          <h1 className="font-cherry text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-600">
            ECHO CHAMBER
          </h1>
        </div>
      </nav>

      {showWaves && <WaveEffect />}
    </div>
  );
};

export default Navbar;
