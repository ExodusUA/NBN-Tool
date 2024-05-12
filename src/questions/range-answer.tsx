"use client";
import React from "react";
import ButtonAnswer from "@/components/lib/button-answer";
import { Button } from "@/components/lib";
import { motion } from "framer-motion";
import SingleRange from "@/components/ui/single-range";
import { Question } from "@/stores/progressStore";
import progressStore from "@/stores/progressStore";

interface RangeAnswerProps {
  data: Question;
}

export function RangeAnswer({data}: RangeAnswerProps) {
  const [selectedAnswer, setIsSelectedAnswer] = React.useState("");

  const nextQuestion = progressStore((state) => state.nextQuestion);

  const processAnswer = () => {

    nextQuestion()
  }

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
      <div className="landscape:flex portrait:grid justify-center landscape:mt-24 portrait:mt-[180px] items-center ">
        <SingleRange dataList={data.answers} />
        <div onClick={processAnswer} className="portrait:flex justify-center landscape:ml-12  portrait:mt-14">
          <Button variant="green">Next</Button>
        </div>
      </div>
    </div>
  );
}
