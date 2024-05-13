import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Button } from "../lib";
import progressStore, { Hints } from "@/stores/progressStore";
import { useRouter } from "next/navigation";

interface CorrectProps {
  correct: boolean;

  data: Hints;
}

export default function Correct({ correct, data }: CorrectProps) {
  const navigate = useRouter();

  const nextQuestion = progressStore((state) => state.nextQuestion);
  const currentQuestion = progressStore((state) => state.currentQuestion);

  const processAnswer = () => {
    if (currentQuestion.id === 6) return navigate.push("/results");
    nextQuestion(correct);
  };
  return (
    <motion.div
      initial={{ bottom: -200 }}
      animate={{ bottom: -26 }}
      transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
      layout
      className={cn(
        `fixed bottom-0 w-full left-0  bg-[#FF2A57] flex z-50 pb-8`,
        {
          "bg-green": correct,
        }
      )}
    >
      <div className="p-9 flex justify-between items-center w-full px-10">
        <div>
          <p
            className={cn(` text-[55px] text-white socialBold leading-[64px]`, {
              "text-black": correct,
            })}
          >
            {correct === true && data.correct.title}
            {correct === false && data.incorrect.title}
          </p>
          <p
            className={cn(`text-center text-white socialBold text-[22px]`, {
              "text-black": correct,
            })}
          >
            {correct === true && data.correct.text}
            {correct === false && data.incorrect.text}
          </p>
        </div>
        <Button
          onClick={() => {
            processAnswer();
          }}
          variant="white"
        >
          Next
        </Button>
      </div>
    </motion.div>
  );
}
