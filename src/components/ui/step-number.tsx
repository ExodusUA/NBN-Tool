import React from "react";
import { motion } from "framer-motion";
import progressStore from "@/stores/progressStore";

export function StepNumber() {
  const currentQuestion = progressStore((state) => state.currentQuestion);

  

  return (
    <motion.div
      initial={{ scale: 1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="fixed right-0 top-[-10px] w-[280px] h-[280px] bg-[#ffffff58] rounded-full flex items-center justify-center pulse2 z-20"></div>
      <div className="fixed right-[18px] top-[8px] w-[240px] h-[240px] bg-[#ffffff92] rounded-full flex items-center justify-center pulse z-20"></div>
      <div className="fixed right-[38px] top-[28px] w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center z-20">
        <div className="flex">
          <p className="socialBold text-[110px] pb-6 pr-3">{currentQuestion.id}</p>
          <hr className="w-[110px] h-[8px] bg-black absolute rotate-[130deg] top-[110px] left-[50px]" />
          <p className="socialBold text-[70px] pt-[76px] px-3">6</p>
        </div>
      </div>
    </motion.div>
  );
}
