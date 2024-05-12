"use client";

import Logo from "@/components/logo";
import { StepNumber } from "@/components/ui";
import Correct from "@/components/ui/correct";
import LogoMark from "@/components/logo-mark";
import { RangeAnswer } from "@/questions/range-answer";
import progressStore from "@/stores/progressStore";
import questions from "@/data/questions";
import { ChooseAnswer } from "@/questions";

export default function page() {
  const currentQuestion = progressStore((state) => state.currentQuestion);

  return (
    <main className=" p-10">
      <Logo />
      <StepNumber />

      {currentQuestion.type === "choose" && <ChooseAnswer data={currentQuestion} />}
      {currentQuestion.type === "range" && <RangeAnswer data={currentQuestion} />}

      <LogoMark mt={"portrait:bottom-[130px]"} />
    </main>
  );
}
