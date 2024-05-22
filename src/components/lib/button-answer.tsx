"use client";
import React, { useState } from "react";
import { cn } from "./utils";

interface ButtonAnswerProps {
  selected: string | null;
  setSelected: (value: string) => void;
  children: string;
  isCorrect: boolean;
  correct: string | null;
  setIsCorrect: (value: boolean) => void;
}
export default function ButtonAnswer({
  setIsCorrect,
  children,
  isCorrect,
  selected,
  correct,
  setSelected,
}: ButtonAnswerProps) {
  return (
    <div
      onClick={(e) => {
        setSelected(children);
        setIsCorrect(isCorrect);
      }}
      className={cn(
        `w-[180px] air:w-[190px] customDes:w-[300px] mx-3 mt-3 border-2 border-transparent h-[180px] air:h-[190px] customDes:h-[300px] rounded-full flex items-center justify-center cursor-pointer bg-blueQuestions socialBold text-[27px] customDes:text-[43px] text-white duration-200 text-center leading-8 customDes:leading-[50px]`,
        {
          "bg-greenQuestions": selected !== null && correct === children,
          "border-2 border-grey-200": selected === children && correct !== children,
        }
      )}
    >
      {children}
    </div>

);
}
