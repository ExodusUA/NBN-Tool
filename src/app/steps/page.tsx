"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/lib";
import { StepNumber } from "@/components/ui";
import { Question1 } from "@/questions";

export default function Home() {
  const [toggleQuestion, setToggleQuestion] = useState(0);
  return (
    <main className=" p-10">
      <Logo />
      <StepNumber />
      <div>
        <Question1 />
        <div className="flex">
          <div
            onClick={(e) => setToggleQuestion(1)}
            className={`w-[200px] h-[200px] rounded-full flex items-center justify-center cursor-pointer bg-blueQuestions socialBold text-[28px] text-white ${
              toggleQuestion === 1 && "bg-greenQuestions duration-200"
            }`}
          >
            Christmas
          </div>
          <div
            onClick={(e) => setToggleQuestion(2)}
            className={`w-[200px] h-[200px] rounded-full flex items-center justify-center cursor-pointer bg-blueQuestions ${
              toggleQuestion === 2 && "bg-greenQuestions duration-200"
            }`}
          >
            Christmas
          </div>
        </div>

        <Button variant="white">Click me!</Button>
        <Button variant="white" disabled>
          Click me!
        </Button>
        <Button variant="blue">Click me!</Button>
        <Button variant="blue" disabled>
          Click me!
        </Button>

        <Button variant="green">Click me!</Button>
        <Button variant="green" disabled>
          Click me!
        </Button>
      </div>
    </main>
  );
}
