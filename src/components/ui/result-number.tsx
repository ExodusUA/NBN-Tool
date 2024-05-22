import React from "react";
import { motion } from "framer-motion";
import progressStore from "@/stores/progressStore";

export function ResultNumber() {
  const answers = progressStore((state) => state.answers);

  return (
    <motion.div
      initial={{ scale: 1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className=""
    >
      <div className="fixed portrait:right-[8px] portrait:top-[370px] landscape:right-[280px] landscape:top-[60px] w-[280px] h-[280px] bg-[#ffffff58] rounded-full flex items-center justify-center pulse2 z-20"></div>
      <div className="fixed portrait:right-[28px] portrait:top-[388px] landscape:right-[298px] landscape:top-[78px] w-[240px] h-[240px] bg-[#ffffff92] rounded-full flex items-center justify-center pulse z-20"></div>
      <div className="fixed portrait:right-[48px] portrait:top-[408px] landscape:right-[318px] landscape:top-[98px] w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center z-20">
        <div className="flex">
          <p className="socialBold text-[110px] pb-6 pr-3">
            {answers.filter((i) => i === true).length + 1}
          </p>
          <hr className="w-[110px] h-[8px] bg-black absolute rotate-[130deg] top-[110px] left-[50px]" />
          <p className="socialBold text-[70px] pt-[76px] pr-3">6</p>
        </div>
      </div>
    </motion.div>
  );
}
