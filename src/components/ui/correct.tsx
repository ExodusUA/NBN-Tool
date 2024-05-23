import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Button } from "../lib";
import progressStore, { Hints } from "@/stores/progressStore";
import { useRouter } from "next/navigation";
import mixpanel from "mixpanel-browser";

interface CorrectProps {
  correct: boolean;
  selected: string | null;
  data: Hints;
}

export default function Correct({ correct, data, selected }: CorrectProps) {
  const navigate = useRouter();

  const nextQuestion = progressStore((state) => state.nextQuestion);
  const currentQuestion = progressStore((state) => state.currentQuestion);

  const processAnswer = () => {
    mixpanel.track(`Question ${currentQuestion.id}`, {
      correct: correct,
      answer: selected,
    });

    if (currentQuestion.id === 6) return navigate.push("/results");
    nextQuestion(
      currentQuestion.id === 5 || currentQuestion.id === 6 ? true : correct
    );
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
      <div className="p-9 flex customDes:block justify-between items-center w-full px-10 customDes:py-[140px]">
        <div>
          <p
            className={cn(
              ` text-[55px] customDes:text-[100px] text-white socialBold leading-[64px] customDes:text-center`,
              {
                "text-black": correct,
              }
            )}
          >
            {correct === true && data.correct.title}
            {correct === false && data.incorrect.title}
          </p>
          <p
            className={cn(
              `text-left text-white socialBold text-[22px] customDes:text-[33px] customDes:text-center customDes:my-6`,
              {
                "text-black": correct,
              }
            )}
          >
            {correct === true && data.correct.text}
            {correct === false && data.incorrect.text}
          </p>
        </div>
        <div className=" customDes:flex justify-center ">
          <Button
            onClick={() => {
              processAnswer();
            }}
            variant="white"
          >
            Next
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
