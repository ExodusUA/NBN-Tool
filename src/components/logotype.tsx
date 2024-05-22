import React from "react";
import logo from "@/images/homepage/logo-nbn.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

function Logo() {
  return (
    <Link className="w-[120px] block" href="/">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={logo} className="w-[120px] z-20 relative" alt="Logo" />
      </motion.div>
    </Link>
  );
}

export default Logo;
