"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SingleRange from "@/components/ui/single-range";
import { Question } from "@/stores/progressStore";
import Correct from "@/components/ui/correct";
import progressStore from "@/stores/progressStore";

interface RangeAnswerProps {
  data: Question;
}

export function RangeAnswer({ data }: RangeAnswerProps) {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selected, setSelected] = useState<string | undefined>("");

  const currentQuestion = progressStore((state) => state.currentQuestion);

  useEffect(() => {
    setIsCorrect(null);
    setSelected("");
  }, [currentQuestion]);

  return (
    <div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="socialBold text-white text-[42px] leading-10 landscape:mt-20 max-w-[600px] portrait:mt-[200px]">
          {data.question}
        </p>
      </motion.div>
      <div className="flex justify-center landscape:mt-24 portrait:mt-[180px] items-center ">
        {currentQuestion.id === data.id && (
          <SingleRange
            setIsCorrect={setIsCorrect}
            dataList={data.answers}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </div>

      {isCorrect !== null && currentQuestion.id === data.id && (
        <Correct correct={isCorrect} data={data.hints[0]} />
      )}
    </div>
  );
}
