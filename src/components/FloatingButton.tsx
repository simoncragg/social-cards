import React, { ReactElement } from "react";

interface FloatingButtonProps {
  ariaLabel: string;
  children: ReactElement;
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ ariaLabel, children, onClick }) => {
  return (
    <div className="fixed right-6 bottom-6 group">
      <button
        type="button"
        aria-label={ariaLabel}
        className="flex items-center justify-center text-white rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 focus:outline-none"
        onClick={onClick}
      >
        { children }
      </button>
    </div>
  );
};

export default FloatingButton;
