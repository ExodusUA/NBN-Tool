"use client";
import React, { useState } from "react";
import { cn } from "./utils";

interface ButtonAnswerProps {
  selected: string | null;
  setSelected: (value: string) => void;
  children: string;
  isCorrect: boolean;
  setIsCorrect: (value: boolean) => void;
}
export default function ButtonAnswer({
  setIsCorrect,
  children,
  isCorrect,
  selected,
  setSelected,
}: ButtonAnswerProps) {
  return (
    <div
      onClick={(e) => {
        setSelected(children);
        setIsCorrect(isCorrect);
      }}
      className={cn(
        `w-[180px] air:w-[190px] h-[180px] air:h-[190px] rounded-full flex items-center justify-center cursor-pointer bg-blueQuestions socialBold text-[27px] text-white duration-200 text-center leading-8`,
        {
          "bg-greenQuestions": selected !== null && isCorrect === true,
          "border-2 border-grey-200": selected !== null && isCorrect === false,
        }
      )}
    >
      {children}
    </div>
  );
}
