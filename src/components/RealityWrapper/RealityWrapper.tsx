import { useSelector } from "react-redux";
import { Corruption } from "../../shared/types";
import { motion } from "framer-motion";
import { RootState } from "../../store/store";
import UltraCorruption from "../UltraCorruption/UltraCorruption";

export const RealityWrapper = ({ children }: { children: React.ReactNode }) => {
  const corruption = useSelector((state: RootState) => state.corruption.value);

  const distortion = corruption * 0.08;
  const blur = corruption > 60 ? corruption * 0.02 : 0;
  const hue = corruption * 2;

  return (
    <motion.div
      animate={{
        filter: `hue-rotate(${hue}deg) blur(${blur}px)`,
        transform: `skew(${distortion}deg)`,
      }}
      transition={{
        duration: corruption > 80 ? 2.5 : 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ minHeight: "100vh" }}
    >
      <UltraCorruption />
      {children}
    </motion.div>
  );
};

export default RealityWrapper;
