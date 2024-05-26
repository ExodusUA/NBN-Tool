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
        <p
          style={{ lineHeight: "65px" }}
          className="supreme uppercase text-[64px] font-black mt-24"
        >
          Understanding <br /> consumer <br /> behaviour
        </p>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <p className="text-[28px] customDes:text-[36px] socialBold mt-6 pt-[12px] w-[600px] leading-8 customDes:leading-10">
          Do you understand your customers’ needs? Take the quiz to find out.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Link href="/questions">
          <button
            onClick={(e) => restart()}
            className="socialBold text-[24px] customDes:text-[32px] bg-white rounded-[72px] py-3 w-[360px] mt-12 text-center  active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-100 duration-200 outline-none"
          >
            Get started
          </button>
        </Link>
      </motion.div>
      <LogoMark mt={"bottom-[20px] customDes:bottom-12"} />
    </>
  );
}
