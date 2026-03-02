import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { Corruption } from "../../shared/types";
import { motion } from "framer-motion";

export const RealityWrapper = ({ children }: { children: React.ReactNode }) => {
  const corruption = useSelector((state: RootState) => state.corruption.value);

  const distortion = corruption * 0.03;
  const blur = corruption > 60 ? corruption * 0.02 : 0;
  const hue = corruption * 2;

  return (
    <motion.div
      animate={{
        filter: `hue-rotate(${hue}deg) blur(${blur}px)`,
        transform: `skew(${distortion}deg)`,
      }}
      transition={{ duration: 0.8 }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
};
