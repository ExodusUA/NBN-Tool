"use client";
import React, { useState } from "react";
import ButtonAnswer from "@/components/lib/button-answer";
import { Button } from "@/components/lib";
import { motion } from "framer-motion";
import { Question } from "@/stores/progressStore";
import progressStore from "@/stores/progressStore";
import Correct from "@/components/ui/correct";

interface ChooseAnswerProps {
  data: Question;
}

export function ChooseAnswer({ data }: ChooseAnswerProps) {
  const correct = data.answers.find((answer) => answer.correct)?.text || null
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
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
        <p className="socialBold text-white text-[42px] leading-10 mt-20">
          {data.question}
        </p>
      </motion.div>
      <div className="landscape:flex portrait:grid portrait:justify-center mt-16 items-center ">
        <div className="flex w-[400px] justify-between landscape:mr-2 air:landscape:mr-6">
          <div className="landscape:mr-2 flex">
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

        {/*
        <div className="portrait:flex justify-center landscape:ml-6  portrait:mt-6">
          <Button variant="blue" disabled>
            Check
          </Button>
        </div>
        <div className="portrait:flex justify-center landscape:ml-6  portrait:mt-6">
          <Button variant="white">Check</Button>
        </div>
        */}
        <div className="portrait:flex justify-center landscape:ml-6  portrait:mt-6">
          <Button
            onClick={() => {
              processAnswer();
            }}
            variant="green"
          >
            Next
          </Button>
        </div>
      </div>

      {
       isCorrect !== null && <Correct correct={isCorrect} />
      }
    </div>
  );
}
