import React from "react";
import logoMark from "../images/logo-mark.svg";
import Image from "next/image";
import { motion } from "framer-motion";


interface LogoMarkProps {
  mt: string;
}

export default function LogoMark({ mt }: LogoMarkProps) {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={logoMark}
        className={`w-[120px] customDes:w-[200px] z-20 fixed right-6 customDes:right-10 landscape:bottom-8 portrait:bottom-6  customDes:bottom-12  ${mt}`}
        alt="Logo"
      />
    </motion.div>
  );
}
