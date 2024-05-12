import React from "react";
import { motion } from "framer-motion";

interface CorrectProps {
  correct: boolean
}

export default function Correct({correct}: CorrectProps) {
  return (
    <div>
      <motion.div
        
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        style={{ transform: "translateX(-50%, -50%)" }}
        
      ></motion.div>
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-[-810px] w-[1000px] h-[1000px] bg-[#4989FF] rounded-full flex"></div>
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-[-790px] w-[950px] h-[950px] bg-[#6DA1FF] rounded-full flex items-center justify-center "></div>
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-[-770px] w-[900px] h-[900px] bg-[#8AB4FF] rounded-full flex items-center justify-center ">
        <div className="absolute top-[20px] z-20">
          <p className="text-center text-[55px] text-black socialBold leading-[64px]">
            {correct ? "correct!" : "incorrect!"}
          </p>
          <p className="text-center text-black socialBold">
            Fortnite updates: Australia's data apocalypse day
          </p>
        </div>
      </div>
    </div>
  );
}
