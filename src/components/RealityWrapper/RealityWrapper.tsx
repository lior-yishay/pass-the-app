import { useSelector } from "react-redux";
import { Corruption } from "../../shared/types";
import { motion } from "framer-motion";
import { RootState } from "../../store/store";
import AlienCorruption from "../AlienCorruption/AlienCorruption";
import { useAppSelector } from "../../hooks/reduxHooks";

export const RealityWrapper = ({ children }: { children: React.ReactNode }) => {
  const corruption = useAppSelector((state) => state.corruption.value);

  const distortion = corruption * 0.15;
  const blur = corruption > 60 ? corruption * 0.02 : 0;
  const hue = corruption * 3;

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
      <AlienCorruption />
      {children}
    </motion.div>
  );
};

export default RealityWrapper;
