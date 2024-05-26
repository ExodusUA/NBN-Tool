"use client";

import Logo from "@/components/logotype";
import { AnswersNumber } from "@/components/ui";
import LogoMark from "@/components/logo-mark";
import { RangeAnswer } from "@/questions/range-answer";
import progressStore from "@/stores/progressStore";
import { ChooseAnswer } from "@/questions";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

export default function page() {
  const currentQuestion = progressStore((state) => state.currentQuestion);

  useEffect(() => {
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN as string)
  }, []);

  return (
    <main className=" p-10">
      <Logo />
      <AnswersNumber />

      {currentQuestion.type === "choose" && (
        <ChooseAnswer data={currentQuestion} />
      )}
      {currentQuestion.type === "range" && (
        <RangeAnswer data={currentQuestion} />
      )}

      <LogoMark mt={"portrait:bottom-[20px] portrait:customDes:bottom-12"} />
    </main>
  );
}
