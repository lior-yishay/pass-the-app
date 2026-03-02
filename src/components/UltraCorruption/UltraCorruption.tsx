import { motion, useMotionValue, useSpring } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";

export const UltraCorruption = () => {
  const corruption = useSelector((state: RootState) => state.corruption.value);

  const [mounted, setMounted] = useState<boolean>(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const move = (event: MouseEvent) => {
      setMouse({
        x: event.clientX - 100,
        y: event.clientY - 100,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    mounted &&
    corruption >= 90 && (
      <motion.div
        animate={{
          opacity: corruption > 95 ? [0.9, 0.4, 0.9] : 0.9,
          scale: corruption > 95 ? [1, 1, 0.95, 1] : [1, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        style={{
          position: "fixed",
          left: mouse.x,
          opacity: 0.9,
          top: mouse.y,
          fontSize: "120px",
          pointerEvents: "none",
        }}
      >
        👁️
      </motion.div>
    )
  );
};

export default UltraCorruption;
