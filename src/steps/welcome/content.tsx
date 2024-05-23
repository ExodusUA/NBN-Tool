"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LogoMark from "@/components/logo-mark";
import progressStore from "@/stores/progressStore";

export default function Content() {

  const restart = progressStore((state) => state.restart);

  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <p className="supreme uppercase text-[128px] font-black leading-[110px] mt-6 ">
          lorem <br /> ipsum
        </p>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <p className="text-[28px] customDes:text-[38px] socialBold mt-14">
          Duis aute irure dolor in
        </p>
        <p className="text-[28px] customDes:text-[36px] socialBook mt-2 w-[600px] leading-8 customDes:leading-10">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Link href="/questions">
          <button onClick={e => restart()} className="socialBold text-[24px] customDes:text-[32px] bg-white rounded-[72px] py-3 w-[360px] mt-12 text-center  active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-100 duration-200 outline-none">
            Get started
          </button>
        </Link>
      </motion.div>
      <LogoMark mt={"bottom-[20px] customDes:bottom-12"} />
    </>
  );
}
