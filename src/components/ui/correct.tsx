import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Button } from "../lib";
import progressStore from "@/stores/progressStore";

interface CorrectProps {
  correct: boolean;
}

export default function Correct({ correct }: CorrectProps) {
  const nextQuestion = progressStore((state) => state.nextQuestion);

  const processAnswer = () => {
    nextQuestion();
  };
  return (
    <div>
      <motion.div
        initial={{ bottom: -200 }}
        animate={{ bottom: -26 }}
        transition={{ type: "spring", bounce: 0.50, duration: 0.6 }}
        layout
        className={cn(`fixed bottom-0 w-full left-0  bg-[#FF2A57] flex z-50 pb-8`, {
          "bg-green": correct,
        })}
      >
        <div className="p-9 flex justify-between items-center w-full px-10">
          <div>
            <p
              className={cn(
                ` text-[55px] text-white socialBold leading-[64px]`,
                {
                  "text-black": correct,
                }
              )}
            >
              {correct ? "correct!" : "incorrect!"}
            </p>
            <p
              className={cn(`text-center text-white socialBold`, {
                "text-black": correct,
              })}
            >
              Fortnite updates: Australia's data apocalypse day
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
    </div>
  );
}
