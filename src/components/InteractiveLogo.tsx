import React from "react";
import { motion, useDragControls, useMotionValue, useTransform, animate, PanInfo } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { events } from "../constants.ts";

interface InteractiveLogoProps {
  onDragStatusChange: (isDragging: boolean) => void;
}

const InteractiveLogo: React.FC<InteractiveLogoProps> = ({ onDragStatusChange }) => {

  const navigate = useNavigate();
  const controls = useDragControls();
  const y = useMotionValue(0);
  const rotate = useTransform(y, [0, 200], [0, 360]);
	const opacity = useTransform(y, [0, 200], [1, 0.1]);
  const scale = useTransform(y, [0, 200], [1, 0.9]);
	const blur = useTransform(y, [0, 200], ["blur(0px)", "blur(5px)"]);
  
  const handleDragStart = () => {
    onDragStatusChange(true);
  };

  const handleDragEnd = ( _: TouchEvent | MouseEvent | PointerEvent, info: PanInfo) => {
    if (info.point.y > 100) {
      document.dispatchEvent(new CustomEvent(events.REFRESH_PAGE));
    }

		animate(y, 0, { type: "spring", stiffness: 300 });
    onDragStatusChange(false);
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 100 }}
      dragControls={controls}
      dragElastic={0.2}
      style={{ y, rotate, opacity, scale, filter: blur }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <button type="button" className="outline-none" onClick={() => navigate("/")}>
        <img
          src="/logo-min.JPEG"
          className="w-16 h-16 rounded-full bg-white border-solid border-2 border-sky-400 pointer-events-none"
          alt="Echo Chamber"
        />
      </button>
    </motion.div>
  );
};

export default InteractiveLogo;
