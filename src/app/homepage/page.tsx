"use client";
import React from "react";
import Image from "next/image";
import bgFull from "../../images/homepage/bgFull.png";
import bgPortrait from "../../images/homepage/bgPortrait.png";
import Logo from "../../components/logo";
import Link from "next/link";
import { motion } from "framer-motion";

function page() {
  return (
    <div className="p-10">
      <Logo />
      <Image
        src={bgFull}
        className="absolute top-0 right-0 w-[440px] h-full  portrait:hidden"
        alt="bg"
      />
      <Image
        src={bgPortrait}
        className="absolute top-0 right-0 w-full  landscape:hidden"
        alt="bg"
      />
      <div className="portrait:mt-[340px]">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <p className="supreme uppercase text-[128px] font-black leading-[110px] mt-6">
            lorem <br /> ipsum
          </p>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[28px] socialBold mt-14">
            Duis aute irure dolor in 
          </p>
          <p className="text-[28px] socialBook mt-2 w-[600px] leading-8">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum 
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <Link href="/steps">
            <button className="socialBold text-[24px] bg-white rounded-[72px] py-3 max-w-[360px] w-full mt-12 text-center  active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-100 duration-200 outline-none">
              Get started
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default page;
