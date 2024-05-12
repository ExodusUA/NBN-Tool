"use client";
import React, { useState } from "react";
import Logo from "@/components/logo";
import { Button } from "@/components/lib";
import { StepNumber } from "@/components/ui";
import { Question1 } from "@/questions";
import ButtonAnswer from "@/components/lib/button-answer";
import Correct from "@/components/ui/correct";
import LogoMark from "@/components/logo-mark";
import SingleRange from "@/components/ui/single-range";
import { Question2 } from "@/questions/question-2";

export default function Home() {
  return (
    <main className=" p-10">
      <Logo />
      <StepNumber />
      <div>
        <Question2 />
        {/*
        <Question1 />
*/}
        {/*
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
        */}
      </div>
      <Correct></Correct>
      <LogoMark mt={'portrait:bottom-[130px]'} />
    </main>
  );
}
