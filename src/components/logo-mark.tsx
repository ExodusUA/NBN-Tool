import React from "react";
import logoMark from "../images/logo-mark.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LogoMark() {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={logoMark}
        className="w-[120px] z-20 fixed right-6 landscape:bottom-12 portrait:bottom-[130px] "
        alt="Logo"
      />
    </motion.div>
  );
}
