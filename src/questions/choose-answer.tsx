"use client";

import { useState } from "react";
import ButtonAnswer from "@/components/lib/button-answer";
import { motion } from "framer-motion";
import progressStore, { Question } from "@/stores/progressStore";
import Correct from "@/components/ui/correct";

interface ChooseAnswerProps {
  data: Question;
}

export function ChooseAnswer({ data }: ChooseAnswerProps) {
  const correct = data.answers.find((answer) => answer.correct)?.text || null;

  const currentQuestion = progressStore((state) => state.currentQuestion);

  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  return (
    <div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="socialBold text-white text-[42px] customDes:text-[50px] customDes:max-w-[700px] customDes:m-auto customDes:text-center  leading-10 customDes:leading-[50px] mt-20 portrait:mt-[190px] portrait:customDes:mt-[120px] landscape:max-w-[600px]">
          {data.question}
        </p>
      </motion.div>
      <div className="landscape:flex portrait:grid  justify-center mt-16 portrait:mt-6 items-center "> 
        <div className="flex  justify-between landscape:mr-2 air:landscape:mr-6">
          <div className=" flex portrait:flex-wrap portrait:w-[500px] portrait:customDes:w-[800px] justify-center customDes:mt-[120px]">
            {data.answers.map((answer, index) => (
              <ButtonAnswer
                key={index}
                isCorrect={answer.correct}
                setIsCorrect={setIsCorrect}
                setSelected={setSelected}
                selected={selected}
                correct={correct}
              >
                {answer.text}
              </ButtonAnswer>
            ))}
          </div>
        </div>
      </div>

      {isCorrect !== null && currentQuestion.id === data.id && (
        <Correct correct={isCorrect} data={data.hints[0]} />
      )}
    </div>
  );
}
