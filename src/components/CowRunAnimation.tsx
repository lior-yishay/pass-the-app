import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { image } from "framer-motion/client";
import { useEffect } from "react";

interface Props {
  visible: boolean;
  image: string;
  onFinish?: () => void;
}

export const CowRunAnimation: React.FC<Props> = ({
  visible,
  image,
  onFinish,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (visible) {
      controls.start({
        x: ["-60vw", "-12vw", "100vw"],
        y: [0, -60, 0],
        scale: [0.5, 1.6, 1.2],
        opacity: [0.3, 1, 0],
        transition: {
          duration: 2.2,
          ease: "easeInOut",
        },
      });
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Spotlight glow */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.12), rgba(0,0,0,0.6))",
              zIndex: 9998,
              pointerEvents: "none",
            }}
          />

          <motion.div
            animate={controls}
            onAnimationComplete={onFinish}
            style={{
              position: "fixed",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
              pointerEvents: "none",
              filter: "drop-shadow(0px 0px 25px rgba(255,255,255,0.4))",
            }}
          >
            <img
              src={image}
              style={{
                width: "300px",
              }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
