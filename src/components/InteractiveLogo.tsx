import React from "react";
import {
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
  animate,
  PanInfo,
} from "framer-motion";

const InteractiveLogo: React.FC = () => {
  const controls = useDragControls();
  const y = useMotionValue(0);
  const rotate = useTransform(y, [0, 200], [0, 360]);
  const opacity = useTransform(y, [0, 200], [1, 0.1]);
  const scale = useTransform(y, [0, 200], [1, 0.9]);
  const blur = useTransform(y, [0, 200], ["blur(0px)", "blur(5px)"]);

  const handleDragEnd = ( _ : TouchEvent , info: PanInfo) => {
    if (info.point.y > 100) {
      console.log("Refreshing...");
    }

    animate(y, 0, { type: "spring", stiffness: 300 });
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 100 }}
      dragControls={controls}
      dragElastic={0.2}
      style={{ y, rotate, opacity, scale, filter: blur }}
      onDragEnd={handleDragEnd}
    >
      <img
        src="/logo-min.JPEG"
        className="w-16 h-16 rounded-full bg-white border-solid border-2 border-sky-400"
        alt="Echo Chamber"
      />
    </motion.div>
  );
};

export default InteractiveLogo;
