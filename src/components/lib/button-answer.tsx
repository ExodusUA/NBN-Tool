"use client";
import React, { useState } from "react";
import { cn } from "./utils";

interface ButtonAnswerProps {
    selectedAnswer: string;
    setIsSelectedAnswer: (value: string) => void;
    children: string;
}
export default function ButtonAnswer({ selectedAnswer, setIsSelectedAnswer, children } : ButtonAnswerProps) {
  

  return (
      <div
        onClick={(e) => setIsSelectedAnswer(children)}
        className={cn(
          `w-[180px] air:w-[190px] h-[180px] air:h-[190px] rounded-full flex items-center justify-center cursor-pointer bg-blueQuestions socialBold text-[27px] text-white duration-200 text-center leading-8`,
          {
            "bg-greenQuestions": selectedAnswer === children,
          }
        )}
      >
        {children}
      </div>
  );
}
